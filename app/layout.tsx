import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  variable: "--font-replica",
});

const replicaLight = localFont({
  src: "./fonts/Replica-Light.ttf",
  variable: "--font-replica-light",
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
      lang="en"
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
