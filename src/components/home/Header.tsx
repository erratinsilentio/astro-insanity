import { useState, useEffect } from "react"
import { ModeToggle } from "./ModeToggle"
import { Flower2, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import "@/styles/global.css"

const navItems = [
  { name: "Journal", href: "#" },
  { name: "Meditations", href: "#" },
  { name: "Wisdom", href: "#" },
  { name: "About", href: "#" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-6",
        !isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-black",
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Flower2 className="h-6 w-6 text-emerald-700 transition-all duration-300 group-hover:rotate-45" />
            <span className="absolute -inset-1.5 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-all duration-300"></span>
          </div>
          <h1 className="text-2xl font-serif tracking-wider">oddment.world</h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-sm relative group">
              <span className="relative z-10">{item.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-700 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </a>
          ))}
          <div className="pl-2">
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ModeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative z-50 p-1 rounded-full hover:bg-primary/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 top-0 z-40 bg-background/95 backdrop-blur-md pt-24 px-6"
            >
              <motion.nav
                className="flex flex-col gap-6 items-center"
                initial="closed"
                animate="open"
                variants={{
                  open: { transition: { staggerChildren: 0.1 } },
                  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                }}
              >
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 20 },
                    }}
                  >
                    <a
                      href={item.href}
                      className="text-xl font-serif py-2 px-4 relative group"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{item.name}</span>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 transition-all duration-300 ease-in-out"></span>
                    </a>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
