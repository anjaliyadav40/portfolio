const text = 'BUILDING COOL THINGS ✦ LEARNING EVERY DAY ✦ CODE WITH PURPOSE ✦ DREAM BIG ✦ '
export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-neon/40 bg-navy py-3" aria-hidden="true">
      <div className="marquee-track font-display text-xl font-bold text-blush">
        {[0, 1, 2, 3].map((i) => <span key={i} className="whitespace-pre pr-4">{text}</span>)}
      </div>
    </div>
  )
}
