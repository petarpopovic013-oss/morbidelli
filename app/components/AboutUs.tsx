import Link from "next/link";


export default function AboutUs() {
  return (
    <section id="o-nama" className="w-full bg-white text-black flex flex-col lg:flex-row overflow-hidden font-replica">
      {/* Image Side */}
      <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[600px] group">
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-10 duration-700"></div>
        <div
          className="absolute inset-0 bg-center bg-cover transition-transform duration-1000 group-hover:scale-105"
          style={{ backgroundImage: 'url("/photos/Photo-92---Historic-Morbidelli-motorcycles-on-display-at-the-Morbidelli-Museum--including-the-world-champion-bike.jpg")' }}
        ></div>
      </div>

      {/* Text Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-12 lg:p-24 xl:p-32 bg-white relative">
        <div className="relative z-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-track-cyan"></div>
            <h2 className="text-sm font-replica uppercase tracking-widest text-track-cyan">O nama</h2>
          </div>

          <h3 className="text-4xl md:text-5xl font-replica-light mb-8 leading-tight">
            Italijanska strast, <br />
            <span className="font-replica text-black">trkačko nasleđe.</span>
          </h3>

          <p className="text-lg font-replica-light text-gray-600 mb-12 leading-relaxed max-w-xl">
            Morbidelli predstavlja savršen spoj bogate trkačke istorije i modernih tehnologija.
            Naši motocikli nisu samo prevozno sredstvo, već autentičan izraz stila i vrhunske inženjerske perfekcije.
            Kreirani sa strašću, dizajnirani da probude emocije i pruže nezaboravno iskustvo na svakom kilometru.
            Pridružite se kultu nasleđa i brzine.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <span className="font-replica text-3xl md:text-4xl text-black block mb-1">
                58+
              </span>
              <span className="font-replica-light text-[11px] text-gray-500 uppercase tracking-widest">
                Godina sa vama
              </span>
            </div>
            <div>
              <span className="font-replica text-3xl md:text-4xl text-black block mb-1">
                Kredit
              </span>
              <span className="font-replica-light text-[11px] text-gray-500 uppercase tracking-widest">
                Mogućnost kupovine
              </span>
            </div>
          </div>

          <Link href="#" className="inline-flex items-center gap-4 group">
            <span className="text-sm font-replica uppercase tracking-wider group-hover:text-track-cyan transition-colors">Otkrijte našu priču</span>
            <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center group-hover:border-track-cyan group-hover:bg-track-cyan/10 transition-all duration-300">
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black group-hover:text-track-cyan transform group-hover:translate-x-1 transition-all duration-300">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-track-cyan/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </section>
  );
}
