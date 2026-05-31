export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-20 border-t border-white/5 relative z-10 select-none">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-gutter max-w-container-max mx-auto">
        {/* Brand & Copyright Column */}
        <div className="col-span-1 flex flex-col gap-6">
          <span className="font-montserrat text-2xl font-bold text-primary tracking-tighter">
            Morbidelli Serbia
          </span>
          <p className="font-inter text-sm text-on-surface-variant max-w-xs leading-relaxed font-light">
            Strast za vožnjom, oblikovana italijanskom preciznošću.
          </p>
          <p className="font-inter text-[11px] text-on-surface-variant/60 uppercase tracking-widest mt-auto font-semibold">
            © 2026 Morbidelli Serbia. Sva prava zadržana.
          </p>
        </div>

        {/* Links Columns */}
        <div className="col-span-1 md:col-span-3 flex flex-col md:flex-row gap-12 md:gap-24 md:justify-end">
          {/* Column 2: Kompanija */}
          <div className="flex flex-col gap-4">
            <h4 className="font-inter text-primary text-[12px] uppercase tracking-[0.2em] mb-2 font-semibold">
              Kompanija
            </h4>
            <a className="font-inter text-sm text-on-surface-variant hover:text-primary transition-colors duration-300 font-light" href="#">
              O nama
            </a>
            <a className="font-inter text-sm text-on-surface-variant hover:text-primary transition-colors duration-300 font-light" href="#">
              Vesti
            </a>
            <a className="font-inter text-sm text-on-surface-variant hover:text-primary transition-colors duration-300 font-light" href="#">
              Katalog
            </a>
          </div>

          {/* Column 3: Podrška */}
          <div className="flex flex-col gap-4">
            <h4 className="font-inter text-primary text-[12px] uppercase tracking-[0.2em] mb-2 font-semibold">
              Podrška
            </h4>
            <a className="font-inter text-sm text-on-surface-variant hover:text-primary transition-colors duration-300 font-light" href="#">
              Servisna mreža
            </a>
            <a className="font-inter text-sm text-on-surface-variant hover:text-primary transition-colors duration-300 font-light" href="#">
              Garantni uslovi
            </a>
            <a className="font-inter text-sm text-on-surface-variant hover:text-primary transition-colors duration-300 font-light" href="#">
              Kontakt
            </a>
          </div>

          {/* Column 4: Legalno */}
          <div className="flex flex-col gap-4">
            <h4 className="font-inter text-primary text-[12px] uppercase tracking-[0.2em] mb-2 font-semibold">
              Legalno
            </h4>
            <a className="font-inter text-sm text-on-surface-variant hover:text-primary transition-colors duration-300 font-light" href="#">
              Politika privatnosti
            </a>
            <a className="font-inter text-sm text-on-surface-variant hover:text-primary transition-colors duration-300 font-light" href="#">
              Uslovi korišćenja
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
