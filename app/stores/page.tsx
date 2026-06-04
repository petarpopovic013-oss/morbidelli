import Header from "../components/Header";
import Footer from "../components/Footer";

export default function StoresPage() {
  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col w-full bg-white pt-24 min-h-screen">
        <div className="container mx-auto px-6 max-w-[1440px] py-20 flex-grow flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-6xl font-replica font-bold text-black mb-6">Prodajna mesta i lokacije servisa</h1>
          <p className="text-xl text-gray-600 max-w-2xl font-replica-light">Ovo je demo stranica gde ćete pronaći mapu i spisak svih ovlašćenih dilera i servisa u Srbiji.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
