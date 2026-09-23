export type LocationType = "sales" | "service";

export type DealerLocation = {
  id: string;
  name: string;
  type: LocationType;
  city: string;
  address: string;
  phone: string;
  phoneHref: string;
  email: string;
  coordinates: [number, number];
  approximate?: boolean;
};

const NOVI_SAD: [number, number] = [45.2567054, 19.815934];
const SUBOTICA_SALES: [number, number] = [46.0960579, 19.6562048];
const SUBOTICA_SERVICE: [number, number] = [46.0917333, 19.6491968];
const ZAJECAR: [number, number] = [43.901609, 22.251622];
const MAKIS: [number, number] = [44.7689252, 20.3683634];
const SOMBOR_MOTO_D: [number, number] = [45.7777123, 19.1196207];
const SOMBOR_AURUM: [number, number] = [45.7678786, 19.1275803];
const LESKOVAC: [number, number] = [42.9950433, 21.963133];

export const locations: readonly DealerLocation[] = [
  {
    id: "ddm-company-sales",
    name: "DDM Company doo",
    type: "sales",
    city: "Novi Sad",
    address: "Dr. Svetislava Kasapinovića 9",
    phone: "064/133-45-89",
    phoneHref: "+381641334589",
    email: "ddmcompany@gmail.com",
    coordinates: NOVI_SAD,
  },
  {
    id: "simi-moto-sales",
    name: "ŠIMI MOTO ztr",
    type: "sales",
    city: "Subotica",
    address: "Somborski put 17",
    phone: "061/60-600-77",
    phoneHref: "+381616060077",
    email: "simimotoshop@gmail.com",
    coordinates: SUBOTICA_SALES,
  },
  {
    id: "ramdus-sales",
    name: "RAMDUS",
    type: "sales",
    city: "Zaječar",
    address: "Daruvarska 33",
    phone: "0616325031",
    phoneHref: "+381616325031",
    email: "ramdusmotoshop@gmail.com",
    coordinates: ZAJECAR,
  },
  {
    id: "troll-auto-sales",
    name: "TROLL AUTO doo",
    type: "sales",
    city: "Beograd",
    address: "Makiš",
    phone: "0693644664",
    phoneHref: "+381693644664",
    email: "info.trollauto@gmail.com",
    coordinates: MAKIS,
    approximate: true,
  },
  {
    id: "moto-d-sales",
    name: "MOTO D",
    type: "sales",
    city: "Sombor",
    address: "Miloša Obilića 21",
    phone: "0637344795",
    phoneHref: "+381637344795",
    email: "shop@moto-d.net",
    coordinates: SOMBOR_MOTO_D,
  },
  {
    id: "ddm-company-service",
    name: "DDM Company doo",
    type: "service",
    city: "Novi Sad",
    address: "Dr. Svetislava Kasapinovića 9",
    phone: "060/300-16-34",
    phoneHref: "+381603001634",
    email: "aleksandar.ddmcompany@gmail.com",
    coordinates: NOVI_SAD,
  },
  {
    id: "simi-moto-service",
    name: "ŠIMI MOTO ztr",
    type: "service",
    city: "Subotica",
    address: "Somborski put 73",
    phone: "065/600-37-37",
    phoneHref: "+381656003737",
    email: "simimotoshop@gmail.com",
    coordinates: SUBOTICA_SERVICE,
  },
  {
    id: "ramdus-service",
    name: "RAMDUS",
    type: "service",
    city: "Zaječar",
    address: "Daruvarska 33",
    phone: "061/63-25-031",
    phoneHref: "+381616325031",
    email: "ramdusmotoshop@gmail.com",
    coordinates: ZAJECAR,
  },
  {
    id: "troll-auto-service",
    name: "TROLL AUTO doo",
    type: "service",
    city: "Beograd",
    address: "Makiš",
    phone: "069/36-44-664",
    phoneHref: "+381693644664",
    email: "info.trollauto@gmail.com",
    coordinates: MAKIS,
    approximate: true,
  },
  {
    id: "aurum-auto-service",
    name: "AURUM AUTO",
    type: "service",
    city: "Sombor",
    address: "Banatska 54",
    phone: "063/427-322",
    phoneHref: "+38163427322",
    email: "fivazlan@gmail.com",
    coordinates: SOMBOR_AURUM,
  },
  {
    id: "top-auto-service",
    name: "TOP AUTO",
    type: "service",
    city: "Leskovac",
    address: "Božidara Veličkovića 1",
    phone: "069/25-45-300",
    phoneHref: "+381692545300",
    email: "office@topauto.rs",
    coordinates: LESKOVAC,
  },
] as const;

export function getLocationLabel(type: LocationType) {
  return type === "sales" ? "Prodajno mesto" : "Ovlašćeni servis";
}

export function getDirectionsUrl(location: DealerLocation) {
  const destination = location.approximate
    ? `${location.coordinates[0]},${location.coordinates[1]}`
    : `${location.address}, ${location.city}, Srbija`;

  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
}
