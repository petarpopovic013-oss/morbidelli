"use client";

import { Play } from "lucide-react";

export default function FeaturedModels() {
  return (
    <section className="w-full flex flex-col font-replica">
      {/* Parallax Banner */}
      <div 
        className="relative w-full h-[500px] md:h-[700px] flex items-center justify-center group"
        style={{ clipPath: "inset(0 0 0 0)" }}
      >
        <div 
          className="fixed inset-0 w-full h-full bg-center bg-cover z-0 pointer-events-none"
          style={{ backgroundImage: 'url("/photos/FB-Cover-Photo-May-2024.jpg")' }}
        />
        <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-700 z-10"></div>
        
        <div className="relative z-20 text-center px-6 transition-transform duration-1000 group-hover:scale-105">
          <h2 className="text-sm md:text-base font-replica uppercase tracking-[0.3em] text-track-cyan mb-4">Doživi put</h2>
          <h3 className="text-5xl md:text-7xl font-replica-light text-white mb-6 uppercase tracking-tight">
            Pomeri <span className="font-replica">Granice</span>
          </h3>
          <p className="text-lg md:text-xl text-gray-300 font-replica-light mb-10 max-w-2xl mx-auto">
            Gde prestaje asfalt, počinje tvoja priča. Otkrij potpuno novu dimenziju vožnje i oseti pravu slobodu na dva točka.
          </p>
          <div className="flex flex-col items-center gap-4 cursor-pointer">
            <span className="text-sm font-replica text-white hover:text-track-cyan transition-colors uppercase tracking-widest">Saznaj više &gt;&gt;</span>
            <button className="bg-white/10 hover:bg-white/20 border border-white/30 transition-colors w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md group-hover:border-track-cyan group-hover:bg-track-cyan/20">
              <Play fill="white" className="w-6 h-6 ml-1 group-hover:fill-track-cyan" />
            </button>
          </div>
        </div>
      </div>


    </section>
  );
}
