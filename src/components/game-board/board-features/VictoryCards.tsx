import type { GameState } from '@/lib/types'
import { COLONY_CARDS } from '@/lib/cards'
import VictoryCard from './VictoryCard'

interface Props {
  gameState: GameState
}

export default function VictoryCards({ gameState }: Props) {
  const activePlayer = gameState.players[gameState.turnOrder[gameState.activePlayerIndex]]
  const money = activePlayer?.money ?? 0

  const purchasedSectors = new Set(
    Object.values(gameState.players).flatMap(p =>
      Object.entries(p.sectors)
        .filter(([, s]) => s.colonyCard !== null)
        .map(([sector]) => Number(sector))
    )
  )

  return (
    <div className="flex gap-1.5">
      {COLONY_CARDS.map(card => (
        <VictoryCard
          key={card.id}
          card={card}
          isAffordable={money >= card.cost}
          isPurchased={purchasedSectors.has(card.sector)}
          onClick={() => {}}
        />
      ))}
    </div>
  )
}
