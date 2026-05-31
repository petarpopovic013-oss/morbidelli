export default function Location() {
  const mapEmbedUrl = "https://maps.google.com/maps?q=Dr%20Svetislava%20Kasapinovi%C4%87a%209,%20Novi%20Sad&t=&z=16&ie=UTF8&iwloc=&output=embed";
  const mapExternalUrl = "https://maps.google.com/?q=Dr+Svetislava+Kasapinovica+9,+Novi+Sad";

  return (
    <section className="bg-background py-section-gap px-margin-mobile md:px-gutter w-full border-t border-white/5 select-none">
      <div className="max-w-container-max mx-auto">
        {/* Title Header */}
        <div className="text-left md:text-center mb-12 md:mb-16">
          <h2 className="font-montserrat text-3xl md:text-5xl text-primary uppercase tracking-tight font-bold">
            Kako do nas?
          </h2>
          <div className="w-20 h-1 bg-secondary md:mx-auto mt-4"></div>
        </div>

        {/* 2-Column Split: Info & Iframe Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-8">
          {/* Left Column: Contact and Location Details */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-surface-container-low border border-white/5 p-8 md:p-12 relative overflow-hidden group">
            {/* Ambient subtle glow background */}
            <div className="absolute -right-24 -bottom-24 w-48 h-48 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-colors duration-500"></div>

            <div className="flex flex-col gap-8">
              {/* Saloon Header */}
              <div>
                <span className="font-inter text-secondary text-[12px] uppercase tracking-[0.2em] font-semibold block mb-2">
                  Izložbeni salon & servis
                </span>
                <h3 className="font-montserrat text-2xl font-bold text-primary tracking-tight">
                  DDM Company Novi Sad
                </h3>
              </div>

              <div className="w-full h-[1px] bg-white/5"></div>

              {/* Detailed Contact List */}
              <div className="flex flex-col gap-6 font-inter text-[15px] font-light">
                {/* Address Item */}
                <div className="flex items-start gap-4 text-on-surface-variant hover:text-primary transition-colors duration-300">
                  <span className="material-symbols-outlined text-secondary mt-0.5">
                    location_on
                  </span>
                  <div>
                    <span className="block font-semibold text-primary text-[13px] uppercase tracking-wider mb-1">
                      Adresa
                    </span>
                    Dr Svetislava Kasapinovića 9,<br />
                    21000 Novi Sad, Srbija
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary mt-0.5">
                    schedule
                  </span>
                  <div>
                    <span className="block font-semibold text-primary text-[13px] uppercase tracking-wider mb-1">
                      Radno Vreme
                    </span>
                    <span className="block">Radni dani: 08:00 – 16:00</span>
                    <span className="block">Subota: 08:00 – 14:00</span>
                    <span className="block text-secondary/70">Nedelja: Zatvoreno</span>
                  </div>
                </div>

                {/* Direct Contact */}
                <div className="flex items-start gap-4 text-on-surface-variant hover:text-primary transition-colors duration-300">
                  <span className="material-symbols-outlined text-secondary mt-0.5">
                    phone_iphone
                  </span>
                  <div>
                    <span className="block font-semibold text-primary text-[13px] uppercase tracking-wider mb-1">
                      Kontakt telefon
                    </span>
                    <a href="tel:+38121555666" className="hover:underline font-semibold text-primary">
                      +381 64 133 45 89
                    </a>
                  </div>
                </div>

                {/* Direct Mail */}
                <div className="flex items-start gap-4 text-on-surface-variant hover:text-primary transition-colors duration-300">
                  <span className="material-symbols-outlined text-secondary mt-0.5">
                    mail
                  </span>
                  <div>
                    <span className="block font-semibold text-primary text-[13px] uppercase tracking-wider mb-1">
                      Email adresa
                    </span>
                    <a href="mailto:info@morbidelli.rs" className="hover:underline text-primary">
                      info@morbidelli.rs
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Link Button */}
            <div className="mt-12">
              <a
                href={mapExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white/20 text-primary font-inter uppercase tracking-widest text-[12px] font-semibold px-6 py-4 hover:bg-primary hover:text-background transition-all duration-300 w-full group/btn"
              >
                Pronađite nas na Google mapi
                <span className="material-symbols-outlined ml-2 text-lg transform group-hover/btn:translate-y-[-2px] transition-transform duration-300">
                  open_in_new
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embedded Iframe */}
          <div className="lg:col-span-7 w-full h-[350px] lg:h-auto min-h-[350px] relative border border-white/5 overflow-hidden">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[350px] grayscale contrast-125 brightness-95 opacity-80 hover:grayscale-0 hover:opacity-100 hover:brightness-100 transition-all duration-700 ease-in-out"
              title="Morbidelli Novi Sad lokacija mapi"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
