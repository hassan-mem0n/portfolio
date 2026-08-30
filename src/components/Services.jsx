import { motion } from 'framer-motion'
import { Gauge, Brain, Database, Code2 } from 'lucide-react'
import { services } from '../data'

const icons = { gauge: Gauge, brain: Brain, database: Database, code2: Code2 }

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-label mb-12 text-center"
      >
        Services
      </motion.h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => {
          const Icon = icons[s.icon]
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 shadow-card"
            >
              <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${s.bg}`}>
                <Icon size={20} className={s.color} />
              </div>
              <h3 className="mb-2 font-display text-sm font-semibold text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed text-white/55">{s.body}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
