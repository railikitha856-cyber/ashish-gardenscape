import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gal1 from "@/assets/gal1.jpg";
import gal2 from "@/assets/gal2.jpg";
import gal3 from "@/assets/gal3.jpg";
import gal4 from "@/assets/gal4.jpg";
import gal5 from "@/assets/gal5.jpg";
import gal6 from "@/assets/gal6.jpg";
import balcony from "@/assets/balcony.jpg";
import landscape from "@/assets/landscape.jpg";

const images = [
  { src: gal1, label: "Overhead garden view" },
  { src: gal2, label: "Vertical balcony garden" },
  { src: landscape, label: "Front-yard landscaping" },
  { src: gal4, label: "Hanging planters" },
  { src: gal3, label: "Rock garden with succulents" },
  { src: balcony, label: "Balcony green space" },
  { src: gal5, label: "Pathway landscaping" },
  { src: gal6, label: "Flowering container garden" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? 0 : (i + 1) % images.length));
      if (e.key === "ArrowLeft") setActive((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">Gallery</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-forest-deep sm:text-4xl md:text-5xl">
              A glimpse of our work.
            </h2>
          </div>
          <p className="max-w-md text-sm text-charcoal/70">
            Real gardens, balconies and landscapes we've worked on. Placeholders shown here
            can be replaced with the owner's Google Business photos.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[220px_220px]">
          {images.map((img, i) => (
            <motion.button
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl bg-sage/40 focus:outline-none focus:ring-2 focus:ring-forest ${
                i === 0 || i === 5 ? "lg:col-span-2 lg:row-span-2" : ""
              } ${i === 0 || i === 5 ? "aspect-square lg:aspect-auto" : "aspect-[4/3] lg:aspect-auto"}`}
            >
              <img
                src={img.src}
                alt={img.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-3 left-3 rounded-full bg-cream/90 px-3 py-1 text-[11px] font-medium text-forest-deep opacity-0 group-hover:opacity-100 transition-opacity">
                {img.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] grid place-items-center bg-forest-deep/95 p-4"
            onClick={() => setActive(null)}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-5 right-5 grid h-10 w-10 place-items-center rounded-full bg-cream/10 text-cream hover:bg-cream/20"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setActive((i) => (i! - 1 + images.length) % images.length); }}
              className="absolute left-3 md:left-6 grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-cream hover:bg-cream/20"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setActive((i) => (i! + 1) % images.length); }}
              className="absolute right-3 md:right-6 grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-cream hover:bg-cream/20"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.figure
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-5xl w-full"
            >
              <img
                src={images[active].src}
                alt={images[active].label}
                className="mx-auto max-h-[80vh] w-auto rounded-xl object-contain"
              />
              <figcaption className="mt-3 text-center text-sm text-cream/70">
                {images[active].label}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}