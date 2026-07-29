import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sprout,
  Flower2,
  TreePine,
  Leaf,
  Stethoscope,
  Scissors,
  Home,
  Sun,
} from "lucide-react";
import balcony from "@/assets/balcony.jpg";
import landscape from "@/assets/landscape.jpg";
import plants from "@/assets/plants.jpg";
import maintenance from "@/assets/maintenance.jpg";
import setup from "@/assets/setup.jpg";
import seasonal from "@/assets/seasonal.jpg";
import about from "@/assets/about.jpg";
import gal1 from "@/assets/gal1.jpg";

const services = [
  { title: "Garden Maintenance", desc: "Regular upkeep to keep your garden thriving through every season.", icon: Sprout, img: gal1 },
  { title: "Balcony Garden Care", desc: "Turn even the smallest balcony into a lush green retreat.", icon: Flower2, img: balcony },
  { title: "Landscaping", desc: "Thoughtful landscape design tailored to your home and space.", icon: TreePine, img: landscape },
  { title: "Plant Supply", desc: "Healthy, quality plants sourced with care for your garden.", icon: Leaf, img: plants },
  { title: "Plant Health Guidance", desc: "Practical advice on soil, watering, sunlight and nutrition.", icon: Stethoscope, img: about },
  { title: "Plant Maintenance", desc: "Pruning, cleaning, feeding — the details that keep plants happy.", icon: Scissors, img: maintenance },
  { title: "Home Garden Setup", desc: "Complete home garden planning and installation from scratch.", icon: Home, img: setup },
  { title: "Seasonal Garden Care", desc: "Season-ready care so your garden looks its best year round.", icon: Sun, img: seasonal },
];

export function Services() {
  return (
    <section id="services" className="relative bg-sage/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">Services</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-forest-deep sm:text-4xl md:text-5xl">
            Everything your garden needs, in one place.
          </h2>
          <p className="mt-4 text-charcoal/75">
            From a single balcony pot to full home landscaping, we care for every plant
            with the same attention to detail.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-cream shadow-sm ring-1 ring-forest/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 grid h-10 w-10 place-items-center rounded-full bg-cream text-forest shadow">
                  <s.icon className="h-5 w-5" />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold text-forest-deep">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-charcoal/70 leading-relaxed">{s.desc}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-forest hover:text-olive transition-colors"
                >
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}