import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import PhotoGallerySection from '@/components/PhotoGallerySection'
import InstallationProcess from '@/components/InstallationProcess'
import CoverageMap from '@/components/CoverageMap'
import WeatherWidget from '@/components/WeatherWidget'
import InteractiveMap from '@/components/InteractiveMap'
import EquipmentShowcase from '@/components/EquipmentShowcase'
import NewsSection from '@/components/NewsSection'
import FAQ from '@/components/FAQ'
import Partners from '@/components/Partners'
import Newsletter from '@/components/Newsletter'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import SupportChat from '@/components/SupportChat'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <PhotoGallerySection />
      <InstallationProcess />
      <CoverageMap />
      <WeatherWidget />
      <InteractiveMap />
      <EquipmentShowcase />
      <NewsSection />
      <FAQ />
      <Partners />
      <Newsletter />
      <ContactForm />
      <Footer />
      <ScrollToTop />
      <SupportChat />
    </main>
  )
}
