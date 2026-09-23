import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StoreLocator from "./StoreLocator";

export const metadata: Metadata = {
  title: "Prodajna mesta i lokacije servisa | Morbidelli Srbija",
  description:
    "Pronađite ovlašćena Morbidelli prodajna mesta i servisne lokacije širom Srbije.",
};

export default function StoresPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen w-full flex-grow bg-white pt-[76px] lg:pt-[88px]">
        <section className="relative overflow-hidden border-b border-black/10 bg-white px-4 py-16 md:px-6 md:py-24 lg:px-12 lg:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-36 -top-28 h-[420px] w-[420px] rounded-full border-[80px] border-black/[0.025] md:h-[620px] md:w-[620px] md:border-[110px]"
          />
          <div className="relative mx-auto max-w-[1440px]">
            <div className="mb-7 h-1 w-20 -skew-x-[45deg] bg-track-cyan md:w-28" />
            <p className="mb-4 font-replica text-xs font-bold uppercase tracking-[0.24em] text-gray-500">
              Morbidelli Srbija
            </p>
            <h1 className="max-w-5xl break-words font-replica text-[36px] font-bold leading-[1.02] tracking-[-0.035em] text-black sm:text-5xl md:text-7xl lg:text-[82px]">
              Prodajna mesta i lokacije servisa
            </h1>
            <div className="mt-8 flex max-w-4xl flex-col gap-8 border-t border-black/10 pt-7 md:flex-row md:items-end md:justify-between">
              <p className="max-w-2xl font-replica-light text-base leading-relaxed text-gray-600 md:text-lg">
                Pronađite ovlašćenog prodavca ili servis u svojoj blizini. Izaberite tip lokacije,
                pregledajte kontakte i pokrenite navigaciju.
              </p>
              <div className="flex shrink-0 gap-8">
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
            </div>
          </div>
        </section>

        <StoreLocator />
      </main>
      <Footer />
    </>
  );
}
