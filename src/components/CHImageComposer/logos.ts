import epamBlack from "./logos/epam-black.png";
import epamWhite from "./logos/epam-white.png";
import sitecore from "./logos/sitecore.png";

export type EpamLogo = "none" | "white" | "black";

export const SITECORE_LOGO = { label: "Sitecore", src: sitecore };

export const EPAM_LOGOS: { id: Exclude<EpamLogo, "none">; label: string; src: string }[] = [
  { id: "white", label: "EPAM white", src: epamWhite },
  { id: "black", label: "EPAM black", src: epamBlack },
];

export type LogoImageKey = "sitecore" | "white" | "black";

export const LOGO_SOURCES: { id: LogoImageKey; src: string }[] = [
  { id: "sitecore", src: sitecore },
  { id: "white", src: epamWhite },
  { id: "black", src: epamBlack },
];
