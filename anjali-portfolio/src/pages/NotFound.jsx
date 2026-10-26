import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-grid px-4 text-center">
      <div><h1 className="name-text text-8xl">404</h1><p className="mt-2 text-muted">That page doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex min-h-[44px] items-center rounded-full bg-gradient-to-r from-neon to-lav px-6 font-semibold text-midnight">Back to home</Link></div>
    </div>
  )
}
