import React from 'react'
import { brand, services } from '../data/siteContent'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#060810] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-brand-red rounded-lg flex items-center justify-center font-display text-white text-lg">
                R
              </div>
              <div>
                <div className="font-display text-white text-xl tracking-wide">RISHI</div>
                <div className="font-heading text-brand-red text-[10px] tracking-[0.2em] font-semibold uppercase -mt-0.5">
                  Car Service
                </div>
              </div>
            </div>
            <p className="font-body text-brand-gray text-sm leading-relaxed max-w-xs mb-4">
              Professional car servicing & repairs in Badakul, Odisha. Trusted by 2000+ customers since {brand.established}.
            </p>
            <p className="font-body text-xs text-brand-gray/60">
              📍 Near Odi Art Museum Centre, Main Road Badakul,<br />
              Balugaon, Khordha, Odisha – 752030
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-white text-sm uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-brand-gray text-sm hover:text-brand-red transition-colors duration-200 group inline-flex items-center gap-1"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-red text-xs">→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-white text-sm uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${brand.phone}`} className="font-body text-brand-gray text-sm hover:text-brand-red transition-colors flex items-center gap-2">
                  📞 {brand.phone}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noopener noreferrer" className="font-body text-brand-gray text-sm hover:text-[#25D366] transition-colors flex items-center gap-2">
                  💬 WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${brand.email}`} className="font-body text-brand-gray text-sm hover:text-brand-red transition-colors flex items-center gap-2">
                  ✉️ {brand.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.05] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-brand-gray/50 text-xs">
            © {new Date().getFullYear()} Rishi Car Service. All rights reserved.
          </p>
          <p className="font-body text-brand-gray/30 text-xs">
            Made with ❤️ in Odisha
          </p>
        </div>
      </div>
    </footer>
  )
}
