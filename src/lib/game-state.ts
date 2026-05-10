import { redis } from './redis'
import type { GameState } from './types'
import { DEFAULT_GAME_STATE } from './constants'

export { DEFAULT_GAME_STATE }

const GAME_KEY = 'spacebase:game'

export async function getGameState(): Promise<GameState> {
  const state = await redis.get<GameState>(GAME_KEY)
  return state ?? DEFAULT_GAME_STATE
}

export async function setGameState(state: GameState): Promise<void> {
  await redis.set(GAME_KEY, state)
}
