"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Globe } from "lucide-react";
import MegaMenu from "./MegaMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [modeliOffset, setModeliOffset] = useState(0);
  const pathname = usePathname();
  const modeliRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (modeliRef.current) {
        setModeliOffset(modeliRef.current.getBoundingClientRect().left);
      }
    };
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("header") && !target.closest(".mobile-menu-overlay")) {
        setIsMegaMenuOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    if (isMegaMenuOpen || isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMegaMenuOpen, isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const isSolid = isScrolled || pathname !== "/" || isMobileMenuOpen;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isSolid
          ? "bg-white shadow-md py-4"
          : "bg-black/10 py-2"
        }`}
    >
      <div className="w-full px-4 xl:px-12 mx-auto max-w-[1920px] flex items-center h-full justify-between lg:justify-start">

        {/* Mobile Left Section: Hamburger Menu */}
        <div className="lg:hidden flex items-center shrink-0 w-1/4">
          <button 
            className={`p-2 -ml-2 focus:outline-none flex flex-col gap-1.5`}
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
              if (isMegaMenuOpen) setIsMegaMenuOpen(false);
            }}
          >
            <span className={`block w-6 h-[2px] transition-all duration-300 ${isSolid ? 'bg-black' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
            <span className={`block w-6 h-[2px] transition-all duration-300 ${isSolid ? 'bg-black' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-[2px] transition-all duration-300 ${isSolid ? 'bg-black' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
          </button>
        </div>

        {/* Center Section on Mobile, Left Section on Desktop: Logo */}
        <div className="flex-1 lg:flex-none flex items-center justify-center lg:justify-start">
          <Link href="/" className="flex items-center relative z-10 shrink-0">
            <Image
              src="/logos/Full-Logo-Solid-Black-WB.webp"
              alt="Morbidelli Logo"
              width={200}
              height={44}
              className={`transition-all duration-300 ${isSolid ? 'brightness-100' : 'brightness-0 invert'} w-[180px] lg:w-[239px]`}
              priority
            />
          </Link>
        </div>

        {/* Right Section on Mobile: MODELS (MegaMenu Trigger) */}
        <div className="lg:hidden flex items-center justify-end shrink-0 w-1/4">
          <div 
            className="relative cursor-pointer flex items-center gap-1 hover:text-track-cyan transition-colors px-2 py-2"
            onClick={(e) => {
              e.stopPropagation();
              setIsMegaMenuOpen(!isMegaMenuOpen);
              if (isMobileMenuOpen) setIsMobileMenuOpen(false);
            }}
          >
            <span className={`font-replica font-bold text-xs ${isSolid ? "text-black" : "text-white"}`}>MODELI</span>
            <ChevronDown className={`w-4 h-4 ${isSolid ? "text-black" : "text-white"} ${isMegaMenuOpen ? 'rotate-180' : ''} transition-transform`} />
          </div>
        </div>

        {/* Center Section: Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-8 font-replica font-medium text-sm tracking-wider shrink-0 h-full ml-8">
          {/* Primary: MODELS */}
          <div className="flex items-center h-full">
            <div 
              ref={modeliRef}
              className="relative group cursor-pointer flex items-center gap-1 hover:text-track-cyan transition-colors h-full px-2"
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            >
              <span className={`font-replica font-bold ${isSolid ? "text-black" : "text-white"}`}>MODELI</span>
              <ChevronDown className={`w-4 h-4 ${isSolid ? "text-black" : "text-white"} group-hover:text-track-cyan`} />
            </div>
          </div>

          {/* Cyan Divider */}
          <div className="w-[2px] h-[22px] bg-track-cyan rounded-full mx-[-8px]"></div>

          {/* Other Links */}
          <Link href="/" className={`hover:text-track-cyan transition-colors ${isSolid ? "text-black" : "text-white"}`}>
            NASLOVNA
          </Link>
          <Link href="/about" className={`hover:text-track-cyan transition-colors ${isSolid ? "text-black" : "text-white"}`}>
            O NAMA
          </Link>
          <Link href="/news" className={`hover:text-track-cyan transition-colors ${isSolid ? "text-black" : "text-white"}`}>
            NOVOSTI
          </Link>
          <Link href="/equipment" className={`hover:text-track-cyan transition-colors ${isSolid ? "text-black" : "text-white"}`}>
            DODATNA OPREMA
          </Link>
          <Link href="/stores" className={`hover:text-track-cyan transition-colors ${isSolid ? "text-black" : "text-white"}`}>
            PRODAJNA MESTA I LOKACIJE SERVISA
          </Link>
          <Link href="/contact" className={`hover:text-track-cyan transition-colors ${isSolid ? "text-black" : "text-white"}`}>
            KONTAKT
          </Link>
        </nav>

        {/* Right Section: Empty space to perfectly center the navbar on desktop */}
        <div className="hidden lg:block flex-1"></div>

        {/* MegaMenu Component */}
        <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} offsetLeft={modeliOffset} />

      </div>

      {/* Mobile Backdrop */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Mobile Side Drawer Menu */}
      <div 
        className={`lg:hidden fixed inset-y-0 left-0 w-[85%] max-w-sm bg-white z-[70] transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto flex flex-col`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 pb-2">
          <span className="font-replica font-bold text-lg text-black">Meni</span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 -mr-2 text-black hover:text-gray-600 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col mt-4">
          <Link 
            href="/" 
            className={`flex items-center justify-between p-6 py-5 border-b ${pathname === '/' ? 'text-[#42D2F2] border-[#42D2F2]' : 'text-black border-gray-100'}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="font-replica text-base">Naslovna</span>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <Link 
            href="/about" 
            className={`flex items-center justify-between p-6 py-5 border-b ${pathname === '/about' ? 'text-[#42D2F2] border-[#42D2F2]' : 'text-black border-gray-100'}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="font-replica text-base">O nama</span>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <Link 
            href="/news" 
            className={`flex items-center justify-between p-6 py-5 border-b ${pathname === '/news' ? 'text-[#42D2F2] border-[#42D2F2]' : 'text-black border-gray-100'}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="font-replica text-base">Novosti</span>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <Link 
            href="/equipment" 
            className={`flex items-center justify-between p-6 py-5 border-b ${pathname === '/equipment' ? 'text-[#42D2F2] border-[#42D2F2]' : 'text-black border-gray-100'}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="font-replica text-base">Dodatna oprema</span>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <Link 
            href="/stores" 
            className={`flex items-center justify-between p-6 py-5 border-b ${pathname === '/stores' ? 'text-[#42D2F2] border-[#42D2F2]' : 'text-black border-gray-100'}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="font-replica text-base">Prodajna mesta i servisi</span>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <Link 
            href="/contact" 
            className={`flex items-center justify-between p-6 py-5 border-b ${pathname === '/contact' ? 'text-[#42D2F2] border-[#42D2F2]' : 'text-black border-gray-100'}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="font-replica text-base">Kontakt</span>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        
        <div className="flex-grow"></div>
      </div>
    </header>
  );
}
