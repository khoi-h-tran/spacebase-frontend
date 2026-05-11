import type { GameState } from '@/lib/types'
import { COLONY_CARDS } from '@/lib/cards'
import VictoryCard from '@/components/cards/VictoryCard'

interface Props {
  gameState: GameState
  selectedColonyId: string | null
  onSelectColony: (id: string) => void
  onBuyColony: (id: string) => void
}

export default function VictoryCards({ gameState, selectedColonyId, onSelectColony, onBuyColony }: Props) {
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
    <div className="flex gap-1.5 pr-10">
      {COLONY_CARDS.map(card => (
        <VictoryCard
          key={card.id}
          card={card}
          isAffordable={money >= card.cost}
          isPurchased={purchasedSectors.has(card.sector)}
          isSelected={selectedColonyId === card.id}
          onSelect={() => onSelectColony(card.id)}
          onBuy={() => onBuyColony(card.id)}
        />
      ))}
    </div>
  )
}
