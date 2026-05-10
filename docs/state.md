# Game State — Space Base

The game state is the single source of truth persisted in the database. All clients read from it; the server is the only writer. Resetting the game means writing the **default state** back to the database.

---

## Shape

```typescript
interface GameState {
  phase: Phase
  round: number
  turnOrder: string[]          // player IDs, clockwise
  activePlayerIndex: number    // index into turnOrder
  startPlayerIndex: number     // who holds the Start Card
  dice: DiceState | null       // null outside of roll/allocate/resolve
  shipyard: Shipyard
  decks: Decks
  players: Record<string, PlayerState>
  winner: string | null        // player ID, set when game ends
}

type Phase =
  | 'lobby'
  | 'setup'
  | 'roll'
  | 'allocate'
  | 'resolve'
  | 'buy'
  | 'refill'
  | 'check_win'
  | 'ended'

interface DiceState {
  values: [number, number]
  allocation: 'split' | 'combine' | null  // null until active player decides
}

interface Shipyard {
  level1: string[]   // card IDs, up to 6 visible
  level2: string[]   // card IDs, up to 6 visible
  level3: string[]   // card IDs, up to 6 visible
  colony: string[]   // card IDs, up to 12, never refilled
}

interface Decks {
  level1: string[]   // remaining draw pile
  level2: string[]
  level3: string[]
}

interface PlayerState {
  id: string
  name: string
  money: number
  income: number
  vp: number
  hasStartCard: boolean
  sectors: Record<number, SectorState>  // keys 1–12
}

interface SectorState {
  stationCard: string       // card ID — active blue-reward card
  deployedCards: string[]   // card IDs stacked under the board, red rewards
  colonyCard: string | null // card ID — locks sector when placed
  chargeTokens: number      // charge cubes on the station card
}
```

Card definitions (rewards, abilities, costs) live in a static lookup table and are not stored in game state — only their IDs are.

---

## Default State

Written to the database on game creation or reset. Represents an empty lobby.

```json
{
  "phase": "lobby",
  "round": 0,
  "turnOrder": [],
  "activePlayerIndex": 0,
  "startPlayerIndex": 0,
  "dice": null,
  "shipyard": {
    "level1": [],
    "level2": [],
    "level3": [],
    "colony": []
  },
  "decks": {
    "level1": [],
    "level2": [],
    "level3": []
  },
  "players": {},
  "winner": null
}
```

---

## Default Player State

Applied during `setup` phase when the server deals starting cards and assigns turn-order bonuses.

```json
{
  "id": "<player-id>",
  "name": "<player-name>",
  "money": 5,
  "income": 0,
  "vp": 0,
  "hasStartCard": false,
  "sectors": {
    "1":  { "stationCard": "starter-1",  "deployedCards": [], "colonyCard": null, "chargeTokens": 0 },
    "2":  { "stationCard": "starter-2",  "deployedCards": [], "colonyCard": null, "chargeTokens": 0 },
    "3":  { "stationCard": "starter-3",  "deployedCards": [], "colonyCard": null, "chargeTokens": 0 },
    "4":  { "stationCard": "starter-4",  "deployedCards": [], "colonyCard": null, "chargeTokens": 0 },
    "5":  { "stationCard": "starter-5",  "deployedCards": [], "colonyCard": null, "chargeTokens": 0 },
    "6":  { "stationCard": "starter-6",  "deployedCards": [], "colonyCard": null, "chargeTokens": 0 },
    "7":  { "stationCard": "starter-7",  "deployedCards": [], "colonyCard": null, "chargeTokens": 0 },
    "8":  { "stationCard": "starter-8",  "deployedCards": [], "colonyCard": null, "chargeTokens": 0 },
    "9":  { "stationCard": "starter-9",  "deployedCards": [], "colonyCard": null, "chargeTokens": 0 },
    "10": { "stationCard": "starter-10", "deployedCards": [], "colonyCard": null, "chargeTokens": 0 },
    "11": { "stationCard": "starter-11", "deployedCards": [], "colonyCard": null, "chargeTokens": 0 },
    "12": { "stationCard": "starter-12", "deployedCards": [], "colonyCard": null, "chargeTokens": 0 }
  }
}
```

During setup, each player also draws 1 random Level 1 card, deploys their starter card in that sector, and receives their turn-order starting bonus:

| Turn position | Bonus |
|---|---|
| 1st | Nothing |
| 2nd | +1 Money |
| 3rd | +2 Money |
| 4th / 5th | +1 Income |
