"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "../utils/supabase/client";

const CATEGORIES = [
  "Trail",
  "Scooter",
  "Street fighter",
  "Cruisers",
  "Naked",
];

// Display names for UI mapping if needed
const CATEGORY_DISPLAY_NAMES: Record<string, string> = {
  "Trail": "TRAIL",
  "Scooter": "SCOOTERS",
  "Street fighter": "STREET FIGHTER",
  "Cruisers": "CRUISERS",
  "Naked": "NAKED",
};

interface Motorcycle {
  id: string;
  name: string;
  slug: string;
  category: string;
  image_url: string;
}

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  offsetLeft?: number;
}

export default function MegaMenu({ isOpen, onClose, offsetLeft = 0 }: MegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>("Trail");
  const [activeMotorcycle, setActiveMotorcycle] = useState<Motorcycle | null>(null);
  const [motorcycles, setMotorcycles] = useState<Motorcycle[]>([]);

  useEffect(() => {
    async function fetchMotorcycles() {
      const { data } = await supabase
        .from("morbidelli_motorcycles")
        .select("id, name, slug, category, image_url");

      if (data) {
        setMotorcycles(data);
        const categoryMotos = data.filter(
          (m: Motorcycle) => m.category.toLowerCase() === "trail"
        );
        if (categoryMotos.length > 0) {
          setActiveMotorcycle(categoryMotos[0]);
        }
      }
    }
    fetchMotorcycles();
  }, []);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    const categoryMotos = motorcycles.filter(
      (m) => m.category.toLowerCase() === cat.toLowerCase()
    );
    setActiveMotorcycle(categoryMotos.length > 0 ? categoryMotos[0] : null);
  };
  if (!isOpen) return null;

  const currentCategoryMotos = motorcycles.filter(
    (m) => m.category.toLowerCase() === activeCategory.toLowerCase()
  );

  return (
    <div className="absolute top-[70px] lg:top-full left-0 w-full bg-white lg:shadow-xl border-t border-gray-100 flex flex-col lg:flex-row z-[60] h-[calc(100vh-70px)] lg:h-[320px] overflow-y-auto lg:overflow-hidden">
      {/* 
        Mobilni prikaz (ispod lg): Kategorije levo, Modeli desno
        Desktop prikaz (lg i iznad): Kategorije -> Modeli -> Slika (sa offsetLeft)
      */}
      <div 
        className="w-full flex flex-col lg:flex-row p-4 lg:p-0 lg:h-full" 
        style={{ paddingLeft: typeof window !== 'undefined' && window.innerWidth >= 1024 && offsetLeft > 0 ? offsetLeft : undefined }}
      >
        <div className="flex w-full lg:w-auto lg:h-full">
          {/* Categories Column */}
          <div className="w-1/2 lg:w-auto lg:pr-8 border-r border-gray-200 pt-4 lg:pt-8 pb-4 lg:pb-8 lg:h-full overflow-y-auto">
            <ul className="flex flex-col gap-4 lg:gap-3">
              {CATEGORIES.map((cat) => (
                <li
                  key={cat}
                  className={`cursor-pointer font-replica font-bold text-[15px] lg:text-xl tracking-tight uppercase transition-colors ${
                    activeCategory === cat ? "text-track-cyan" : "text-gray-600 hover:text-black"
                  }`}
                  onMouseEnter={() => {
                    // Na mobilnom mozda bolji onClick za kategorije, ali hover ce raditi ok ako se tapne
                    handleCategoryChange(cat)
                  }}
                  onClick={() => handleCategoryChange(cat)}
                >
                  {CATEGORY_DISPLAY_NAMES[cat] || cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Motorcycles Column */}
          <div className="w-1/2 lg:w-auto px-4 lg:px-8 lg:min-w-[200px] lg:border-r lg:border-gray-100 pt-4 lg:pt-8 pb-4 lg:pb-8 lg:h-full overflow-y-auto">
            <ul className="flex flex-col gap-4 lg:gap-3">
              {currentCategoryMotos.length > 0 ? (
                currentCategoryMotos.map((moto) => (
                  <li
                    key={moto.id}
                    className={`cursor-pointer font-replica text-[15px] lg:text-sm tracking-wide transition-colors ${
                      activeMotorcycle?.id === moto.id ? "text-track-cyan" : "text-gray-600 lg:text-gray-500 hover:text-black"
                    }`}
                    onMouseEnter={() => setActiveMotorcycle(moto)}
                    onClick={() => setActiveMotorcycle(moto)}
                  >
                    <>
                      {/* Desktop Link */}
                      <Link href={`/motocikli/${moto.slug}`} onClick={onClose} className="hidden lg:block w-full text-left">
                        {moto.name.replace('Morbidelli ', '').replace('MBP ', '')}
                      </Link>
                      {/* Mobile Button (Just sets active, no navigation) */}
                      <button 
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveMotorcycle(moto);
                        }} 
                        className="lg:hidden block w-full text-left outline-none"
                      >
                        {moto.name.replace('Morbidelli ', '').replace('MBP ', '')}
                      </button>
                    </>
                  </li>
                ))
              ) : (
                <li className="text-gray-400 text-sm font-replica">Nema modela</li>
              )}
            </ul>
          </div>
        </div>

        {/* Image Column & Button - Always visible below on mobile, to the right on desktop */}
        <div className="flex-1 mt-8 lg:mt-0 lg:pl-8 flex flex-col lg:flex-row items-center justify-center lg:justify-start pt-4 lg:pt-8 pb-10 lg:pb-8 border-t lg:border-t-0 border-gray-100 lg:h-full">
          {activeMotorcycle && activeMotorcycle.image_url ? (
            <div className="flex flex-col items-center justify-start w-full lg:h-full">
              <div className="relative w-full max-w-[400px] lg:max-w-none aspect-[4/3] lg:aspect-auto lg:h-full lg:flex-1 mb-6 lg:mb-0">
                <Image
                  src={activeMotorcycle.image_url}
                  alt={activeMotorcycle.name}
                  fill
                  className="object-contain lg:object-left"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              
              {/* GO MODEL button - shown only on mobile */}
              <Link 
                href={`/motocikli/${activeMotorcycle.slug}`}
                onClick={onClose}
                className="lg:hidden w-full bg-track-cyan hover:bg-black transition-all duration-300 text-white font-replica font-bold text-center py-4 uppercase tracking-widest text-[13px] mt-6 shadow-[0_4px_14px_0_rgba(66,210,242,0.39)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)]"
              >
                Idi na model
              </Link>
            </div>
          ) : (
            <div className="text-gray-300 font-replica h-[200px] lg:h-full flex items-center">Uskoro slika modela...</div>
          )}
        </div>
      </div>
    </div>
  );
}
