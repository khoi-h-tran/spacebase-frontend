# TurnOrder Component

## Purpose
Shows the current turn sequence as a horizontal row of player name pills. Makes it easy to see at a glance whose turn it is and who's coming up next.

## Layout

```
┌─ TurnOrder ──────────────────────────────────── [full width, ~40px tall] ──────┐
│                                                                                  │
│   ( Khoi )   ›   [ Jay ]   ›   ( Diego )   ›   ( Peter )                       │
│    neutral       ↑ accent       neutral           neutral                        │
│                  active                                                          │
└──────────────────────────────────────────────────────────────────────────────────┘
```

- Active player pill uses accent color; all others are neutral
- `›` chevrons between pills indicate clockwise play direction

## States
- **Active** — current player's pill is highlighted blue
- **Waiting** — all other pills are the same neutral colour

## Props
| Prop | Type | Description |
|---|---|---|
| `players` | `Player[]` | Ordered list of players in turn sequence |
| `activeIndex` | `number` | Index of the current player in the sequence |

## Notes
- Turn order is determined at game start: each player draws 1 random Level 1 card; highest cost goes first, ties broken randomly
- Order does not change during the game — the active pill just advances each turn
- Sits between the Shipyard rows and the scrollable PlayerBoard section in GameBoard
