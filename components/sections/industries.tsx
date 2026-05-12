'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Truck,
  Building2,
  Heart,
  Scale,
  ShoppingCart,
  Hotel,
} from 'lucide-react'

const industries = [
  { name: 'Logistics', icon: Truck },
  { name: 'Real Estate', icon: Building2 },
  { name: 'Healthcare', icon: Heart },
  { name: 'Legal', icon: Scale },
  { name: 'E-commerce', icon: ShoppingCart },
  { name: 'Hospitality', icon: Hotel },
]

export function Industries() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 md:py-32 px-6 bg-white relative">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E8DFD6] to-transparent" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
        >
          <p className="text-[#A67C52] text-sm uppercase tracking-[0.25em] mb-5 font-medium">
            Industries
          </p>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[#3D3229]">
            Trusted across
            <br />
            <span className="text-[#A67C52]">industries.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-[#FAF7F4] border border-[#E8DFD6] rounded-2xl p-6 md:p-8 text-center hover:bg-white hover:border-[#D4C4B8] hover:shadow-lg hover:shadow-[#D4C4B8]/15 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E8DFD6] flex items-center justify-center text-[#A67C52] mx-auto mb-4 group-hover:bg-[#3D3229] group-hover:text-white group-hover:border-transparent transition-all duration-500">
                <industry.icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm md:text-base text-[#3D3229] font-medium">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
