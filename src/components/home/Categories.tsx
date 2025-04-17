import { Feather, Star, Compass, Flower2 } from "lucide-react"

export default function Categories() {

    return (
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
    )
}


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