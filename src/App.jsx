import React from 'react'
import { ToastProvider } from './context/ToastContext'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import About from './sections/About'
import Testimonials from './sections/Testimonials'
import FAQAccordion from './components/FAQAccordion'
import ContactForm from './components/ContactForm'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-brand-dark">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <About />
          <Testimonials />
          <FAQAccordion />
          <ContactForm />
          <CTA />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </ToastProvider>
  )
}
