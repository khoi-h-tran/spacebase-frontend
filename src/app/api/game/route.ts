import { NextResponse } from 'next/server'
import { getGameState, setGameState } from '@/lib/game-state'
import type { GameState } from '@/lib/types'

export async function GET() {
  const state = await getGameState()
  return NextResponse.json(state)
}

export async function POST(req: Request) {
  const body: GameState = await req.json()
  await setGameState(body)
  return NextResponse.json({ ok: true })
}
