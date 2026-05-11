import type { PlayerState } from '@/lib/types'

interface Props {
  player: PlayerState
  isActive: boolean
  highlightedSectors: number[]
}

export default function PlayerBoard({ player, isActive, highlightedSectors }: Props) {
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
        <span className="text-xs text-gray-400 pl-4">💎 {player.income}</span>
        <span className="text-xs text-gray-400 pl-4">🚀 {player.vp}</span>
      </div>

      {/* Sector slots */}
      <div className="flex gap-1.5 flex-1 overflow-x-auto">
        {Array.from({ length: 12 }, (_, i) => {
          const sector = i + 1
          const highlighted = highlightedSectors.includes(sector)
          return (
            <div key={sector} className="flex flex-col items-center gap-0.5 shrink-0">
              <div className={`w-12 h-14 rounded-lg border transition-colors ${highlighted ? 'border-yellow-400 bg-yellow-900/40' : 'border-gray-600 bg-gray-800'}`} />
              <span className={`text-xs transition-colors ${highlighted ? 'text-yellow-400 font-semibold' : 'text-gray-500'}`}>{sector}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
