'use client'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section className="relative min-h-screen cyber-grid matrix-bg">
      {/* Matrix benzeri arka plan efekti */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 to-dark/20 backdrop-blur-sm" />

      <div className="container mx-auto px-4 relative">
        <div className="min-h-screen flex items-center">
          <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Sol taraf - Metin içeriği */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-primary font-mono"
                >
                  &lt;code&gt; innovate. create. deliver &lt;/code&gt;
                </motion.div>
                
                <h1 className="text-4xl lg:text-6xl font-bold">
                  <span className="text-gradient">Geleceğin<br></br></span>{' '}
                  <TypeAnimation
                    sequence={[
                      'Yazılımları',
                      2000,
                      'Teknolojileri',
                      2000,
                      'Çözümleri',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-white"
                  />
                </h1>
                
                <p className="text-lg text-gray-400">
                  Peak Yazılım ile dijital dönüşümünüzü gerçekleştirin ve geleceğe adım atın.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a href="#contact" className="btn-cyber">
                  Projenizi Başlatın
                </a>
                <a href="#services-content" className="btn-cyber">
                  Keşfedin
                </a>
              </motion.div>

              {/* Teknoloji stack'i */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex gap-6 justify-center lg:justify-start items-center text-gray-500"
              >
                <span className="text-sm">Tech Stack:</span>
                <div className="flex gap-4">
                  {['React', 'Node.js', 'Python', 'AWS', 'AI'].map((tech, i) => (
                    <span
                      key={tech}
                      className="font-mono text-primary/80"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Sağ taraf - Code Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="hidden lg:block"
            >
              <div className="code-window animate-float">
                <pre className="text-sm font-mono">
                  <code className="text-primary">
                    {`class PeakYazilim {
  constructor() {
    this.innovation = true;
    this.technologies = [
      "AI", "Cloud",
      "Mobile", "Web"
    ];
  }

  createSolution(problem) {
    return new Solution({
      innovative: true,
      scalable: true,
      efficient: true
    });
  }
}`}
                  </code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary p-2 animate-glow">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce mx-auto" />
        </div>
      </motion.div>
    </section>
  )
}