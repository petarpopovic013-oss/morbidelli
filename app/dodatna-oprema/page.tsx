import type { Metadata } from "next";
import { readdirSync } from "node:fs";
import path from "node:path";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StructuredData from "../components/StructuredData";
import { absoluteUrl } from "../lib/seo";
import EquipmentCatalogue, {
  type EquipmentCategory,
  type EquipmentProduct,
} from "./EquipmentCatalogue";

export const metadata: Metadata = {
  title: "Dodatna oprema za motocikle",
  description:
    "Pogledajte ponudu kaciga, centralnih i bočnih kofera i nosača kofera za Morbidelli motocikle u Srbiji.",
  alternates: { canonical: "/dodatna-oprema" },
  openGraph: {
    url: "/dodatna-oprema",
    title: "Dodatna oprema za motocikle",
    description: "Kacige, koferi i nosači kofera za Morbidelli motocikle.",
    images: [
      {
        url: "/dodatna-oprema/kacige/Airoh%20Commander%202%20Carbon.jpg",
        alt: "Dodatna oprema za Morbidelli motocikle",
      },
    ],
  },
};

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

function encodePublicPath(relativePath: string) {
  return `/${relativePath
    .split(path.sep)
    .map((segment) => encodeURIComponent(segment))
    .join("/")}`;
}

function getProducts(directory: string, publicDirectory: string): EquipmentProduct[] {
  const absoluteDirectory = path.join(process.cwd(), "public", directory);

  return readdirSync(absoluteDirectory, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile() && IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => {
      const absolutePath = path.join(entry.parentPath, entry.name);
      const relativePath = path.relative(absoluteDirectory, absolutePath);
      const model = path.dirname(relativePath) === "." ? undefined : path.dirname(relativePath);

      return {
        name: path
          .basename(entry.name, path.extname(entry.name))
          .replace(/\s+/g, " ")
          .replace(/\bjet\b/gi, "Jet")
          .trim(),
        image: encodePublicPath(path.join(publicDirectory, relativePath)),
        model: model?.replaceAll(path.sep, " / "),
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name, "sr"));
}

const categories: EquipmentCategory[] = [
  {
    id: "kacige",
    label: "Kacige",
    eyebrow: "Zaštita i stil",
    description: "Integralne, modularne, jet i enduro kacige za svaki stil vožnje.",
    cover: "/dodatna-oprema/kacige/Airoh%20Commander%202%20Carbon.jpg",
    products: getProducts("dodatna-oprema/kacige", "dodatna-oprema/kacige"),
  },
  {
    id: "koferi",
    label: "Koferi",
    eyebrow: "Prostor bez kompromisa",
    description: "Centralni i bočni koferi za grad, putovanja i duge avanture.",
    cover: "/dodatna-oprema/koferi/TOP%20CASE%20TR48%20TERRA%20.webp",
    products: getProducts("dodatna-oprema/koferi", "dodatna-oprema/koferi"),
  },
  {
    id: "nosaci",
    label: "Nosači kofera",
    eyebrow: "Za Morbidelli modele",
    description: "Nosači centralnih i bočnih kofera namenjeni Morbidelli motociklima.",
    cover:
      "/dodatna-oprema/nosaci/T502X/TOP%20CASE%20FITTING%20KIT%20MORBIDELLI%20T502X%20.webp",
    products: getProducts("dodatna-oprema/nosaci", "dodatna-oprema/nosaci"),
  },
];

const equipmentStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${absoluteUrl("/dodatna-oprema")}#oprema`,
  name: "Dodatna oprema za motocikle",
  numberOfItems: categories.reduce((total, category) => total + category.products.length, 0),
  itemListElement: categories.flatMap((category) =>
    category.products.map((product, productIndex) => ({
      "@type": "ListItem",
      position:
        categories
          .slice(0, categories.findIndex((item) => item.id === category.id))
          .reduce((total, item) => total + item.products.length, 0) +
        productIndex +
        1,
      item: {
        "@type": "Product",
        name: product.name,
        image: absoluteUrl(product.image),
        category: category.label,
        brand: category.id === "nosaci" ? { "@type": "Brand", name: "Morbidelli" } : undefined,
      },
    })),
  ),
};

export default function EquipmentPage() {
  return (
    <>
      <StructuredData data={equipmentStructuredData} />
      <Header />
      <main className="min-h-screen w-full flex-grow bg-white pt-[76px] lg:pt-[88px]">
        <section className="relative overflow-hidden border-b border-black/10 bg-[#f5f5f3] px-4 py-16 md:px-6 md:py-24 lg:px-12 lg:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-40 h-[440px] w-[440px] rounded-full border-[78px] border-black/[0.025] md:h-[680px] md:w-[680px] md:border-[120px]"
          />
          <div className="relative mx-auto max-w-[1440px]">
            <div className="mb-7 h-1 w-20 -skew-x-[45deg] bg-track-cyan md:w-28" />
            <p className="mb-4 font-replica text-xs font-bold uppercase tracking-[0.24em] text-gray-500">
              Morbidelli kolekcija
            </p>
            <h1 className="max-w-5xl break-words font-replica text-[36px] font-bold uppercase leading-[0.95] tracking-[-0.045em] text-black min-[370px]:text-[40px] sm:text-6xl md:text-7xl lg:text-[92px]">
              Dodatna oprema
            </h1>
            <div className="mt-8 flex max-w-4xl flex-col gap-6 border-t border-black/15 pt-7 md:flex-row md:items-end md:justify-between">
              <p className="min-w-0 max-w-2xl font-replica-light text-base leading-relaxed text-gray-600 md:text-lg">
                Izaberi kategoriju i pronađi opremu koja prati svaki kilometar — od svakodnevne
                vožnje do najdužih putovanja.
              </p>
              <p className="shrink-0 font-replica text-[10px] font-bold uppercase tracking-[0.2em] text-black">
                03 kategorije
              </p>
            </div>
          </div>
        </section>

        <EquipmentCatalogue categories={categories} />
      </main>
      <Footer />
    </>
  );
}
