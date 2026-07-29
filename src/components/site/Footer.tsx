import { Leaf, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream/85">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid gap-10 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-cream/10"><Leaf className="h-5 w-5 text-sage" /></span>
            <div>
              <div className="font-display font-bold text-cream">Ashish Gardening</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-sage">& Landscaping</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-cream/70 leading-relaxed">
            Bengaluru-based gardening and landscaping — helping homes grow greener,
            one plant at a time.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-cream">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {["Home","About","Services","Gallery","Reviews","Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-sage transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-cream">Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {["Garden Maintenance","Balcony Garden Care","Landscaping","Plant Supply","Plant Health Guidance","Home Garden Setup"].map((l) => (
              <li key={l} className="text-cream/70">{l}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-cream">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-sage flex-none" /><a href="tel:917068543312" className="hover:text-sage transition-colors">+91 70685 43312</a></li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-sage flex-none" /><span className="text-cream/70">Haralur, Eastwood Township, HSR Layout, Bengaluru – 560102</span></li>
          </ul>
          <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-cream/10">
            <iframe title="Map" src="https://www.google.com/maps?q=HSR+Layout+Haralur+Bengaluru&output=embed" className="h-32 w-full border-0" loading="lazy" />
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 text-xs text-cream/60 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Ashish Gardening & Landscaping. All rights reserved.</span>
          <span>Made with care in Bengaluru 🌿</span>
        </div>
      </div>
    </footer>
  );
}