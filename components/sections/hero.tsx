'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Globe2 } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-24 px-6 relative overflow-hidden"
    >
      {/* Elegant background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FDF8F5] via-[#FAF5F0] to-[#F5EDE6]" />
      
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-[#E8D5C4]/30 to-[#D4B8A0]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-gradient-to-tr from-[#D4C4B8]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      {/* Elegant line decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#C8A888]/30 to-transparent" />

      <div className="max-w-7xl mx-auto w-full relative">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-[#E8DFD6]">
              <Sparkles size={14} className="text-[#B8927A]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#8B7355] font-medium">
                Premium Remote Operations
              </span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.08] mb-8 text-[#3D3229]"
          >
            <span className="block">Elevating Every</span>
            <span className="block mt-1 md:mt-2">
              <span className="text-[#A67C52]">Customer</span> Experience.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#6B5D4D] text-lg md:text-xl lg:text-2xl leading-relaxed mb-12 max-w-2xl font-light"
          >
            Seamless trilingual support crafted for international businesses 
            who value excellence, precision, and the art of exceptional service.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="https://wa.me/5519992214152"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-[#3D3229] hover:bg-[#2D241C] text-white px-8 py-4 rounded-full transition-all duration-500 hover:shadow-xl hover:shadow-[#3D3229]/20"
            >
              <span className="font-medium tracking-wide">Schedule a Consultation</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#D4C4B8] hover:border-[#A67C52] hover:bg-white/50 text-[#5C4D3D] transition-all duration-500"
            >
              <span className="font-medium tracking-wide">Explore Services</span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-8 md:gap-12"
          >
            <div className="group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-white/80 border border-[#E8DFD6] flex items-center justify-center text-[#A67C52] group-hover:bg-[#A67C52] group-hover:text-white transition-all duration-300">
                  <Globe2 size={18} />
                </div>
                <span className="font-serif text-3xl md:text-4xl text-[#3D3229]">3</span>
              </div>
              <p className="text-[#8B7355] text-sm uppercase tracking-[0.15em]">Languages</p>
            </div>

            <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#D4C4B8] to-transparent hidden md:block" />

            <div className="group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-white/80 border border-[#E8DFD6] flex items-center justify-center text-[#A67C52] group-hover:bg-[#A67C52] group-hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <span className="font-serif text-3xl md:text-4xl text-[#3D3229]">24h</span>
              </div>
              <p className="text-[#8B7355] text-sm uppercase tracking-[0.15em]">Response Time</p>
            </div>

            <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#D4C4B8] to-transparent hidden md:block" />

            <div className="group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-white/80 border border-[#E8DFD6] flex items-center justify-center text-[#A67C52] group-hover:bg-[#A67C52] group-hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="font-serif text-3xl md:text-4xl text-[#3D3229]">100%</span>
              </div>
              <p className="text-[#8B7355] text-sm uppercase tracking-[0.15em]">Remote</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />
    </section>
  )
}
