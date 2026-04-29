import React from 'react'
import { motion } from 'framer-motion'
import { about, brand } from '../data/siteContent'
import { fadeUp, staggerContainer, cardVariant } from '../hooks/animations'

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0d1a] relative overflow-hidden">
      {/* Navy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="font-heading text-brand-red text-sm tracking-[0.3em] uppercase font-semibold mb-3"
            >
              Our Story
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-5xl md:text-6xl text-white mb-6 leading-tight"
            >
              {about.heading}
              <br />
              <span className="text-gradient">{about.headingAccent}</span>
            </motion.h2>

            {about.body.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                className="font-body text-brand-gray text-base leading-relaxed mb-4"
              >
                {para}
              </motion.p>
            ))}

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white font-body font-semibold rounded-xl hover:bg-red-600 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-red/40"
              >
                🔧 Book a Service
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Highlights + Visual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {/* Big visual card */}
            <motion.div
              variants={cardVariant}
              className="relative bg-brand-navy/30 border border-white/[0.06] rounded-3xl p-8 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />
              <div className="font-display text-7xl text-gradient leading-none mb-2">
                {brand.established}
              </div>
              <div className="font-body text-brand-gray text-sm uppercase tracking-widest mb-4">
                Established in Odisha
              </div>
              <div className="w-full h-px bg-white/[0.08] mb-6" />
              <div className="grid grid-cols-2 gap-4">
                {about.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-2xl">{h.icon}</span>
                    <span className="font-body text-white text-sm font-medium">{h.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Location card */}
            <motion.a
              variants={cardVariant}
              href={brand.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 bg-brand-dark border border-white/[0.06] rounded-2xl p-5 hover:border-brand-red/30 transition-all duration-200 group"
            >
              <div className="w-10 h-10 bg-brand-red/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-brand-red/20 transition-colors">
                📍
              </div>
              <div>
                <div className="font-heading text-white font-semibold text-sm mb-0.5">Our Location</div>
                <div className="font-body text-brand-gray text-xs leading-relaxed">
                  Near Odi Art Museum Centre, Main Road Badakul
                  <br />
                  Balugaon, Khordha, Odisha – 752030
                </div>
              </div>
              <span className="ml-auto text-brand-gray group-hover:text-brand-red transition-colors">→</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
