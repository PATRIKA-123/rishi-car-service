import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { contact, brand } from '../data/siteContent'
import { useToast } from '../context/ToastContext'
import { fadeUp, staggerContainer, cardVariant } from '../hooks/animations'

const SERVICES = [
  'General Service', 'Tyre & Wheel', 'AC Repair', 'Battery & Electrical',
  'Denting & Painting', 'Car Detailing', 'Brake Service', 'Insurance Repair', 'Other',
]

function FloatingInput({ label, type = 'text', name, value, onChange, error, required }) {
  const [focused, setFocused] = useState(false)
  const hasValue = value && value.length > 0

  return (
    <div className="relative">
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        className={`w-full bg-brand-dark border rounded-xl px-4 pt-6 pb-2 font-body text-white text-sm placeholder-transparent transition-all duration-200 outline-none peer ${
          error
            ? 'border-red-500/50 focus:border-red-500'
            : focused
            ? 'border-brand-red/60 shadow-sm shadow-brand-red/10'
            : 'border-white/[0.1] hover:border-white/20'
        }`}
        placeholder={label}
      />
      <label
        htmlFor={name}
        className={`absolute left-4 font-body text-sm transition-all duration-200 pointer-events-none ${
          focused || hasValue
            ? 'top-2 text-xs ' + (error ? 'text-red-400' : focused ? 'text-brand-red' : 'text-brand-gray')
            : 'top-1/2 -translate-y-1/2 text-brand-gray'
        }`}
      >
        {label}{required && ' *'}
      </label>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-1 text-xs text-red-400 font-body"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ContactForm() {
  const { addToast } = useToast()
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) e.phone = 'Enter a valid 10-digit Indian mobile number'
    if (!form.service) e.service = 'Please select a service'
    return e
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setLoading(true)
    // Simulate API call
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
    addToast('Message sent! We\'ll call you shortly. 🎉', 'success')
    // Auto-reset after 5s
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', phone: '', service: '', message: '' })
    }, 5000)
  }

  return (
    <section id="contact" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-navy/20 rounded-full blur-[120px] pointer-events-none" />

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
            Get In Touch
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-4">
            Book a Service
          </h2>
          <p className="font-body text-brand-gray text-lg max-w-xl">
            Fill in the form or reach us directly — we respond within minutes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {[
              { icon: '📞', label: 'Phone', value: brand.phone, href: `tel:${brand.phone}` },
              { icon: '💬', label: 'WhatsApp', value: '+91 ' + brand.phone, href: `https://wa.me/${brand.whatsapp}` },
              { icon: '✉️', label: 'Email', value: brand.email, href: `mailto:${brand.email}` },
              { icon: '📍', label: 'Address', value: contact.address, href: brand.mapLink },
            ].map((item, i) => (
              <motion.a
                key={i}
                variants={cardVariant}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-start gap-4 p-5 bg-brand-navy/20 border border-white/[0.06] rounded-2xl hover:border-white/10 hover:bg-brand-navy/30 transition-all duration-200 group"
              >
                <span className="text-2xl w-10 h-10 bg-brand-dark rounded-xl flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </span>
                <div>
                  <div className="font-heading text-brand-gray text-xs uppercase tracking-widest mb-1">
                    {item.label}
                  </div>
                  <div className="font-body text-white text-sm font-medium group-hover:text-brand-red transition-colors whitespace-pre-line">
                    {item.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Hours */}
            <motion.div
              variants={cardVariant}
              className="p-5 bg-brand-navy/20 border border-white/[0.06] rounded-2xl"
            >
              <div className="font-heading text-brand-gray text-xs uppercase tracking-widest mb-3">
                Business Hours
              </div>
              {contact.hours.map((h, i) => (
                <div key={i} className="flex justify-between font-body text-sm py-1.5 border-b border-white/[0.04] last:border-0">
                  <span className="text-white">{h.day}</span>
                  <span className="text-brand-red font-medium">{h.time}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center p-12 bg-brand-navy/20 border border-green-500/20 rounded-2xl"
                >
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="font-display text-3xl text-white mb-2">Request Received!</h3>
                  <p className="font-body text-brand-gray">
                    We'll call you at <span className="text-white font-medium">{form.phone}</span> shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4 bg-brand-navy/10 border border-white/[0.06] rounded-2xl p-6"
                  noValidate
                >
                  <FloatingInput
                    label="Full Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    error={errors.name}
                    required
                  />
                  <FloatingInput
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    required
                  />

                  {/* Service select */}
                  <div className="relative">
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className={`w-full bg-brand-dark border rounded-xl px-4 py-4 font-body text-sm transition-all duration-200 outline-none appearance-none ${
                        form.service ? 'text-white' : 'text-brand-gray'
                      } ${
                        errors.service
                          ? 'border-red-500/50'
                          : 'border-white/[0.1] hover:border-white/20 focus:border-brand-red/60'
                      }`}
                    >
                      <option value="">Select Service *</option>
                      {SERVICES.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray pointer-events-none">
                      ▾
                    </span>
                    {errors.service && (
                      <p className="mt-1 text-xs text-red-400 font-body">{errors.service}</p>
                    )}
                  </div>

                  {/* Message textarea */}
                  <div className="relative">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Describe your car issue (optional)"
                      className="w-full bg-brand-dark border border-white/[0.1] hover:border-white/20 focus:border-brand-red/60 rounded-xl px-4 py-3 font-body text-white text-sm placeholder-brand-gray transition-all duration-200 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-brand-red text-white font-body font-semibold rounded-xl hover:bg-red-600 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-red/40 active:translate-y-0 disabled:opacity-60 disabled:pointer-events-none"
                  >
                    {loading ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      '🔧 Send Request'
                    )}
                  </button>

                  <p className="text-center font-body text-brand-gray text-xs">
                    Or{' '}
                    <a
                      href={`https://wa.me/${brand.whatsapp}?text=Hi%20Rishi%20Car%20Service%2C%20I'd%20like%20to%20book%20a%20service.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] hover:underline"
                    >
                      message us on WhatsApp
                    </a>{' '}
                    for instant response.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
