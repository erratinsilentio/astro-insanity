import { ArrowRight, Feather } from "lucide-react";
import { Button } from "../ui/button";

export default function HeroSection() {

    return (
        <section className="relative overflow-hidden py-24 md:py-32 flex justify-center">
          <div className="container relative z-10 flex flex-col items-center">
            <div className="mb-8 relative w-12">
              <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse"></div>
              <Feather className="h-12 w-12 text-primary relative z-10 p-2" />
            </div>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Explore the Connection Between
                <span className="block mt-2 bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent">
                  Inner Space & Outer Space
                </span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Discover the profound relationship between meditation practices and cosmic phenomena. Journey with us as
                we explore consciousness, spirituality, and unexplained encounters.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="rounded-full">
                  Begin Your Journey
                </Button>
                <Button variant="outline" className="rounded-full">
                  Latest Insights
                </Button>
              </div>
            </div>
          </div>
        </section>
    )

}