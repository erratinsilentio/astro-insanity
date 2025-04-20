import { Compass, Feather, Star, ArrowRight } from "lucide-react"
import { Card } from "../ui/card"
import { Button } from "../ui/button"
import { Arrow } from "@radix-ui/react-dropdown-menu"

export default function FeaturedPosts() {
    
    return (
      <section className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-emerald-800"></div>
            <h3 className="text-2xl font-serif text-[#f4f2f1]">Recent Contemplations</h3>
          </div>
          <Button className="rounded-full">
            Show All
            <ArrowRight />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <Card className="md:col-span-8 overflow-hidden bg-emerald-900/50 backdrop-blur-sm hover:scale-[102%] transition-all duration-300 py-0 border border-[#4db3911a] rounded-2xl">
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
                    <a href="#" className="text-primary text-xs hover:underline">
                      <Button className="rounded-full text-xs cursor-pointer bg-gradient-to-br from-[#4db3910d]/5 via-[#4db3911a] to-transparent border border-[#4db3911a]" >
                        Read More <Feather className="h-3 w-3" />
                      </Button>
                    </a>
              </div>
            </div>
          </Card>

          <div className="md:col-span-4 grid grid-cols-1 gap-8">
            {featuredPosts.slice(1, 3).map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none bg-card/50 backdrop-blur-sm hover:scale-[102%] transition-all duration-300 rounded-2xl"
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
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <a href="#" className="text-primary text-xs hover:underline">
                      <Button className="rounded-full text-xs cursor-pointer bg-gradient-to-br from-[#4db3910d]/5 via-[#4db3911a] to-transparent border border-[#4db3911a]" >
                        Read More <Feather className="h-3 w-3" />
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
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