import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedModels from "./components/FeaturedModels";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

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
