import { motion } from "framer-motion";
import { ArrowRight, Star, Images } from "lucide-react";
import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={hero}
        alt="Beautifully landscaped garden by Ashish Gardening & Landscaping in Bengaluru"
        className="absolute inset-0 h-full w-full object-cover"
        width={1600}
        height={1000}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/70 via-forest-deep/40 to-forest-deep/80" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pt-28 pb-16 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-cream/15 px-4 py-1.5 text-xs font-medium text-cream backdrop-blur-sm ring-1 ring-cream/25">
            <Star className="h-3.5 w-3.5 fill-current text-[#f5c26b]" />
            4.9/5 on Google · 75+ Reviews
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-cream sm:text-6xl md:text-7xl">
            Beautiful Gardens,
            <span className="block text-sage">Healthy Plants,</span>
            <span className="block">Happy Homes.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-cream/85 sm:text-lg">
            Professional gardening and landscaping services in Bengaluru — helping
            homeowners create and maintain beautiful green spaces.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm font-semibold text-forest-deep shadow-lg hover:bg-sage transition-colors"
            >
              Get a Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3.5 text-sm font-semibold text-cream hover:bg-cream/10 transition-colors"
            >
              <Images className="h-4 w-4" />
              View Gallery
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-cream to-transparent pointer-events-none" />
    </section>
  );
}