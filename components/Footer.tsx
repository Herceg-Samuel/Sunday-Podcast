import { Mic2, Send, Heart } from "lucide-react";

const footerLinks = {
  Show: [
    { name: "Episodes", href: "#" },
    { name: "Guests", href: "#" },
    { name: "Series", href: "#" },
    { name: "Live Stream", href: "#" },
  ],
  Community: [
    { name: "Events", href: "#" },
    { name: "Discord", href: "#" },
    { name: "Newsletter", href: "#" },
    { name: "Merch", href: "#" },
  ],
  Legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Cookies", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-pink p-1.5 rounded-lg">
                <Mic2 className="text-navy" size={20} strokeWidth={2} />
              </div>
              <span className="font-heading text-xl tracking-tighter text-white">
                SUNDAY<span className="text-pink">.</span>
              </span>
            </div>
            <p className="font-editorial text-muted italic text-lg leading-relaxed">
              Christianity for the young generation. No rigidity, just honest
              conversations.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-steel rounded-full text-pink hover:bg-mint hover:text-navy transition-all duration-300"
              >
                <Mic2 size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-steel rounded-full text-pink hover:bg-mint hover:text-navy transition-all duration-300"
              >
                <Mic2 size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-steel rounded-full text-pink hover:bg-mint hover:text-navy transition-all duration-300"
              >
                <Mic2 size={18} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-6">
              <h4 className="font-modern text-xs font-bold uppercase tracking-widest text-white">
                {category}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted hover:text-pink transition-colors duration-300 font-sans"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-6">
            <h4 className="font-modern text-xs font-bold uppercase tracking-widest text-white">
              Stay in the Loop
            </h4>
            <p className="text-muted text-sm font-sans">
              Get episode drops and exclusive community updates.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-steel border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-muted/50 focus:outline-none focus:border-mint/50 transition-colors font-sans"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-mint hover:text-pink transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted text-xs font-sans tracking-wide">
            © {new Date().getFullYear()} SUNDAY PODCAST. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2 text-muted text-xs font-sans">
            <span>Made with</span>
            <Heart size={12} className="text-pink fill-pink" />
            <span>for the next generation.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
