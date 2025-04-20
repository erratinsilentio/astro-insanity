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
    <a href="#" key={index} className="group">
      <div className="bg-card/50 rounded-2xl overflow-hidden shadow transition hover:shadow-lg h-[250px] flex flex-col">
        <div className="h-[100px] overflow-hidden">
          <img
            src={category.image || "/placeholder.svg"}
            alt={category.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-200"
          />
        </div>
        <div className="p-4 flex flex-col justify-between flex-grow">
          <div>
            <div className="w-10 h-10 rounded-full bg-emerald-700 backdrop-blur-md flex items-center justify-center mb-2">
              {category.icon}
            </div>
            <h4 className="text-base font-serif text-white mb-1 truncate">{category.title}</h4>
            <p className="text-xs text-white/80 line-clamp-2">{category.description}</p>
          </div>
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
    title: "Philosophy & Wisdom",
    description: "Rituals and habits for everyday life",
    image: "/blog-placeholder-2.jpg",
    icon: <Feather className="h-5 w-5 text-white" />,
  },
  {
    title: "Spiritual Teachings",
    description: "Insights from ancient and modern teachings",
    image: "/blog-placeholder-3.jpg",
    icon: <Star className="h-5 w-5 text-white" />,
  },
  {
    title: "Extraterrestial Life",
    description: "Explorations of spiritual places and paths",
    image: "/blog-placeholder-4.jpg",
    icon: <Compass className="h-5 w-5 text-white" />,
  },
  {
    title: "Psychedelics & Nature",
    description: "Finding connection through nature",
    image: "/blog-placeholder-5.jpg",
    icon: <Flower2 className="h-5 w-5 text-white" />,
  },
]