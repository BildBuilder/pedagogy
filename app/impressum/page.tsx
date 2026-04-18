import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum \u2013 didaktiker",
  description: "Impressum und rechtliche Angaben zu didaktiker",
};

const sections = [
  {
    label: "Anbieter",
    content: <p>didaktiker[a]gmx.de</p>,
  },
];

export default function ImpressumPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#FCF7ED", fontFamily: "var(--font-geist-sans, sans-serif)" }}
    >
      {/* ── Top bar ── */}
      <div className="bg-[#044745]">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 h-[68px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <img
              src="/dd_logosvg.svg"
              alt="didaktiker"
              width={34}
              height={34}
              className="transition-opacity duration-300 group-hover:opacity-75"
            />
            <span
              className="text-[#FCF7ED] text-sm font-medium tracking-wide"
              style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "1.05rem" }}
            >
              didaktiker
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-[#FCF7ED]/55 text-xs tracking-wide hover:text-[#C9A84C] transition-colors duration-200"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-3.5 h-3.5">
              <path d="M19 12H5m7-7-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Zur&uuml;ck
          </Link>
        </div>
      </div>

      {/* ── Hero band ── */}
      <div
        className="bg-[#044745] pb-16 pt-14 px-6 sm:px-10"
        style={{
          borderBottom: "1px solid rgba(201,168,76,0.18)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C9A84C]/70 text-[10px] tracking-[0.28em] uppercase font-semibold mb-4">
            Rechtliche Angaben
          </p>
          <h1
            className="text-[#FCF7ED] leading-tight"
            style={{
              fontFamily: "var(--font-cormorant, Georgia, serif)",
              fontWeight: 300,
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
            }}
          >
            Impressum
          </h1>
          <div className="mt-5 w-12 h-px bg-[#C9A84C]/50" />
        </div>
      </div>

      {/* ── Content ── */}
      <main className="max-w-5xl mx-auto px-6 sm:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-[1fr_2fr] gap-x-16 gap-y-14">

          {/* Left label column helper rendered per section via flat list below */}
        </div>

        {/* Sections */}
        <div className="space-y-0 divide-y divide-[#044745]/8">

          {/* Anbieter */}
          <div className="grid md:grid-cols-[200px_1fr] gap-x-16 gap-y-2 py-10 first:pt-0">
            <p className="text-[10px] text-[#044745]/40 tracking-[0.22em] uppercase font-semibold pt-1 shrink-0">
              Anbieter
            </p>
            <p className="text-[#044745]/70 text-sm leading-relaxed">
              didaktiker[a]gmx.de
            </p>
          </div>

          {/* Kontakt */}
          <div className="grid md:grid-cols-[200px_1fr] gap-x-16 gap-y-2 py-10">
            <p className="text-[10px] text-[#044745]/40 tracking-[0.22em] uppercase font-semibold pt-1 shrink-0">
              Kontakt
            </p>
            <div className="text-[#044745]/70 text-sm leading-relaxed space-y-1">
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:didaktiker@gmx.de"
                  className="text-[#044745] underline underline-offset-4 decoration-[#C9A84C]/50 hover:decoration-[#C9A84C] transition-all duration-200"
                >
                  didaktiker@gmx.de
                </a>
              </p>
            </div>
          </div>

          {/* USt-ID */}
          <div className="grid md:grid-cols-[200px_1fr] gap-x-16 gap-y-2 py-10">
            <p className="text-[10px] text-[#044745]/40 tracking-[0.22em] uppercase font-semibold pt-1 shrink-0">
              USt-ID
            </p>
            <p className="text-[#044745]/70 text-sm leading-relaxed">
              Nicht umsatzsteuerpflichtig gem&auml;&szlig; &sect;&nbsp;19 UStG
            </p>
          </div>

          {/* Verantwortlich */}
          <div className="grid md:grid-cols-[200px_1fr] gap-x-16 gap-y-2 py-10">
            <p className="text-[10px] text-[#044745]/40 tracking-[0.22em] uppercase font-semibold pt-1 shrink-0">
              Inhaltlich verantwortlich gem&auml;&szlig; &sect;&nbsp;18 Abs.&nbsp;2 MStV
            </p>
            <address className="not-italic text-[#044745]/70 text-sm leading-loose">
              Helene Kleinfeld<br />
              Didaktiker<br />
              Lindenstrasse 2<br />
              Offene Werkstatt<br />
              03238 Massen
            </address>
          </div>

          {/* Berufsbezeichnung */}
          <div className="grid md:grid-cols-[200px_1fr] gap-x-16 gap-y-2 py-10">
            <p className="text-[10px] text-[#044745]/40 tracking-[0.22em] uppercase font-semibold pt-1 shrink-0">
              Berufsbezeichnung
            </p>
            <p className="text-[#044745]/70 text-sm leading-relaxed">
              Anderer Beruf
            </p>
          </div>

          {/* EU-Streitschlichtung */}
          <div className="grid md:grid-cols-[200px_1fr] gap-x-16 gap-y-2 py-10">
            <p className="text-[10px] text-[#044745]/40 tracking-[0.22em] uppercase font-semibold pt-1 shrink-0">
              EU-Streitschlichtung
            </p>
            <p className="text-[#044745]/70 text-sm leading-relaxed">
              Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#044745] underline underline-offset-4 decoration-[#C9A84C]/50 hover:decoration-[#C9A84C] transition-all duration-200"
              >
                OS-Plattform
              </a>
              .<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>

          {/* Streitbeilegung */}
          <div className="grid md:grid-cols-[200px_1fr] gap-x-16 gap-y-2 py-10">
            <p className="text-[10px] text-[#044745]/40 tracking-[0.22em] uppercase font-semibold pt-1 shrink-0">
              Verbraucher&shy;streit&shy;beilegung
            </p>
            <p className="text-[#044745]/70 text-sm leading-relaxed">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

        </div>

        {/* Back CTA */}
        <div className="mt-14 pt-10 border-t border-[#044745]/8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#044745] text-[#FCF7ED] text-sm font-medium rounded-full hover:bg-[#0a6b68] transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
              <path d="M19 12H5m7-7-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Zur&uuml;ck zur Startseite
          </Link>
          <p className="text-[#044745]/30 text-[10px] tracking-wide">
            &copy; {new Date().getFullYear()} didaktiker
          </p>
        </div>
      </main>
    </div>
  );
}