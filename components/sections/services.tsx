'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Headphones,
  CalendarCheck,
  Target,
  FileText,
  Database,
  Settings,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    title: 'Customer Support',
    description:
      'White-glove assistance focused on creating memorable customer experiences with every interaction.',
    icon: Headphones,
  },
  {
    title: 'Appointment Setting',
    description:
      'Seamless scheduling and calendar coordination that respects your time and maximizes efficiency.',
    icon: CalendarCheck,
  },
  {
    title: 'Lead Qualification',
    description:
      'Thoughtful prospect evaluation to connect you with opportunities aligned to your vision.',
    icon: Target,
  },
  {
    title: 'Administrative Support',
    description:
      'Comprehensive operational assistance that keeps your business running with elegance.',
    icon: FileText,
  },
  {
    title: 'CRM Organization',
    description:
      'Meticulous data management ensuring your customer relationships are nurtured and actionable.',
    icon: Database,
  },
  {
    title: 'Backoffice Support',
    description:
      'Reliable behind-the-scenes operations that let you focus on what matters most.',
    icon: Settings,
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E8DFD6] to-transparent" />
      
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-[#A67C52] text-sm uppercase tracking-[0.25em] mb-5 font-medium">
              Our Services
            </p>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[#3D3229]">
              Crafted for
              <br />
              <span className="text-[#A67C52]">excellence.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-7 flex items-end"
          >
            <p className="text-[#6B5D4D] text-lg md:text-xl leading-relaxed max-w-xl font-light">
              Premium trilingual support solutions designed with the precision 
              and attention to detail that international businesses deserve.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-[#FAF7F4] border border-[#E8DFD6] rounded-3xl p-8 md:p-10 hover:bg-white hover:border-[#D4C4B8] hover:shadow-xl hover:shadow-[#D4C4B8]/20 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#E8DFD6] flex items-center justify-center text-[#A67C52] mb-8 group-hover:bg-[#3D3229] group-hover:text-white group-hover:border-transparent transition-all duration-500">
                <service.icon size={22} strokeWidth={1.5} />
              </div>

              <h3 className="font-serif text-xl md:text-2xl mb-4 text-[#3D3229]">
                {service.title}
              </h3>

              <p className="text-[#6B5D4D] leading-relaxed mb-6 font-light">
                {service.description}
              </p>

              <div className="flex items-center gap-2 text-[#A67C52] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn more</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
