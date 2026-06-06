import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin-ext"],
  variable: "--font-inter-local",
  weight: ["100", "200", "300", "400", "500", "700"],
});

const replica = localFont({
  src: [
    {
      path: "./fonts/Replica-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/ReplicaPro.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Replica-Bold.ttf",
      weight: "700",
      style: "normal",
    }
  ],
  variable: "--font-replica-local",
});

const replicaLight = localFont({
  src: "./fonts/Replica-Light.ttf",
  variable: "--font-replica-light-local",
  weight: "300",
});

export const metadata: Metadata = {
  title: "Morbidelli",
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
      className={`${replica.variable} ${replicaLight.variable} ${inter.variable} h-full antialiased`}
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
