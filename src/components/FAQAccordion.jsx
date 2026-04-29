import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs } from '../data/siteContent'
import { fadeUp } from '../hooks/animations'

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border border-white/[0.06] rounded-xl overflow-hidden"
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.03] transition-colors duration-200"
      >
        <span className="font-heading text-white font-semibold text-base tracking-wide pr-4">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red text-xs"
        >
          ▼
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 font-body text-brand-gray text-sm leading-relaxed border-t border-white/[0.04] pt-4">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-24 bg-[#0a0d1a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="font-heading text-brand-red text-sm tracking-[0.3em] uppercase font-semibold mb-3">
            FAQ
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-4">
            Common Questions
          </h2>
          <p className="font-body text-brand-gray text-lg">
            Everything you need to know before booking with us.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
