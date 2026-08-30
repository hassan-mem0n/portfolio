import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GraduationCap, Code2, Server, Sparkles, Briefcase } from 'lucide-react'
import { resume } from '../data'
import ResumeDownloded from './ResumeDownloded'
gsap.registerPlugin(ScrollTrigger)

const icons = {
  graduation: GraduationCap,
  code: Code2,
  server: Server,
  sparkle: Sparkles,
  briefcase: Briefcase,
}

export default function Resume() {
  const lineRef = useRef(null)
  const wrapRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          transformOrigin: 'top',
          scrollTrigger: {
            trigger: wrapRef.current,
            start: 'top 70%',
            end: 'bottom 80%',
            scrub: 0.6,
          },
        }
      )
    }, wrapRef)
    return () => ctx.revert()
  }, [])
 

  return (
    <section id="resume" className="mx-auto max-w-4xl px-6 py-24">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 my-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label text-center"
        >
          Resume
        </motion.h2>

        <ResumeDownloded/>

      </div>
      <div ref={wrapRef} className="relative pl-14">
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-white/10" />
        <div
          ref={lineRef}
          className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-400 to-accent-blue"
        />

        {resume.map((step, i) => {
          const Icon = icons[step.icon]
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="relative mb-12 last:mb-0"
            >
              <span
                className={`absolute -left-14 flex h-10 w-10 items-center justify-center rounded-full border ${step.active
                  ? 'border-violet-400 bg-violet-500/20 text-violet-300'
                  : 'border-white/10 bg-ink-850 text-white/50'
                  }`}
              >
                <Icon size={16} />
              </span>
              <h3 className="mb-2 font-display text-base font-medium text-white">{step.title}</h3>
              <p className="max-w-xl text-sm leading-relaxed text-white/55">{step.body}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
