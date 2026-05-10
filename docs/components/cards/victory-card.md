# VictoryCard Component

## Purpose
Displays a Colony card. The 12 colony cards are always visible at the top of the board as the sector column headers (one per sector). Colony cards are one-time purchases that give immediate VP. Once bought, they lock the sector permanently for the active reward.

## Card Anatomy

Colony cards sit in the top header row, one per sector (sectors 1–12):
```
┌─ VictoryCards row ── [fixed top, full width, ~80px] ─────────────────────────┐
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ...                 │
│  │  V1  │ │  V2  │ │  V3  │ │  V4  │ │  V5  │ │  V6  │                     │
│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘                     │
└───────────────────────────────────────────────────────────────────────────────┘
```

Individual card anatomy:
```
┌─────────────────┐
│ $5          [5] │  ← cost (top-left), sector number (top-right)
│─────────────────│
│   ★ 2 VP        │  ← VP gained immediately on purchase (amber/gold)
│─────────────────│
│ ▪ +1 Credit     │  ← optional deployed reward (omit if not present)
└─────────────────┘
```

Purchased state — slot goes blank, sector is locked:
```
┌─────────────────┐
│                 │
│   (purchased)   │  ← empty, not refilled
│                 │
└─────────────────┘
```

## States
- **Default** — available to purchase
- **Affordable** — active player has enough credits (subtle highlight)
- **Unaffordable** — greyed out
- **Purchased** — removed from the market row (not refilled)

## Key Differences from LevelCard
- No station (blue) reward — colonies do not earn active rewards
- VP is the primary value, shown prominently
- Once a player buys a colony for a sector, that sector slot is locked — no ship card can replace it and no active reward fires for that sector again
- Colony cards are never refilled after purchase (limited supply of 12 total)

## Props
| Prop | Type | Description |
|---|---|---|
| `card` | `Colony` | The colony card data |
| `isAffordable` | `boolean` | Whether the active player can buy it |
| `onClick` | `() => void` | Called when clicked (purchase intent) |

## Notes
- Displayed in a single horizontal row at the very top of the board, above the shipyard rows — they serve as the 12 sector column headers
- VP amount displayed with a star icon (★) in amber/gold color to stand out
- Deployed reward is optional — render it only if present
