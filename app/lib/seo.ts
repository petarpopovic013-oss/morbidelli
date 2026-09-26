export const SITE_NAME = "Morbidelli Srbija";
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://morbidelli.rs"
).replace(/\/$/, "");

export const DEFAULT_DESCRIPTION =
  "Zvanična Morbidelli Srbija stranica. Otkrijte Morbidelli motocikle, specifikacije, dodatnu opremu, ovlašćene prodavce i servisnu mrežu u Srbiji.";

export function absoluteUrl(pathname = "/") {
  return new URL(pathname, `${SITE_URL}/`).toString();
}

export function truncateDescription(value: string, maxLength = 160) {
  const normalized = value.replace(/\s+/g, " ").trim();

  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, maxLength - 1).trimEnd()}…`;
}
