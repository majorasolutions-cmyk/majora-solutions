'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Eye, Heart } from 'lucide-react'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 bg-[#FAF7F4] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#E8D5C4]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 lg:order-1"
        >
          {/* Image container with elegant frame */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#D4C4B8]/30 to-[#E8DFD6]/20 rounded-[40px] blur-2xl" />
            <div className="relative rounded-[32px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
                alt="Modern workspace"
                className="w-full h-[400px] md:h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D3229]/20 to-transparent" />
            </div>
            
            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 md:right-8 bg-white rounded-2xl p-6 shadow-xl shadow-[#D4C4B8]/20 border border-[#E8DFD6]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FAF7F4] flex items-center justify-center text-[#A67C52]">
                  <Heart size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-serif text-2xl text-[#3D3229]">100%</p>
                  <p className="text-[#6B5D4D] text-sm">Client Focused</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2"
        >
          <p className="text-[#A67C52] text-sm uppercase tracking-[0.25em] mb-5 font-medium">
            Our Story
          </p>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8 text-[#3D3229]">
            Built on trust.
            <br />
            <span className="text-[#A67C52]">Driven by care.</span>
          </h2>

          <p className="text-[#6B5D4D] text-lg leading-relaxed mb-10 font-light">
            Majora Solutions was founded with a simple belief: that exceptional 
            customer experiences require the perfect blend of operational 
            excellence and genuine human connection. We bring both.
          </p>

          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD6] hover:border-[#D4C4B8] hover:shadow-lg hover:shadow-[#D4C4B8]/10 transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FAF7F4] flex items-center justify-center text-[#A67C52] shrink-0">
                  <Target size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#3D3229] mb-2">Our Mission</h3>
                  <p className="text-[#6B5D4D] font-light leading-relaxed">
                    To deliver premium remote operational support that elevates 
                    businesses worldwide with efficiency, warmth, and excellence.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD6] hover:border-[#D4C4B8] hover:shadow-lg hover:shadow-[#D4C4B8]/10 transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FAF7F4] flex items-center justify-center text-[#A67C52] shrink-0">
                  <Eye size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#3D3229] mb-2">Our Vision</h3>
                  <p className="text-[#6B5D4D] font-light leading-relaxed">
                    To become the most trusted global partner for customer 
                    experience and operational excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
