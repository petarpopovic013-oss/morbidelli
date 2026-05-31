import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedModels from "./components/FeaturedModels";
import AboutUs from "./components/AboutUs";
import Location from "./components/Location";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col w-full">
        <Hero />
        <FeaturedModels />
        <AboutUs />
        <Location />
      </main>
      <Footer />
    </>
  );
}
