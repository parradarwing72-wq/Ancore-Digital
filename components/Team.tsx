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
    name: 'Developer 2',
    role: 'Senior Full-Stack Developer',
    image: '/assets/people/developer1.jpg',
  },
  {
    name: 'Developer 3',
    role: 'Mobile App Developer',
    image: '/assets/people/developer2.jpg',
  },
  {
    name: 'Developer 4',
    role: 'AI/ML Engineer',
    image: '/assets/people/developer3.jpg',
  },
  {
    name: 'Developer 5',
    role: 'Blockchain Developer',
    image: '/assets/people/developer4.jpg',
  },
  {
    name: 'Developer 6',
    role: 'UI/UX Designer & Developer',
    image: '/assets/people/developer5.jpg',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">
            Our Team
          </h2>
          <p className="text-xl text-black/60 max-w-2xl mx-auto">
            Six dedicated developers committed to delivering innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-black/5">
                <TeamMemberImage
                  src={member.image}
                  alt={member.name}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-1">
                {member.name}
              </h3>
              <p className="text-black/60">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

