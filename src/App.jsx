import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Showcase from './components/Showcase'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import Companies from './components/Companies'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <About />
        <Testimonials />
        <Process />
        <Companies />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
