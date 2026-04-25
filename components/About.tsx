"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="bg-navy py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-steel/50 px-4 py-2 rounded-sm backdrop-blur-md">
              <span className="font-modern text-xl font-bold uppercase tracking-widest text-white">
                The Sunday Mission
              </span>
            </div>

            <h2 className="font-heading text-5xl md:text-7xl text-white leading-[0.9] tracking-tighter">
              FAITH WITHOUT <br />
              <span className="text-pink">THE RIGIDITY.</span>
            </h2>

            <p className="font-editorial text-xl md:text-2xl text-muted italic leading-relaxed">
              &quot;We grew up in a world of rules and rituals, but we found
              something better: Honest conversations.&quot;
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-mint/10 rounded-[--radius-lg] blur-2xl group-hover:bg-pink/10 transition-colors duration-700" />
            <div className="relative h-100 md:h-125 w-full rounded-[--radius-lg] overflow-hidden border border-white/5">
              <Image
                src="/hero.png"
                alt="Sunday Podcast Hosts"
                fill
                loading="eager"
                className="object-cover grayscale-30 hover:grayscale-0 transition-all duration-700"
              />
              <div className="photo-scrim" />
              <div className="absolute bottom-8 left-8">
                <p className="font-modern text-xs font-bold uppercase tracking-widest text-mint mb-1">
                  Established 2026
                </p>
                <p className="font-heading text-2xl text-white">OUR STORY.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: <Mic2 className="text-pink" />,
              title: "Raw Truth",
              desc: "We don't edit out the hard questions. If it's a real doubt, it belongs on the air.",
            },
            {
              icon: <Shield className="text-mint" />,
              title: "Safe Space",
              desc: "A community for the deconstructing, the reconstructing, and the curious.",
            },
            {
              icon: <Heart className="text-pink" />,
              title: "Love First",
              desc: "Moving beyond dogma to the heart of what faith was meant to be.",
            },
          ].map((value, i) => (
            <div
              key={i}
              className="bg-steel p-10 rounded-[--radius-lg] border border-white/5 hover:border-mint/30 transition-colors group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h4 className="font-heading text-2xl text-white mb-4 uppercase">
                {value.title}
              </h4>
              <p className="font-sans text-muted leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div> */}

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 relative">
            <div className="sticky top-32 space-y-6">
              <div className="relative h-80 w-full rounded-[--radius-lg] overflow-hidden border border-white/5">
                <Image
                  src="/hero.png"
                  alt="Behind the scenes"
                  fill
                  loading="eager"
                  className="object-cover grayscale"
                />
              </div>
              <p className="font-editorial text-muted italic">
                Behind every episode is a search for meaning in the noise of
                modern life.
              </p>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-12">
            <div className="space-y-6">
              <h3 className="font-modern text-4xl font-bold text-white tracking-tight">
                Why Sunday?
              </h3>
              <p className="font-sans text-lg text-muted leading-relaxed">
                Sunday used to be about pressure. The pressure to dress a
                certain way, act a certain way, and believe without questioning.
                We wanted to reclaim that day.
              </p>
              <p className="font-sans text-lg text-muted leading-relaxed">
                <strong>Sunday Podcast</strong> was born out of a conversation
                between friends who realized they loved Jesus but felt alienated
                by religious culture. We decided to hit record, and go on a
                journey discovery the other side.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="h-64 relative rounded-[--radius-lg] overflow-hidden">
                <Image
                  src="/hero.png"
                  alt="Studio"
                  fill
                  loading="eager"
                  className="object-cover"
                />
              </div>
              <div className="h-64 relative rounded-[--radius-lg] overflow-hidden">
                <Image
                  src="/hero.png"
                  alt="Recording"
                  fill
                  loading="eager"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-brand-pink/5 border border-pink/10 p-8 rounded-[--radius-lg]">
              <h4 className="font-heading text-xl text-pink mb-4 uppercase">
                The Sunday Manifesto
              </h4>
              <p className="font-editorial text-xl text-white italic">
                &quot;We believe faith is a journey, not a destination. We
                believe questions are holy. We believe that being
                &apos;un-rigid&apos; is the only way to stay flexible enough to
                follow where the spirit leads.&quot;
              </p>
            </div>

            <Link
              href="/episodes"
              className="btn-primary inline-flex items-center gap-3 py-5 px-10"
            >
              <span className="uppercase tracking-widest text-sm">
                Join the Conversation
              </span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
