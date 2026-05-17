# Space Base — Digital Companion

A multiplayer web app for playing [Space Base](https://www.alderacentertainment.com/space-base/) (the board game by AEG). Players use their own devices to see their boards; a shared screen handles the dice and shipyard. Game state is persisted in Redis so any player can refresh without losing the game.

## Tech Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| State persistence | Upstash Redis (REST API) |
| Deployment | Vercel |

> **Note:** This project uses Next.js 16, which has breaking changes from earlier versions. Before writing any Next.js-specific code, read the relevant guide in `node_modules/next/dist/docs/`.

## Getting Started

### 1. Clone and install

```bash
git clone https://github.com/khoi-h-tran/spacebase-frontend.git
cd spacebase-frontend
npm install
```

### 2. Set up Redis

Game state is stored in [Upstash Redis](https://upstash.com). The easiest path is to add a Redis integration from the Vercel Marketplace, then pull env vars:

```bash
vercel env pull .env.local
```

Or create `.env.local` manually (see `.env.local.example`):

```
KV_REST_API_URL=your_upstash_url
KV_REST_API_TOKEN=your_upstash_token
```

### 3. Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/
    page.tsx              # Lobby page
    game/page.tsx         # Game board page
    api/game/route.ts     # GET/POST game state to/from Redis
  components/
    lobby/
      LobbyClient.tsx     # Player check-in, game launch
      Starfield.tsx       # Background animation
    game-board/
      GameBoard.tsx       # Main game board layout
      board-features/
        PlayerBoard.tsx   # Individual player's sectors
        DiceArea.tsx      # Dice display and allocation
        Shipyard.tsx      # Level 1/2/3 card market
        VictoryCards.tsx  # Colony/victory card display
    cards/
      LevelCard.tsx       # Renders a ship card
      VictoryCard.tsx     # Renders a colony card
  lib/
    types.ts              # All TypeScript types (source of truth)
    cards.ts              # All 132 ship cards + 12 colony cards + 12 starter cards
    mechanics.ts          # Human-readable labels/descriptions for each mechanic
    constants.ts          # Default game state
    game-state.ts         # Redis read/write helpers
    redis.ts              # Upstash client
docs/
  card-reading-tips.md    # Reference for reading physical card photos
```

## Architecture

### Single source of truth: Upstash Redis

There is no in-memory server state. The entire game lives in one JSON blob stored in Upstash Redis under the key `spacebase:game`. Every mutation (dice roll, card buy, turn advance) is a full read-modify-write cycle:

```
Client                    Next.js API              Upstash Redis
  |                           |                         |
  |-- POST /api/game -------->|                         |
  |   (new full GameState)    |-- redis.set(key, body)->|
  |                           |<- ok --------------------|
  |<- { ok: true } -----------|
```

The `GET /api/game` route returns the full current state. There are no partial updates or diffs — clients always send the complete new `GameState`.

### Polling strategy

Clients poll `GET /api/game` on a short interval to detect state changes made by other players (e.g. when another player advances the turn). There is no WebSocket or server-sent events — polling keeps the stack simple and works fine for a low-frequency turn-based game.

When it is your turn, your client renders the active controls; other clients are read-only until the state changes again.

### Multi-device setup

The intended physical setup is:
- **One shared screen** (TV or laptop): shows the shipyard and dice — everyone can see this
- **Each player's phone/tablet**: shows their own board, sectors, and hand

All devices talk to the same Redis key. Any player can refresh without losing state.

## Game Concepts

If you're not familiar with Space Base, here's the minimum needed to work on the code:

- **Sectors 1–12**: Each player has 12 sectors. On your turn, you roll 2 dice. You can use them split (one die per sector) or combined (sum = one sector).
- **Station cards**: Face-up in your sector. Activate on *your* turn.
- **Deployed cards**: Bought cards push existing cards to the deployed (flipped) position. Activate on *other players'* turns when they roll your sector number.
- **Colony cards**: Placed on top of a sector. Provide bonus VP.
- **Charges**: Some cards have charge slots. Tokens accumulate on the card and unlock effects when conditions are met.
- **Income**: Your income floor — you always start each turn with at least this many coins.
- **VP**: Victory points. First to 40 wins (configurable).

## Card Data Model

All cards live in `src/lib/cards.ts`. The canonical types are in `src/lib/types.ts`.

### Ship

```ts
interface Ship {
  id: string
  name: string
  sector: number        // 1–12
  level: 1 | 2 | 3
  cost: number
  station: Effect[]     // activates on your turn
  deployed: Effect[]    // activates on other players' turns
  both: Effect[]        // green section — activates on either turn
  stationCharge?: ChargeAbility
  deployedCharge?: ChargeAbility
}
```

### Effect

Effects are a discriminated union on `key`:

```ts
type Effect =
  | { key: 'money';       amount: number }
  | { key: 'income';      amount: number }
  | { key: 'vp';          amount: number }
  | { key: 'shift_die';   amount: number }   // bump effective die value by up to N
  | { key: 'attack_vp';   amount: number }   // all opponents lose N VP
  | { key: 'buy_card';    amount?: number }  // extra buys (default 1)
  | { key: 'claim_cards'; claims: { level: 1|2|3; count: number }[] } // free cards, no cost
  | { key: 'chain_right' }   // also collect next sector's rewards
  | { key: 'chain_left' }    // also collect previous sector's rewards
  | { key: 'set_die' }       // before rolling, fix one die to any value
  | { key: 'swap_sectors' }  // swap cards between two of your sectors
  | { key: 'exchange_card' } // swap this card with any card on your board
  | { key: 'double' }        // double all rewards this activation
  | { key: 'place_charge' }  // place a charge token on any sector
  | { key: 'move_charge' }   // move an existing charge token to another open slot
  | { key: 'reroll_die' }
  | { key: 'you_win' }       // instant win when charge requirement is met
  // ...
```

### ChargeAbility

```ts
interface ChargeAbility {
  slots: ChargeSlot[]         // each slot has a player-count requirement
  linked: boolean             // true = all slots must fill before effect fires once
                              // false = each charge spent independently triggers effect
  effects: Effect[]           // what fires when charges are spent / all linked slots fill
  onPlaceEffects?: Effect[]   // fires each time a charge token is PLACED (not spent)
}

type ChargeSlot =
  | { required: 'always' }
  | { required: 'min_players'; count: 2|3|4 }   // slot only required if ≥ N players
  | { required: 'max_players'; count: 2|3 }      // slot only required if ≤ N players
```

**Linked vs unlinked:**
- *Unlinked*: you store up to N charges (one per slot); spend one at any time to trigger effects once. Max stored = number of slots.
- *Linked*: all required slots must be filled simultaneously. When the last required slot fills, the effect fires once and all tokens are removed.

**onPlaceEffects**: Some cards reward you with coins *each time you add* a charge token (before the card fires). This is separate from the main `effects`.

## Game State

Game state is a single `GameState` object stored in Redis under the key `spacebase:game`. The API at `/api/game` exposes `GET` (read) and `POST` (write).

```ts
interface GameState {
  phase: 'lobby' | 'setup' | 'roll' | 'allocate' | 'resolve' | 'buy' | 'refill' | 'check_win' | 'ended'
  round: number
  turnOrder: string[]           // player IDs in order
  activePlayerIndex: number
  startPlayerIndex: number
  dice: DiceState | null
  shipyard: Shipyard            // face-up cards available to buy
  decks: Decks                  // remaining cards per level
  players: Record<string, PlayerState>
  winner: string | null
}
```

## What's Done / What's Left

**Done:**
- All 132 ship cards fully catalogued with effects (`src/lib/cards.ts`)
- All 12 colony cards and 12 starter cards
- Full type system for all card mechanics
- Lobby UI (player check-in, game launch)
- GameBoard, PlayerBoard, Shipyard, DiceArea UI shells

**In progress / not yet implemented:**
- Turn state machine (phase transitions)
- Reward resolution logic (`resolve` phase) — reading station/deployed effects and applying them
- Passive resolve for deployed cards (other players' turns)
- Buy phase logic
- Charge token management
- Chain effects (collect neighboring sectors)
- Win condition check

## Notes for Contributors

- **Read `docs/card-reading-tips.md`** before touching card data — it explains the physical card layout, the 180° rotation rule for deployed sections, and all icon mappings.
- **`src/lib/types.ts` is the source of truth.** If you need a new mechanic, add it there first, then `mechanics.ts`, then use it in `cards.ts`.
- **Claude Code** is set up on this project. The `AGENTS.md` file has important notes about the Next.js version.
- One `swap_sectors` card exists per sector (the linked charge card). The specific sectors being swapped are described in the card name/text, not encoded in the `Effect` type — the game engine will need to look up the card to know which sectors to swap.
