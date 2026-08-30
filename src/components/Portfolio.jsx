import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { portfolioFilters, portfolioItems } from '../data'
import { a } from 'framer-motion/client'

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const trackRef = useRef(null)

  const items =
    active === 'All' ? portfolioItems : portfolioItems.filter((p) => p.category === active)

  const scroll = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 340, behavior: 'smooth' })
  }

  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-label mb-8 text-center"
      >
        My portfolio
      </motion.h2>

      <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
        {portfolioFilters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full px-4 py-1.5 text-sm transition-colors ${active === f
                ? 'bg-violet-500 text-white'
                : 'text-white/50 hover:text-white/80'
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="relative">
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <AnimatePresence mode="popLayout">
            {items.map((p) => (
              <a target='_blank' href={p.link}>
                <motion.div
                  layout
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -6 }}
                  className={`group relative h-50 w-72 flex-shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br ${p.gradient} shadow-card`}
                >
                  <img src={p.image} className='w-full' alt="" srcset="" />
                  <div className="absolute inset-0 bg-black/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-3 bg-black/40 p-4 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs uppercase tracking-wide text-white/70">
                      {p.category}
                    </p>

                    <p className="font-display text-sm font-medium text-white">
                      {p.title}
                    </p>
                  </div>
                </motion.div>
              </a>
            ))}
          </AnimatePresence>
        </div>

        <button
          onClick={() => scroll(-1)}
          className="absolute -left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-ink-850/90 text-white/70 shadow-card hover:text-white md:flex"
          aria-label="Scroll left"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => scroll(1)}
          className="absolute -right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-ink-850/90 text-white/70 shadow-card hover:text-white md:flex"
          aria-label="Scroll right"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  )
}
