export default function DiceArea() {
  return (
    <div className="flex gap-3 shrink-0">
      {/* Roll + dice */}
      <div className="flex flex-col items-center gap-2 border-2 border-gray-600 rounded-2xl p-3">
        <button
          disabled
          className="px-5 py-1.5 rounded-lg border border-gray-500 text-sm font-semibold text-gray-300 opacity-50 cursor-not-allowed w-full text-center"
        >
          Roll
        </button>
        <div className="flex gap-2">
          <Die value={null} />
          <Die value={null} />
        </div>
      </div>

      {/* Combine / Split / Submit */}
      <div className="flex items-center gap-3 border-2 border-gray-600 rounded-2xl p-3">
        <div className="flex flex-col gap-2 text-sm text-gray-300">
          <label className="flex items-center gap-2 cursor-not-allowed opacity-50">
            <span className="w-3.5 h-3.5 rounded-full border-2 border-blue-400 bg-blue-400 inline-block" />
            <span>Combine</span>
            <span className="w-8 h-7 rounded border border-gray-500 bg-gray-800 flex items-center justify-center text-white font-bold">—</span>
          </label>
          <label className="flex items-center gap-2 cursor-not-allowed opacity-50">
            <span className="w-3.5 h-3.5 rounded-full border-2 border-gray-400 inline-block" />
            <span>Split</span>
            <span className="w-8 h-7 rounded border border-gray-500 bg-gray-800 flex items-center justify-center text-white font-bold">—</span>
            <span className="w-8 h-7 rounded border border-gray-500 bg-gray-800 flex items-center justify-center text-white font-bold">—</span>
          </label>
        </div>
        <button
          disabled
          className="px-4 py-6 rounded-xl bg-green-700 text-white font-bold opacity-40 cursor-not-allowed text-sm"
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
