import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send, Phone } from 'lucide-react'
import { socials } from '../data'

const icons = { github: Github, linkedin: Linkedin, mail: Mail, send: Send, phone: Phone }

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-16 pt-24 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-label mb-3"
      >
        Contact me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mx-auto mb-10 max-w-md text-sm text-white/50"
      >
        Have a project in mind or just want to say hi? Reach out through any of these.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex items-center justify-center gap-4"
      >
        {socials.map(({ icon, href }) => {
          const Icon = icons[icon]
          return (
            <motion.a
              key={icon}
              href={href}
              whileHover={{ y: -4, scale: 1.05 }}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-violet-400 hover:text-violet-300"
              aria-label={icon}
            >
              <Icon size={18} />
            </motion.a>
          )
        })}
      </motion.div>

      <p className="mt-16 text-xs text-white/30">
        © {new Date().getFullYear()} Mr.Hassan — Hassan. All rights reserved.
      </p>
    </section>
  )
}
