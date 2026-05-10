'use client'

import type { GameState } from '@/lib/types'
import DiceArea from './board-features/DiceArea'
import VictoryCards from './board-features/VictoryCards'
import Shipyard from './board-features/Shipyard'
import PlayerBoard from './board-features/PlayerBoard'

interface Props {
  gameState: GameState
}

export default function GameBoard({ gameState }: Props) {
  const players = gameState.turnOrder
    .map(id => gameState.players[id])
    .filter(Boolean)

  return (
    <div className="h-screen bg-gray-950 flex items-center justify-center p-3">
      <div className="relative w-full max-w-7xl h-full flex flex-col gap-4 border-2 border-gray-600 rounded-3xl p-6 bg-gray-900">

        {/* Settings */}
        <button className="absolute top-4 right-4 w-9 h-9 rounded-full border-2 border-gray-500 text-gray-400 hover:text-white hover:border-white transition-colors flex items-center justify-center">
          ⚙
        </button>

        {/* Top section: cards left, dice right */}
        <div className="flex gap-4 items-end">
          <div className="flex flex-col gap-2 flex-1 min-w-0">
            <VictoryCards />
            <Shipyard />
          </div>
          <DiceArea />
        </div>

        {/* Player boards scrollable container */}
        <div className="overflow-x-auto">
        <div className="border-2 border-gray-600 rounded-2xl overflow-y-auto max-h-[50vh] divide-y divide-gray-700 w-fit">
          {players.length === 0 ? (
            <div className="p-6 text-center text-gray-500 text-sm">No players — launch a game from the lobby first.</div>
          ) : (
            players.map((player, i) => (
              <PlayerBoard
                key={player.id}
                player={player}
                isActive={i === gameState.activePlayerIndex}
              />
            ))
          )}
        </div>
        </div>

      </div>
    </div>
  )
}
