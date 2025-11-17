import { useEffect, useRef } from 'react'

const logos = [
  'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/figma.svg',
  'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/stripe.svg',
  'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/airbnb.svg',
  'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/notion.svg',
  'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/shopify.svg',
  'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/uber.svg',
  'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/asana.svg',
  'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/linear.svg',
]

export default function Companies() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    let id
    const step = () => {
      el.scrollLeft += 0.6
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) el.scrollLeft = 0
      id = requestAnimationFrame(step)
    }
    id = requestAnimationFrame(step)
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section id="work" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-200 bg-white/60 backdrop-blur p-6">
          <div className="text-sm text-gray-600 mb-6">Trusted by teams at</div>
          <div ref={ref} className="flex overflow-x-auto no-scrollbar gap-10 items-center">
            {logos.concat(logos).map((src, i) => (
              <img key={i} src={src} alt="logo" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
