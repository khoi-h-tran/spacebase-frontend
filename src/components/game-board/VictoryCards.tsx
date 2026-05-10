export default function VictoryCards() {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: 12 }, (_, i) => (
        <div
          key={i + 1}
          className="flex-1 h-12 rounded-lg border-2 border-amber-500 bg-amber-950 flex items-center justify-center text-xs text-amber-400 font-semibold"
        >
          {i + 1}
        </div>
      ))}
    </div>
  )
}
