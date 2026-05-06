import Link from "next/link";
import Image from "next/image";
import { Mic2, Heart } from "lucide-react";

const footerLinks = {
  Show: [
    { name: "Episodes", href: "#" },
    { name: "Guests", href: "#" },
    { name: "Series", href: "#" },
  ],
  Community: [
    { name: "Events", href: "#" },
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
          {/* Brand Column */}
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
              Faith remixed for the modern soul. No rigidity, just honest
              conversations.
            </p>

            {/* Updated Social Section */}
            <div className="flex gap-4">
              <Link
                href="https://open.spotify.com/show/4Qsn1AA1gmHGgbJjQR3vun?si=60d890b991ee4acf"
                target="_blank"
                className="p-2 bg-pink rounded-full hover:bg-mint transition-all duration-300 group"
              >
                <Image
                  src="/spotify.png"
                  alt="Spotify"
                  width={18}
                  height={18}
                  className="opacity-80 group-hover:opacity-100 group-hover:brightness-0 transition-all"
                />
              </Link>
              <Link
                href="https://www.youtube.com/@Sundaypodcast-k1s"
                target="_blank"
                className="p-2 bg-pink rounded-full hover:bg-mint transition-all duration-300 group"
              >
                <Image
                  src="/youtube.png"
                  alt="YouTube"
                  width={18}
                  height={18}
                  className="opacity-80 group-hover:opacity-100 group-hover:brightness-0 transition-all"
                />
              </Link>
              <Link
                href="https://www.instagram.com/s.u.n.d.a.y_podcast"
                target="_blank"
                className="p-2 bg-pink rounded-full hover:bg-mint transition-all duration-300 group"
              >
                <Image
                  src="/instagram.png"
                  alt="Instagram"
                  width={18}
                  height={18}
                  className="opacity-80 group-hover:opacity-100 group-hover:brightness-0 transition-all"
                />
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-6">
              <h4 className="font-modern text-xs font-bold uppercase tracking-widest text-white">
                {category}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted hover:text-pink transition-colors duration-300 font-sans"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column */}
          {/* <div className="space-y-6">
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
          </div> */}
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
