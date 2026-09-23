import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Cormorant_Garamond, Caveat } from "next/font/google";
import "./globals.css";
import ClientProviders from "./components/ClientProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "didaktiker.info – Bildung, Pädagogik & Kreatives",
  description:
    "Individuelle Lösungen für Bildung, Medien & Performance. Coaching, Workshops, Konzeptarbeit und mehr – fundierte Didaktik für nachhaltigen Lernerfolg.",
  icons: {
    icon: "/dd_logosvg.svg",
    shortcut: "/dd_logosvg.svg",
    apple: "/dd_logosvg.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} ${cormorant.variable} ${caveat.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
