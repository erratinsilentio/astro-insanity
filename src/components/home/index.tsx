import Categories from "@/components/home/Categories"
import FeaturedPosts from "@/components/home/FeaturedPosts"
import Footer from "@/components/home/Footer"
import Header from "@/components/home/Header"
import HeroSection from "@/components/home/HeroSection"
import Newsletter from "@/components/home/Newsletter"
import QuoteSection from "@/components/home/QuoteSection"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcfaf7] dark:bg-[#0f0e0c]">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Posts */}
      <FeaturedPosts />

      {/* Quote Section */}
      <QuoteSection />

      {/* Newsletter */}
      <Newsletter />

      {/* Categories */}
      <Categories />

      {/* Footer */}
      <Footer />
      
    </div>
  )
}

