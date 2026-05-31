"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Run once on mount to set initial state in case of reload/hydration
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
      isScrolled || isOpen
        ? "bg-surface-container-lowest/80 backdrop-blur-md border-b border-white/5"
        : "bg-transparent border-b border-transparent"
    }`}>
      <nav className="flex justify-between md:justify-center items-center gap-x-12 lg:gap-x-20 px-gutter py-6 max-w-container-max mx-auto h-[90px]">
        {/* Brand Logo */}
        <a className="relative h-11 w-48 transition-opacity duration-300 hover:opacity-80 flex items-center" href="#">
          <Image
            src="/logo.webp"
            alt="Morbidelli Serbia Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </a>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-8 items-center font-inter uppercase tracking-widest text-[12px] font-semibold">
          <a className="text-primary border-b border-primary pb-1 transition-all duration-300" href="#">
            Naslovna
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-all duration-300" href="#">
            Katalog
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-all duration-300" href="#">
            Posetite nas
          </a>
        </div>

        {/* Trailing Action */}
        <div className="hidden md:flex">
          <a className="bg-primary text-background font-inter uppercase tracking-widest px-8 py-3 rounded-none font-bold hover:bg-secondary hover:text-background transition-colors duration-300 text-[12px]" href="#">
            Kontakt
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary focus:outline-none transition-colors duration-300 hover:text-secondary"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined text-3.5xl">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed top-[90px] left-0 w-full h-[calc(100vh-90px)] bg-surface-container-lowest/95 backdrop-blur-lg z-40 border-t border-white/5 animate-fadeInUp">
          <div className="flex flex-col items-center justify-center h-full space-y-8 font-inter uppercase tracking-widest text-lg font-semibold px-gutter">
            <a
              className="text-primary border-b border-primary pb-1 transition-all duration-300"
              href="#"
              onClick={() => setIsOpen(false)}
            >
              Naslovna
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-all duration-300"
              href="#"
              onClick={() => setIsOpen(false)}
            >
              Katalog
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-all duration-300"
              href="#"
              onClick={() => setIsOpen(false)}
            >
              Posetite nas
            </a>
            <a
              className="bg-primary text-background font-inter uppercase tracking-widest px-8 py-3 rounded-none font-bold hover:bg-secondary hover:text-background transition-colors duration-300 text-sm mt-4 text-center w-full max-w-xs"
              href="#"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
