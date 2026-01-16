import { ClientInfo, PackageOption, ServiceItem } from "./types";
import { 
  Zap, 
  Palette, 
  Globe, 
  TrendingUp, 
  Crown, 
  Target, 
  Layout, 
  Share2 
} from "lucide-react";

export const CLIENT_INFO: ClientInfo = {
  name: "The Greatest Show Production",
  contact: "Fülöp Roland",
  date: "2026. január 16.",
  valid: "2026. március 31."
};

export const ONE_TIME_SERVICES: ServiceItem[] = [
  {
    id: "A1",
    category: "Egyszeri szolgáltatás",
    title: "Marketingkommunikációs Stratégia",
    description: "Komplex, koherens digitális marketingkommunikációs stratégiai anyag elkészítése és prezentálása.",
    features: [
      "Tartalomstratégia és digitális csatorna mix",
      "Kommunikációs stílus kialakítása",
      "Célcsoport meghatározás, elemzés",
      "Hirdetési stratégia kialakítása",
      "Márkaüzenetek, KPI-k meghatározása",
      "Hírlevélrendszer koncepció"
    ],
    price: {
      net: 250000,
      vat: 67500,
      gross: 317500
    },
    // icon: Target
  },
  {
    id: "A2",
    category: "Egyszeri szolgáltatás",
    title: "Arculattervezés",
    subtitle: "Umbrella brand & partysorozat",
    description: "Teljes vizuális identitás mindkét brand (The Greatest Show + partysorozat) számára.",
    features: [
      "3 eltérő koncepció kidolgozása",
      "Logótervezés, színpaletta, tipográfia",
      "Brandbook készítés",
      "Social Media Kit (Cover, Profil, Sablonok)",
      "Grafikai elemek / Pattern"
    ],
    price: {
      net: 700000,
      vat: 189000,
      gross: 889000
    },
    // icon: Palette
  },
  {
    id: "A3",
    category: "Egyszeri szolgáltatás",
    title: "Webfejlesztés",
    subtitle: "Weboldal & Landing (Indikatív)",
    description: "Teljes körű weboldal fejlesztés mindkét brand számára UI/UX tervezéssel.",
    features: [
      "Drótváz (wireframe) és UI/UX tervezés",
      "Frontend és backend fejlesztés",
      "CMS rendszer beállítása",
      "SEO és analitika integráció",
      "Szövegek és grafikák feltöltése"
    ],
    price: {
      net: 750000,
      vat: 202500,
      gross: 952500
    },
    customPriceRange: {
        net: "500 000 - 750 000 Ft",
        gross: "635 000 - 952 500 Ft"
    },
    note: "Az ár indikatív. Pontosítás a specifikáció után.",
    // icon: Globe
  }
];

export const RECURRING_PACKAGES: PackageOption[] = [
  {
    id: "C1",
    name: "dropboost.",
    logo: "https://cdn.prod.website-files.com/67696bf6a7f399ccfcfd653f/696a117805ec9af104d82575_dropboost_logo.svg",
    color: "#ff6b00",
    level: "Basic",
    minContract: "6 hónap",
    monthlyPrice: {
      net: 220000,
      vat: 59400,
      gross: 279400
    },
    yearlyPrice: { // For 6 months as per doc
        net: 1320000,
        vat: 356400,
        gross: 1676400
    },
    features: [
      "Havi 4-6 db poszt készítése",
      "Grafikai, szövegírási szolgáltatás",
      "Social media hirdetések kezelése",
      "Teljes PPC menedzsment",
      "Havi riport"
    ]
  },
  {
    id: "C2",
    name: "droprime.",
    logo: "https://cdn.prod.website-files.com/67696bf6a7f399ccfcfd653f/696a1175ffdad5ee980222ab_droprime_logo.svg",
    color: "#8236fb",
    level: "Premium",
    minContract: "12 hónap",
    monthlyPrice: {
      net: 300000,
      vat: 81000,
      gross: 381000
    },
    yearlyPrice: { // For 12 months as per doc
        net: 3600000,
        vat: 972000,
        gross: 4572000
    },
    features: [
      "Havi 8-12 db poszt készítése",
      "Grafikai, szövegírási szolgáltatás",
      "Social media hirdetések kezelése",
      "Teljes PPC menedzsment",
      "Hírlevél rendszer üzemeltetése",
      "Weboldal menedzsment",
      "Vezetői összefoglaló"
    ]
  }
];

export const SETUP_TOTAL = {
    net: 1700000,
    vat: 459000,
    gross: 2159000
}

export const TERMS = [
  "Az ajánlat közvetített szolgáltatásokat is tartalmazhat.",
  "Az ajánlat szellemi tulajdon és titoktartási kötelezettség alatt áll.",
  "Harmadik félnek csak előzetes írásos jóváhagyással adható át."
];

export const EXCLUSIONS = [
  "Felhasznált képek, illusztrációk, zenék jogdíjai",
  "Hirdetési kampányok média költsége (Google/Meta)",
  "Szoftver előfizetési díjak (hírlevél, analytics)",
  "Forgatási költségek (igény esetén)",
  "Egyéb, jelenleg nem meghatározható tételek"
];