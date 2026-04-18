import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "didaktiker.info – Bildung, Pädagogik & Kreatives",
  description:
    "Individuelle Lösungen für Bildung, Medien & Performance. Coaching, Workshops, Konzeptarbeit und mehr – fundierte Didaktik für nachhaltigen Lernerfolg.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
