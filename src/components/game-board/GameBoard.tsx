'use client'

import { useState } from 'react'
import type { GameState, DiceState } from '@/lib/types'
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

  const highlightedSectors = (() => {
    if (!gameState.dice || !allocation) return []
    const [d1, d2] = gameState.dice.values
    return allocation === 'combine' ? [d1 + d2] : [d1, d2]
  })()

  const players = gameState.turnOrder
    .map(id => gameState.players[id])
    .filter(Boolean)

  async function handleRoll(dice: DiceState) {
    setAllocation(null)
    const next = { ...gameState, dice }
    await fetch('/api/game', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(next),
    })
    setGameState(next)
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
          <VictoryCards gameState={gameState} />
          <Shipyard gameState={gameState} />
        </div>

        {/* Bottom section: player boards + dice side by side */}
        <div className="flex gap-4 items-center flex-1 min-h-0">
          <div className="overflow-x-auto flex-1 self-stretch">
            <div className="border-2 border-gray-600 rounded-2xl overflow-y-auto h-full divide-y divide-gray-700 w-full">
              {players.length === 0 ? (
                <div className="p-6 text-center text-gray-500 text-sm">No players — launch a game from the lobby first.</div>
              ) : (
                players.map((player, i) => (
                  <PlayerBoard
                    key={player.id}
                    player={player}
                    isActive={i === gameState.activePlayerIndex}
                    highlightedSectors={highlightedSectors}
                  />
                ))
              )}
            </div>
          </div>
          <DiceArea dice={gameState.dice} onRoll={handleRoll} allocation={allocation} onAllocationChange={setAllocation} />
        </div>

      </div>
    </div>
  )
}
