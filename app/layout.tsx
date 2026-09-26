import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import StructuredData from "./components/StructuredData";
import { absoluteUrl, DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from "./lib/seo";

const replica = localFont({
  src: "./fonts/ReplicaPro.ttf",
  variable: "--font-replica-local",
  weight: "500",
  style: "normal",
});

const replicaLight = localFont({
  src: "./fonts/ReplicaPro.ttf",
  variable: "--font-replica-light-local",
  weight: "500",
  style: "normal",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Morbidelli Srbija | Motocikli, oprema i ovlašćeni servisi",
    template: "%s | Morbidelli Srbija",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Morbidelli Srbija", url: SITE_URL }],
  creator: "Morbidelli Srbija",
  publisher: "DDM Company doo",
  keywords: [
    "Morbidelli Srbija",
    "Morbidelli motocikli",
    "motocikli Srbija",
    "motori Srbija",
    "Morbidelli oprema",
    "Morbidelli servis",
    "Morbidelli prodaja",
  ],
  category: "Motocikli",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Morbidelli Srbija | Dizajnirano za hrabre",
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/heroimage.png",
        width: 2210,
        height: 1080,
        alt: "Morbidelli Srbija motocikli",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morbidelli Srbija | Dizajnirano za hrabre",
    description: DEFAULT_DESCRIPTION,
    images: ["/heroimage.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": ["Organization", "MotorcycleDealer"],
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: absoluteUrl("/logos/Full-Logo-Solid-Black-WB.webp"),
  image: absoluteUrl("/heroimage.png"),
  description: DEFAULT_DESCRIPTION,
  email: "ddmcompany@gmail.com",
  telephone: "+381641334589",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dr. Svetislava Kasapinovića 9",
    addressLocality: "Novi Sad",
    addressCountry: "RS",
  },
  areaServed: {
    "@type": "Country",
    name: "Srbija",
  },
  sameAs: ["https://www.instagram.com/ddmcompany.ns/"],
  parentOrganization: {
    "@type": "Organization",
    name: "DDM Company doo",
    url: "https://ddmcompany.rs",
  },
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  inLanguage: "sr-RS",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr-Latn"
      className={`${replica.variable} ${replicaLight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-on-surface">
        <StructuredData data={[organizationStructuredData, websiteStructuredData]} />
        {children}
      </body>
    </html>
  );
}
