import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Navbar */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-white/5 bg-ink-950/80 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          
          {/* Logo */}
          <a
            href="#home"
            className="font-display text-lg font-semibold tracking-tight"
          >
            Mr.
            <span className="text-violet-400">HASSAN</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-9 md:flex">
            {nav.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="rounded-full border border-white/10 p-2 text-white/80 transition hover:bg-white/10 md:hidden"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[999] bg-ink-950/95 backdrop-blur-xl md:hidden"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between px-6 py-5">
              
              <a
                href="#home"
                onClick={() => setOpen(false)}
                className="font-display text-lg font-semibold tracking-tight"
              >
                Mr.
                <span className="text-violet-400">HASSAN</span>
              </a>

              <button
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/10 p-2 text-white/80 transition hover:bg-white/10"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Mobile Navigation */}
            <ul className="flex flex-col items-center gap-8 pt-16">
              {nav.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.05 * i,
                  }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl text-white/90 transition-colors hover:text-violet-400"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}