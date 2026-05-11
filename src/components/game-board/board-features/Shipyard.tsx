import type { GameState } from '@/lib/types'
import { SHIP_CARDS, SHIP_CARDS_BY_ID } from '@/lib/cards'
import LevelCard from '@/components/cards/LevelCard'

interface Props {
  gameState: GameState
}

const LEVEL_LABELS: { level: 1 | 2 | 3; key: 'level1' | 'level2' | 'level3' }[] = [
  { level: 3, key: 'level3' },
  { level: 2, key: 'level2' },
  { level: 1, key: 'level1' },
]

const LEVEL_BORDER = { 1: 'border-gray-400', 2: 'border-yellow-500', 3: 'border-purple-500' }
const LEVEL_TEXT   = { 1: 'text-gray-300',   2: 'text-yellow-400',   3: 'text-purple-400'  }

export default function Shipyard({ gameState }: Props) {
  const activePlayer = gameState.players[gameState.turnOrder[gameState.activePlayerIndex]]
  const money = activePlayer?.money ?? 0

  return (
    <div className="flex flex-col gap-1.5">
      {LEVEL_LABELS.map(({ level, key }) => {
        const ids = gameState.shipyard[key]
        const cards = ids.length > 0
          ? ids.map(id => SHIP_CARDS_BY_ID[id]).filter(Boolean)
          : SHIP_CARDS.filter(c => c.level === level).slice(0, 6)

        return (
          <div key={level} className="flex items-center gap-1.5">
            <span className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold border-2 shrink-0 ${LEVEL_BORDER[level]} ${LEVEL_TEXT[level]}`}>
              {level}
            </span>
            <div className="flex gap-1.5 flex-1">
              {cards.map(card => (
                <div key={card.id} className="flex-1">
                  <LevelCard
                    card={card}
                    mode="market"
                    isAffordable={money >= card.cost}
                    onClick={() => {}}
                  />
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
