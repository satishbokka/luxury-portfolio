import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Explore the photography portfolio of ${siteConfig.name}. Weddings, portraits, events, fashion, nature, and travel photography.`,
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
