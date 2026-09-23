"use client";

import { useEffect, useMemo, useRef } from "react";
import L, { type Marker as LeafletMarker } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import type { DealerLocation } from "./locations";
import { getDirectionsUrl, getLocationLabel } from "./locations";

type LocationsMapProps = {
  locations: readonly DealerLocation[];
  activeId: string | null;
  onSelect: (id: string) => void;
};

type LocationGroup = {
  key: string;
  coordinates: [number, number];
  locations: DealerLocation[];
};

function groupLocations(locations: readonly DealerLocation[]) {
  const groups = new Map<string, LocationGroup>();

  locations.forEach((location) => {
    const key = location.coordinates.join(",");
    const existing = groups.get(key);

    if (existing) {
      existing.locations.push(location);
      return;
    }

    groups.set(key, {
      key,
      coordinates: location.coordinates,
      locations: [location],
    });
  });

  return Array.from(groups.values());
}

function MapViewport({
  locations,
  activeId,
}: Pick<LocationsMapProps, "locations" | "activeId">) {
  const map = useMap();

  useEffect(() => {
    const activeLocation = locations.find((location) => location.id === activeId);

    if (activeLocation) {
      map.flyTo(activeLocation.coordinates, 14, { duration: 0.8 });
      return;
    }

    if (locations.length > 0) {
      const bounds = L.latLngBounds(locations.map((location) => location.coordinates));
      map.fitBounds(bounds, { padding: [42, 42], maxZoom: 12 });
    }
  }, [activeId, locations, map]);

  return null;
}

function createMarkerIcon(group: LocationGroup, isActive: boolean) {
  const hasSales = group.locations.some((location) => location.type === "sales");
  const hasService = group.locations.some((location) => location.type === "service");
  const typeClass = hasSales && hasService ? "is-mixed" : hasSales ? "is-sales" : "is-service";

  return L.divIcon({
    className: "morbidelli-map-marker-wrapper",
    html: `<span class="morbidelli-map-marker ${typeClass}${isActive ? " is-active" : ""}"><span></span></span>`,
    iconSize: [34, 42],
    iconAnchor: [17, 40],
    popupAnchor: [0, -38],
  });
}

function LocationMarker({
  group,
  activeId,
  onSelect,
}: {
  group: LocationGroup;
  activeId: string | null;
  onSelect: (id: string) => void;
}) {
  const markerRef = useRef<LeafletMarker | null>(null);
  const isActive = group.locations.some((location) => location.id === activeId);
  const title = group.locations.map((location) => location.name).join(" / ");

  useEffect(() => {
    if (isActive) {
      markerRef.current?.openPopup();
    }
  }, [isActive]);

  return (
    <Marker
      ref={markerRef}
      position={group.coordinates}
      icon={createMarkerIcon(group, isActive)}
      title={title}
      alt={title}
      eventHandlers={{
        click: () => onSelect(group.locations[0].id),
      }}
    >
      <Popup className="morbidelli-map-popup" minWidth={245} maxWidth={290}>
        <div className="font-replica text-black">
          {group.locations.map((location, index) => (
            <div
              key={location.id}
              className={index > 0 ? "mt-4 border-t border-black/10 pt-4" : ""}
            >
              <span
                className={`mb-1 block text-[10px] font-bold uppercase tracking-[0.14em] ${
                  location.type === "sales" ? "text-[#159bc5]" : "text-[#e11d2e]"
                }`}
              >
                {getLocationLabel(location.type)}
              </span>
              <strong className="block text-[15px]">{location.name}</strong>
              <span className="mt-1 block text-xs text-gray-600">
                {location.address}, {location.city}
                {location.approximate ? " (približna lokacija)" : ""}
              </span>
              <div className="mt-3 flex flex-col gap-1 text-xs">
                <a className="font-medium hover:text-[#159bc5]" href={`tel:${location.phoneHref}`}>
                  {location.phone}
                </a>
                <a className="break-all hover:text-[#159bc5]" href={`mailto:${location.email}`}>
                  {location.email}
                </a>
                <a
                  className="mt-2 font-bold uppercase tracking-wide hover:text-[#159bc5]"
                  href={getDirectionsUrl(location)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pokreni navigaciju
                </a>
              </div>
            </div>
          ))}
        </div>
      </Popup>
    </Marker>
  );
}

export default function LocationsMap({ locations, activeId, onSelect }: LocationsMapProps) {
  const groups = useMemo(() => groupLocations(locations), [locations]);

  return (
    <MapContainer
      center={[44.15, 20.85]}
      zoom={7}
      minZoom={6}
      scrollWheelZoom
      className="h-full min-h-[360px] w-full bg-[#e9e9e9]"
      aria-label="Mapa ovlašćenih prodajnih mesta i servisa"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapViewport locations={locations} activeId={activeId} />

      {groups.map((group) => (
        <LocationMarker key={group.key} group={group} activeId={activeId} onSelect={onSelect} />
      ))}
    </MapContainer>
  );
}
