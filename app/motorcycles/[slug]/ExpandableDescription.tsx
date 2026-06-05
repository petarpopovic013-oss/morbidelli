'use client';

import { useState } from 'react';

export default function ExpandableDescription({ text }: { text: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text) {
    return <div className="text-gray-500 font-replica-light text-[15px] md:text-base leading-relaxed">Nema unetog opisa za ovaj model.</div>;
  }

  const isLong = text.length > 200;

  return (
    <div className="flex flex-col items-center w-full">
      <div 
        className={`text-gray-500 font-replica-light text-[15px] md:text-base leading-relaxed whitespace-pre-wrap max-w-3xl mx-auto transition-all duration-300 ${isExpanded ? '' : 'line-clamp-4'}`}
      >
        {text}
      </div>
      
      {isLong && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 font-replica font-bold text-sm text-[#42D2F2] uppercase tracking-wider border-b-2 border-[#42D2F2] pb-0.5 hover:text-black hover:border-black transition-colors"
        >
          {isExpanded ? 'Prikaži manje' : 'Prikaži više'}
        </button>
      )}
    </div>
  );
}
