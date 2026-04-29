import React from 'react'
import { motion } from 'framer-motion'
import { brand } from '../data/siteContent'

export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #1B2A5C 0%, #E8271A 40%, #1B2A5C 70%, #0D1020 100%)',
          backgroundSize: '300% 300%',
        }}
      />
      {/* Pulse rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.4], opacity: [0.15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
          className="w-96 h-96 rounded-full bg-brand-red"
        />
        <motion.div
          animate={{ scale: [1, 1.6], opacity: [0.1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 0.8 }}
          className="absolute w-96 h-96 rounded-full bg-white"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-white mb-4 leading-tight">
            Ready to Book?
          </h2>
          <p className="font-body text-white/70 text-lg mb-10">
            Call us, WhatsApp us, or walk in — we're here for your car.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${brand.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-dark font-body font-bold text-base rounded-xl hover:bg-gray-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl active:translate-y-0"
            >
              📞 {brand.phone}
            </a>
            <a
              href={`https://wa.me/${brand.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-body font-bold text-base rounded-xl hover:bg-green-500 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#25D366]/40 active:translate-y-0"
            >
              💬 WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
