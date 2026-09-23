"use client";

import Image from "next/image";
import Link from "next/link";

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
            <a
              href="https://www.instagram.com/ddmcompany.ns/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white"
              aria-label="Instagram @ddmcompany.ns"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
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
            <Link href="/novosti" className="text-xs font-replica-light text-gray-300 hover:text-white transition-colors uppercase">NOVOSTI</Link>
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
            <h4 className="font-replica text-track-cyan text-xs mb-2 uppercase tracking-wide">DDM GRUPA</h4>
            <a href="https://ddmcompany.rs" target="_blank" rel="noopener noreferrer" className="text-xs font-replica-light text-gray-300 hover:text-white transition-colors uppercase">DDM COMPANY</a>
            <a href="https://ddmrentacar.rs" target="_blank" rel="noopener noreferrer" className="text-xs font-replica-light text-gray-300 hover:text-white transition-colors uppercase">DDM RENT A CAR</a>
            <a href="https://povuci.rs" target="_blank" rel="noopener noreferrer" className="text-xs font-replica-light text-gray-300 hover:text-white transition-colors uppercase">POVUCI.RS</a>
            <a href="https://keeway.rs" target="_blank" rel="noopener noreferrer" className="text-xs font-replica-light text-gray-300 hover:text-white transition-colors uppercase">KEEWAY SRBIJA</a>
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
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-lg flex flex-col font-replica-light text-gray-500">
            <span className="font-replica font-bold text-gray-400">Keeway</span>
            GROUP
          </div>
          
          <div className="text-xs font-replica-light text-gray-400 text-center md:text-right">
            <p>Morbidelli Srbija © Copyright {new Date().getFullYear()} — Član DDM Grupe. Sva prava zadržana.</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-gray-500">
              Developed by <span className="text-gray-300">Petar Popović</span>
            </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
