import React from 'react'
import { motion } from 'framer-motion'
import { hero, brand } from '../data/siteContent'
import { fadeUp, staggerContainer } from '../hooks/animations'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(232,39,26,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232,39,26,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Red glow orb */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-brand-navy/40 rounded-full blur-[100px] pointer-events-none" />

      {/* Large decorative text */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20vw] leading-none text-white/[0.02] select-none pointer-events-none"
        aria-hidden="true"
      >
        AUTO
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-red/30 bg-brand-red/10 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse-slow" />
              <span className="font-heading text-brand-red text-sm tracking-widest uppercase font-semibold">
                {hero.badge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] mb-6"
            >
              <span className="block text-white">{hero.headline}</span>
              <span className="block text-gradient">{hero.headlineAccent}</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-body text-brand-gray text-lg md:text-xl leading-relaxed max-w-xl mb-10"
            >
              {hero.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <a
                href={hero.cta1.href}
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-red text-white font-body font-semibold text-base rounded-xl hover:bg-red-600 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-red/40 active:translate-y-0 active:shadow-none"
              >
                🔧 {hero.cta1.label}
              </a>
              <a
                href={hero.cta2.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/40 text-[#25D366] font-body font-semibold text-base rounded-xl hover:bg-[#25D366]/20 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#25D366]/20 active:translate-y-0"
              >
                💬 {hero.cta2.label}
              </a>
              <a
                href={`tel:${brand.phone}`}
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white font-body font-semibold text-base rounded-xl hover:bg-white/5 transition-all duration-200 hover:-translate-y-1 active:translate-y-0"
              >
                📞 {brand.phone}
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]"
            >
              {hero.stats.map((stat, i) => (
                <div key={i} className="bg-brand-dark/70 px-6 py-5 text-center">
                  <div className="font-display text-3xl sm:text-4xl text-gradient leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="font-body text-xs text-brand-gray uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-brand-gray text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-brand-red to-transparent"
        />
      </motion.div>
    </section>
  )
}
