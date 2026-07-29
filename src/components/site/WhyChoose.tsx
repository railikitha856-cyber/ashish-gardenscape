import { motion } from "framer-motion";
import { BookOpen, Clock, Sprout, Handshake } from "lucide-react";

const items = [
  { icon: BookOpen, title: "Knowledgeable Plant Care", desc: "Practical, honest guidance for every plant and space." },
  { icon: Clock, title: "Reliable & Punctual", desc: "Consistent visits and dependable service you can plan around." },
  { icon: Sprout, title: "Healthy Quality Plants", desc: "Plants selected and supplied with care for lasting growth." },
  { icon: Handshake, title: "Friendly & Honest", desc: "Polite, humble, and always straightforward with pricing." },
];

export function WhyChoose() {
  return (
    <section className="bg-forest-deep py-24 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="mx-auto max-w-7xl px-5 md:px-8 relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">Why Choose Us</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-cream sm:text-4xl md:text-5xl">
            Care your plants can feel.
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-3xl bg-cream/[0.06] p-6 ring-1 ring-cream/10 hover:bg-cream/[0.1] transition-colors"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sage text-forest-deep group-hover:scale-110 transition-transform">
                <it.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-cream">{it.title}</h3>
              <p className="mt-2 text-sm text-cream/70 leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}