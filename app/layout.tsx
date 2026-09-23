import type { Metadata } from "next";
import localFont from "next/font/local";
import "leaflet/dist/leaflet.css";
import "./globals.css";

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
  title: "Morbidelli Srbija",
  description: "Dizajnirano za hrabre.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${replica.variable} ${replicaLight.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface">
        {children}
      </body>
    </html>
  );
}
