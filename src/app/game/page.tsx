import { getGameState } from '@/lib/game-state'
import GameBoard from '@/components/game-board/GameBoard'

export default async function GamePage() {
  const gameState = await getGameState()
  return <GameBoard gameState={gameState} />
}
