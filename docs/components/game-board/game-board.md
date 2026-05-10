# GameBoard Component

## Purpose
The root layout component that composes the entire game screen. Owns no game logic — just arranges all other components in the correct spatial relationships.

## Layout

```
┌─ GameBoard ──────────────────────────────────────── [100vw × 100vh, no scroll] ─┐
│                                                                                   │
│ ┌─ DiceArea ────────────────────────────────── [fixed top, ~60px] ──────────────┐│
│ │         [ 🎲 4 ] [ 🎲 2 ]   ● Split  ○ Combine   [Submit]                    ││
│ └────────────────────────────────────────────────────────────────────────────────┘│
│                                                                                   │
│ ┌─ VictoryCards ────────────────────────────── [fixed, ~80px] ───────────── ⚙️ ┐│
│ │  [V1] [V2] [V3] [V4] [V5] [V6] [V7] [V8] [V9] [V10] [V11] [V12]            ││
│ └────────────────────────────────────────────────────────────────────────────────┘│
│                                                                                   │
│ ┌─ Shipyard ────────────────────────────────── [fixed, ~120px] ─────────────────┐│
│ │  Level 3  [ card ][ card ][ card ][ card ][ card ][ card ]                    ││
│ │  Level 2  [ card ][ card ][ card ][ card ][ card ][ card ]                    ││
│ │  Level 1  [ card ][ card ][ card ][ card ][ card ][ card ]                    ││
│ └────────────────────────────────────────────────────────────────────────────────┘│
│                                                                                   │
│ ┌─ PlayerBoards ────────────────────────────── [scrollable ↕, flex-grow] ───────┐│
│ │  ┌─ PlayerBoard ── active, accent border ──────────────────────────────────┐  ││
│ │  │  🟢 Jay   $4  ⬆ 4  ★ 4                                                 │  ││
│ │  │  [1]  [2]  [3]  [4]  [5]  [6]  [7]  [8]  [9]  [10] [11] [12]          │  ││
│ │  └─────────────────────────────────────────────────────────────────────────┘  ││
│ │  ┌─ PlayerBoard ─────────────────────────────────────────────────────────┐    ││
│ │  │  ⚪ Khoi  $2  ⬆ 1  ★ 0                                                │    ││
│ │  │  [1]  [2]  [3]  [4]  [5]  [6]  [7]  [8]  [9]  [10] [11] [12]        │    ││
│ │  └───────────────────────────────────────────────────────────────────────┘    ││
│ └────────────────────────────────────────────────────────────────────────────────┘│
└───────────────────────────────────────────────────────────────────────────────────┘
```

## Responsibilities
- Renders the `DiceArea` at the very top of the screen
- Renders the 12 `VictoryCard` components as sector column headers below the dice
- Renders the `Shipyard` section (levels 3, 2, 1) below the victory cards
- Renders all `PlayerBoard` components in a vertically scrollable container, ordered by turn order
- Renders the `Settings` icon (top-right corner)
- Highlights the active player's board
- Renders a green circle to the left of the active player's name; all other players show an empty/grey circle

## Props
None — reads from global game state via `useGameState` hook.

## Color coding
Each player is assigned a color at game start:
- Accent color is used for their row border and card highlights
- Suggested palette: red, green, blue, purple, orange (one per player slot)

## Notes
- The victory cards double as the sector column headers — each card corresponds to one of the 12 sectors
- Player boards live in a scrollable container so more players can be added without breaking the layout
- The shipyard and victory card rows are fixed (non-scrolling)
- Layout is designed for 1920×1080 desktop; horizontal scroll for the tableau area on smaller screens
