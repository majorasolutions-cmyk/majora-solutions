'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    text: 'Their attention to detail and professionalism elevated our entire customer service experience. Truly exceptional.',
    author: 'International Logistics Company',
    role: 'Operations Director',
  },
  {
    text: 'Reliable trilingual support that transformed how we communicate with our global clientele. Highly recommended.',
    author: 'Real Estate Agency',
    role: 'Managing Partner',
  },
  {
    text: 'A premium approach to remote assistance that feels like having an in-house team. Outstanding service.',
    author: 'Healthcare Provider',
    role: 'CEO',
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-[#FAF7F4] to-white relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#E8DFD6]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="text-[#A67C52] text-sm uppercase tracking-[0.25em] mb-5 font-medium">
            Testimonials
          </p>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[#3D3229]">
            Trusted by
            <br />
            <span className="text-[#A67C52]">industry leaders.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white border border-[#E8DFD6] rounded-3xl p-8 md:p-10 text-left hover:border-[#D4C4B8] hover:shadow-xl hover:shadow-[#D4C4B8]/15 transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F4] flex items-center justify-center text-[#A67C52] mb-6 group-hover:bg-[#A67C52] group-hover:text-white transition-all duration-500">
                <Quote size={18} strokeWidth={1.5} />
              </div>

              <p className="text-[#5C4D3D] text-lg leading-relaxed mb-8 font-light">
                {`"${testimonial.text}"`}
              </p>

              <div className="pt-6 border-t border-[#E8DFD6]">
                <p className="font-serif text-[#3D3229] text-lg mb-1">
                  {testimonial.author}
                </p>
                <p className="text-[#A67C52] text-sm">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
