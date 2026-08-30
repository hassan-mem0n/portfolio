import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Database, LayoutTemplate } from 'lucide-react'
import { skillGroups } from '../data'

gsap.registerPlugin(ScrollTrigger)

const icons = { database: Database, layout: LayoutTemplate }

function SkillBar({ name, value, delay }) {
  const barRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        barRef.current,
        { width: '0%' },
        {
          width: `${value}%`,
          duration: 1.2,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: barRef.current,
            start: 'top 90%',
            once: true,
          },
        }
      )
    })
    return () => ctx.revert()
  }, [value, delay])

  return (
    <div className="mb-5 last:mb-0">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-white/80">{name}</span>
        <span className="text-white/50">{value}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <div ref={barRef} className="h-full rounded-full bg-gradient-to-r from-violet-500 to-accent-blue" />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-10">
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, gi) => {
          const Icon = icons[group.icon]
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              className="glass-card p-7 shadow-card"
            >
              <div className="mb-6 flex items-center gap-2 text-white/90">
                <Icon size={18} className="text-violet-400" />
                <h3 className="font-display text-base font-medium">{group.title}</h3>
              </div>
              {group.skills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={i * 0.1} />
              ))}
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
