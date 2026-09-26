import type { Metadata } from "next";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedModels from "./components/FeaturedModels";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Morbidelli motocikli u Srbiji",
  description:
    "Upoznajte Morbidelli motocikle u Srbiji — italijanski dizajn, trkačko nasleđe, savremena tehnologija i modeli stvoreni za svaki stil vožnje.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Morbidelli motocikli u Srbiji",
    description:
      "Otkrijte Morbidelli motocikle, modele, dodatnu opremu i ovlašćenu prodajno-servisnu mrežu u Srbiji.",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col w-full bg-white">
        <Hero />
        <FeaturedModels />
        <AboutUs />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
