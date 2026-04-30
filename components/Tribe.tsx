import { Users } from "lucide-react";
import Link from "next/link";

// const pillars = [
//   {
//     title: "HONEST CONVO",
//     description:
//       "A  space where doubt isn't a dirty word. We process the Sunday message throughout the week, unfiltered.",
//     color: "text-pink",
//   },
//   {
//     title: "CULTURE PULSE",
//     description:
//       "Weekly curators sharing the music, film, and art that's moving the soul of the generation right now.",
//     color: "text-mint",
//   },
//   {
//     title: "LOCAL LINK-UPS",
//     description:
//       "Beyond the screen. Timely gatherings in different cities to share a meal and a prayer without the pews.",
//     color: "text-white",
//   },
// ];

const InstagramIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

export default function Tribe() {
  return (
    <section className="w-full bg-navy border-b-2 border-white overflow-hidden">
      <div className="flex flex-col lg:flex-row border-b-2 border-white">
        <div className="flex-1 p-8 md:p-20 bg-white text-navy">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-modern text-[10px] font-black border-2 border-navy px-3 py-1 rounded-full uppercase tracking-widest">
              Join the Movement
            </span>
          </div>
          <h2 className="text-7xl font-heading uppercase tracking-tighter leading-[0.8] mb-12">
            THE <br />
            <span className="text-pink">TRIBE.</span>
          </h2>
          <p className="font-editorial text-2xl md:text-3xl italic leading-tight max-w-md">
            &quot;Faith is a walk, but we were not meant to walk it alone.&quot;
          </p>
        </div>

        <div className="flex-1 p-8 md:p-20 flex flex-col justify-center bg-navy text-white relative">
          <div className="relative z-10">
            <p className="font-modern text-xs font-bold uppercase tracking-[0.4em] mb-6 text-pink">
              Community / Connection / Conversation
            </p>
            <h3 className="font-heading text-4xl md:text-6xl uppercase tracking-tighter mb-8 leading-none">
              More than a <br />
              listen. It is a <br />
              belonging.
            </h3>
            <div className="flex gap-4">
              <button className="bg-pink text-navy px-10 py-2 rounded-full font-modern text-[10px] font-black uppercase tracking-widest hover:bg-mint transition-all duration-300 flex items-center gap-3 whitespace-nowrap group">
                <Link
                  href="https://www.youtube.com/@Sundaypodcast-k1s"
                  target="_blank"
                >
                  Subscribe on YT
                  <div className="group-hover:scale-110 transition-transform">
                    <YoutubeIcon />
                  </div>
                </Link>
              </button>
              <button className="border-2  border-white/20 text-white px-10 py-4 rounded-full font-modern text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all duration-300 flex items-center gap-3 whitespace-nowrap group">
                <Link
                  href="https://www.instagram.com/s.u.n.d.a.y_podcast"
                  target="_blank"
                >
                  Follow On IG
                  <div className="group-hover:scale-110 transition-transform">
                    <InstagramIcon />
                  </div>
                </Link>
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Users size={400} />
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-3">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="group p-12 md:p-16 border-b-2 md:border-b-0 md:border-r-2 last:border-r-0 border-white hover:bg-steel/50 transition-colors duration-500"
          >
            <h4 className="font-heading text-3xl text-white uppercase tracking-tighter mb-4">
              {pillar.title}
            </h4>
            <p className="font-sans text-muted leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
              {pillar.description}
            </p>
          </div>
        ))}
      </div> */}
      <div className="p-8 md:p-12 text-center bg-pink text-navy">
        <p className="font-modern text-[10px] font-black uppercase tracking-[0.6em]">
          No Judgement • Just Journey • Real Talk
        </p>
      </div>
    </section>
  );
}
