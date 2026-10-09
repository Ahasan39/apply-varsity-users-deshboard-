import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <Link className="mt-4 inline-block text-blue-700 underline" to="/">
        Return to the foundation page
      </Link>
    </main>
  )
}
