# PlayerBoard Component

## Purpose
Displays a single player's full board — their name, live stats, and all 12 sector slots. All players use the same layout; the active player's board appears first in the scroll.

## Layout

```
┌─ PlayerBoard ─────────────────────────────────────── [full width, ~160px] ──────┐
│  Jay   $4   ⬆ 4   ★ 4                               ← stats row, ~36px tall    │
│ ─────────────────────────────────────────────────────────────────────────────── │
│  [1]   [2]   [3]   [4]   [5]   [6]   [7]   [8]   [9]  [10]  [11]  [12]        │
│  card  card  card  card  card  card  card  card  card  card  card  card         │
└──────────────────────────────────────────────────────────────────────────────────┘
```

Active player — accent color border:
```
┌─ PlayerBoard ── [accent border, 2px] ───────────────── [full width, ~160px] ──┐
│  Jay   $4   ⬆ 4   ★ 4                                                          │
│ ─────────────────────────────────────────────────────────────────────────────── │
│  [1]   [2]   [3]   [4]   [5]   ...                                              │
└──────────────────────────────────────────────────────────────────────────────────┘
```

Sector slot detail (each `[N]` expands to):
```
┌──────────┐
│ stationed│  ← stationed card (blue top, active reward)
├──────────┤
│ deployed │  ← deployed cards stacked below (red, passive reward)
│ deployed │    multiple cards all pay out on activation
└──────────┘
```

Each sector slot shows:
- The **stationed card** (top, active/blue side) if the player owns one
- **Deployed cards** stacked underneath (red side, passive rewards)
- An **empty placeholder** if the sector is unoccupied

## States
- **Default** — normal row for a passive player
- **Active** — current player's row is highlighted with their color border
- **Sector highlighted** — when dice are rolled, the matching sector column glows to show which sectors fired

## Props
| Prop | Type | Description |
|---|---|---|
| `player` | `Player` | Player data (name, coins, income, VP, tableau) |
| `isActive` | `boolean` | Whether this is the current player's turn |
| `activeSectors` | `number[]` | Which sectors are highlighted this roll |
| `playerColor` | `string` | Accent color for this player |

## Notes
- All player boards are identical in layout — no special treatment for the active player's board beyond the highlight
- Active player's board appears first in the scrollable list
- The board border uses the player's accent color; active player gets a stronger highlight
- Sector slots are fixed-width columns aligned with the shared victory card headers in GameBoard
- Dice and roll controls are not part of this component — they live elsewhere in the layout
