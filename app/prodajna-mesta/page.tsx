import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StoreLocator from "./StoreLocator";
import { getLocationLabel, locations } from "./locations";
import StructuredData from "../components/StructuredData";
import InnerPageHero from "../components/InnerPageHero";
import { absoluteUrl } from "../lib/seo";

export const metadata: Metadata = {
  title: "Prodajna mesta i ovlašćeni servisi",
  description:
    "Pronađite ovlašćena Morbidelli prodajna mesta i servisne lokacije širom Srbije.",
  alternates: { canonical: "/prodajna-mesta" },
  openGraph: {
    url: "/prodajna-mesta",
    title: "Morbidelli prodajna mesta i servisi u Srbiji",
    description:
      "Adrese, telefoni i navigacija do ovlašćenih Morbidelli prodavaca i servisera širom Srbije.",
  },
};

const locationsStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${absoluteUrl("/prodajna-mesta")}#lokacije`,
  name: "Morbidelli prodajna mesta i ovlašćeni servisi u Srbiji",
  numberOfItems: locations.length,
  itemListElement: locations.map((location, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "LocalBusiness",
      name: `${location.name} — ${getLocationLabel(location.type)}`,
      parentOrganization: { "@id": `${absoluteUrl("/")}#organization` },
      address: {
        "@type": "PostalAddress",
        streetAddress: location.address,
        addressLocality: location.city,
        addressCountry: "RS",
      },
      telephone: location.phoneHref,
      email: location.email,
      geo: {
        "@type": "GeoCoordinates",
        latitude: location.coordinates[0],
        longitude: location.coordinates[1],
      },
    },
  })),
};

export default function StoresPage() {
  return (
    <>
      <StructuredData data={locationsStructuredData} />
      <Header />
      <main className="min-h-screen w-full flex-grow bg-white pt-[76px] lg:pt-[88px]">
        <InnerPageHero
          eyebrow="Morbidelli Srbija"
          title="Prodajna mesta i lokacije servisa"
          description="Pronađite ovlašćenog prodavca ili servis u svojoj blizini. Izaberite tip lokacije, pregledajte kontakte i pokrenite navigaciju."
          summary={
            <div className="flex gap-8">
              <div>
                <strong className="block font-replica text-3xl font-bold text-black">05</strong>
                <span className="font-replica-light text-[10px] uppercase tracking-[0.16em] text-gray-500">
                  Prodajnih mesta
                </span>
              </div>
              <div>
                <strong className="block font-replica text-3xl font-bold text-black">06</strong>
                <span className="font-replica-light text-[10px] uppercase tracking-[0.16em] text-gray-500">
                  Servisnih lokacija
                </span>
              </div>
            </div>
          }
        />

        <StoreLocator />
      </main>
      <Footer />
    </>
  );
}
