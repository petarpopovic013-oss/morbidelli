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
      }
    }
    fetchMotorcycles();
  }, []);

  // Update active motorcycle when category changes
  useEffect(() => {
    const categoryMotos = motorcycles.filter(
      (m) => m.category.toLowerCase() === activeCategory.toLowerCase()
    );
    if (categoryMotos.length > 0) {
      setActiveMotorcycle(categoryMotos[0]);
    } else {
      setActiveMotorcycle(null);
    }
  }, [activeCategory, motorcycles]);

  if (!isOpen) return null;

  const currentCategoryMotos = motorcycles.filter(
    (m) => m.category.toLowerCase() === activeCategory.toLowerCase()
  );

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex z-[60]">
      <div 
        className="w-full flex" 
        style={{ paddingLeft: offsetLeft > 0 ? offsetLeft : undefined }}
      >
        {/* Categories Column */}
        <div className="w-auto pr-8 border-r border-gray-200 pt-8 pb-20">
          <ul className="flex flex-col gap-3">
            {CATEGORIES.map((cat) => (
              <li
                key={cat}
                className={`cursor-pointer font-replica font-bold text-xl tracking-tight uppercase transition-colors ${
                  activeCategory === cat ? "text-track-cyan" : "text-gray-600 hover:text-black"
                }`}
                onMouseEnter={() => setActiveCategory(cat)}
              >
                {CATEGORY_DISPLAY_NAMES[cat] || cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Motorcycles Column */}
        <div className="w-auto px-8 min-w-[200px] border-r border-gray-100 pt-8 pb-20">
          <ul className="flex flex-col gap-3">
            {currentCategoryMotos.length > 0 ? (
              currentCategoryMotos.map((moto) => (
                <li
                  key={moto.id}
                  className={`cursor-pointer font-replica text-sm tracking-wide transition-colors ${
                    activeMotorcycle?.id === moto.id ? "text-track-cyan" : "text-gray-500 hover:text-black"
                  }`}
                  onMouseEnter={() => setActiveMotorcycle(moto)}
                >
                  <Link href={`/motorcycles/${moto.slug}`} onClick={onClose} className="block w-full">
                    {moto.name.replace('Morbidelli ', '').replace('MBP ', '')}
                  </Link>
                </li>
              ))
            ) : (
              <li className="text-gray-400 text-sm font-replica">Nema modela</li>
            )}
          </ul>
        </div>

        {/* Image Column */}
        <div className="flex-[2] pl-16 flex items-center justify-start pt-8 pb-20">
          {activeMotorcycle && activeMotorcycle.image_url ? (
            <div className="relative w-full max-w-[600px] aspect-[4/3]">
              <Image
                src={activeMotorcycle.image_url}
                alt={activeMotorcycle.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
          ) : (
            <div className="text-gray-300 font-replica">Uskoro...</div>
          )}
        </div>
      </div>
    </div>
  );
}
