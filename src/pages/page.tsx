import Header from "@/components/home/Header"
import HeroSection from "@/components/home/HeroSection"
import { ModeToggle } from "@/components/home/ModeToggle"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Flower2, Star, Compass, Feather, Cloud } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcfaf7] dark:bg-[#0f0e0c]">

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Posts */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-emerald-800"></div>
            <h3 className="text-2xl font-serif text-[#f4f2f1]">Recent Contemplations</h3>
          </div>
          <a href="#" className="text-sm text-emerald-700 hover:underline">
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <Card className="md:col-span-8 overflow-hidden bg-emerald-900/50 backdrop-blur-sm hover:scale-[102%] transition-all duration-300 py-0 border border-[#4db3911a]">
            <div className="grid md:grid-cols-2 h-full">
              <div className="relative overflow-hidden">
                <img
                  src={featuredPosts[0].image || "/placeholder.svg"}
                  alt={featuredPosts[0].title}
                  className="object-cover transition-transform duration-500 hover:scale-105 h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  {featuredPosts[1].icon}
                  <span className="text-xs uppercase tracking-wider text-white/90">{featuredPosts[1].category}</span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-xs text-muted-foreground mb-2">{featuredPosts[0].date}</span>
                <h4 className="text-2xl font-serif mb-4 text-[#f4f2f1]">{featuredPosts[0].title}</h4>
                <p className="text-muted-foreground text-sm mb-6">{featuredPosts[0].excerpt}</p>
                <a href="#" className="text-primary text-sm hover:underline inline-flex items-center gap-2">
                  Read More <Feather className="h-3 w-3" />
                </a>
              </div>
            </div>
          </Card>

          <div className="md:col-span-4 grid grid-cols-1 gap-8">
            {featuredPosts.slice(1, 3).map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none bg-card/50 backdrop-blur-sm hover:scale-[102%] transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      {post.icon}
                    </div>
                    <span className="text-xs uppercase tracking-wider">{post.category}</span>
                  </div>
                  <h4 className="text-xl font-serif mb-3">{post.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <a href="#" className="text-primary text-sm hover:underline">
                      Read More
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl text-emerald-700 font-serif mb-6">"</div>
          <p className="text-2xl md:text-3xl font-serif italic mb-6 text-[#f4f2f1]">
            The universe speaks in the language of ordinary moments; our task is simply to listen with extraordinary
            attention.
          </p>
          <div className="text-sm text-[#bab3ab]">— From the Oddment Archives</div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#4db3910d]/5 via-[#4db3911a] to-transparent p-10 md:p-16 border border-[#4db3911a]">
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>

          <div className="relative max-w-2xl mx-auto text-center">
            <Cloud className="h-8 w-8 text-emerald-800 mx-auto mb-6" />
            <h3 className="text-3xl font-serif mb-4 text-[#f4f2f1]">Nurture Your Inner Garden</h3>
            <p className="text-[#bab3ab] mb-8">
              Subscribe to receive monthly insights, meditations, and wisdom to help cultivate your spiritual practice.
            </p>
            <form className="flex flex-col items-center sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-full bg-black border border-[#2c2621] placeholder:text-zinc-100 placeholder:opacity-50"
                required
              />
              <Button type="submit" className="rounded-full bg-emerald-700 px-5 py-5">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px w-12 bg-emerald-800"></div>
          <h3 className="text-2xl font-serif text-[#f4f2f1]">Explore by Theme</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <a href="#" key={index}>
              <div className="group relative overflow-hidden rounded-xl aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10"></div>
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title} 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                  <div className="w-10 h-10 rounded-full bg-emerald-700 backdrop-blur-md flex items-center justify-center mb-3">
                    {category.icon}
                  </div>
                  <h4 className="text-xl font-serif text-white mb-1">{category.title}</h4>
                  <p className="text-sm text-white/80">{category.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#bab3ab] mt-20 bg-[#0f0e0c] text-[#f4f2f1]">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Flower2 className="h-5 w-5 text-emerald-800" />
                <span className="text-lg font-serif">oddment.world</span>
              </div>
              <p className="text-sm text-muted-foreground">
                A space for contemplation, spiritual exploration, and finding meaning in the ordinary moments.
              </p>
            </div>

            <div>
              <h5 className="font-medium mb-4">Explore</h5>
              <div className="grid gap-2">
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Journal
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Meditations
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Wisdom
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </div>
            </div>

            <div>
              <h5 className="font-medium mb-4">Resources</h5>
              <div className="grid gap-2">
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Guided Practices
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Reading List
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Community
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Events
                </a>
              </div>
            </div>

            <div>
              <h5 className="font-medium mb-4">Connect</h5>
              <div className="grid gap-2">
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Newsletter
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Support
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} oddment.world. All rights reserved.
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">YouTube</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-youtube"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Sample data
const featuredPosts = [
  {
    title: "The Whispers of Silence",
    excerpt: "Exploring the profound wisdom that emerges when we quiet the mind and listen to the subtle voice within.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 12, 2025",
    category: "Meditation",
    icon: <Star className="h-4 w-4 text-primary" />,
  },
  {
    title: "Sacred Geometry in Everyday Life",
    excerpt:
      "Discovering the divine patterns that connect us to the universe through ordinary objects and experiences.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 8, 2025",
    category: "Wisdom",
    icon: <Compass className="h-4 w-4 text-primary" />,
  },
  {
    title: "The Alchemy of Breath",
    excerpt: "How conscious breathing can transform our energy and connect us to the present moment.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 3, 2025",
    category: "Practice",
    icon: <Feather className="h-4 w-4 text-primary" />,
  },
]

const categories = [
  {
    title: "Daily Practice",
    description: "Rituals and habits for everyday spirituality",
    image: "/placeholder.svg?height=300&width=400",
    icon: <Feather className="h-5 w-5 text-white" />,
  },
  {
    title: "Inner Wisdom",
    description: "Insights from ancient and modern teachings",
    image: "/placeholder.svg?height=300&width=400",
    icon: <Star className="h-5 w-5 text-white" />,
  },
  {
    title: "Sacred Journeys",
    description: "Explorations of spiritual places and paths",
    image: "/placeholder.svg?height=300&width=400",
    icon: <Compass className="h-5 w-5 text-white" />,
  },
  {
    title: "Natural Harmony",
    description: "Finding connection through nature",
    image: "/placeholder.svg?height=300&width=400",
    icon: <Flower2 className="h-5 w-5 text-white" />,
  },
]
