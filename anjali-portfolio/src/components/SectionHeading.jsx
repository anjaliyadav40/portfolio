export default function SectionHeading({ id, children, note }) {
  return (
    <div className="mb-10">
      <h2 id={id} className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_14px_rgba(255,45,149,.55)]">{children}</h2>
      {note && <p className="font-hand text-2xl text-blush mt-1">{note}</p>}
    </div>
  )
}
