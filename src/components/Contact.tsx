'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Contact() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form data:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  if (!mounted) {
    return null // SSR sırasında formu render etme
  }

  return (
    <section id="contact" className="relative py-20 cyber-grid matrix-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 to-dark/20 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">İletişime Geçin</span>
          </h2>
          <p className="text-gray-400">Projenizi birlikte hayata geçirelim</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="code-window">
              <pre className="text-sm font-mono">
                <code className="text-primary">
                  {`const ContactInfo = {
  email: "info@peakyazilim.com",
  phone: "+90 555 123 4567",
  address: "İstanbul, Türkiye",
  availability: "7/24"
}`}
                </code>
              </pre>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form 
              onSubmit={handleSubmit} 
              className="space-y-6 contact-form"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  İsim
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-input"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-input"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="contact-input resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="btn-cyber w-full"
              >
                Gönder
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}