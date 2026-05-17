export type Phase =
  | 'lobby'
  | 'setup'
  | 'roll'
  | 'allocate'
  | 'resolve'
  | 'buy'
  | 'refill'
  | 'check_win'
  | 'ended'

export interface DiceState {
  values: [number, number]
  allocation: 'split' | 'combine' | null
}

export interface Shipyard {
  level1: (string | null)[]
  level2: (string | null)[]
  level3: (string | null)[]
  colony: string[]
}

export interface Decks {
  level1: string[]
  level2: string[]
  level3: string[]
}

export interface SectorState {
  stationCard: string
  deployedCards: string[]
  colonyCard: string | null
  chargeTokens: number
}

export interface PlayerState {
  id: string
  name: string
  color: string
  money: number
  income: number
  vp: number
  hasStartCard: boolean
  sectors: Record<number, SectorState>
}

export interface GameState {
  phase: Phase
  round: number
  turnOrder: string[]
  activePlayerIndex: number
  startPlayerIndex: number
  dice: DiceState | null
  shipyard: Shipyard
  decks: Decks
  players: Record<string, PlayerState>
  winner: string | null
}

export interface RosterPlayer {
  id: string
  name: string
  color: string
}

export type MechanicKey =
  | 'money'
  | 'income'
  | 'vp'
  | 'charge'
  | 'chain_right'
  | 'chain_left'
  | 'shift_die'
  | 'set_die'
  | 'buy_card'
  | 'claim_cards'
  | 'swap_sectors'
  | 'exchange_card'
  | 'double'
  | 'place_charge'
  | 'you_win'
  | 'reroll_die'
  | 'attack_vp'
  | 'move_charge'

export type Effect =
  | { key: 'money';     amount: number }
  | { key: 'income';    amount: number }
  | { key: 'vp';        amount: number }
  | { key: 'charge';    amount: number }
  | { key: 'shift_die'; amount: number }
  | { key: 'attack_vp'; amount: number }
  | { key: 'chain_right' }
  | { key: 'chain_left' }
  | { key: 'set_die' }
  | { key: 'buy_card';  amount?: number }
  | { key: 'swap_sectors' }
  | { key: 'exchange_card' }
  | { key: 'double' }
  | { key: 'place_charge' }
  | { key: 'move_charge' }
  | { key: 'you_win' }
  | { key: 'reroll_die' }
  | { key: 'claim_cards'; claims: { level: 1 | 2 | 3; count: number }[] }

export type ChargeSlot =
  | { required: 'always' }
  | { required: 'min_players'; count: 2 | 3 | 4 }
  | { required: 'max_players'; count: 2 | 3 }

export interface ChargeAbility {
  slots: ChargeSlot[]
  linked: boolean
  effects: Effect[]           // fires when charges are spent (unlinked: per charge; linked: when all filled)
  onPlaceEffects?: Effect[]   // fires each time a charge token is placed on this card
}

export interface Ship {
  id: string
  name: string
  sector: number
  level: 1 | 2 | 3
  cost: number
  station: Effect[]
  deployed: Effect[]
  both: Effect[]
  stationCharge?: ChargeAbility
  deployedCharge?: ChargeAbility
}

export interface Colony {
  id: string
  sector: number
  cost: number
  vp: number
}
