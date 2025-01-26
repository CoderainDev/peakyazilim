'use client'
import { motion } from 'framer-motion'
import { FaCode, FaMobile, FaCloud, FaRobot, FaShieldAlt, FaChartLine } from 'react-icons/fa'

interface Service {
  icon: React.ElementType
  title: string
  description: string
  features: string[]
  id: string
}

const services: Service[] = [
    {
      icon: FaCode,
      title: 'Web Geliştirme',
      description: 'Modern ve responsive web uygulamaları geliştiriyoruz.',
      features: [
        'Full-Stack Çözümler',
        'E-ticaret Sistemleri',
        'Admin Panelleri'
      ],
      id: 'service-web-dev'  // ID'yi değiştirdik
    },
    {
      icon: FaMobile,
      title: 'Mobil Geliştirme',
      description: 'Kullanıcı dostu mobil uygulamalar geliştiriyoruz.',
      features: [
        'React Native',
        'Flutter',
        'PWA'
      ],
      id: 'service-mobile-dev'  // ID'yi değiştirdik
    },
    {
      icon: FaCloud,
      title: 'Cloud Çözümleri',
      description: 'Ölçeklenebilir cloud altyapıları kuruyoruz.',
      features: [
        'Serverless',
        'Mikroservisler',
        'DevOps'
      ],
      id: 'service-cloud'  // ID'yi değiştirdik
    },
    {
        icon: FaRobot,
        title: 'Yapay Zeka & ML',
        description: 'Akıllı sistemler ve ML modelleri geliştiriyoruz.',
        features: [
          'Tahmine Dayalı Modeller',
          'NLP',
          'Computer Vision'
        ],
        id: 'service-ai-ml'  // Güncellendi
    },
    {
        icon: FaShieldAlt,
        title: 'Siber Güvenlik',
        description: 'Güvenli sistemler ve altyapılar oluşturuyoruz.',
        features: [
          'Sızma Testleri',
          'Güvenlik Danışmanlığı',
          'SSL/TLS'
        ],
        id: 'service-security'  // Güncellendi
    },
    {
        icon: FaChartLine,
        title: 'Dijital Dönüşüm',
        description: 'İşletmenizi dijital dünyaya taşıyoruz.',
        features: [
          'CRM & ERP',
          'İş Analizi',
          'Dijital Strateji'
        ],
        id: 'service-digital'  // Güncellendi
    }
]

export default function Services() {
  return (
    <section id="services-content" className="relative py-20 cyber-grid matrix-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 to-dark/20 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Hizmetlerimiz</span>
          </h2>
          <p className="text-gray-400">Size en uygun çözümü sunuyoruz</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
            <motion.div
            key={`service-item-${service.id}`} // Key'i daha spesifik yapalım
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-6 rounded-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <service.icon size={24} className="group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <ul className="space-y-2">
              {service.features.map((feature) => (
                <li 
                    key={`feature-${service.id}-${feature}`}
                    className="flex items-center gap-2 text-gray-300"
                >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:animate-pulse" />
                    {feature}
                </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}