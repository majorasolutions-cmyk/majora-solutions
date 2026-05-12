import { Header } from '@/components/header'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { WhyChoose } from '@/components/sections/why-choose'
import { About } from '@/components/sections/about'
import { Industries } from '@/components/sections/industries'
import { Contact } from '@/components/sections/contact'
import { Testimonials } from '@/components/sections/testimonials'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <WhyChoose />
      <About />
      <Industries />
      <Contact />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
