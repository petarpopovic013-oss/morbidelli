'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Plus, X as CloseIcon } from 'lucide-react';

interface TechSpecCategory {
  title: string;
  items: { label: string; value: string | number }[];
}

interface TechSpecsAccordionProps {
  categories: TechSpecCategory[];
}

export default function TechSpecsAccordion({ categories }: TechSpecsAccordionProps) {
  // Filter out empty categories
  const validCategories = categories.filter(cat => cat.items.length > 0);
  
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (title: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    validCategories.forEach(cat => {
      allOpen[cat.title] = true;
    });
    setOpenCategories(allOpen);
  };

  const collapseAll = () => {
    setOpenCategories({});
  };

  if (validCategories.length === 0) return null;

  return (
    <div className="w-full max-w-4xl mx-auto my-20 px-4">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-3xl font-replica font-bold text-black uppercase tracking-tight mb-6">
          TEHNIČKE SPECIFIKACIJE
        </h2>
        
        <div className="flex gap-4 w-full justify-end">
          <button 
            onClick={collapseAll}
            className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1.5 text-xs font-replica font-medium hover:bg-gray-50 transition-colors"
          >
            Skupi sve <ChevronUp className="w-3 h-3" />
          </button>
          <button 
            onClick={expandAll}
            className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1.5 text-xs font-replica font-medium hover:bg-gray-50 transition-colors"
          >
            Proširi sve <ChevronDown className="w-3 h-3" />
          </button>
        </div>
      </div>

      <div className="border-t border-gray-200">
        {validCategories.map((cat, idx) => {
          const isOpen = openCategories[cat.title] || false;
          
          return (
            <div key={idx} className="border-b border-gray-200">
              <button
                onClick={() => toggleCategory(cat.title)}
                className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors group"
              >
                <span className="font-replica font-bold text-[17px] text-[#222]">{cat.title}</span>
                <div className="shrink-0 ml-4 text-[#222] transition-transform group-hover:scale-110">
                  {isOpen ? (
                    <CloseIcon className="w-6 h-6 stroke-[2.5]" />
                  ) : (
                    <Plus className="w-6 h-6 stroke-[2.5]" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pt-2 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8">
                      {cat.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex flex-col">
                          <span className="text-[15px] font-replica font-bold text-[#333] mb-1.5">
                            {item.label}
                          </span>
                          <span className="text-[15px] font-replica text-gray-500">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
