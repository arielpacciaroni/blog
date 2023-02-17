import { ReactNode } from 'react'
import Footer from '../Footer'
import NavBar from '../NavBar'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />
      <section className="section-wrapper my-8">{children}</section>
      <Footer />
    </main>
  )
}
