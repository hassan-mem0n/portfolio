import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { FaNodeJs, FaShoppingCart, FaWordpress } from "react-icons/fa";
import {SiExpress, SiFramer, SiMongodb, SiTailwindcss, SiWoocommerce} from "react-icons/si";
import {
  Triangle,
  Atom,
  Boxes,
  Database,
  Diamond,
  Flame,
  GitBranch,
  Zap,
  Feather,
  Container,
  Code2,
  Terminal,
  Github,
  GitMerge,
  
} from 'lucide-react'
import { stack } from '../data'
import { BsBootstrap } from 'react-icons/bs';

const icons = {
  triangle: Triangle,
  atom: Atom,
  boxes: Boxes,
  database: Database,
  diamond: Diamond,
  flame: Flame,
  gitBranch: GitBranch,
  zap: Zap,
  feather: Feather,
  container: Container,
  code2: Code2,
  terminal: Terminal,
  github: Github,
  gitMerge: GitMerge,
  nodejs:FaNodeJs,
  tailwindcss:SiTailwindcss,
  bootstrap:BsBootstrap,
  express:SiExpress,
  framermotion:SiFramer,
  mongoDb:SiMongodb,
  wordpress:FaWordpress,
  woocommerce:FaShoppingCart      
}

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035 } },
}
const cell = {
  hidden: { opacity: 0, y: 16, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
}

// Converts a hex color to an "r, g, b" string so it can be composed into rgba() at any opacity.
function hexToRgb(hex) {
  const clean = hex.replace('#', '')
  const full = clean.length === 3 ? clean.split('').map((c) => c + c).join('') : clean
  const num = parseInt(full, 16)
  return `${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}`
}

function StackCard({ item, selected, onSelect }) {
  const isActive = selected === item.name
  const rgb = hexToRgb(item.color)

  return (
    <motion.button
      variants={cell}
      onClick={() => onSelect(item.name)}
      whileHover={{ y: -5 }}
      style={
        isActive
          ? {
              borderColor: `rgba(${rgb}, 0.6)`,
              backgroundColor: `rgba(${rgb}, 0.08)`,
              boxShadow: `0 0 24px -6px rgba(${rgb}, 0.6)`,
            }
          : undefined
      }
      className={`group relative flex h-[92px] w-[92px] flex-col items-center justify-center gap-2 rounded-2xl border transition-colors duration-300 sm:h-[104px] sm:w-[104px] ${
        isActive ? '' : 'border-white/10 bg-ink-850/80 hover:border-white/25'
      }`}
    >
      {item.type === 'icon' ? (
        (() => {
          const Icon = icons[item.icon]
          return <Icon size={22} strokeWidth={1.6} style={{ color: isActive ? item.color : '#ffffffb3' }} />
        })()
      ) : (
        <span
          className="font-display text-sm font-bold tracking-tight"
          style={{ color: isActive ? item.color : '#ffffffb3' }}
        >
          {item.mono}
        </span>
      )}
      <span className={`text-[11px] transition-colors ${isActive ? 'text-white' : 'text-white/45'}`}>
        {item.name}
      </span>
    </motion.button>
  )
}

export default function StackMastery() {
  const [selected, setSelected] = useState('CSS')
  const meshRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(meshRef.current, {
        rotate: 360,
        duration: 90,
        ease: 'none',
        repeat: -1,
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="stack" className="relative overflow-hidden py-24">
      <svg
        ref={meshRef}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <polygon
          points="100,10 180,55 180,145 100,190 20,145 20,55"
          stroke="white"
          strokeWidth="0.6"
        />
        <polygon points="100,45 150,72 150,128 100,155 50,128 50,72" stroke="white" strokeWidth="0.6" />
        <line x1="100" y1="10" x2="100" y2="190" stroke="white" strokeWidth="0.4" />
        <line x1="20" y1="55" x2="180" y2="145" stroke="white" strokeWidth="0.4" />
        <line x1="180" y1="55" x2="20" y2="145" stroke="white" strokeWidth="0.4" />
      </svg>
      <div className="absolute inset-0 -z-10 bg-radial-glow opacity-70" />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 flex items-center justify-center gap-2 text-sm text-white/50"
        >
          <span className="eyebrow-dot" /> Built With Precision
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mb-14 font-display text-3xl font-bold tracking-tight md:text-4xl"
        >
          STACK{' '}
          <span className="bg-gradient-to-r from-violet-400 to-accent-blue bg-clip-text text-transparent">
            MASTERY
          </span>
        </motion.h2>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4"
        >
          {stack.map((item) => (
            <StackCard key={item.name} item={item} selected={selected} onSelect={setSelected} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
