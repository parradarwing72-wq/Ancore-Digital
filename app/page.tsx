import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Technologies from '@/components/Technologies'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Services />
      <Projects />
      <Technologies />
      <Team />
      <Contact />
    </main>
  )
}

