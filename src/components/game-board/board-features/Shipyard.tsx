import type { GameState } from '@/lib/types'
import { SHIP_CARDS, SHIP_CARDS_BY_ID } from '@/lib/cards'
import LevelCard from '@/components/cards/LevelCard'

interface Props {
  gameState: GameState
  selectedCardId: string | null
  onSelectCard: (id: string) => void
  onBuyCard: (id: string) => void
}

const LEVEL_LABELS: { level: 1 | 2 | 3; key: 'level1' | 'level2' | 'level3' }[] = [
  { level: 3, key: 'level3' },
  { level: 2, key: 'level2' },
  { level: 1, key: 'level1' },
]

const LEVEL_BORDER = { 1: 'border-gray-400',  2: 'border-yellow-500', 3: 'border-purple-500' }
const LEVEL_TEXT   = { 1: 'text-gray-300',    2: 'text-yellow-400',   3: 'text-purple-400'  }
const LEVEL_BG     = { 1: 'bg-gray-800',      2: 'bg-yellow-950',     3: 'bg-purple-950'    }
const LEVEL_TOTAL  = { 1: 0, 2: 0, 3: 0 } as Record<1 | 2 | 3, number>
for (const card of SHIP_CARDS) LEVEL_TOTAL[card.level]++

export default function Shipyard({ gameState, selectedCardId, onSelectCard, onBuyCard }: Props) {
  const activePlayer = gameState.players[gameState.turnOrder[gameState.activePlayerIndex]]
  const money = activePlayer?.money ?? 0

  return (
    <div className="flex flex-col gap-1.5">
      {LEVEL_LABELS.map(({ level, key }) => {
        const ids = gameState.shipyard[key]
        const cards = ids.length > 0
          ? ids.map(id => SHIP_CARDS_BY_ID[id]).filter(Boolean)
          : SHIP_CARDS.filter(c => c.level === level).slice(0, 6)

        const remaining = gameState.decks[key].length
        const total = LEVEL_TOTAL[level]

        return (
          <div key={level} className="flex items-center gap-1.5">
            <div className={`flex flex-col items-center justify-center rounded-lg border-2 shrink-0 w-14 self-stretch gap-1 ${LEVEL_BG[level]} ${LEVEL_BORDER[level]} ${LEVEL_TEXT[level]}`}>
              <span className="text-[10px] font-semibold opacity-60 leading-none">Level {level}</span>
              <span className="text-sm font-bold leading-none">{remaining}/{total}</span>
            </div>
            <div className="flex gap-1.5 flex-1">
              {Array.from({ length: 6 }, (_, i) => {
                const card = cards[i]
                return (
                  <div key={i} className="flex-1">
                    {card ? (
                      <LevelCard
                        card={card}
                        mode="market"
                        isAffordable={money >= card.cost}
                        isSelected={selectedCardId === card.id}
                        onSelect={() => onSelectCard(card.id)}
                        onBuy={() => onBuyCard(card.id)}
                      />
                    ) : (
                      <div className={`w-full h-full min-h-[80px] rounded-lg border-2 border-dashed opacity-30 ${LEVEL_BORDER[level]}`} />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
