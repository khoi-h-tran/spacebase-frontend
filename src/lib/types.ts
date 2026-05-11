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
  level1: string[]
  level2: string[]
  level3: string[]
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

export type RewardType = 'money' | 'income' | 'vp'

export interface Reward {
  type: RewardType
  amount: number
}

export interface Ship {
  id: string
  name: string
  sector: number
  level: 1 | 2 | 3
  cost: number
  station: Reward
  deployed: Reward
}

export interface Colony {
  id: string
  sector: number
  cost: number
  vp: number
}
