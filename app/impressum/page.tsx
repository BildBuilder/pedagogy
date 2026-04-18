import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum – didaktiker.info",
  description: "Impressum und rechtliche Angaben zu didaktiker.info",
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#FCF7ED] text-[#044745]">
      {/* Header bar */}
      <div className="bg-[#044745] px-5 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-[#FCF7ED]/10 border border-[#FCF7ED]/20 flex items-center justify-center text-[#C9A84C] font-bold text-sm group-hover:scale-105 transition-transform">
              dd
            </div>
            <span className="text-[#FCF7ED] font-medium">didaktiker.info</span>
          </Link>
          <Link
            href="/"
            className="text-[#FCF7ED]/70 text-sm hover:text-[#C9A84C] transition-colors flex items-center gap-1"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
              <path d="M19 12H5m7-7-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Zurück
          </Link>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-5 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-[#044745] mb-12">Impressum</h1>

        <div className="space-y-8 text-[#044745]/80 leading-relaxed">
          <section>
            <p className="text-[#044745] font-semibold mb-2">Anbieter</p>
            <p>didaktiker[a]gmx.de</p>
          </section>

          <section>
            <p className="text-[#044745] font-semibold mb-2">Kontakt</p>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:didaktiker@gmx.de"
                className="underline underline-offset-2 hover:text-[#C9A84C] transition-colors"
              >
                didaktiker@gmx.de
              </a>
            </p>
          </section>

          <section>
            <p className="text-[#044745] font-semibold mb-2">USt-ID</p>
            <p>Nicht umsatzsteuerpflichtig gemäß § 19 UStG</p>
          </section>

          <section>
            <p className="text-[#044745] font-semibold mb-2">
              Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV
            </p>
            <address className="not-italic">
              Helene Kleinfeld<br />
              Didaktiker<br />
              Lindenstrasse 2<br />
              Offene Werkstatt<br />
              03238 Massen
            </address>
          </section>

          <section>
            <p className="text-[#044745] font-semibold mb-2">
              Berufsbezeichnung und berufsrechtliche Regelungen
            </p>
            <p>Berufsbezeichnung: anderer Beruf</p>
          </section>

          <section>
            <p className="text-[#044745] font-semibold mb-2">EU-Streitschlichtung</p>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-[#C9A84C] transition-colors"
              >
                OS-Plattform
              </a>
              .<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section>
            <p className="text-[#044745] font-semibold mb-2">
              Verbraucher­streit­beilegung / Universal­schlichtungs­stelle
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
              einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>

        <div className="mt-14 pt-8 border-t border-[#044745]/10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#044745] text-[#FCF7ED] font-medium rounded-full hover:bg-[#0a6b68] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
              <path d="M19 12H5m7-7-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Zurück zur Startseite
          </Link>
        </div>
      </main>
    </div>
  );
}
