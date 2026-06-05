"use client";

import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-teaser.mp4" type="video/mp4" />
      </video>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white mt-20 flex flex-col items-center">
        <h1 className="text-[26px] md:text-[35px] lg:text-[52px] font-replica font-medium mb-1 leading-[1.1] tracking-tight [text-shadow:_0_0_20px_rgba(255,255,255,0.6)]">
          Dizajnirano za hrabre
        </h1>
        <p className="text-[28px] md:text-[31px] font-replica-light mb-6 leading-none">
          Potpuno novi Morbidelli C652V
        </p>
        <a href="#" className="font-replica text-sm mb-4 hover:text-track-cyan transition-colors leading-none">
          Saznaj više &gt;&gt;
        </a>
        <button className="bg-white/20 hover:bg-white/40 transition-colors w-14 h-10 rounded-lg flex items-center justify-center backdrop-blur-sm">
          <Play fill="white" className="w-5 h-5" />
        </button>
      </div>


    </section>
  );
}
