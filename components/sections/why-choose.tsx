'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Languages, Award, Workflow, MonitorSmartphone } from 'lucide-react'

const features = [
  {
    title: 'Trilingual Excellence',
    description: 'Fluent communication in English, Portuguese, and Spanish.',
    icon: Languages,
  },
  {
    title: 'Premium Experience',
    description: 'Hospitality-grade service for every interaction.',
    icon: Award,
  },
  {
    title: 'Streamlined Workflows',
    description: 'Modern systems that enhance operational efficiency.',
    icon: Workflow,
  },
  {
    title: 'Flexible & Remote',
    description: 'Seamless support from anywhere in the world.',
    icon: MonitorSmartphone,
  },
]

export function WhyChoose() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-white to-[#FAF7F4] relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
        >
          <p className="text-[#A67C52] text-sm uppercase tracking-[0.25em] mb-5 font-medium">
            Why Majora
          </p>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[#3D3229] mb-6">
            The difference is in
            <br />
            <span className="text-[#A67C52]">the details.</span>
          </h2>

          <p className="text-[#6B5D4D] text-lg leading-relaxed font-light">
            We combine modern operational excellence with the warmth and 
            attention of luxury hospitality.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-white border border-[#E8DFD6] flex items-center justify-center text-[#A67C52] mx-auto mb-6 group-hover:bg-[#3D3229] group-hover:text-white group-hover:border-transparent group-hover:scale-110 transition-all duration-500 shadow-sm">
                <feature.icon size={26} strokeWidth={1.5} />
              </div>

              <h3 className="font-serif text-xl md:text-2xl text-[#3D3229] mb-3">
                {feature.title}
              </h3>

              <p className="text-[#6B5D4D] leading-relaxed font-light text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
