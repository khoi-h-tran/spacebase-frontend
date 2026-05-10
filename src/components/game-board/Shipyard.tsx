const LEVELS = [
  { label: '3', border: 'border-red-600',   bg: 'bg-red-950'    },
  { label: '2', border: 'border-green-600', bg: 'bg-green-950'  },
  { label: '1', border: 'border-blue-600',  bg: 'bg-blue-950'   },
]

export default function Shipyard() {
  return (
    <div className="flex flex-col gap-1.5">
      {LEVELS.map(level => (
        <div key={level.label} className="flex items-center gap-1.5">
          <span className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold border-2 shrink-0 ${level.border} text-white`}>
            {level.label}
          </span>
          <div className="flex gap-1.5 flex-1">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className={`flex-1 h-12 rounded-lg border-2 ${level.border} ${level.bg}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
