import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactPageForm from "../components/ContactPageForm";

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
      <main className="flex-grow w-full bg-white pt-24 min-h-screen">
        <div className="container mx-auto px-6 max-w-[1440px] py-16 lg:py-24">
          <ContactPageForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
