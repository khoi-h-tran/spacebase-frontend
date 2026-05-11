import type { Colony } from '@/lib/types'

interface Props {
  card: Colony
  isAffordable: boolean
  isPurchased: boolean
  isSelected?: boolean
  onSelect?: () => void
  onBuy?: () => void
}

export default function VictoryCard({ card, isAffordable, isPurchased, isSelected, onSelect, onBuy }: Props) {
  if (isPurchased) {
    return (
      <div className="flex-1 min-w-[80px] h-20 rounded-lg border-2 border-gray-700 bg-gray-900 flex items-center justify-center">
        <span className="text-xs text-gray-600">sold</span>
      </div>
    )
  }

  const dimmed = !isAffordable

  return (
    <div
      onClick={dimmed ? undefined : onSelect}
      className={`
        flex-1 min-w-[80px] h-20 rounded-lg border-2 flex flex-col overflow-hidden transition-colors
        ${isAffordable ? 'border-amber-700 bg-amber-950/60' : 'border-gray-700 bg-gray-900 opacity-50 cursor-not-allowed'}
        ${isSelected ? 'ring-2 ring-white ring-offset-1 ring-offset-gray-900' : ''}
        ${!dimmed && onSelect ? 'cursor-pointer hover:bg-amber-950' : ''}
      `}
    >
      {/* Top row: cost + sector */}
      <div className="flex justify-between items-center px-1.5 pt-1 text-[10px]">
        <span className="bg-gray-700 text-amber-300 font-semibold rounded px-1 py-0.5 leading-none whitespace-nowrap">🪙{card.cost}</span>
        <span className="bg-gray-700 text-gray-300 rounded px-1 py-0.5 leading-none">{card.sector}</span>
      </div>

      {/* VP + buy button */}
      <div className="flex-1 flex flex-col items-center justify-center gap-1">
        <span className="text-amber-500/80 font-bold text-sm">{card.vp} 🚀</span>
        {isSelected && onBuy && (
          <button
            onClick={e => { e.stopPropagation(); onBuy() }}
            className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-green-600 hover:bg-green-500 text-white leading-none"
          >
            Buy
          </button>
        )}
      </div>
    </div>
  )
}
