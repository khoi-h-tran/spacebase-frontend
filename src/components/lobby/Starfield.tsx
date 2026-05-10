'use client'

const STARS = [
  { top: '5%',  left: '10%', delay: '0s',    size: 'w-1 h-1' },
  { top: '10%', left: '55%', delay: '0.4s',  size: 'w-1.5 h-1.5' },
  { top: '15%', left: '82%', delay: '1.1s',  size: 'w-1 h-1' },
  { top: '22%', left: '28%', delay: '0.7s',  size: 'w-1 h-1' },
  { top: '28%', left: '72%', delay: '1.8s',  size: 'w-1.5 h-1.5' },
  { top: '35%', left: '5%',  delay: '0.3s',  size: 'w-1 h-1' },
  { top: '40%', left: '91%', delay: '1.4s',  size: 'w-1 h-1' },
  { top: '48%', left: '42%', delay: '0.9s',  size: 'w-1.5 h-1.5' },
  { top: '55%', left: '18%', delay: '1.6s',  size: 'w-1 h-1' },
  { top: '60%', left: '65%', delay: '0.2s',  size: 'w-1 h-1' },
  { top: '68%', left: '38%', delay: '1.3s',  size: 'w-1.5 h-1.5' },
  { top: '72%', left: '88%', delay: '0.6s',  size: 'w-1 h-1' },
  { top: '80%', left: '12%', delay: '1.9s',  size: 'w-1 h-1' },
  { top: '85%', left: '50%', delay: '0.5s',  size: 'w-1.5 h-1.5' },
  { top: '90%', left: '75%', delay: '1.0s',  size: 'w-1 h-1' },
  { top: '3%',  left: '35%', delay: '1.5s',  size: 'w-1 h-1' },
  { top: '45%', left: '78%', delay: '0.8s',  size: 'w-1 h-1' },
  { top: '93%', left: '25%', delay: '1.7s',  size: 'w-1.5 h-1.5' },
]

export default function Starfield() {
  return (
    <>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.9); }
          50% { opacity: 0.9; transform: scale(1.1); }
        }
      `}</style>
      <div className="fixed inset-0 -z-10 bg-gray-950 pointer-events-none overflow-hidden">
        {STARS.map((s, i) => (
          <span
            key={i}
            className={`absolute rounded-full bg-white ${s.size}`}
            style={{ top: s.top, left: s.left, animation: `twinkle ${2.5 + (i % 3) * 0.5}s ease-in-out ${s.delay} infinite` }}
          />
        ))}
      </div>
    </>
  )
}
