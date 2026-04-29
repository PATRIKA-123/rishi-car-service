import React from 'react'
import { motion } from 'framer-motion'
import { services } from '../data/siteContent'
import ServiceCard from '../components/ServiceCard'
import { fadeUp, staggerContainer } from '../hooks/animations'

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(232,39,26,0.8) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-heading text-brand-red text-sm tracking-[0.3em] uppercase font-semibold mb-3">
            What We Do
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-4 leading-tight">
            Our Services
          </h2>
          <p className="font-body text-brand-gray text-lg max-w-xl">
            From routine maintenance to major repairs — we've got every aspect of your car covered.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="font-body text-brand-gray mb-4">Don't see what you need?</p>
          <a
            href="https://wa.me/917978435746?text=Hi%20Rishi%20Car%20Service%2C%20I%20need%20help%20with%20my%20car."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#25D366]/30 bg-[#25D366]/5 text-[#25D366] font-body font-medium rounded-xl hover:bg-[#25D366]/15 transition-all duration-200 hover:-translate-y-0.5"
          >
            💬 Ask on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
