export default function AboutUs() {
  return (
    <section className="bg-surface-container-low py-section-gap px-margin-mobile md:px-gutter w-full border-t border-white/5 select-none">
      <div className="max-w-container-max mx-auto">
        {/* Title Header */}
        <div className="text-left md:text-center mb-12 md:mb-16">
          <h2 className="font-montserrat text-3xl md:text-5xl text-primary uppercase tracking-tight font-bold">
            O Nama
          </h2>
          <div className="w-20 h-1 bg-secondary md:mx-auto mt-4"></div>
        </div>

        {/* Editorial Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mt-8">
          {/* Left Column: Brand Quote */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="font-inter text-secondary text-[12px] uppercase tracking-[0.2em] font-semibold">
              Kult nasleđa & brzine
            </span>
            <blockquote className="font-montserrat text-3xl md:text-4xl font-light text-primary leading-tight tracking-tight">
              Strast oblikovana preciznošću. Italijanska moto kultura na putevima Srbije.
            </blockquote>
            <p className="font-inter text-[15px] text-on-surface-variant/80 leading-relaxed font-light mt-4">
              Morbidelli donosi duh trkačke istorije direktno na ulice, kombinujući napredni inženjering sa bezvremenskim dizajnom.
            </p>
          </div>

          {/* Right Column: Paragraph Blocks */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <p className="font-inter text-base md:text-lg text-on-surface-variant leading-relaxed font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="font-inter text-[15px] text-on-surface-variant/70 leading-relaxed font-light">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in dui ac ipsum velit.
            </p>
            <div className="w-full h-[1px] bg-white/5 my-2"></div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="font-montserrat text-3xl md:text-4xl font-semibold text-secondary block mb-1">
                  19 +
                </span>
                <span className="font-inter text-[11px] text-on-surface-variant/60 uppercase tracking-widest font-semibold">
                  Godina poslovanja u Srbiji
                </span>
              </div>
              <div>
                <span className="font-montserrat text-3xl md:text-4xl font-semibold text-secondary block mb-1">
                  Kredit
                </span>
                <span className="font-inter text-[11px] text-on-surface-variant/60 uppercase tracking-widest font-semibold">
                  Mogućnost kupovine na kredit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
