import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

const testimonials = [
  { name: 'Aisha Khan', role: 'PM, Fintell', quote: 'Nabil elevated our onboarding from confusing to crystal clear. Metrics jumped within weeks.' },
  { name: 'Marco Ribeiro', role: 'Founder, Hiplane', quote: 'Elegant design with real-world constraints in mind. He just gets product.' },
  { name: 'Sophia Liu', role: 'Design Lead, Qora', quote: 'Systematic, fast, and incredibly thoughtful. Our design system finally feels coherent.' },
  { name: 'Daniel Weber', role: 'CTO, Arcform', quote: 'Nabil turned complex workflows into a joy to use. Devs loved the specs too.' },
  { name: 'Fatima Zahra', role: 'Head of Growth, Nouri', quote: 'The CRO uplift was insane. Beauty and business results—together.' },
  { name: 'Akash Mehta', role: 'PM, Relay', quote: 'Great collaboration. Clear rationale with every decision.' },
  { name: 'Julia Perez', role: 'CEO, Mellow', quote: 'Rare mix of craft and strategy. We re-hired twice.' },
  { name: 'Omar Hassan', role: 'Eng Manager, Sensa', quote: 'Specs, prototypes, and handoff—smooth and developer-friendly.' },
  { name: 'Hana Yamada', role: 'UX Researcher, Nori', quote: 'Research-backed, user-first, and delightful execution.' },
  { name: 'Lukas Bauer', role: 'CPO, Zephyr', quote: 'Impact-focused. Our activation improved 24% after his redesign.' },
  { name: 'Priya Sharma', role: 'Founder, Koyo', quote: 'From messy idea to polished product vision—fast.' },
  { name: 'Tom Becker', role: 'COO, Vanta', quote: 'Clear communication and strong systems thinking.' },
  { name: 'Elena Petrova', role: 'Design Ops, Flux', quote: 'Our component library finally feels intuitive and scalable.' },
  { name: 'Noah Green', role: 'CTO, Caster', quote: 'Complex B2B UX simplified without dumbing it down.' },
  { name: 'Zara Idris', role: 'Founder, Looma', quote: 'Set a new bar for product polish at our company.' },
]

export default function Testimonials() {
  const controls = useAnimation()
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    let animationId
    const speed = 0.5

    const step = () => {
      container.scrollLeft += speed
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0
      }
      animationId = requestAnimationFrame(step)
    }
    animationId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">What clients say</h3>
        <div ref={ref} className="relative overflow-x-auto no-scrollbar">
          <div className="flex gap-4 min-w-max pr-8">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.02 }}
                className="w-80 shrink-0 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-5"
              >
                <p className="text-gray-800">“{t.quote}”</p>
                <footer className="mt-4 text-sm text-gray-600">{t.name} · {t.role}</footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
