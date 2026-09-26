"use client";

import Image from "next/image";
import { useState } from "react";

export type EquipmentProduct = {
  name: string;
  image: string;
  model?: string;
};

export type EquipmentCategory = {
  id: "kacige" | "koferi" | "nosaci";
  label: string;
  eyebrow: string;
  description: string;
  cover: string;
  products: EquipmentProduct[];
};

type EquipmentCatalogueProps = {
  categories: EquipmentCategory[];
};

export default function EquipmentCatalogue({ categories }: EquipmentCatalogueProps) {
  const [activeId, setActiveId] = useState<EquipmentCategory["id"]>(categories[0].id);
  const activeCategory = categories.find((category) => category.id === activeId) ?? categories[0];

  return (
    <section className="px-4 py-16 md:px-6 md:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex flex-col gap-3 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 block font-replica text-[10px] font-bold uppercase tracking-[0.24em] text-track-cyan">
              Izaberi kategoriju
            </span>
            <h2 className="font-replica text-3xl font-bold uppercase tracking-[-0.03em] text-black md:text-5xl">
              Šta tražiš?
            </h2>
          </div>
          <p className="max-w-md font-replica-light text-sm leading-relaxed text-gray-500 md:text-right">
            Ponuda izabrane kategorije prikazaće se odmah ispod.
          </p>
        </div>

        <fieldset
          aria-label="Kategorije dodatne opreme"
          className="grid min-w-0 gap-3 md:grid-cols-3 md:gap-5"
        >
          <legend className="sr-only">Izaberite kategoriju dodatne opreme</legend>
          {categories.map((category, index) => {
            const isActive = category.id === activeId;

            return (
              <label
                key={category.id}
                className={`group relative min-h-[210px] min-w-0 cursor-pointer overflow-hidden border p-6 transition-all duration-300 focus-within:ring-2 focus-within:ring-track-cyan focus-within:ring-offset-2 md:min-h-[290px] md:p-8 ${
                  isActive
                    ? "border-black bg-white text-white shadow-[0_18px_55px_rgba(0,0,0,0.15)]"
                    : "border-black/15 bg-[#f7f7f5] text-black hover:border-black"
                }`}
              >
                <input
                  type="radio"
                  name="equipment-category"
                  value={category.id}
                  checked={isActive}
                  onChange={() => setActiveId(category.id)}
                  className="sr-only"
                />

                <Image
                  src={category.cover}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                  className={`object-contain object-right-bottom transition-all duration-500 group-hover:scale-105 ${
                    isActive ? "opacity-100" : "opacity-55 mix-blend-multiply"
                  }`}
                />
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 transition-colors duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-black via-black/90 to-black/20"
                      : "bg-gradient-to-r from-[#f7f7f5] via-[#f7f7f5]/85 to-transparent"
                  }`}
                />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between gap-5">
                    <span
                      className={`font-replica text-[10px] font-bold tracking-[0.2em] ${
                        isActive ? "text-track-cyan" : "text-gray-500"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`grid h-6 w-6 place-items-center rounded-full border transition-colors ${
                        isActive ? "border-track-cyan" : "border-black/30"
                      }`}
                    >
                      <span className={`h-2.5 w-2.5 rounded-full ${isActive ? "bg-track-cyan" : "bg-transparent"}`} />
                    </span>
                  </div>
                  <div className="mt-14 max-w-[260px]">
                    <p
                      className={`mb-2 font-replica text-[9px] font-bold uppercase tracking-[0.18em] ${
                        isActive ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {category.eyebrow}
                    </p>
                    <h3 className="font-replica text-2xl font-bold uppercase leading-none tracking-[-0.025em] md:text-[32px]">
                      {category.label}
                    </h3>
                    <p className={`mt-4 text-[11px] ${isActive ? "text-gray-300" : "text-gray-600"}`}>
                      {category.products.length.toString().padStart(2, "0")} proizvoda
                    </p>
                  </div>
                </div>
              </label>
            );
          })}
        </fieldset>

        <div key={activeCategory.id} className="animate-fadeInUp pt-20 md:pt-28">
          <div className="mb-8 grid gap-6 border-b-2 border-black pb-8 md:mb-0 md:grid-cols-[1fr_auto] md:items-end md:pb-10">
            <div>
              <span className="mb-3 block font-replica text-[10px] font-bold uppercase tracking-[0.24em] text-track-cyan">
                Trenutno prikazano
              </span>
              <h2 className="font-replica text-4xl font-bold uppercase tracking-[-0.035em] text-black md:text-6xl">
                {activeCategory.label}
              </h2>
              <p className="mt-4 max-w-xl font-replica-light text-sm leading-relaxed text-gray-500 md:text-base">
                {activeCategory.description}
              </p>
            </div>
            <span className="font-replica text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
              {activeCategory.products.length.toString().padStart(2, "0")} proizvoda
            </span>
          </div>

          <div>
            {activeCategory.products.map((product, index) => (
              <article
                key={`${product.image}-${product.name}`}
                className="group grid grid-cols-[96px_1fr] items-center gap-5 border-b border-black/10 py-5 transition-colors duration-300 hover:bg-[#f7f7f5] sm:grid-cols-[150px_1fr] sm:gap-8 sm:py-7 md:grid-cols-[220px_1fr_auto] md:gap-12 md:px-6 lg:grid-cols-[280px_1fr_auto]"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-[#f3f3f1]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 639px) 96px, (max-width: 767px) 150px, 280px"
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.04] md:p-4"
                  />
                </div>

                <div className="min-w-0 py-2">
                  {product.model && (
                    <p className="mb-2 font-replica text-[9px] font-bold uppercase tracking-[0.2em] text-track-cyan md:text-[10px]">
                      Morbidelli {product.model}
                    </p>
                  )}
                  <h3 className="break-words font-replica text-base font-bold leading-tight tracking-[-0.015em] text-black sm:text-xl md:max-w-3xl md:text-2xl lg:text-[28px]">
                    {product.name}
                  </h3>
                </div>

                <span className="hidden font-replica text-[10px] font-bold tracking-[0.2em] text-gray-400 md:block">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
