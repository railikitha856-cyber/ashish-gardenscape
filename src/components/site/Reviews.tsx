import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  { name: "Komal Mehrotra", text: "We've been using Ashish's gardening services for almost a year. The quality of plants is excellent, the pricing is reasonable, and he is always polite and dependable." },
  { name: "Soumi Banerjee", text: "Ashish transformed our small balcony into a beautiful green space. He's knowledgeable about plant health and always pays attention to the overall aesthetics." },
  { name: "Neetu Shrivastav", text: "Very hardworking and reliable. Maintains the garden beautifully and clearly knows his work. Highly recommended." },
  { name: "Akash Verma", text: "Ashish has been maintaining my home plants for over a year. He takes great care of them and provides helpful advice whenever needed." },
  { name: "Rita Ghosh", text: "Ashish is polite, humble, and very knowledgeable about plants. He also guides us on maintaining the overall health of our garden." },
  { name: "Deepti Saxena", text: "Ashish is sincere and always arrives on time. He helped revive several plants that were almost dead and has excellent knowledge of plant propagation and care." },
];

export function Reviews() {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % reviews.length);
  const prev = () => setI((v) => (v - 1 + reviews.length) % reviews.length);
  const r = reviews[i];

  return (
    <section id="reviews" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">Reviews</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-forest-deep sm:text-4xl md:text-5xl">
            Kind words from happy homes.
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            {[...Array(5)].map((_, k) => (
              <Star key={k} className="h-5 w-5 fill-[#f5c26b] text-[#f5c26b]" />
            ))}
            <span className="ml-2 text-sm font-medium text-charcoal/70">4.9 · 75+ Google Reviews</span>
          </div>
        </div>

        <div className="relative mt-12 rounded-3xl bg-sage/40 p-8 md:p-14 overflow-hidden">
          <Quote className="absolute -top-2 -left-2 h-32 w-32 text-forest/5" strokeWidth={1} />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <p className="font-display text-lg md:text-2xl leading-relaxed text-forest-deep">
                "{r.text}"
              </p>
              <footer className="mt-6 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-forest text-cream font-semibold">
                  {r.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </span>
                <div>
                  <div className="font-semibold text-forest-deep">{r.name}</div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, k) => (
                      <Star key={k} className="h-3.5 w-3.5 fill-[#f5c26b] text-[#f5c26b]" />
                    ))}
                  </div>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-1.5">
              {reviews.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Review ${k + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    k === i ? "w-8 bg-forest" : "w-1.5 bg-forest/25"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={prev} aria-label="Previous review" className="grid h-10 w-10 place-items-center rounded-full bg-cream text-forest-deep hover:bg-forest hover:text-cream transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={next} aria-label="Next review" className="grid h-10 w-10 place-items-center rounded-full bg-cream text-forest-deep hover:bg-forest hover:text-cream transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}