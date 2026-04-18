import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#044745] px-5 sm:px-8 py-14">
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 pb-12 border-b border-[#FCF7ED]/8">

          {/* Brand */}
          <div className="max-w-[200px]">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded-full bg-[#FCF7ED]/8 border border-[#FCF7ED]/15 flex items-center justify-center text-[#C9A84C] text-xs font-bold">
                dd
              </span>
              <span className="text-[#FCF7ED] text-sm font-medium tracking-wide">didaktiker.info</span>
            </div>
            <p className="text-[#FCF7ED]/45 text-xs leading-relaxed">
              Bildung, Pädagogik &amp; Kreatives –<br />
              fundiert und nachhaltig.
            </p>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-16 gap-y-8 text-sm">

            <div>
              <p className="text-[#FCF7ED]/35 text-[10px] font-medium tracking-[0.22em] uppercase mb-4">
                Leistungen
              </p>
              <ul className="space-y-2.5">
                {[
                  "Vertrauensvoller Partner",
                  "Einzelcoaching für Pädagogen",
                  "Ideengeber und richtig tolle Workshops",
                  "Konzeptarbeit",
                  "Leidenschaft fürs Ausstatten",
                  "Berufliche Weiterentwicklung",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#leistungen"
                      className="text-[#FCF7ED]/55 hover:text-[#C9A84C] transition-colors duration-200 text-xs"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[#FCF7ED]/35 text-[10px] font-medium tracking-[0.22em] uppercase mb-4">
                Navigation
              </p>
              <ul className="space-y-2.5">
                <li>
                  <a href="#ansatz" className="text-[#FCF7ED]/55 hover:text-[#C9A84C] transition-colors text-xs">
                    Mein Ansatz
                  </a>
                </li>
                <li>
                  <a href="#leistungen" className="text-[#FCF7ED]/55 hover:text-[#C9A84C] transition-colors text-xs">
                    Leistungen
                  </a>
                </li>
                <li>
                  <a href="#kontakt" className="text-[#FCF7ED]/55 hover:text-[#C9A84C] transition-colors text-xs">
                    Kontakt
                  </a>
                </li>
                <li>
                  <Link href="/impressum" className="text-[#FCF7ED]/55 hover:text-[#C9A84C] transition-colors text-xs">
                    Impressum
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[#FCF7ED]/35 text-[10px] font-medium tracking-[0.22em] uppercase mb-4">
                Kontakt
              </p>
              <ul className="space-y-2.5">
                <li className="text-[#FCF7ED]/55 text-xs">Telefon: +49 17</li>
                <li>
                  <a
                    href="mailto:didaktiker@gmx.de"
                    className="text-[#FCF7ED]/55 hover:text-[#C9A84C] transition-colors text-xs"
                  >
                    didaktiker@gmx.de
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-[#FCF7ED]/30">
          <p>© {new Date().getFullYear()} didaktiker.info · Helene Kleinfeld</p>
          <Link href="/impressum" className="hover:text-[#C9A84C] transition-colors">
            Impressum
          </Link>
        </div>

      </div>
    </footer>
  );
}