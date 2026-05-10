# Dice Component

## Purpose
Displays two dice, the Roll button, and the split/combine allocation controls. Only the active player interacts with this component — it lives in the bottom control bar.

## Layout

```
┌─ DiceArea ──────────────────────────────── [fixed bottom bar, full width, ~60px] ─┐
│                                                                                     │
│  Before roll:                                                                       │
│    [ 🎲  ] [ 🎲  ]   [Roll Dice]                                                   │
│                                                                                     │
│  After roll — active player:                                                        │
│    [ 🎲 4] [ 🎲 2]   [Roll Dice]   ● Split  ○ Combine   [Submit]                  │
│                       (disabled)                                                    │
│                                                                                     │
│  After roll — passive player (all controls disabled):                               │
│    [ 🎲 4] [ 🎲 2]   [Roll Dice]   ○ Split  ○ Combine   [Submit]                  │
│                       (disabled)   (disabled)  (disabled)  (disabled)               │
│                                                                                     │
│  After submit — locked for remainder of turn:                                       │
│    [ 🎲 4] [ 🎲 2]   [Roll Dice]   ● Split  ○ Combine   [Submit]                  │
│                       (disabled)   (locked)   (locked)    (disabled)                │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## States
| State | Description |
|---|---|
| `idle` | Dice blank or showing previous result. Roll button enabled. No allocation controls. |
| `rolling` | Dice faces animate rapidly (80ms tick). Roll button disabled. |
| `rolled` | Dice show final values. Roll button disabled. Split/Combine radios + Submit appear. |
| `resolved` | Player has submitted their choice. All controls disabled. Waiting for buy phase. |

## Allocation Controls
- **Split** radio — use each die value separately (activates two sectors)
- **Combine** radio — add both dice together (activates one sector with the sum)
- **Submit** button — confirms the choice and locks it in

Rules:
- Controls only appear after the dice are rolled
- Only the active player sees these controls enabled — all others see them disabled
- Once submitted, all controls are disabled for the rest of the turn
- Doubles (die1 === die2): splitting naturally activates that sector twice — no special UI needed

## Props
| Prop | Type | Description |
|---|---|---|
| `die1` | `number \| null` | Current value of die 1 (null before first roll) |
| `die2` | `number \| null` | Current value of die 2 |
| `isRolling` | `boolean` | Whether animation is playing |
| `canRoll` | `boolean` | True only for the active player before they've rolled |
| `canAllocate` | `boolean` | True only for the active player after rolling, before submitting |
| `onRoll` | `() => void` | Called when Roll button is clicked |
| `onSubmit` | `(mode: 'split' \| 'combine') => void` | Called when Submit is clicked |

## Notes
- Roll button is always rendered but disabled for passive players and after rolling
- Allocation controls are always rendered but disabled for passive players and after submitting
- Animation uses random values cycling at ~80ms intervals, settling on the real result after ~800ms
