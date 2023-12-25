import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
        <main className="flex flex-col min-h-screen">
          <Hero />
        </main>
      <Footer />
    </>
  )
}
