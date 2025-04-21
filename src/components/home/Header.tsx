import { useState, useEffect } from "react";
import { ModeToggle } from "./ModeToggle";
import { Flower2, Menu, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import "@/styles/global.css";
import { ThemeToggle } from "../ThemeToggle";
import { Button } from "../ui/button";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Articles", href: "#" },
  { name: "Meditation", href: "#" },
  { name: "About", href: "#" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 py-4 px-4 md:px-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Flower2 className="h-6 w-6 text-emerald-700 transition-all duration-300 group-hover:rotate-45" />
            <span className="absolute -inset-1.5 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-all duration-300"></span>
          </div>
          <h1 className="text-2xl font-serif tracking-wider">dailypeace.com</h1>
        </a>

        <section className="flex justify-center items-center">
          {/* Desktop Navigation */}
          <nav className="">
            <div className="flex items-center gap-0.5 px-4 py-2 rounded-full">
              {navItems.map((item, i) => (
                <a
                  key={item.name}
                  href="#"
                  className={cn(
                    "text-sm font-medium px-4 py-1.5 rounded-full transition-colors",
                    i === activeNavItem
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveNavItem(i);
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Left control - Theme toggle */}
          <div className="px-2">
            <ThemeToggle />
          </div>

          {/* Right control - Search */}
          <div className="">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </section>
      </div>
    </header>
  );
}
