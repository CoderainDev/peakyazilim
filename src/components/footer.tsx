'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = {
    company: {
      title: 'Şirket',
      links: [
        { id: 'about', label: 'Hakkımızda', href: '#about' },
        { id: 'services', label: 'Hizmetlerimiz', href: '#services-content' },
        { id: 'why-us', label: 'Neden Biz?', href: '#why-us' },
        { id: 'contact', label: 'İletişim', href: '#contact' }
      ]
    },
    services: {
      title: 'Hizmetler',
      links: [
        { id: 'web', label: 'Web Geliştirme', href: '#services-content' },
        { id: 'mobile', label: 'Mobil Uygulama', href: '#services-content' },
        { id: 'ui-ux', label: 'UI/UX Tasarım', href: '#services-content' },
        { id: 'consulting', label: 'Danışmanlık', href: '#services-content' }
      ]
    },
    contact: {
      title: 'İletişim',
      info: [
        { id: 'email', label: 'info@peakyazilim.com', icon: '✉️' },
        { id: 'phone', label: '+90 555 123 4567', icon: '📞' },
        { id: 'address', label: 'İstanbul, Türkiye', icon: '📍' }
      ]
    }
  }

  return (
    <footer className="bg-dark/95 backdrop-blur-md border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Image
              src="/peakyazilim.png"
              alt="Peak Yazılım"
              width={150}
              height={40}
              className="brightness-0 invert"
            />
            <p className="text-gray-400 text-sm">
              Geleceğin teknolojilerini bugünden inşa ediyoruz. Yenilikçi çözümlerle işinizi ileriye taşıyoruz.
            </p>
          </motion.div>

          {/* Şirket Linkleri */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-white font-semibold">{footerSections.company.title}</h3>
            <ul className="space-y-2">
              {footerSections.company.links.map((link) => (
                <li key={`company-${link.id}`}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Hizmetler */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-white font-semibold">{footerSections.services.title}</h3>
            <ul className="space-y-2">
              {footerSections.services.links.map((link) => (
                <li key={`service-${link.id}`}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* İletişim Bilgileri */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-white font-semibold">{footerSections.contact.title}</h3>
            <ul className="space-y-2">
              {footerSections.contact.info.map((item) => (
                <li key={`contact-${item.id}`} className="text-gray-400 flex items-center space-x-2">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Alt Bilgi */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Peak Yazılım. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Kullanım Şartları
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}