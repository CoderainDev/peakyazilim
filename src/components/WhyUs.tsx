'use client'
import { motion } from 'framer-motion'
import { FaRocket, FaUserFriends, FaLightbulb, FaCogs } from 'react-icons/fa'

const reasons = [
  {
    icon: FaRocket,
    title: 'Hızlı Geliştirme',
    description: 'Agile metodolojiler ve modern araçlarla projenizi hızla hayata geçiriyoruz.'
  },
  {
    icon: FaUserFriends,
    title: 'Uzman Ekip',
    description: 'Deneyimli ve uzman ekibimizle en karmaşık projeleri başarıyla tamamlıyoruz.'
  },
  {
    icon: FaLightbulb,
    title: 'İnovatif Çözümler',
    description: 'En son teknolojileri kullanarak yenilikçi çözümler üretiyoruz.'
  },
  {
    icon: FaCogs,
    title: 'Ölçeklenebilirlik',
    description: 'Projelerinizi büyümeye hazır ve ölçeklenebilir şekilde geliştiriyoruz.'
  }
]

const stats = [
  { value: '100+', label: 'Başarılı Proje' },
  { value: '50+', label: 'Mutlu Müşteri' },
  { value: '10+', label: 'Uzman Geliştirici' },
  { value: '24/7', label: 'Destek' }
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 cyber-grid matrix-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 to-dark/20 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Neden Biz?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Teknoloji odaklı yaklaşımımız ve uzman ekibimizle fark yaratıyoruz
          </p>
        </motion.div>

        {/* İstatistikler */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center glass-panel p-6 rounded-lg"
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Nedenler */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 rounded-lg text-center hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <reason.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
              <p className="text-gray-400">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="#contact" className="btn-cyber inline-flex">
            Projenizi Başlatın
          </a>
        </motion.div>
      </div>
    </section>
  )
}