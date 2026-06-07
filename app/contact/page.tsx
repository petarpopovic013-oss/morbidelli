import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactPageForm from "../components/ContactPageForm";

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
