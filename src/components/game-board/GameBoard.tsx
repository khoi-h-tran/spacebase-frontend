'use client'

import { useState } from 'react'
import type { GameState, DiceState } from '@/lib/types'
import { SHIP_CARDS, SHIP_CARDS_BY_ID, COLONY_CARDS_BY_ID } from '@/lib/cards'
import DiceArea from './board-features/DiceArea'
import VictoryCards from './board-features/VictoryCards'
import Shipyard from './board-features/Shipyard'
import PlayerBoard from './board-features/PlayerBoard'

interface Props {
  gameState: GameState
}

export default function GameBoard({ gameState: initialState }: Props) {
  const [gameState, setGameState] = useState(initialState)
  const [allocation, setAllocation] = useState<'split' | 'combine' | null>(null)
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null)
  const [selectedColonyId, setSelectedColonyId] = useState<string | null>(null)

  const selectedCard = selectedCardId ? SHIP_CARDS_BY_ID[selectedCardId] : null
  const targetSector = selectedCard?.sector ?? null

  const highlightedSectors = (() => {
    if (!gameState.dice || !allocation) return []
    const [d1, d2] = gameState.dice.values
    return allocation === 'combine' ? [d1 + d2] : [d1, d2]
  })()

  const players = gameState.turnOrder
    .map(id => gameState.players[id])
    .filter(Boolean)

  async function persist(next: GameState) {
    await fetch('/api/game', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(next),
    })
    setGameState(next)
  }

  async function handleRoll(dice: DiceState) {
    setAllocation(null)
    setSelectedCardId(null)
    await persist({ ...gameState, dice })
  }

  function handleSelectCard(id: string) {
    setSelectedCardId(prev => prev === id ? null : id)
    setSelectedColonyId(null)
  }

  function handleSelectColony(id: string) {
    setSelectedColonyId(prev => prev === id ? null : id)
    setSelectedCardId(null)
  }

  async function handleBuyColony(colonyId: string) {
    const card = COLONY_CARDS_BY_ID[colonyId]
    if (!card) return

    const activePlayerId = gameState.turnOrder[gameState.activePlayerIndex]
    const player = gameState.players[activePlayerId]
    if (!player || player.money < card.cost) return

    const existing = player.sectors[card.sector]
    const updatedSector = {
      stationCard: existing?.stationCard ?? '',
      deployedCards: existing?.stationCard
        ? [existing.stationCard, ...(existing.deployedCards ?? [])]
        : (existing?.deployedCards ?? []),
      colonyCard: card.id,
      chargeTokens: existing?.chargeTokens ?? 0,
    }

    const next: GameState = {
      ...gameState,
      players: {
        ...gameState.players,
        [activePlayerId]: {
          ...player,
          money: player.money - card.cost,
          vp: player.vp + card.vp,
          sectors: { ...player.sectors, [card.sector]: updatedSector },
        },
      },
    }

    setSelectedColonyId(null)
    await persist(next)
  }

  async function handleBuyCard(cardId: string) {
    const card = SHIP_CARDS_BY_ID[cardId]
    if (!card) return

    const activePlayerId = gameState.turnOrder[gameState.activePlayerIndex]
    const player = gameState.players[activePlayerId]
    if (!player || player.money < card.cost) return

    const sector = player.sectors[card.sector]
    if (sector?.colonyCard) return
    const updatedSector = {
      stationCard: card.id,
      deployedCards: sector?.stationCard
        ? [sector.stationCard, ...(sector.deployedCards ?? [])]
        : (sector?.deployedCards ?? []),
      colonyCard: sector?.colonyCard ?? null,
      chargeTokens: sector?.chargeTokens ?? 0,
    }

    // Replace bought card in-place; draw from deck into the same slot
    const levelKey = `level${card.level}` as 'level1' | 'level2' | 'level3'
    const currentShipyard: (string | null)[] = gameState.shipyard[levelKey].length > 0
      ? gameState.shipyard[levelKey]
      : SHIP_CARDS.filter(c => c.level === card.level).slice(0, 6).map(c => c.id)
    const [drawn, ...remainingDeck] = gameState.decks[levelKey]
    const newShipyardRow = currentShipyard.map(id => id === cardId ? (drawn ?? null) : id)

    const next: GameState = {
      ...gameState,
      players: {
        ...gameState.players,
        [activePlayerId]: {
          ...player,
          money: player.money - card.cost,
          sectors: { ...player.sectors, [card.sector]: updatedSector },
        },
      },
      shipyard: { ...gameState.shipyard, [levelKey]: newShipyardRow },
      decks: { ...gameState.decks, [levelKey]: remainingDeck ?? [] },
    }

    setSelectedCardId(null)
    await persist(next)
  }

  return (
    <div className="h-screen bg-gray-950 flex items-center justify-center p-3">
      <div className="relative w-full max-w-7xl h-full flex flex-col gap-4 border-2 border-gray-600 rounded-3xl p-6 bg-gray-900">

        {/* Settings */}
        <button className="absolute top-4 right-4 w-9 h-9 rounded-full border-2 border-gray-500 text-gray-400 hover:text-white hover:border-white transition-colors flex items-center justify-center">
          ⚙
        </button>

        {/* Top section: victory cards + shipyard */}
        <div className="flex flex-col gap-2">
          <VictoryCards
            gameState={gameState}
            selectedColonyId={selectedColonyId}
            onSelectColony={handleSelectColony}
            onBuyColony={handleBuyColony}
          />
          <Shipyard
            gameState={gameState}
            selectedCardId={selectedCardId}
            onSelectCard={handleSelectCard}
            onBuyCard={handleBuyCard}
          />
        </div>

        {/* Bottom section: player boards + dice side by side */}
        <div className="flex gap-4 items-center flex-1 min-h-0">
          <div className="overflow-x-auto flex-1 self-stretch">
            <div className="border-2 border-gray-600 rounded-2xl overflow-y-auto h-full divide-y divide-gray-700 w-full">
              {players.length === 0 ? (
                <div className="p-6 text-center text-gray-500 text-sm">No players — launch a game from the lobby first.</div>
              ) : (
                players.map((player, i) => {
                  const isActive = i === gameState.activePlayerIndex
                  return (
                    <PlayerBoard
                      key={player.id}
                      player={player}
                      isActive={isActive}
                      highlightedSectors={isActive ? highlightedSectors : []}
                      targetSector={isActive ? targetSector : null}
                    />
                  )
                })
              )}
            </div>
          </div>
          <DiceArea dice={gameState.dice} onRoll={handleRoll} allocation={allocation} onAllocationChange={setAllocation} />
        </div>

      </div>
    </div>
  )
}
