import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Contact from './components/Contact'
import StackMastery from './components/StackMastery'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-violet-500 to-accent-blue"
      />
      <Navbar />
        <Hero />
        <StackMastery/>
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />
    </div>
  )
}
