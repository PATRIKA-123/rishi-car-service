import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { brand } from '../data/siteContent'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      // Active section detection
      const sections = navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-xl shadow-black/40' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group" aria-label="Rishi Car Service Home">
          <div className="w-9 h-9 bg-brand-red rounded-lg flex items-center justify-center font-display text-white text-lg leading-none">
            R
          </div>
          <div className="leading-none">
            <div className="font-display text-white text-xl tracking-wide">RISHI</div>
            <div className="font-heading text-brand-red text-[10px] tracking-[0.2em] font-semibold uppercase -mt-0.5">
              Car Service
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative px-4 py-2 font-body text-sm font-medium transition-colors duration-200 group ${
                  activeSection === link.href.slice(1)
                    ? 'text-brand-red'
                    : 'text-brand-gray hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-px bg-brand-red transition-transform duration-200 origin-left ${
                    activeSection === link.href.slice(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`https://wa.me/${brand.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] rounded-lg font-body text-sm font-medium hover:bg-[#25D366]/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#25D366]/20 active:translate-y-0"
          >
            <span>💬</span> WhatsApp
          </a>
          <a
            href="tel:7978435746"
            className="flex items-center gap-2 px-4 py-2 bg-brand-red text-white rounded-lg font-body text-sm font-medium hover:bg-red-600 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-red/40 active:translate-y-0"
          >
            <span>📞</span> Call Now
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white origin-center"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 font-body text-base text-brand-gray hover:text-white hover:bg-white/5 rounded-lg transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-2 mt-2">
                <a
                  href={`https://wa.me/${brand.whatsapp}`}
                  className="flex-1 text-center py-3 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] rounded-lg font-body text-sm font-medium"
                >
                  💬 WhatsApp
                </a>
                <a
                  href="tel:7978435746"
                  className="flex-1 text-center py-3 bg-brand-red text-white rounded-lg font-body text-sm font-medium"
                >
                  📞 Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
