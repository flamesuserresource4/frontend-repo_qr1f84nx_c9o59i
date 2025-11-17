import { useState, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function ParallaxCard({ children }) {
  const ref = useRef(null)
  const [style, setStyle] = useState({ transform: 'rotateX(0deg) rotateY(0deg) translateZ(0px)' })

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const midX = rect.width / 2
    const midY = rect.height / 2
    const rotateX = ((y - midY) / midY) * -6
    const rotateY = ((x - midX) / midX) * 6
    setStyle({ transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(0)` })
  }

  const onLeave = () => setStyle({ transform: 'rotateX(0deg) rotateY(0deg) translateZ(0px)', transition: 'transform 300ms ease' })

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={style} className="will-change-transform">
      {children}
    </div>
  )
}

export default function Showcase() {
  const scenes = [
    {
      title: 'Playful Portfolio Core',
      subtitle: 'Interactive hero composition',
      scene: 'https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode',
      accent: 'from-fuchsia-500/20 via-blue-500/10 to-emerald-500/20',
    },
    {
      title: 'UI Micro-interactions',
      subtitle: 'Smooth motion, crisp detail',
      scene: 'https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode',
      accent: 'from-emerald-500/20 via-cyan-500/10 to-indigo-500/20',
    },
    {
      title: 'Design System Objects',
      subtitle: 'Components in 3D space',
      scene: 'https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode',
      accent: 'from-violet-500/20 via-pink-500/10 to-orange-500/20',
    },
  ]

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_50%_0%,rgba(99,102,241,0.08),rgba(255,255,255,0))]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h3 className="text-3xl font-bold tracking-tight text-gray-900">Interactive 3D Showcase</h3>
            <p className="mt-2 text-gray-600">No static mockups — explore playful, tactile 3D visuals that respond to you.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group"
            >
              <ParallaxCard>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm">
                  <div className="absolute inset-0">
                    <Spline scene={item.scene} style={{ width: '100%', height: '100%' }} />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-tr ${item.accent} opacity-40 mix-blend-overlay pointer-events-none`} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <div className="rounded-full bg-white/80 backdrop-blur px-3 py-1 inline-block text-xs text-gray-700 border border-white/60">3D Interactive</div>
                    <h4 className="mt-2 font-semibold text-gray-900 drop-shadow-sm">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.subtitle}</p>
                  </div>
                </div>
              </ParallaxCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
