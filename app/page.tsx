import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Technologies from '@/components/Technologies'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <Technologies />
      <Team />
      <Contact />
    </main>
  )
}

