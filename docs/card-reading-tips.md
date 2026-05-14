# Tips for Reading Space Base Cards from Photos

## Card Layout

Each ship card has:
- **Top-left**: cost (yellow circle)
- **Top-right**: sector number (gray square)
- **Blue section**: station effect (active turn — card is right-side up)
- **Red section**: deployed effect (passive turn — card is printed upside-down)
- **Green section**: both effect (active OR passive — player's choice)

## The 180° Rotation Rule

Deployed cards are physically rotated 180° when placed on the board. This means **the red section of every card is printed upside-down** in photos taken of face-up cards.

Practical consequences when reading a photo:
- Numbers in the red section appear upside-down. `3` looks like `E`. `4` looks like `h`. `7` looks like `L` or `∠`. `2` looks like `2` (symmetric). `1` looks like `1` (symmetric).
- Arrow direction in the red section is reversed physically, but the **game logic direction is the same as station**. A physical `←` in deployed = `chain_right` in game logic (same as the station side).
- The income icon (planet/Saturn) appears upside-down in the red section but is still recognizable as a planet shape.
- Text on cards (e.g. "Buy a Card.", "Reroll one or both of your dice.") appears upside-down in the red section.

## Icon Reference

| Icon | Key | Notes |
|------|-----|-------|
| Gold coin + number | `money` | Number may be upside-down in red section |
| Planet/Saturn ring | `income` | Appears upside-down in red section |
| Rocket + number | `vp` | Number may be upside-down in red section |
| `→` arrow | `chain_right` | Physical direction in deployed is opposite — always store game-logic direction |
| `←` arrow | `chain_left` | Same as above |
| `←→` both arrows | `chain_left` + `chain_right` | Collects both neighboring sectors |
| Small colored square(s) | charge slot(s) | Blue = station charges; red = deployed charges (upside-down in photo) |
| Die + arrow | `shift_die` | Bumps effective die (combined total) by up to N |
| Two dice + bidirectional arrows | `shift_die` (green) | Green card: same shift mechanic, applies both active and passive |
| Text "Buy a Card." | `buy_card` | Additional buy action on top of normal buy |
| Text "Reroll one or both..." | `reroll_die` | Reroll one or both dice |
| Text "Swap your X and Y sector cards." | `swap_sectors` | Swap the cards in two specific sectors |

## Common Upside-Down Number Mappings

| Looks like | Actually is |
|-----------|-------------|
| `E`       | `3`         |
| `h`       | `4`         |
| `L` / `∠`| `7`         |
| `9`       | `6`         |
| `6`       | `9`         |

## Charge Ability Rules

- **Small colored squares** in the blue/red section = charge slots for that side.
- **Linked (chained)** charges: all slots must be filled simultaneously before the effect fires once.
- **Unlinked** charges: each charge can be spent independently — each spend triggers the effect once. Max stored = number of slots.
- **`max_players: N`** slot: only required when player count is ≤ N (e.g. required in 2- or 3-player games, not 4-player).
- **`min_players: N`** slot: only required when player count is ≥ N.
- A single charge activation can trigger **multiple effects** (e.g. reroll + money 1 per charge on Volynov).
- Station and deployed sides can have **different charge configurations** (different slot counts, linked vs unlinked, different effects).

## Level 1 Patterns (fully catalogued)

### Sectors 1–6 — 4 cards per sector, consistent slots:

| Slot | Cost | Station | Deployed |
|------|------|---------|----------|
| 1 | 3–4 | money 2 | money 1 |
| 2 | 2 | vp 1 | money 1 |
| 3 | 2–3 | money 1 | money 1 |
| 4 | 4 | — | — |

Slot 4 is always the same charge card:
```ts
stationCharge: { slots: [{ required: 'always' }], linked: false, effects: [{ key: 'shift_die', amount: 1 }] }
deployedCharge: { slots: [{ required: 'always' }, { required: 'always' }], linked: true, effects: [{ key: 'shift_die', amount: 1 }] }
```

### Sectors 7–11 — 4 cards per sector:

| Slot | Cost | Station | Deployed |
|------|------|---------|----------|
| 1 | 4–5 | chain effect (see below) | same chain effect |
| 2 | 2 | money N (grows with sector) | money N−1 or N−2 |
| 3 | 3 | money M + income 1 | income 1 (± money) |
| 4 | 3–4 | vp V | vp V−1 (or money + vp) |

Chain effects for slot 1:
- Sector 7: `[money 1, chain_right]` both sides (cost 4)
- Sectors 8–11: `[chain_left, chain_right]` both sides (cost 5)

Money amounts for slot 2 scale with sector:
`S7: 4/3 · S8: 5/3 · S9: 6/4 · S10: 7/5 · S11: 8/6`

VP amounts for slot 4:
`S7–8: vp2 / money2+vp1 · S9–10: vp3/vp2 · S11: vp4/vp3`

### Sector 12:

| Slot | Cost | Station | Deployed |
|------|------|---------|----------|
| 1 | 4 | vp 3 + chain_left | vp 1 + chain_left |
| 2 | 2 | money 9 | money 7 |
| 3 | 3 | money 6 + income 1 | income 1 + money 4 |
| 4 | 3 | vp 4 | vp 3 |

## Level 2 Patterns — Sectors 1–5

Each sector's 4 Level 2 cards follow a consistent structure:

| Slot | Cost | Station | Deployed | Notes |
|------|------|---------|----------|-------|
| 1 | 7–8 | money 3 | money 2 | Simple money card |
| 2 | 8 | varies (income 1, money 3, etc.) | varies (vp 1, income 1, etc.) | Mid-tier, sector-specific |
| 3 | 8 | vp 2 | vp 1 | Consistent VP card |
| 4 | 9 | — | — | Green shift_die card (see below) |

**The cost-9 green shift_die card appears in every sector 1–5** with the same encoding:
```ts
stationCharge: { slots: [{ required: 'always' }], linked: false, effects: [{ key: 'shift_die', amount: 2 }] }
deployedCharge: { slots: [{ required: 'always' }], linked: false, effects: [{ key: 'shift_die', amount: 1 }] }
```

**Special mechanics** (buy_card, swap_sectors, reroll_die) replace slot 2 or 3 in specific sectors — these are the outliers to watch for. So far:
- Sector 1, cost 9: swap_sectors (chained 3 charges, max_players variant) — replaces green shift_die
- Sector 2, cost 8: buy_card (charge-based, with money bonus)
- Sector 3, cost 6: reroll_die (3 unlinked station charges, 2 deployed)

## Level 2 Patterns — Sectors 6–7 (pattern diverges from 1–5)

The green shift_die card disappears at sector 6. The cost-9 slot becomes the sector-specific special mechanic instead.

### Sector 6

| Slot | Cost | Station | Deployed | Notes |
|------|------|---------|----------|-------|
| 1 | 8 | money 3 | money 2 | Matches sectors 1–5 slot 1 |
| 2 | 8 | money 3 | vp 1 | — |
| 3 | 8 | vp 2 | vp 1 | Matches sectors 1–5 slot 3 |
| 4 | 9 | — | income 1 | swap_sectors charge card (see below) |

Sector 6 slot 4 charge:
```ts
stationCharge: { slots: [{ required: 'always' }, { required: 'always' }, { required: 'max_players', count: 2 }, { required: 'max_players', count: 3 }], linked: true, effects: [{ key: 'swap_sectors' }] }
// swaps sectors 5 and 8
```

### Sector 7

| Slot | Cost | Station | Deployed | Notes |
|------|------|---------|----------|-------|
| 1 | 7 | money 6 | money 5 | Higher amounts, lower cost |
| 2 | 7 | money 4 + income 1 | income 1 + money 1 | — |
| 3 | 7 | — | — | swap_sectors + buy_card charge card (see below) |
| 4 | 9 | vp 4 | vp 2 | No charge ability |

Sector 7 slot 3 charges (Zholodov):
```ts
stationCharge: { slots: [{ required: 'always' }, { required: 'always' }, { required: 'max_players', count: 3 }], linked: true, effects: [{ key: 'swap_sectors' }] }
// swaps sectors 4 and 9
deployedCharge: { slots: [{ required: 'always' }], linked: false, effects: [{ key: 'buy_card' }, { key: 'vp', amount: 2 }] }
// blue charge — triggers on active turn; buy extra card + gain 2 VP
```

## Card Data Format

Cards are stored in `src/lib/cards.ts` with this shape:

```ts
{ id, name, sector, level, cost,
  station: Effect[],        // blue section — regular effects
  deployed: Effect[],       // red section — regular effects (store game-logic values)
  both: Effect[],           // green section — regular effects
  stationCharge?: ChargeAbility,   // blue charge ability
  deployedCharge?: ChargeAbility } // red/green charge ability
```

`ChargeAbility` shape:
```ts
{
  slots: ChargeSlot[],  // each slot: { required: 'always' | 'min_players' | 'max_players', count? }
  linked: boolean,      // true = all slots must fill before effect fires
  effects: Effect[]     // one or more effects per charge activation
}
```

## Workflow for Cataloguing

1. Take a close-up photo of 3–4 cards at a time per sector.
2. Read cost (top-left) and sector (top-right) first — these are easy.
3. Read the blue (station) section normally.
4. Read the red (deployed) section, mentally flipping numbers and reversing arrow directions.
5. For green cards, note whether station and deployed have different charge configs or amounts.
6. For charge cards: count the small squares (slots), check for chain symbol (linked), note the effect text.
7. Present the reading to the user and ask for corrections before writing to the file.
8. Use `cost:sector` shorthand when the user dictates (e.g. `3:7` = cost 3, sector 7).
