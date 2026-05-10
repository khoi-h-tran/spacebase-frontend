import type { GameState } from './types'

export const DEFAULT_GAME_STATE: GameState = {
  phase: 'lobby',
  round: 0,
  turnOrder: [],
  activePlayerIndex: 0,
  startPlayerIndex: 0,
  dice: null,
  shipyard: { level1: [], level2: [], level3: [], colony: [] },
  decks: { level1: [], level2: [], level3: [] },
  players: {},
  winner: null,
}
