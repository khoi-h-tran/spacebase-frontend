import { getGameState } from '@/lib/game-state'
import { ROSTER } from '@/lib/roster'
import LobbyClient from '@/components/LobbyClient'

export default async function Page() {
  const gameState = await getGameState()
  return <LobbyClient initialState={gameState} roster={ROSTER} />
}
