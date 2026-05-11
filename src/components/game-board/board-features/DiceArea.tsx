'use client'


import type { DiceState } from '@/lib/types'

interface Props {
  dice: DiceState | null
  onRoll: (dice: DiceState) => void
  allocation: 'split' | 'combine' | null
  onAllocationChange: (a: 'split' | 'combine') => void
}

export default function DiceArea({ dice, onRoll, allocation, onAllocationChange }: Props) {
  function roll() {
    const values: [number, number] = [
      Math.ceil(Math.random() * 6),
      Math.ceil(Math.random() * 6),
    ]
    onRoll({ values, allocation: null })
  }

  const hasRolled = dice !== null
  const combined = hasRolled ? dice.values[0] + dice.values[1] : null

  return (
    <div className="flex gap-3 shrink-0">
      {/* Roll + dice */}
      <div className="flex flex-col items-center gap-2 border-2 border-gray-600 rounded-2xl p-3">
        <button
          onClick={roll}
          className="px-5 py-1.5 rounded-lg border border-gray-400 text-sm font-semibold text-gray-300 hover:bg-gray-700 transition-colors w-full text-center"
        >
          Roll
        </button>
        <div className="flex gap-2">
          <Die value={dice?.values[0] ?? null} />
          <Die value={dice?.values[1] ?? null} />
        </div>
      </div>

      {/* Combine / Split / Submit */}
      <div className="flex items-center gap-3 border-2 border-gray-600 rounded-2xl p-3">
        <div className="flex flex-col gap-2 text-sm text-gray-300">
          <label className={`flex items-center gap-2 ${hasRolled ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}>
            <input
              type="radio"
              name="allocation"
              disabled={!hasRolled}
              checked={allocation === 'combine'}
              onChange={() => onAllocationChange('combine')}
              className="hidden"
            />
            <span className={`w-3.5 h-3.5 rounded-full border-2 inline-block transition-colors ${allocation === 'combine' ? 'border-blue-400 bg-blue-400' : 'border-gray-400'}`} />
            <span>Combine</span>
            <span className="w-8 h-7 rounded border border-gray-500 bg-gray-800 flex items-center justify-center text-white font-bold">
              {combined !== null ? combined : '—'}
            </span>
          </label>
          <label className={`flex items-center gap-2 ${hasRolled ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}>
            <input
              type="radio"
              name="allocation"
              disabled={!hasRolled}
              checked={allocation === 'split'}
              onChange={() => onAllocationChange('split')}
              className="hidden"
            />
            <span className={`w-3.5 h-3.5 rounded-full border-2 inline-block transition-colors ${allocation === 'split' ? 'border-blue-400 bg-blue-400' : 'border-gray-400'}`} />
            <span>Split</span>
            <span className="w-8 h-7 rounded border border-gray-500 bg-gray-800 flex items-center justify-center text-white font-bold">
              {dice ? dice.values[0] : '—'}
            </span>
            <span className="w-8 h-7 rounded border border-gray-500 bg-gray-800 flex items-center justify-center text-white font-bold">
              {dice ? dice.values[1] : '—'}
            </span>
          </label>
        </div>
        <button
          disabled={allocation === null}
          className="px-4 py-6 rounded-xl bg-green-700 text-white font-bold text-sm transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </div>
    </div>
  )
}

function Die({ value }: { value: number | null }) {
  return (
    <div className="w-10 h-10 rounded-lg border-2 border-gray-500 bg-gray-800 flex items-center justify-center text-lg font-bold text-white">
      {value ?? '?'}
    </div>
  )
}
