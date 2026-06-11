import { Link } from 'react-router-dom'

const NotFoundPage = () => (
  <section className="grid min-h-screen place-items-center">
    <div className="text-center">
      <p className="font-mono text-7xl font-semibold text-accent">404</p>
      <p className="mt-4 text-text-muted">This route was never deployed.</p>
      <Link to="/" className="btn-ghost mt-8 inline-flex">← Back home</Link>
    </div>
  </section>
)

export default NotFoundPage
