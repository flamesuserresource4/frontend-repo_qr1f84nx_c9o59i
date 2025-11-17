import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="inline-flex items-center px-3 py-1 rounded-full bg-gray-900 text-white text-xs tracking-wide">
            UI/UX Designer
          </p>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
            Habibullah Nabil
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            I craft delightful, accessible, and conversion-focused product experiences—where aesthetics meet measurable impact.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center rounded-full bg-gray-900 text-white text-sm px-5 py-3 hover:bg-gray-800 transition-colors">View Work</a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-white border border-gray-200 text-gray-900 text-sm px-5 py-3 hover:border-gray-300 transition-colors">Contact</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
