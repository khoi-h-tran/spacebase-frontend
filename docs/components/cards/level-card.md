# LevelCard Component

## Purpose
Displays a single ship card — either in the shipyard market (available to buy) or placed in a player's sector slot (stationed or deployed). Visually distinct based on context.

## Card Anatomy & Display Modes

`market` — full card, shown in the shipyard:
```
┌─────────────────┐
│ $4          [7] │  ← cost (top-left), sector number (top-right)
│─────────────────│
│ ■ Station       │  ← blue section: active player reward
│   +2 Credits    │
│─────────────────│
│ ▪ Deployed      │  ← red section: passive player reward
│   +1 Credit     │
└─────────────────┘
```

`stationed` — in a player's active sector slot (blue side visible):
```
┌─────────────────┐
│ ■ Station       │
│   +2 Credits    │
│                 │
└─────────────────┘
```

`deployed` — slid under the board (red side only):
```
┌─────────────────┐
│ ▪ Deployed      │
│   +1 Credit     │
│                 │
└─────────────────┘
```

Multiple deployed cards in the same sector stack and all pay out:
```
┌─────────────────┐  ← stationed (top)
├─────────────────┤  ← deployed 1
├─────────────────┤  ← deployed 2
└─────────────────┘  ← deployed 3
```

## Card Levels
- **Level 1** — cost 3–5, basic economic effects (silver border)
- **Level 2** — cost 5–7, utility / mid-range effects (gold border)
- **Level 3** — cost 6+, high-value / scoring effects (purple border)

## States
- **Default** — normal display
- **Highlighted** — sector matches current dice roll (glow effect)
- **Affordable** — player has enough credits to buy (subtle green tint, market mode only)
- **Unaffordable** — greyed out in market when player can't afford it

## Props
| Prop | Type | Description |
|---|---|---|
| `card` | `Ship` | The ship card data |
| `mode` | `'market' \| 'stationed' \| 'deployed'` | Display context |
| `isHighlighted` | `boolean` | Whether this sector fired this turn |
| `isAffordable` | `boolean` | Whether the active player can buy it (market mode only) |
| `onClick` | `() => void` | Called when clicked (purchase intent in market mode) |

## Notes
- In `stationed` mode, the card sits face-up in the player's tableau slot (blue side visible)
- In `deployed` mode, the card shows only the red reward — stacked behind any subsequent deployed cards
- Multiple deployed cards in the same sector all pay out on activation
