import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactPageForm from "../components/ContactPageForm";
import InnerPageHero from "../components/InnerPageHero";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktirajte Morbidelli Srbija za informacije o modelima, cenama, dostupnosti, dodatnoj opremi, prodaji i ovlašćenom servisu.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    url: "/kontakt",
    title: "Kontaktirajte Morbidelli Srbija",
    description: "Pošaljite upit Morbidelli Srbija timu za prodaju, modele, opremu i servis.",
    images: [{ url: "/photos/kontakt.jpg", alt: "Kontakt Morbidelli Srbija" }],
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen w-full flex-grow bg-white pt-[76px] lg:pt-[88px]">
        <InnerPageHero
          eyebrow="Morbidelli Srbija"
          title="Kontakt"
          description="Imate pitanje o modelima, cenama, dostupnosti, dodatnoj opremi ili servisu? Pošaljite nam upit i naš tim će vam odgovoriti u najkraćem mogućem roku."
          summary={
            <div>
              <strong className="block font-replica text-3xl font-bold text-black">01</strong>
              <span className="font-replica-light text-[10px] uppercase tracking-[0.16em] text-gray-500">
                Mesto za sve upite
              </span>
            </div>
          }
        />
        <section className="w-full bg-[#f5f5f3] px-4 py-14 md:px-6 md:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <ContactPageForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
