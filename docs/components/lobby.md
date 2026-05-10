# Lobby Component

## Purpose
The pre-game screen where players check in before launching. Shown before the `GameBoard` — once the host starts the game, this screen is replaced.

## Layout

```
┌─ Lobby ──────────────────────────────── [100vw × 100vh, centered content] ───┐
│                                                                                │
│                        🚀  SPACEBASE                                          │
│                                                                                │
│              ┌─ player list ──────────────── [~320px wide] ──────┐            │
│              │  Space Commanders:                                  │            │
│              │                                                     │            │
│              │    [✓] Khoi                   ← checked in         │            │
│              │    [✓] Jay                    ← checked in         │            │
│              │    [✓] Peter                  ← checked in         │            │
│              │    [ ] Diego                  ← not present        │            │
│              │    [ ] White Privilege         ← not present        │            │
│              └─────────────────────────────────────────────────────┘           │
│                                                                                │
│                      [ Launch Mission ]   ← disabled if < 2 checked           │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Behavior
- Players are pre-populated from a known roster
- Checking a box marks that player as present and assigns them a color
- At least 2 players must be checked in to enable **Launch Mission**

## Props
| Prop | Type | Description |
|---|---|---|
| `roster` | `Player[]` | Full list of known players |
| `onLaunch` | `(selected: Player[]) => void` | Called when host clicks Launch Mission |

## Notes
- "Launch Mission" button is disabled until at least 2 players are checked in
- Turn order is determined at game start (not here) — each player draws 1 random Level 1 card; highest cost goes first, ties broken randomly
- No network/multiplayer implied — this is a local pass-and-play lobby
