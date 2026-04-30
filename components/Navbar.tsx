"use client";

import { useState } from "react";
import { Menu, X, Play, Mic2, Search } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Episodes", href: "/Episodes" },
  { name: "About", href: "/About" },
  { name: "Tribe", href: "/Tribe" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-24">
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <div className="bg-steel/70 backdrop-blur-md border border-white/5 rounded-sm px-6 py-3 flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-pink p-1.5 rounded-lg group-hover:bg-mint transition-colors duration-300">
              <Mic2 className="text-navy" size={20} strokeWidth={2} />
            </div>
            <span className="font-heading text-lg tracking-tighter text-white uppercase">
              Sunday Podcast<span className="text-pink">.</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-modern text-xs font-bold uppercase tracking-widest text-muted hover:text-pink transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="text-muted hover:text-white transition-colors">
              <Search size={20} strokeWidth={1.5} />
            </button>

            <button className="btn-primary hidden md:flex items-center gap-2 group">
              <Play size={14} fill="currentColor" />
              <span className="text-xs tracking-widest uppercase">
                Listen Now
              </span>
            </button>

            <button
              className="md:hidden text-white p-1"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Overlay */}
      <div
        className={`fixed inset-0 z-60 bg-navy flex flex-col transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex justify-end p-8">
          <button
            onClick={() => setIsOpen(false)}
            className="text-pink hover:text-mint transition-colors"
          >
            <X size={32} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center grow gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-heading text-5xl text-white hover:text-pink transition-all duration-500 tracking-tighter ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {link.name}
            </a>
          ))}

          <div
            className={`mt-12 transition-all duration-700 delay-200 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <button className="btn-primary text-xl px-12 py-6 rounded-full flex items-center gap-4">
              <Play size={24} fill="currentColor" />
              <span>START LISTENING</span>
            </button>
          </div>
        </div>

        {/* Branding in Menu */}
        <div className="p-12 text-center">
          <p className="font-editorial text-muted italic text-lg">
            Faith remixed for the modern soul.
          </p>
        </div>
      </div>

      {/* Mobile Sticky Player (Thumb-Zone UX) */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%]">
        <button className="w-full bg-pink text-navy rounded-2xl p-4 flex items-center justify-between shadow-lg active:scale-95 transition-transform">
          <div className="flex items-center gap-3 text-left">
            <div className="bg-navy/10 p-2 rounded-lg">
              <Mic2 size={18} />
            </div>
            <div>
              <p className="font-modern font-extrabold text-[10px] uppercase tracking-wider opacity-60">
                Latest Episode
              </p>
              <p className="font-sans font-bold text-sm leading-tight">
                Finding Peace in the Noise
              </p>
            </div>
          </div>
          <div className="bg-navy rounded-full p-2 text-pink">
            <Play size={20} fill="currentColor" />
          </div>
        </button>
      </div>
    </div>
  );
}
