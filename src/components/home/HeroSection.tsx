import { Feather } from "lucide-react";
import { Button } from "../ui/button";

export default function HeroSection() {

    return (
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="absolute inset-0 -z-10 opacity-20 dark:opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-primary/10 to-transparent rounded-full"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-primary/20 animate-[spin_60s_linear_infinite]"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full border border-primary/10 animate-[spin_80s_linear_infinite_reverse]"></div>
        </div>

        <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
          <div className="mb-8 relative">
            <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse"></div>
            <Feather className="h-12 w-12 text-primary relative z-10 p-2" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif max-w-3xl mb-6 leading-tight">
            Embrace the gentle wisdom of everyday moments
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
            A sanctuary for the soul, where contemplation meets daily life and ordinary experiences reveal extraordinary
            truths.
          </p>
          <Button size="lg" className="rounded-full px-8 bg-primary/90 hover:bg-primary">
            Begin Your Journey
          </Button>
        </div>
      </section>
    )

}