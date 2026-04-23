"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Play, Mic2 } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[90vh] flex items-center px-6 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Podcast Host"
          height={1080}
          width={1080}
          loading="eager"
          className="w-full h-full object-cover grayscale-20 brightness-75"
        />
        <div className="absolute inset-0 bg-linear-to-r from-brand-navy via-brand-navy/60 to-transparent" />
      </div>

      <div ref={textRef} className="relative z-10 max-w-2xl">
        <div className="flex items-center gap-2 mb-4 text-brand-mint">
          <Mic2 size={18} />
          <span className="font-modern font-bold uppercase tracking-widest text-sm">
            New Episode Live
          </span>
        </div>

        <h1 className="font-heading text-6xl md:text-8xl text-text-primary leading-none mb-6">
          SUNDAY
          <br />
          <span className="text-brand-pink">PODCAST.</span>
        </h1>

        <p className="font-editorial text-xl md:text-2xl text-text-secondary mb-8">
          Exploring the Christian walk without the rigid rules.
        </p>

        <button className="group flex items-center gap-3 bg-brand-pink hover:bg-brand-mint text-brand-navy px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
          <Play fill="currentColor" size={20} />
          <span className="font-modern font-extrabold uppercase">
            Start Listening
          </span>
        </button>
      </div>
    </section>
  );
}
