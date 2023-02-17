import Link from '../Link'

export default function NavBar() {
  return (
    <nav className="section-wrapper py-4 border-b border-stone-900">
      <section className="flex justify-between">
        <Link href="/">Home</Link>
        <Link href="/about">About Me</Link>
      </section>
    </nav>
  )
}
