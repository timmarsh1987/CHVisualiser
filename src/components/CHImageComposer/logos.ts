import epamBlack from "./logos/epam-black.png";
import epamWhite from "./logos/epam-white.png";
import sitecore from "./logos/sitecore.png";

export type LogoId = "none" | "sitecore" | "epam-white" | "epam-black";

export const LOGOS: { id: Exclude<LogoId, "none">; label: string; src: string }[] = [
  { id: "sitecore", label: "Sitecore", src: sitecore },
  { id: "epam-white", label: "EPAM white", src: epamWhite },
  { id: "epam-black", label: "EPAM black", src: epamBlack },
];

export function isLogoId(value: unknown): value is LogoId {
  return value === "none" || value === "sitecore" || value === "epam-white" || value === "epam-black";
}
