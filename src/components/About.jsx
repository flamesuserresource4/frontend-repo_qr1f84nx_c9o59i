import { motion } from 'framer-motion'

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '6+' },
    { label: 'Products Shipped', value: '35+' },
    { label: 'Happy Clients', value: '28' },
    { label: 'Awards', value: '7' },
  ]

  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 via-white to-white" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Design with intent. Build with empathy.</h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              I’m a product designer focused on crafting interfaces that feel effortless. My process blends research, systems thinking, and playful aesthetics—so your users feel confident and delighted.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                  <div className="text-xs text-gray-600">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-indigo-100 via-white to-pink-100 p-3">
              <div className="w-full h-full rounded-2xl bg-white shadow-xl grid grid-cols-3 gap-3 p-3">
                <div className="rounded-xl bg-indigo-50" />
                <div className="rounded-xl bg-pink-50" />
                <div className="rounded-xl bg-blue-50" />
                <div className="rounded-xl bg-blue-50 col-span-2" />
                <div className="rounded-xl bg-indigo-50" />
                <div className="rounded-xl bg-pink-50 col-span-3" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
