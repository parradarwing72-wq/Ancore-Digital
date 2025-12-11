'use client'

import { motion } from 'framer-motion'

const technologies = [
  {
    name: 'Blockchain',
    description: 'Developing secure and transparent blockchain solutions to revolutionize business operations. Smart contracts, DeFi, and NFT platforms.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Artificial Intelligence',
    description: 'Leveraging AI to create intelligent systems that learn and adapt to evolving business needs. Machine learning models, neural networks, and automation.',
    gradient: 'from-blue-500 to-cyan-500',
  },
]

export default function Technologies() {
  return (
    <section id="technologies" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Cutting-Edge Technologies
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Expertise in the most advanced technologies shaping the future
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="relative p-12 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">{tech.name}</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

