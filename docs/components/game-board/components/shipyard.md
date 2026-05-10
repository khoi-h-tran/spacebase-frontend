# Shipyard Component

## Purpose
Displays the three market rows where players can buy ship cards. Each row corresponds to a shipyard level (3, 2, 1), with higher levels containing more powerful and expensive cards.

## Layout

```
┌─ Shipyard ───────────────────────────────────── [full width, ~120px tall] ──────┐
│                                                                                   │
│  Level 3  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐               │
│           │purple│ │purple│ │purple│ │purple│ │purple│ │purple│  ← 6 visible    │
│           └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘               │
│  Level 2  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐               │
│           │ gold │ │ gold │ │ gold │ │ gold │ │ gold │ │ gold │  ← 6 visible   │
│           └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘               │
│  Level 1  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐               │
│           │silver│ │silver│ │silver│ │silver│ │silver│ │silver│  ← 6 visible   │
│           └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘               │
└───────────────────────────────────────────────────────────────────────────────────┘
```

Affordability states (applied per card based on active player's credits):
```
┌──────┐   ┌──────┐   ┌──────┐
│  ✓   │   │      │   │  ✗   │
│      │   │      │   │      │   ✓ green tint = affordable
└──────┘   └──────┘   └──────┘   ✗ greyed out = can't afford
affordable  neutral   unaffordable
```

- 6 cards visible per level at all times
- When a card is purchased, the next card from that level's deck slides in to fill the gap

## Props
| Prop | Type | Description |
|---|---|---|
| `market` | `Market` | Current face-up cards for all three levels |
| `activePlayerCredits` | `number` | Used to determine affordability highlights on each card |
| `onBuy` | `(card: LevelCard) => void` | Called when the active player clicks a card to purchase |

## Notes
- Each row renders `LevelCard` components
- Cards the active player can afford are subtly highlighted; unaffordable cards are greyed out
- Level 3 row is on top, Level 1 on the bottom
