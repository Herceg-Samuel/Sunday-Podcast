import { videos } from "@/data/videos";

export default function EpisodesPage() {
  return (
    <section className="w-full bg-white dark:bg-navy border-b-2 border-navy dark:border-white min-h-screen pt-24">
      <div className="p-8 md:p-16 border-b-2 border-navy dark:border-white bg-white dark:bg-navy">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading uppercase tracking-tighter leading-[0.8] text-navy dark:text-white">
              SUNDAY
              <br />
              <span className="text-pink italic">PODCAST.</span>
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="font-modern text-xs font-bold tracking-[0.3em] uppercase mb-4 text-pink">
              Sunday Podcast Visuals
            </p>
            <p className="font-editorial text-lg text-navy/70 dark:text-white/70 leading-tight italic">
              Experience the conversations in full definition. Raw and uncut .
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`
              flex flex-col lg:flex-row w-full border-b-2 border-navy dark:border-white last:border-b-0
              ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}
            `}
          >
            <div className="flex-1 p-8 md:p-20 flex flex-col justify-center items-start bg-white dark:bg-navy relative group transition-colors duration-500">
              <div className="absolute inset-0 bg-pink/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative z-10 w-full">
                <div className="flex items-center justify-between mb-10">
                  <span className="font-modern text-[11px] font-black border-2 border-navy dark:border-white px-4 py-1.5 rounded-full uppercase tracking-widest text-navy dark:text-white">
                    {video.episode}
                  </span>
                </div>

                <h3 className="text-2xl md:text-4xl font-heading uppercase tracking-tighter leading-[0.9] mb-8 text-navy dark:text-white group-hover:text-pink transition-colors">
                  {video.title}
                </h3>

                <p className="font-editorial text-xl md:text-2xl text-navy/80 dark:text-white/80 leading-relaxed italic max-w-xl mb-12 border-l-4 border-pink pl-6">
                  {video.description}
                </p>

                <div className="flex items-center gap-6">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    className="group/btn flex items-center gap-3 bg-navy dark:bg-white text-white dark:text-navy px-8 py-4 rounded-full font-modern text-[10px] font-black uppercase tracking-widest hover:bg-pink dark:hover:bg-pink hover:text-navy transition-all duration-300"
                  >
                    <span>View on YouTube</span>
                    <div className="w-2 h-2 bg-pink rounded-full group-hover/btn:scale-150 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            <div
              className={`
                flex-1 relative aspect-video md:aspect-auto md:min-h-175
                border-t-2 lg:border-t-0 border-navy dark:border-white overflow-hidden
                ${index % 2 === 0 ? "lg:border-l-2" : "lg:border-r-2"}
              `}
            >
              <iframe
                className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 bg-steel/20"
                src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      <div className="p-16 text-center border-t-2 border-navy dark:border-white bg-navy text-white">
        <h4 className="font-heading text-3xl md:text-5xl uppercase tracking-tighter mb-4">
          Subscribe for the full experience.
        </h4>
        <p className="font-editorial italic text-muted text-xl">
          Join the Tribe.
        </p>
      </div>
    </section>
  );
}
