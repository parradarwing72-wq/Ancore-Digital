'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Website Development',
    description: 'Crafting responsive and user-friendly websites tailored to meet the unique needs of our clients. From simple landing pages to complex web applications.',
    icon: '🌐',
  },
  {
    title: 'Mobile App Development',
    description: 'Designing and developing intuitive Android and iOS applications that enhance user engagement and satisfaction. Native and cross-platform solutions.',
    icon: '📱',
  },
  {
    title: 'AI & ML Development',
    description: 'Implementing advanced artificial intelligence and machine learning solutions to drive business intelligence, automation, and intelligent decision-making.',
    icon: '🤖',
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually stunning user interfaces and experiences that engage users and drive conversions. User research, wireframing, and prototyping.',
    icon: '🎨',
  },
  {
    title: 'Blockchain Development',
    description: 'Building secure and transparent blockchain solutions including smart contracts, DeFi platforms, NFTs, and decentralized applications to revolutionize business operations.',
    icon: '⛓️',
  },
  {
    title: 'DevOps',
    description: 'Streamlining software development and deployment processes with CI/CD pipelines, containerization, cloud infrastructure, and automated monitoring solutions.',
    icon: '🚀',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:shadow-xl"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

