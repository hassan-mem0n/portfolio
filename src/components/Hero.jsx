import profileImage from "../assets/profileImage.png"
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { Cake, Fingerprint, GraduationCap, MapPin, Briefcase, Braces } from 'lucide-react'
import { profile } from '../data'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const blobRef = useRef(null)
  const badgeARef = useRef(null)
  const imageRef = useRef(null)
  const badgeBRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(blobRef.current, {
        rotate: 8,
        duration: 6,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })
      gsap.to(badgeARef.current, {
        y: -14,
        duration: 2.4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })
      gsap.to(badgeBRef.current, {
        y: 14,
        duration: 2.8,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 0.3,
      })
       gsap.to(imageRef.current, {
        y: -14,
        duration: 2.4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })
    })
    return () => ctx.revert()
  }, [])

  const meta = [
    { icon: Cake, label: 'Birthday', value: profile.birthday },
    { icon: Fingerprint, label: 'Age', value: profile.age },
    { icon: GraduationCap, label: 'Degree', value: profile.degree },
    { icon: MapPin, label: 'City', value: profile.city },
    { icon: Briefcase, label: 'Freelancer', value: profile.freelance },
  ]

  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-20 md:pt-48">
      <div className="absolute inset-0 -z-10 bg-radial-glow" />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="mb-4 flex items-center gap-2 text-sm text-white/60">
            <span className="eyebrow-dot" /> Available for freelance work
          </motion.p>

          <motion.h1 variants={item} className=" font-display text-3xl font-semibold leading-tight md:text-4xl">
            {profile.name} <span className="text-white/40">|</span>{' '}
            <span className="bg-gradient-to-r from-violet-400 to-accent-blue bg-clip-text text-transparent">
              {profile.role}
            </span>
          </motion.h1>

          <motion.ul variants={item} className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
            {meta.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon size={15} className="text-violet-400" />
                <span className="text-white/50">{label}:</span> {value}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-violet-500 px-7 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:-translate-y-0.5 hover:bg-violet-400"
            >
              Contact me
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-white/15 px-7 py-3 text-sm font-medium text-white/80 transition-colors hover:border-white/30 hover:text-white"
            >
              View my work
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto flex h-80 w-80 items-center justify-center md:h-96 md:w-96"
        >
          <div
            ref={blobRef}
            className="  absolute inset-0 rounded-[45%_55%_60%_40%/55%_45%_55%_45%] border border-white/10 bg-gradient-to-br from-violet-500/20 via-transparent to-accent-blue/10"
          />
          <div
        
           className="relative flex h-64 w-64 items-center justify-center rounded-[45%_55%_60%_40%/55%_45%_55%_45%] bg-gradient-to-br from-ink-700 via-ink-800 to-ink-950 shadow-card md:h-72 md:w-72">
            <img
              className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover mx-auto"
              ref={imageRef}
              src={profileImage}
              alt="Profile"
            />
          </div>

          <div
            ref={badgeARef}
            className="bg absolute -right-2 top-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-ink-850 shadow-card"
          >
            <span className="font-display text-sm font-semibold text-accent-pink">JS</span>
          </div>
          <div
            ref={badgeBRef}
            className="absolute -left-2 bottom-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-ink-850 shadow-card"
          >
            <Braces size={20} className="text-accent-blue" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
