"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, ChevronDown } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-white text-white py-16 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[45%] w-[1040px] h-[1040px] lg:w-[1560px] lg:h-[1560px] pointer-events-none z-0">
        <Image
          src="/logos/Heritage-Icon-Logo-Solid-Black-WB.webp"
          alt="Watermark"
          fill
          className="object-contain"
        />
      </div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/90 pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 max-w-[1440px] relative z-10">
        
        {/* Top Section: Logo & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 border-b border-white/10 pb-8">
          <Link href="/">
            <Image
              src="/logos/Full-Logo-Solid-Black-WB.webp"
              alt="Morbidelli Logo"
              width={200}
              height={45}
              className="brightness-0 invert"
            />
          </Link>
          
          <div className="flex items-center gap-4">
            <span className="text-track-cyan font-replica-light text-xs mr-4">Pronađite nas na društvenim mrežama:</span>
            <a href="#" className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 max-w-4xl mx-auto">
          {/* Column 1 */}
          <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
            <h4 className="font-replica text-track-cyan text-xs mb-2 uppercase tracking-wide">BRZI LINKOVI</h4>
            <Link href="/" className="text-xs font-replica-light text-gray-300 hover:text-white transition-colors uppercase">NASLOVNA</Link>
            <Link href="/about" className="text-xs font-replica-light text-gray-300 hover:text-white transition-colors uppercase">O NAMA</Link>
            <Link href="/news" className="text-xs font-replica-light text-gray-300 hover:text-white transition-colors uppercase">NOVOSTI</Link>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
            <h4 className="font-replica text-track-cyan text-xs mb-2 uppercase tracking-wide">PRODAJA I SERVIS</h4>
            <Link href="/equipment" className="text-xs font-replica-light text-gray-300 hover:text-white transition-colors uppercase">DODATNA OPREMA</Link>
            <Link href="/stores" className="text-xs font-replica-light text-gray-300 hover:text-white transition-colors uppercase">PRODAJNA MESTA I SERVISI</Link>
            <Link href="/contact" className="text-xs font-replica-light text-gray-300 hover:text-white transition-colors uppercase">KONTAKTIRAJTE NAS</Link>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
            <h4 className="font-replica text-track-cyan text-xs mb-2 uppercase tracking-wide">KOMPANIJE GRUPACIJE</h4>
            <Link href="#" className="text-xs font-replica-light text-gray-300 hover:text-white transition-colors uppercase">KEEWAY</Link>
            <Link href="#" className="text-xs font-replica-light text-gray-300 hover:text-white transition-colors uppercase">BENDA KEEWAY</Link>
            <Link href="#" className="text-xs font-replica-light text-gray-300 hover:text-white transition-colors uppercase">BENELLI</Link>
            <Link href="#" className="text-xs font-replica-light text-gray-300 hover:text-white transition-colors uppercase">BENELLI BIKE</Link>
          </div>
        </div>

        {/* Center Logo - Beyond the Ride */}
        <div className="flex justify-center mb-16 border-b border-track-cyan/30 pb-16">
          <Image
            src="/logos/Full-Slogan-BB.webp"
            alt="Beyond the Ride"
            width={200}
            height={40}
            className="opacity-90"
          />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-lg flex flex-col font-replica-light text-gray-500">
            <span className="font-replica font-bold text-gray-400">Keeway</span>
            GROUP
          </div>
          
          <div className="text-[10px] font-replica-light text-gray-500 text-center flex-1">
            <p className="mb-2">MBP MOTO s.r.l © Copyright - 2026 Keeway - All Rights Reserved</p>
            <div className="flex gap-4 justify-center">
              <Link href="#" className="hover:text-white transition-colors">Pravila i uslovi</Link>
              <Link href="#" className="hover:text-white transition-colors">Politika privatnosti</Link>
              <Link href="#" className="hover:text-white transition-colors">Politika kolačića</Link>
            </div>
          </div>

          <button className="flex items-center justify-between w-32 px-4 py-2 border border-track-cyan rounded-full text-xs font-replica bg-transparent hover:bg-white/5 transition-colors">
            <Globe className="w-4 h-4 text-track-cyan" />
            <span className="mx-2">INT - EN</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
        </div>
        
      </div>
    </footer>
  );
}
