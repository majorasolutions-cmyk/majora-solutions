'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const footerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="bg-[#FAF7F4] border-t border-[#E8DFD6] py-16 md:py-20 px-6 relative">
      {/* Subtle top decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#A67C52]/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-5">
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              src="https://i.postimg.cc/59w4fbxG/a-professional-minimalist-logo-design-fe-1XOsi-DG3Ug-W80ZAXKTu1t-Q-70UQRMm-HSt-O1u-EHOw-UBr-OQ-sd.png"
              alt="Majora Solutions"
              className="h-14 w-auto object-contain mb-6"
            />
            <p className="text-[#6B5D4D] font-light leading-relaxed max-w-sm mb-6">
              Elevating global customer experiences through premium trilingual 
              remote operations.
            </p>
            <a
              href="https://wa.me/5519992214152"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[#3D3229] hover:text-[#A67C52] transition-colors font-medium"
            >
              Get in touch
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-8">
            <h4 className="text-[#3D3229] font-medium mb-6 text-sm uppercase tracking-[0.15em]">
              Navigation
            </h4>
            <nav className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#6B5D4D] hover:text-[#A67C52] transition-colors font-light"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-[#3D3229] font-medium mb-6 text-sm uppercase tracking-[0.15em]">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:majorasolutions@gmail.com"
                className="text-[#6B5D4D] hover:text-[#A67C52] transition-colors font-light"
              >
                majorasolutions@gmail.com
              </a>
              <a
                href="https://wa.me/5519992214152"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B5D4D] hover:text-[#A67C52] transition-colors font-light"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#E8DFD6] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#8B7355] text-sm font-light">
            &copy; {new Date().getFullYear()} Majora Solutions. All rights reserved.
          </p>

          <p className="text-[#8B7355] text-sm font-light">
            Premium Remote Operations
          </p>
        </div>
      </div>
    </footer>
  )
}
