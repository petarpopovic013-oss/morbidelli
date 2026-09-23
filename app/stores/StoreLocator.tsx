"use client";

import dynamic from "next/dynamic";
import { Component, type ErrorInfo, type ReactNode, useMemo, useState } from "react";
import {
  ChevronRight,
  Mail,
  MapPin,
  Navigation,
  Phone,
  ShoppingBag,
  Wrench,
} from "lucide-react";
import type { DealerLocation, LocationType } from "./locations";
import { getDirectionsUrl, getLocationLabel, locations } from "./locations";

const LocationsMap = dynamic(() => import("./LocationsMap"), {
  ssr: false,
  loading: () => <MapPlaceholder message="Mapa se učitava…" />,
});

type Filter = "all" | LocationType;

const filters: { id: Filter; label: string; shortLabel: string }[] = [
  { id: "all", label: "Sve lokacije", shortLabel: "Sve" },
  { id: "sales", label: "Prodajna mesta", shortLabel: "Prodaja" },
  { id: "service", label: "Servisne lokacije", shortLabel: "Servisi" },
];

function MapPlaceholder({ message }: { message: string }) {
  return (
    <div className="flex h-full min-h-[360px] items-center justify-center bg-[#ececec] px-8 text-center">
      <div>
        <MapPin aria-hidden="true" className="mx-auto mb-4 h-8 w-8 text-track-cyan" />
        <p className="font-replica-light text-sm text-gray-600">{message}</p>
      </div>
    </div>
  );
}

class MapErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Mapa nije mogla da se učita", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <MapPlaceholder message="Mapa trenutno nije dostupna. Sve lokacije i kontakti nalaze se u listi." />;
    }

    return this.props.children;
  }
}

function LocationCard({
  location,
  active,
  onSelect,
}: {
  location: DealerLocation;
  active: boolean;
  onSelect: (id: string) => void;
}) {
  const isSales = location.type === "sales";

  return (
    <article
      id={`location-${location.id}`}
      className={`group border bg-white p-5 transition-all duration-300 md:p-6 ${
        active
          ? "border-black shadow-[0_16px_45px_rgba(0,0,0,0.10)]"
          : "border-black/10 hover:-translate-y-0.5 hover:border-black/30 hover:shadow-[0_12px_35px_rgba(0,0,0,0.07)]"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span
            className={`mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] ${
              isSales ? "text-[#159bc5]" : "text-[#e11d2e]"
            }`}
          >
            {isSales ? (
              <ShoppingBag aria-hidden="true" className="h-3.5 w-3.5" />
            ) : (
              <Wrench aria-hidden="true" className="h-3.5 w-3.5" />
            )}
            {getLocationLabel(location.type)}
          </span>
          <h3 className="font-replica text-xl font-bold leading-tight text-black">{location.name}</h3>
        </div>
        <span className="font-replica text-xs font-bold uppercase tracking-wider text-gray-400">
          {location.city}
        </span>
      </div>

      <div className="mt-5 space-y-3 border-t border-black/10 pt-5 text-sm">
        <div className="flex items-start gap-3 text-gray-700">
          <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-black" />
          <span>
            {location.address}, {location.city}
            {location.approximate && (
              <span className="mt-0.5 block text-[11px] text-gray-400">Približna pozicija na mapi</span>
            )}
          </span>
        </div>
        <a
          href={`tel:${location.phoneHref}`}
          className="flex items-center gap-3 text-gray-700 transition-colors hover:text-track-cyan"
        >
          <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-black" />
          {location.phone}
        </a>
        <a
          href={`mailto:${location.email}`}
          className="flex items-center gap-3 break-all text-gray-700 transition-colors hover:text-track-cyan"
        >
          <Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-black" />
          {location.email}
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => onSelect(location.id)}
          className="flex min-h-11 items-center justify-between bg-black px-4 py-3 text-left font-replica text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-track-cyan hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          aria-label={`Prikaži ${location.name}, ${location.address} na mapi`}
        >
          Prikaži na mapi
          <ChevronRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
        <a
          href={getDirectionsUrl(location)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-11 items-center justify-between border border-black/15 px-4 py-3 font-replica text-[11px] font-bold uppercase tracking-[0.12em] text-black transition-colors hover:border-black hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Navigacija
          <Navigation aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

export default function StoreLocator() {
  const [filter, setFilter] = useState<Filter>("all");
  const [activeId, setActiveId] = useState<string | null>(null);

  const filteredLocations = useMemo(
    () => (filter === "all" ? locations : locations.filter((location) => location.type === filter)),
    [filter],
  );

  const sections = useMemo(() => {
    const sales = filteredLocations.filter((location) => location.type === "sales");
    const service = filteredLocations.filter((location) => location.type === "service");

    return [
      { id: "sales", title: "Ovlašćeni prodavci", locations: sales },
      { id: "service", title: "Ovlašćeni serviseri", locations: service },
    ].filter((section) => section.locations.length > 0);
  }, [filteredLocations]);

  const selectLocation = (id: string) => {
    setActiveId(id);

    window.requestAnimationFrame(() => {
      document.getElementById("locations-map")?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  };

  return (
    <section className="w-full overflow-hidden bg-[#f5f5f3] px-4 py-14 md:px-6 md:py-20 lg:px-12">
      <div className="mx-auto min-w-0 max-w-[1440px]">
        <div className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="mb-3 block font-replica text-xs font-bold uppercase tracking-[0.2em] text-[#159bc5]">
              Mreža u Srbiji
            </span>
            <h2 className="max-w-2xl font-replica text-3xl font-bold leading-[1.05] text-black md:text-5xl">
              Pronađite najbližu lokaciju
            </h2>
          </div>

          <div
            className="grid min-w-0 w-full grid-cols-3 border border-black/15 bg-white p-1 lg:w-auto"
            role="group"
            aria-label="Filtriranje lokacija"
          >
            {filters.map((item) => {
              const selected = filter === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => {
                    setFilter(item.id);
                    setActiveId(null);
                  }}
                  className={`min-h-11 min-w-0 overflow-hidden px-1 py-2 font-replica text-[9px] font-bold uppercase tracking-[0.06em] transition-colors sm:px-5 sm:text-xs sm:tracking-[0.1em] ${
                    selected ? "bg-black text-white" : "bg-white text-black hover:bg-black/5"
                  }`}
                >
                  <span className="sm:hidden">{item.shortLabel}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 border-y border-black/10 py-3 text-[9px] uppercase tracking-[0.08em] text-gray-600 sm:gap-x-6 sm:text-[11px] sm:tracking-[0.12em]">
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-track-cyan" />
            Prodajna mesta
          </span>
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-track-red" />
            Servisne lokacije
          </span>
          <span className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-[linear-gradient(135deg,#5ACCF0_0_50%,#FF212A_50%_100%)]"
            />
            Prodaja i servis
          </span>
        </div>

        <div className="grid min-w-0 items-start gap-6 lg:grid-cols-[minmax(360px,0.82fr)_minmax(0,1.5fr)] xl:grid-cols-[470px_minmax(0,1fr)]">
          <div className="order-2 space-y-10 lg:order-1">
            {sections.map((section) => (
              <div key={section.id}>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="font-replica text-base font-bold uppercase tracking-[0.12em] text-black">
                    {section.title}
                  </h2>
                  <span className="font-replica-light text-xs text-gray-500">
                    {section.locations.length} {section.locations.length === 1 ? "lokacija" : "lokacija"}
                  </span>
                </div>
                <div className="space-y-4">
                  {section.locations.map((location) => (
                    <LocationCard
                      key={location.id}
                      location={location}
                      active={activeId === location.id}
                      onSelect={selectLocation}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            id="locations-map"
            className="order-1 h-[420px] min-w-0 w-full overflow-hidden border border-black/10 bg-[#ececec] shadow-[0_18px_50px_rgba(0,0,0,0.08)] lg:sticky lg:top-28 lg:order-2 lg:h-[calc(100vh-9rem)] lg:min-h-[580px] lg:max-h-[760px]"
          >
            <MapErrorBoundary>
              <LocationsMap locations={filteredLocations} activeId={activeId} onSelect={setActiveId} />
            </MapErrorBoundary>
          </div>
        </div>
      </div>
    </section>
  );
}
