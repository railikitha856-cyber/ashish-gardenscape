import { motion } from "framer-motion";
import { Check } from "lucide-react";
import about from "@/assets/about.jpg";
import balcony from "@/assets/balcony.jpg";

const qualities = [
  "Reliable",
  "Punctual",
  "Polite",
  "Knowledgeable",
  "Affordable",
  "Passionate about plants",
];

const services = [
  "Gardening services",
  "Landscaping",
  "Balcony garden care",
  "Plant maintenance",
  "Plant health guidance",
  "Landscaping solutions for homes",
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
            <img
              src={about}
              alt="Hands tending to healthy potted plants"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1200}
              height={900}
            />
          </div>
          <div className="absolute -bottom-8 -right-4 md:-right-10 w-44 md:w-56 aspect-[3/4] overflow-hidden rounded-2xl ring-8 ring-cream shadow-lg">
            <img
              src={balcony}
              alt="Balcony garden with lush plants"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1000}
              height={800}
            />
          </div>
          <div className="absolute -top-6 -left-4 hidden md:flex flex-col items-center rounded-2xl bg-forest px-5 py-4 text-cream shadow-lg">
            <span className="font-display text-3xl font-bold">4.9★</span>
            <span className="text-[10px] tracking-widest uppercase text-sage">Google Rated</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">
            About Us
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-forest-deep sm:text-4xl md:text-5xl leading-tight">
            Rooted in care, grown from trust.
          </h2>
          <p className="mt-5 text-charcoal/75 leading-relaxed">
            Ashish Gardening & Landscaping is a Bengaluru-based service helping homeowners
            build and care for beautiful green spaces — from small balcony corners to full
            home gardens.
          </p>
          <p className="mt-3 text-charcoal/75 leading-relaxed">
            What we offer:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-charcoal/85">
                <span className="mt-1 grid h-4 w-4 flex-none place-items-center rounded-full bg-forest text-cream">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl bg-sage/40 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-forest">
              What customers say
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {qualities.map((q) => (
                <span
                  key={q}
                  className="rounded-full bg-cream px-3 py-1.5 text-xs font-medium text-forest-deep ring-1 ring-forest/10"
                >
                  {q}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}