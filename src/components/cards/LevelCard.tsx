import type { Ship, Effect } from '@/lib/types'

interface Props {
  card: Ship
  mode: 'market' | 'stationed' | 'deployed'
  isHighlighted?: boolean
  isSelected?: boolean
  isAffordable?: boolean
  onSelect?: () => void
  onBuy?: () => void
}

const LEVEL_STYLES = {
  1: { border: 'border-gray-600', label: 'text-gray-300'   },
  2: { border: 'border-gray-600', label: 'text-yellow-400' },
  3: { border: 'border-gray-600', label: 'text-purple-400' },
}

function effectLabel(e: Effect) {
  if (e.key === 'money')       return `+${e.amount} 🪙`
  if (e.key === 'income')      return `+${e.amount} 🌍`
  if (e.key === 'vp')          return `+${e.amount} 🚀`
  if (e.key === 'chain_right') return '→'
  if (e.key === 'chain_left')  return '←'
  return e.key
}

function effectsLabel(effects: Effect[]) {
  return effects.map(effectLabel).join(' ') || null
}

export default function LevelCard({ card, mode, isHighlighted, isSelected, isAffordable, onSelect, onBuy }: Props) {
  const { border } = LEVEL_STYLES[card.level]
  const dimmed = mode === 'market' && isAffordable === false

  return (
    <div
      onClick={dimmed ? undefined : onSelect}
      className={`
        flex flex-col w-full h-full rounded-lg border-2 overflow-hidden transition-all relative
        ${border}
        ${isSelected ? 'ring-2 ring-white ring-offset-1 ring-offset-gray-900' : ''}
        ${isHighlighted ? 'ring-2 ring-yellow-400 ring-offset-1 ring-offset-gray-900' : ''}
        ${dimmed ? 'opacity-40 cursor-not-allowed' : onSelect ? 'cursor-pointer hover:brightness-110' : 'cursor-default'}
      `}
    >
      {/* Header: cost + sector (market only) */}
      {mode === 'market' && (
        <div className="flex justify-between items-center px-1.5 pt-1 text-[10px] bg-gray-900">
          <span className="bg-gray-700 text-amber-300 font-semibold rounded px-1 py-0.5 leading-none whitespace-nowrap">
            🪙{card.cost}
          </span>
          <span className="bg-gray-700 text-gray-300 rounded px-1 py-0.5 leading-none">
            {card.sector}
          </span>
        </div>
      )}

      {/* Station reward (blue) */}
      {(mode === 'market' || mode === 'stationed') && (
        <div className="flex-1 flex items-center justify-center bg-blue-950/60 px-1.5 py-1.5 text-xs text-blue-300 font-semibold">
          {effectsLabel(card.station)}
        </div>
      )}

      {/* Divider */}
      {(mode === 'market' || mode === 'stationed') && <div className="h-px bg-gray-700" />}

      {/* Deployed reward (red) + buy button */}
      {(mode === 'market' || mode === 'stationed' || mode === 'deployed') && (
        <div className={`flex items-center bg-red-950/60 px-1.5 py-1.5 ${isSelected && onBuy ? 'justify-between' : 'justify-center'}`}>
          <span className="text-xs text-red-300 font-semibold">{effectsLabel(card.deployed)}</span>
          {isSelected && onBuy && (
            <button
              onClick={e => { e.stopPropagation(); onBuy() }}
              className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-green-600 hover:bg-green-500 text-white leading-none"
            >
              Buy
            </button>
          )}
        </div>
      )}
    </div>
  )
}
