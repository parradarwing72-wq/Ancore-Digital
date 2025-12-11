'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    category: 'AI & ML',
    title: 'Chatbot with Natural Language Processing',
    description: 'Advanced chatbot system powered by NLP for intelligent conversation and customer support automation.',
    image: '/assets/projects/Procesamiento-de-lenguaje-natural-chatbots.jpg',
    tags: ['AI', 'NLP', 'Machine Learning'],
  },
  {
    category: 'AI & ML',
    title: 'Price Prediction Model',
    description: 'Machine learning models for predicting stock prices and real estate values with high accuracy.',
    image: '/assets/projects/Silver-Price-Prediction-01.webp',
    tags: ['AI', 'ML', 'Prediction'],
  },
  {
    category: 'Website Development',
    title: 'Restaurant Management System',
    description: 'Comprehensive web-based solution for managing restaurant operations, orders, and inventory.',
    image: '/assets/projects/restaurant-management-system.jpg',
    tags: ['Web', 'Management', 'System'],
  },
  {
    category: 'Website Development',
    title: 'Healthcare Appointment Booking System',
    description: 'Secure and user-friendly platform for scheduling and managing healthcare appointments online.',
    image: '/assets/projects/healthcare-booking.jpg',
    tags: ['Web', 'Healthcare', 'Booking'],
  },
  {
    category: 'Mobile Development',
    title: 'Weather App with Location Services',
    description: 'Cross-platform mobile application providing real-time weather forecasts using GPS location services.',
    image: '/assets/projects/weather-forecast.jpg',
    tags: ['Mobile', 'iOS', 'Android'],
  },
  {
    category: 'Blockchain',
    title: 'Crowdfunding Platform (DeFi)',
    description: 'Decentralized finance platform enabling secure and transparent crowdfunding through blockchain technology.',
    image: '/assets/projects/crowdfunding.png',
    tags: ['Blockchain', 'DeFi', 'Crowdfunding'],
  },
]

export default function Projects() {
  const categories = ['All', 'AI & ML', 'Website Development', 'Mobile Development', 'Blockchain']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our Projects
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
            Showcasing innovative solutions across various domains
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-white text-black'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/10 rounded text-xs text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

