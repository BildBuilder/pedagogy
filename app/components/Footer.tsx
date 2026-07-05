import TransitionLink from "./TransitionLink";

export default function Footer() {
  return (
    <footer className="bg-[#044745] px-5 sm:px-8 py-14">
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 pb-12 border-b border-[#FCF7ED]/8">

          {/* Brand */}
          <div className="max-w-[220px]">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/dd_logosvg.svg" alt="didaktiker" width={36} height={36} />
              <span className="text-[#FCF7ED] text-sm font-medium tracking-wide">didaktiker</span>
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
                    <TransitionLink
                      href="#leistungen"
                      className="text-[#FCF7ED]/55 hover:text-[#C9A84C] transition-colors duration-200 text-xs"
                    >
                      {item}
                    </TransitionLink>
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
                  <TransitionLink href="#ansatz" className="text-[#FCF7ED]/55 hover:text-[#C9A84C] transition-colors text-xs">
                    Mein Ansatz
                  </TransitionLink>
                </li>
                <li>
                  <TransitionLink href="#leistungen" className="text-[#FCF7ED]/55 hover:text-[#C9A84C] transition-colors text-xs">
                    Leistungen
                  </TransitionLink>
                </li>
                <li>
                  <TransitionLink href="#kontakt" className="text-[#FCF7ED]/55 hover:text-[#C9A84C] transition-colors text-xs">
                    Kontakt
                  </TransitionLink>
                </li>
                <li>
                  <TransitionLink href="/impressum" className="text-[#FCF7ED]/55 hover:text-[#C9A84C] transition-colors text-xs">
                    Impressum
                  </TransitionLink>
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
                  <TransitionLink
                    href="mailto:didaktiker@gmx.de"
                    className="text-[#FCF7ED]/55 hover:text-[#C9A84C] transition-colors text-xs"
                  >
                    didaktiker@gmx.de
                  </TransitionLink>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-[#FCF7ED]/30">
          <p>© {new Date().getFullYear()} didaktiker · Helene Kleinfeld</p>
          <TransitionLink href="/impressum" className="hover:text-[#C9A84C] transition-colors">
            Impressum
          </TransitionLink>
        </div>

      </div>
    </footer>
  );
}