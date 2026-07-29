import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Send, MessageCircle } from "lucide-react";
import setup from "@/assets/setup.jpg";

const PHONE = "+91 70685 43312";
const PHONE_RAW = "917068543312";
const ADDRESS = "Haralur, Eastwood Township, HSR Layout, Bengaluru, Karnataka – 560102";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <img src={setup} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-forest-deep/85" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">Contact</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-cream sm:text-4xl md:text-5xl">
            Let's Make Your Garden Flourish.
          </h2>
          <p className="mt-4 text-cream/75">
            Tell us about your space and we'll get back with a plan tailored to it.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <a href={`tel:${PHONE_RAW}`} className="flex items-start gap-4 rounded-2xl bg-cream/[0.08] p-5 ring-1 ring-cream/15 hover:bg-cream/[0.14] transition-colors">
              <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-sage text-forest-deep"><Phone className="h-5 w-5" /></span>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-widest text-sage">Call</div>
                <div className="mt-1 font-semibold text-cream">{PHONE}</div>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-2xl bg-cream/[0.08] p-5 ring-1 ring-cream/15">
              <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-sage text-forest-deep"><MapPin className="h-5 w-5" /></span>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-widest text-sage">Visit</div>
                <div className="mt-1 text-sm text-cream/90 leading-relaxed">{ADDRESS}</div>
              </div>
            </div>
            <a
              href={`https://wa.me/${PHONE_RAW}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 rounded-2xl bg-[#25D366] p-5 hover:bg-[#1ebe57] transition-colors"
            >
              <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-white/20 text-white"><MessageCircle className="h-5 w-5" /></span>
              <div>
                <div className="text-xs uppercase tracking-widest text-white/80">WhatsApp</div>
                <div className="mt-1 font-semibold text-white">Chat with us instantly</div>
              </div>
            </a>
            <div className="overflow-hidden rounded-2xl ring-1 ring-cream/15">
              <iframe
                title="Location map"
                src="https://www.google.com/maps?q=HSR+Layout+Haralur+Bengaluru&output=embed"
                className="h-56 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 rounded-3xl bg-cream p-6 md:p-8 shadow-xl"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-widest text-forest">Name</span>
                <input required type="text" className="mt-2 w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm text-charcoal focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20" placeholder="Your name" />
              </label>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-widest text-forest">Phone</span>
                <input required type="tel" className="mt-2 w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm text-charcoal focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20" placeholder="+91 ..." />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-forest">Email</span>
                <input type="email" className="mt-2 w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm text-charcoal focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20" placeholder="you@example.com" />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-forest">Tell us about your space</span>
                <textarea rows={5} required className="mt-2 w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm text-charcoal focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20 resize-none" placeholder="Balcony, garden, landscaping — what would you like help with?" />
              </label>
            </div>
            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-forest px-6 py-3.5 text-sm font-semibold text-cream hover:bg-forest-deep transition-colors">
              {sent ? "Thanks! We'll be in touch." : (<>Send message <Send className="h-4 w-4" /></>)}
            </button>
            <p className="mt-3 text-center text-xs text-charcoal/60 inline-flex items-center gap-1.5 w-full justify-center">
              <Mail className="h-3 w-3" /> Or call us directly — we love a good chat about plants.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}