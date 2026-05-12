'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Send, ArrowRight } from 'lucide-react'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true)
    setTimeout(() => setIsSubmitting(false), 2000)
  }

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 bg-[#3D3229] text-white relative overflow-hidden"
    >
      {/* Elegant background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4D4239]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#5D5249]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[#C8A888] text-sm uppercase tracking-[0.25em] mb-5 font-medium">
              Get in Touch
            </p>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8">
              {"Let's create"}
              <br />
              <span className="text-[#C8A888]">something exceptional.</span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-10 font-light max-w-md">
              Ready to elevate your customer experience? We would love to learn 
              about your business and explore how we can help.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:majorasolutions@gmail.com"
                className="group flex items-center gap-4 text-white/80 hover:text-white transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-[#C8A888] group-hover:border-transparent transition-all duration-300">
                  <Mail size={20} />
                </div>
                <span className="font-light">majorasolutions@gmail.com</span>
              </a>

              <a
                href="https://wa.me/5519992214152"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-white/80 hover:text-white transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-[#25D366] group-hover:border-transparent transition-all duration-300">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <span className="font-light">WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Right column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <form
              action="https://formspree.io/f/xykooovb"
              method="POST"
              onSubmit={handleSubmit}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
            >
              <div className="space-y-5 mb-6">
                <div>
                  <label htmlFor="name" className="block text-white/60 text-sm mb-2 font-light">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#C8A888]/50 transition-colors font-light"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white/60 text-sm mb-2 font-light">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#C8A888]/50 transition-colors font-light"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/60 text-sm mb-2 font-light">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 outline-none resize-none focus:border-[#C8A888]/50 transition-colors font-light"
                    placeholder="Tell us about your business needs"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-white text-[#3D3229] hover:bg-[#FAF7F4] transition-all duration-300 px-8 py-4 rounded-xl flex items-center justify-center gap-3 font-medium disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
