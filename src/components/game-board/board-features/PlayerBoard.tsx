import type { PlayerState } from '@/lib/types'
import { SHIP_CARDS_BY_ID } from '@/lib/cards'
import LevelCard from '@/components/cards/LevelCard'

interface Props {
  player: PlayerState
  isActive: boolean
  highlightedSectors: number[]
  targetSector: number | null
}

export default function PlayerBoard({ player, isActive, highlightedSectors, targetSector }: Props) {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      {/* Vertical stats */}
      <div className="w-28 shrink-0 flex flex-col gap-0.5">
        <div className="flex items-center gap-1.5 mb-1">
          <span
            className="w-3 h-3 rounded-full shrink-0 border-2"
            style={{
              backgroundColor: isActive ? '#4ade80' : 'transparent',
              borderColor: isActive ? '#4ade80' : '#6b7280',
            }}
          />
          <span className="font-semibold text-sm text-white">{player.name}</span>
        </div>
        <span className="text-xs text-gray-400 pl-4">🪙 {player.money}</span>
        <span className="text-xs text-gray-400 pl-4">🌍 {player.income}</span>
        <span className="text-xs text-gray-400 pl-4">🚀 {player.vp}</span>
      </div>

      {/* Sector slots */}
      <div className="flex gap-1.5 flex-1 overflow-x-auto items-stretch">
        {Array.from({ length: 12 }, (_, i) => {
          const sector = i + 1
          const highlighted = highlightedSectors.includes(sector)
          const isTarget = targetSector === sector
          const sectorState = player.sectors[sector]
          const stationedCard = sectorState ? SHIP_CARDS_BY_ID[sectorState.stationCard] : undefined

          const deployedCards = sectorState
            ? sectorState.deployedCards.map(id => SHIP_CARDS_BY_ID[id]).filter(Boolean)
            : []

          return (
            <div key={sector} className="flex flex-col justify-end items-center gap-0.5 shrink-0">
              {/* Deployed (flipped) cards — passive reward strips, oldest first */}
              <div className="flex flex-col gap-0.5 w-16">
                {[...deployedCards].reverse().map(dc => (
                  <div key={dc.id} className="w-full h-7 rounded border overflow-hidden shrink-0">
                    <LevelCard card={dc} mode="deployed" />
                  </div>
                ))}
              </div>

              {/* Active slot */}
              <div className={`w-16 h-20 rounded-lg border transition-colors overflow-hidden ${isTarget ? 'border-green-400' : highlighted ? 'border-yellow-400' : 'border-gray-600'}`}>
                {stationedCard ? (
                  <LevelCard
                    card={stationedCard}
                    mode="stationed"
                    isHighlighted={highlighted}
                  />
                ) : (
                  <div className={`w-full h-full ${isTarget ? 'bg-green-900/40' : highlighted ? 'bg-yellow-900/40' : 'bg-gray-800'}`} />
                )}
              </div>
              <span className={`text-xs transition-colors ${isTarget ? 'text-green-400 font-semibold' : highlighted ? 'text-yellow-400 font-semibold' : 'text-gray-500'}`}>{sector}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
