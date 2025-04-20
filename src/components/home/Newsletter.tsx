import { Cloud } from "lucide-react";
import { Button } from "../ui/button";

export default function Newsletter() {
return (
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
)
}