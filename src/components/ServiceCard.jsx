import React from 'react'
import { motion } from 'framer-motion'
import { cardVariant } from '../hooks/animations'

export default function ServiceCard({ service }) {
  return (
    <motion.article
      variants={cardVariant}
      whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      className="group relative bg-brand-dark border border-white/[0.06] rounded-2xl p-6 cursor-default overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:shadow-brand-red/10 hover:border-brand-red/20"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red/0 to-brand-red/0 group-hover:from-brand-red/5 group-hover:to-brand-navy/10 transition-all duration-500 rounded-2xl" />

      <div className="relative z-10">
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="font-heading text-xl font-semibold text-white mb-2 tracking-wide">
          {service.title}
        </h3>
        <p className="font-body text-brand-gray text-sm leading-relaxed mb-4">
          {service.description}
        </p>
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-red/10 border border-brand-red/20 rounded-lg">
          <span className="font-heading text-brand-red text-sm font-semibold tracking-wide">
            {service.price}
          </span>
        </div>
      </div>
    </motion.article>
  )
}
