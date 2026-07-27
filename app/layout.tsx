import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ArkField",
  description: "Cluster PvE ArkField",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}