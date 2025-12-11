'use client'

import { motion } from 'framer-motion'
import TeamMemberImage from './TeamMemberImage'

const teamMembers = [
  {
    name: 'Emir Hammani',
    role: 'CEO & Founder',
    image: '/assets/people/CEO.jpg',
  },
  {
    name: 'CTO',
    role: 'Chief Technology Officer',
    image: '/assets/people/CTO.jpg',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our Team
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Leadership team committed to delivering innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-white/5">
                <TeamMemberImage
                  src={member.image}
                  alt={member.name}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-white/60">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

