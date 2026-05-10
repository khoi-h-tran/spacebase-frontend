import type { Colony } from '@/lib/types'

interface Props {
  card: Colony
  isAffordable: boolean
  isPurchased: boolean
  onClick: () => void
}

export default function VictoryCard({ card, isAffordable, isPurchased, onClick }: Props) {
  if (isPurchased) {
    return (
      <div className="flex-1 min-w-[80px] h-20 rounded-lg border-2 border-gray-700 bg-gray-900 flex items-center justify-center">
        <span className="text-xs text-gray-600">sold</span>
      </div>
    )
  }

  return (
    <button
      onClick={onClick}
      disabled={!isAffordable}
      className={`
        flex-1 min-w-[80px] h-20 rounded-lg border-2 flex flex-col overflow-hidden text-left transition-colors
        ${isAffordable
          ? 'border-amber-400 bg-amber-950 hover:bg-amber-900 cursor-pointer'
          : 'border-amber-800 bg-amber-950/40 cursor-not-allowed opacity-60'
        }
      `}
    >
      {/* Top row: cost + sector */}
      <div className="flex justify-between items-center px-1.5 pt-1 text-[10px]">
        <span className="bg-gray-700 text-amber-300 font-semibold rounded px-1 py-0.5 leading-none whitespace-nowrap">🪙{card.cost}</span>
        <span className="bg-gray-700 text-gray-300 rounded px-1 py-0.5 leading-none">{card.sector}</span>
      </div>

      {/* VP */}
      <div className="flex-1 flex items-center justify-center">
        <span className="text-amber-400 font-bold text-sm">{card.vp} VP</span>
      </div>
    </button>
  )
}
