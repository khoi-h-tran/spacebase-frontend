# Settings Component

## Purpose
A catch-all settings panel accessible via a gear icon (⚙️) in the top-right corner of the GameBoard. Provides game management options that don't belong in the main game flow.

## Layout

Settings icon sits in the top-right corner of the screen at all times:

```
┌─ GameBoard ──────────────────────────────────────────────────── ⚙️ ─┐
│                                                                       │
```

Clicking the icon opens a modal overlay (background dimmed, game still visible):

```
┌─ GameBoard (dimmed) ──────────────────────────────────────────────────┐
│                                                                        │
│            ┌─ Settings modal ──────────────── [~320px wide] ──── ✕ ─┐ │
│            │ ⚙️  Settings                                       ✕   │ │
│            │────────────────────────────────────────────────────────│ │
│            │ Players                                                 │ │
│            │   • Jay        (you)                                    │ │
│            │   • Khoi                                                │ │
│            │   • Sam                                                 │ │
│            │────────────────────────────────────────────────────────│ │
│            │ Game                                                    │ │
│            │   [ Back to Lobby ]                                     │ │
│            │────────────────────────────────────────────────────────│ │
│            │ Display                                                 │ │
│            │   [✓] Show card details                                 │ │
│            └────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

## Contents (MVP)

| Setting | Description |
|---|---|
| **Player list** | Shows all players in the current game with names |
| **Back to Lobby** | Resets game state to default and returns all players to the lobby — requires confirmation |
| **Show card details** | Toggle verbose card text vs compact view (nice-to-have) |

## States
- **Closed** — only the ⚙️ icon is visible
- **Open** — modal overlay appears, background is dimmed, game is still visible behind it

## Props
None — reads from and writes to global game state via `useGameState`.

## Notes
- Back to Lobby should show a confirmation dialog before executing — it resets state to default
- The settings icon is always visible regardless of whose turn it is or what phase the game is in
- This is the escape hatch for when something goes wrong mid-game (e.g. a player drops out)
