import React from 'react'
import { motion } from 'framer-motion'
import { testimonials } from '../data/siteContent'
import { staggerContainer, cardVariant, fadeUp } from '../hooks/animations'

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-sm">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-navy/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-heading text-brand-red text-sm tracking-[0.3em] uppercase font-semibold mb-3">
            Customer Love
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-4">
            What People Say
          </h2>
          <p className="font-body text-brand-gray text-lg max-w-xl">
            Real stories from real customers across Odisha.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.article
              key={t.id}
              variants={cardVariant}
              whileHover={{ y: -4 }}
              className="bg-brand-navy/20 border border-white/[0.06] rounded-2xl p-6 flex flex-col gap-4 hover:border-white/10 transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="font-display text-6xl text-brand-red/20 leading-none -mb-4 select-none">
                "
              </div>

              <p className="font-body text-white/80 text-base leading-relaxed">{t.text}</p>

              <div className="mt-auto flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center font-display text-brand-red text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-body text-white text-sm font-semibold">{t.name}</div>
                  <div className="font-body text-brand-gray text-xs">{t.location} · {t.car}</div>
                </div>
                <div className="ml-auto">
                  <StarRating count={t.rating} />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Google review nudge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="font-body text-brand-gray text-sm">
            Happy with our service?{' '}
            <a
              href="https://g.page/r/review"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-red hover:text-red-400 underline underline-offset-2 transition-colors"
            >
              Leave us a Google review ↗
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
