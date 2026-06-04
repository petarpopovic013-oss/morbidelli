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
      if (!target.closest("header")) {
        setIsMegaMenuOpen(false);
      }
    };

    if (isMegaMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMegaMenuOpen]);

  const isSolid = isScrolled || pathname !== "/";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isSolid
          ? "bg-white shadow-md py-4"
          : "bg-black/10 py-2"
        }`}
    >
      <div className="w-full px-4 xl:px-12 mx-auto max-w-[1920px] flex items-center h-full">

        {/* Left Section: Logo */}
        <div className="flex-1 flex items-center justify-start">
          <Link href="/" className="flex items-center relative z-10 shrink-0">
            <Image
              src="/logos/Full-Logo-Solid-Black-WB.webp"
              alt="Morbidelli Logo"
              width={239}
              height={53}
              className={`transition-all duration-300 ${isSolid ? 'brightness-100' : 'brightness-0 invert'}`}
              priority
            />
          </Link>
        </div>

        {/* Center Section: Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-8 font-replica font-medium text-sm tracking-wider shrink-0 h-full">
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
            
            <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} offsetLeft={modeliOffset} />
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

        {/* Right Section: Empty space to perfectly center the navbar */}
        <div className="flex-1"></div>

      </div>
    </header>
  );
}
