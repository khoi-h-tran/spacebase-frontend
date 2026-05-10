# Game Loop — Space Base

## Turn Phases

```
┌─────────────────────────────────────────────────────┐
│                   ACTIVE PLAYER'S TURN               │
│                                                     │
│  1. ROLL          Roll 2 dice                       │
│       ↓                                             │
│  2. ALLOCATE      Split or combine dice             │
│       ↓                                             │
│  3. RESOLVE       Active: collect blue rewards      │
│                   Passive: collect red rewards      │
│       ↓                                             │
│  4. BUY           Optionally buy 1 card             │
│       ↓                                             │
│  5. REFILL        Refill shipyard, collect income   │
│       ↓                                             │
│  6. PASS          Next player clockwise             │
└─────────────────────────────────────────────────────┘
```

---

## Phase Detail

### Phase 1 — Roll
- Active player rolls 2 dice.
- Before rolling, may activate **Set Dice** (choose both values) or **Reroll Dice** cards.

### Phase 2 — Allocate
Active player decides:
- **Split**: activate two sectors using each die value separately.
- **Combine**: activate one sector using the sum of both dice.
- **Doubles**: may activate that sector twice.

### Phase 3 — Resolve
Order: Active player first, then Passive players in clockwise turn order.

**Active player:**
- Activates the **Blue (Station)** reward in their chosen sector(s).
- May also spend any Charged Blue/Green activations.

**Each Passive player (simultaneously choosing, then resolving in order):**
- Uses the same dice roll, choosing independently to split or combine.
- Activates the **Red (Deployed)** reward in their chosen sector(s).
- Takes ALL rewards shown (stacked deployed cards all pay out).
- May also spend any Charged Red/Green activations.

### Phase 4 — Buy (Optional)
- May buy **1** card total: either a Ship Card from the Shipyard or a Colony Card.
- Pay the cost by moving the Money Cube to 0.
- **Ship Card**: Deploy the current card in that sector (slide it under the board). Place the new card in the empty slot.
- **Colony Card**: Score VP immediately. That sector is locked — no more Active rewards, cannot be replaced.
- If skipping purchase, Money Cube does not move.

### Phase 5 — Refill & Income
- If a Ship Card was purchased, draw a replacement from the matching level deck.
- Colony Cards are never refilled.
- If Money < Income, raise Money up to match Income.

### Phase 6 — Pass
- Next player clockwise becomes the Active player.

---

## Game End Sequence

1. A player hits **40 VP** at any point during their turn.
2. Continue until the current round is complete (everyone has had the same number of turns).
3. Count final VP totals.
4. Highest VP wins. On a tie, play additional full rounds until the tie is broken.

---

## State Machine (for implementation)

```
lobby
  → (all players joined, host clicks Start) → setup

setup
  → (decks shuffled, starting cards dealt, turn order set) → roll

roll  [active player]
  → (dice rolled) → allocate

allocate  [active player]
  → (split or combine chosen) → resolve

resolve  [active → passive players in order]
  → (all rewards collected) → buy

buy  [active player]
  → (purchase made or skipped) → refill

refill
  → (shipyard refilled, income applied) → check_win

check_win
  → (no player at 40 VP) → roll  [next player]
  → (a player at 40 VP AND round complete) → ended

ended
  → display winner
```
