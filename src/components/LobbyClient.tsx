'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { GameState, RosterPlayer } from '@/lib/types'
import { DEFAULT_GAME_STATE } from '@/lib/constants'

interface Props {
  initialState: GameState
  roster: RosterPlayer[]
}

export default function LobbyClient({ initialState, roster }: Props) {
  const router = useRouter()
  const [checkedIn, setCheckedIn] = useState<Set<string>>(() => {
    return new Set(Object.keys(initialState.players))
  })
  const [launching, setLaunching] = useState(false)

  function toggle(id: string) {
    setCheckedIn(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  async function launch() {
    setLaunching(true)
    const selectedPlayers = roster.filter(p => checkedIn.has(p.id))

    const newState: GameState = {
      ...DEFAULT_GAME_STATE,
      phase: 'setup',
      turnOrder: selectedPlayers.map(p => p.id),
      players: Object.fromEntries(
        selectedPlayers.map(p => [
          p.id,
          {
            id: p.id,
            name: p.name,
            color: p.color,
            money: 5,
            income: 0,
            vp: 0,
            hasStartCard: false,
            sectors: Object.fromEntries(
              Array.from({ length: 12 }, (_, i) => [
                i + 1,
                { stationCard: `starter-${i + 1}`, deployedCards: [], colonyCard: null, chargeTokens: 0 },
              ])
            ),
          },
        ])
      ),
    }

    await fetch('/api/game', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newState),
    })

    router.push('/game')
  }

  const canLaunch = checkedIn.size >= 2 && !launching

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-10 p-8">
      <h1 className="text-5xl font-bold tracking-widest uppercase">
        🚀 Spacebase
      </h1>

      <div className="w-80 bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-700 text-sm font-semibold text-gray-400 uppercase tracking-wider">
          Space Commanders
        </div>
        <ul>
          {roster.map(player => {
            const checked = checkedIn.has(player.id)
            return (
              <li key={player.id}>
                <label className="flex items-center gap-4 px-5 py-3 cursor-pointer hover:bg-gray-800 transition-colors">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggle(player.id)}
                    className="w-4 h-4 accent-white rounded"
                  />
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: player.color }}
                  />
                  <span className="flex-1">{player.name}</span>
                  <span className="text-xs text-gray-500">
                    {checked ? 'checked in' : 'not present'}
                  </span>
                </label>
              </li>
            )
          })}
        </ul>
      </div>

      <button
        onClick={launch}
        disabled={!canLaunch}
        className="px-8 py-3 rounded-xl font-semibold text-lg tracking-wide transition-all
          disabled:opacity-30 disabled:cursor-not-allowed
          bg-indigo-600 hover:bg-indigo-500 active:scale-95"
      >
        {launching ? 'Launching…' : 'Launch Mission'}
      </button>

      {checkedIn.size < 2 && (
        <p className="text-sm text-gray-500">At least 2 commanders required</p>
      )}
    </div>
  )
}
