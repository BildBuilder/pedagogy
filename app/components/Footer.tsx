import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#044745] text-[#FCF7ED] px-5 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-full bg-[#FCF7ED]/10 border border-[#FCF7ED]/20 flex items-center justify-center text-[#C9A84C] font-bold text-sm">
                dd
              </div>
              <span className="font-semibold text-[#FCF7ED]">didaktiker.info</span>
            </div>
            <p className="text-[#FCF7ED]/55 text-sm max-w-[220px] leading-relaxed">
              Bildung, Pädagogik & Kreatives – fundiert und nachhaltig.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-6 text-sm">
            <div>
              <p className="font-medium text-[#FCF7ED]/40 text-xs tracking-widest uppercase mb-3">
                Leistungen
              </p>
              <ul className="space-y-2">
                {[
                  "Vertrauensvoller Partner",
                  "Einzelcoaching",
                  "Workshops",
                  "Konzeptarbeit",
                  "Raumgestaltung",
                  "Weiterentwicklung",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#leistungen"
                      className="text-[#FCF7ED]/65 hover:text-[#C9A84C] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-[#FCF7ED]/40 text-xs tracking-widest uppercase mb-3">
                Navigation
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="#ansatz" className="text-[#FCF7ED]/65 hover:text-[#C9A84C] transition-colors">
                    Mein Ansatz
                  </a>
                </li>
                <li>
                  <a href="#kontakt" className="text-[#FCF7ED]/65 hover:text-[#C9A84C] transition-colors">
                    Kontakt
                  </a>
                </li>
                <li>
                  <Link href="/impressum" className="text-[#FCF7ED]/65 hover:text-[#C9A84C] transition-colors">
                    Impressum
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-[#FCF7ED]/40 text-xs tracking-widest uppercase mb-3">
                Kontakt
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:didaktiker@gmx.de"
                    className="text-[#FCF7ED]/65 hover:text-[#C9A84C] transition-colors break-all"
                  >
                    didaktiker@gmx.de
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#FCF7ED]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#FCF7ED]/40">
          <p>© {new Date().getFullYear()} didaktiker.info · Helene Kleinfeld</p>
          <Link href="/impressum" className="hover:text-[#C9A84C] transition-colors">
            Impressum
          </Link>
        </div>
      </div>
    </footer>
  );
}
