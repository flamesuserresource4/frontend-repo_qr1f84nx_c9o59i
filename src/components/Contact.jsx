import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // In a real project, send to backend or email service
      await new Promise(r => setTimeout(r, 800))
      setStatus('Thanks! I will get back to you shortly.')
      e.currentTarget.reset()
    } catch {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-3xl font-bold tracking-tight text-gray-900">Let’s build something users love</h3>
            <p className="mt-4 text-gray-700">Tell me about your product, timeline, and goals. I usually respond within 24 hours.</p>
            <div className="mt-8 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6">
              <ul className="text-sm text-gray-600 space-y-2 list-disc pl-5">
                <li>Product audits and UX strategy</li>
                <li>Design systems and component libraries</li>
                <li>Web and mobile product design</li>
                <li>Prototyping, testing, and dev handoff</li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 grid gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input required name="name" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input required type="email" name="email" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input name="company" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Project brief</label>
              <textarea required name="message" rows="5" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900" />
            </div>
            <button type="submit" className="inline-flex justify-center rounded-full bg-gray-900 text-white text-sm px-5 py-3 hover:bg-gray-800">
              Send message
            </button>
            {status && <p className="text-sm text-gray-600">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
