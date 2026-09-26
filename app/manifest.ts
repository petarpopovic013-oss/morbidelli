import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Morbidelli Srbija",
    short_name: "Morbidelli",
    description: "Morbidelli motocikli, dodatna oprema, prodajna mesta i servisi u Srbiji.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    lang: "sr-RS",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
