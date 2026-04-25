import Image from "next/image";
import Link from "next/link";
import { Play, Clock, Calendar, ChevronRight } from "lucide-react";

export default function EpisodeCard({
  title = "Finding Peace in the Noise",
  excerpt = "In a world that never stops talking, how do we find the silence required to hear the divine?",
  date = "Oct 24, 2023",
  duration = "45 min",
  image = "/hero.png",
}) {
  return (
    <div className="group relative md:m-8 bg-steel border border-white/5 rounded-[--radius-lg] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-mint/5 hover:-translate-y-1">
      <div className="relative h-64 w-full  overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          loading="eager"
          className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-20 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy via-transparent to-transparent opacity-80" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="bg-pink group-hover:bg-mint text-navy p-5 rounded-full shadow-xl transform scale-75 group-hover:scale-100 transition-all duration-500">
            <Play size={24} fill="currentColor" />
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center gap-4 text-muted text-[11px] font-modern uppercase tracking-wider">
          <div className="flex items-center gap-1.5">
            <Calendar size={12} className="text-pink" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={12} className="text-pink" />
            <span>{duration}</span>
          </div>
        </div>

        <h3 className="font-heading text-xl md:text-4xl text-white leading-tight group-hover:text-pink transition-colors duration-300">
          {title}
        </h3>

        <p className="font-sans text-muted text-sm line-clamp-2 leading-relaxed">
          {excerpt}
        </p>

        <Link
          href={`/episodes/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="inline-flex items-center gap-2 text-pink font-modern text-md md:text-lg font-bold uppercase tracking-widest group/link pt-2"
        >
          <span>Listen to Episode</span>
          <ChevronRight
            size={14}
            className="group-hover/link:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
}
