# Tips for Reading Space Base Cards from Photos

## Card Layout

Each ship card has:
- **Top-left**: cost (yellow circle)
- **Top-right**: sector number (gray square)
- **Blue section**: station effect (active turn — card is right-side up)
- **Red section**: deployed effect (passive turn — card is printed upside-down)

## The 180° Rotation Rule

Deployed cards are physically rotated 180° when placed on the board. This means **the red section of every card is printed upside-down** in photos taken of face-up cards.

Practical consequences when reading a photo:
- Numbers in the red section appear upside-down. `3` looks like `E`. `4` looks like `h`. `2` looks like `2` (symmetric). `1` looks like `1` (symmetric).
- Arrow direction in the red section is reversed physically, but the **game logic direction is the same as station**. A physical `←` in deployed = `chain_right` in game logic (same as the station side).
- The income icon (planet/Saturn) appears upside-down in the red section but is still recognizable as a planet shape.

## Icon Reference

| Icon | Key | Notes |
|------|-----|-------|
| Gold coin + number | `money` | Number may be upside-down in red section |
| Planet/Saturn ring | `income` | Appears upside-down in red section |
| Rocket + number | `vp` | Number may be upside-down in red section |
| `→` arrow | `chain_right` | Physical direction in deployed is opposite — always store game-logic direction |
| `←` arrow | `chain_left` | Same as above |
| `←→` both arrows | `chain_left` + `chain_right` | Collects both neighboring sectors |
| Charge token circle | `charge` | Linked charges have a chain symbol between them |
| Die with arrow | `shift_die` | Bumps effective die value by N |

## Common Upside-Down Number Mappings

| Looks like | Actually is |
|-----------|-------------|
| `E`       | `3`         |
| `h`       | `4`         |
| `9`       | `6`         |
| `6`       | `9`         |

## Card Data Format

Cards are stored in `src/lib/cards.ts` with this shape:

```ts
{ id, name, sector, level, cost,
  station: Effect[],   // blue section
  deployed: Effect[],  // red section (store game-logic values, not physical)
  both: Effect[],
  stationCharge?: ChargeAbility,
  deployedCharge?: ChargeAbility }
```

## Workflow for Cataloguing

1. Take a close-up photo of 3–4 cards at a time (one sector group).
2. Read cost (top-left) and sector (top-right) first — these are easy.
3. Read the blue (station) section normally.
4. Read the red (deployed) section, mentally flipping numbers and reversing arrow directions.
5. Present the reading to the user and ask for corrections before writing to the file.
6. Use `cost:sector` shorthand when the user dictates (e.g. `3:7` = cost 3, sector 7).
