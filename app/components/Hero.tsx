"use client";

import { Play, X } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
        <a href="/motocikli/c652v" className="font-replica text-sm mb-4 hover:text-track-cyan transition-colors leading-none">
          Saznaj više &gt;&gt;
        </a>
        <button 
          onClick={() => setIsVideoOpen(true)}
          className="bg-white/20 hover:bg-white/40 transition-colors w-14 h-10 rounded-lg flex items-center justify-center backdrop-blur-sm"
        >
          <Play fill="white" className="w-5 h-5" />
        </button>
      </div>

    {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 text-white/70 hover:text-white bg-black/50 hover:bg-black p-2 rounded-full transition-all"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/4D3cK-z3rr4?si=zj_isAivt-w0O7Bw&autoplay=1" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
