import { motion } from 'framer-motion'
import { Search, Shapes, Wand2, Handshake } from 'lucide-react'

const steps = [
  { icon: Search, title: 'Discover', desc: 'Understand users, goals, and constraints through research and workshops.' },
  { icon: Shapes, title: 'Define', desc: 'Align on flows, IA, and success metrics with clear prioritization.' },
  { icon: Wand2, title: 'Design', desc: 'Craft wireframes to high-fidelity UI with systems-driven components.' },
  { icon: Handshake, title: 'Deliver', desc: 'Prototype, test, iterate, and handoff with dev-ready specs.' },
]

export default function Process() {
  return (
    <section id="process" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold tracking-tight text-gray-900 mb-10">How I work</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="w-10 h-10 rounded-lg bg-gray-900 text-white flex items-center justify-center">
                <s.icon size={20} />
              </div>
              <h4 className="mt-4 font-semibold text-gray-900">{s.title}</h4>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
