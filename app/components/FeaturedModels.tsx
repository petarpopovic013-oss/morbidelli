import Image from "next/image";

interface ModelProps {
  title: string;
  tag: string;
  description: string;
  image: string;
}

const models: ModelProps[] = [
  {
    title: "C652V",
    tag: "Cruiser",
    description: "Vrhunski kruzer sa moćnim V-twin agregatom. Stvoren za otvorene puteve i beskompromisan stil vožnje.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuow-agycW3_T4yLBTeS3BvCS1YHqjdPnoJb-ICYWEZvkUtoTQGCA1iMfkGfuhbDhukEsTWoRQ0KVx4Y01shOyvW6osVjt_8F2Tc9Of0SNq-XfQ3OgubMo4OYQ0nG_k5WW8iiMSLfqVlLXcvvLidKKchazIC2o265lTpXwebkRpa60_pidvgzQTOuCbSl06fxXHThfAiFdYLCt57fawz4W5zykvIL-YGi-HBT8h1OGCj2NlN6_Q6ZUWSVtnRotGIBsf6zxRTNq9to",
  },
  {
    title: "N125V",
    tag: "Naked",
    description: "Agilnost i urbani duh. Idealan za gradske vozače koji traže performanse i upečatljiv, moderan dizajn.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxdSheK_WOP9ac9DOv392uIYsH-Z8pvbbGqsMa2sFm86oyUfbE8EZbd-0BhWJ2CUOkJ_Y-C-C98-ZyNh1P9CuQf6CNB711fzbEhHHKjXcS_-UmeGm5VclSZXuXmANcAusMsDcrVU5AmM2iIVuppBLEdbexfQueKccKY7Rt8l-_wOTTRnJnRKqZrG5KEtCkx2vLUEmZkCJSJkiKu2Pj9yjDL5hBGQrsZBuvd_GV8egxxALbbg8YDmbef-UiZityl3hSZS7COb2oVw8",
  },
  {
    title: "T502X",
    tag: "Adventure",
    description: "Pomerite granice mogućeg. Svestrani avanturistički model spreman za sve terene i duga putovanja.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC01GvJwvUkJk4Zoy1tDva5MkeIgCNoBe41TcdzEDAwrxc5vHDrlcNRRjnWtFKqzR4XXtWJgsHhA-J05phbrfQfxq2IIKmKRUDw8eDD6qTrXoqH5fWogPXYYoR2kZxsVOT5nnwMpuYDmBeueMWyEl3OEMUOmxDw8HDOnF1c0ekDL0On1lvD92lCRJ0B768pZObw_URlnyH2TcDOXTiSG9hJfilhupagTVG04ovO5onN-04BOUdQO8Mlqcym1fMXAIjuBi31cT9AzHM",
  },
];

export default function FeaturedModels() {
  return (
    <section className="px-margin-mobile md:px-gutter max-w-container-max mx-auto py-section-gap w-full bg-background select-none">
      {/* Title Header */}
      <div className="text-left md:text-center mb-12 md:mb-16">
        <h2 className="font-montserrat text-3xl md:text-5xl text-primary uppercase tracking-tight font-bold">
          Izdvojeni Modeli
        </h2>
        <div className="w-20 h-1 bg-secondary md:mx-auto mt-4"></div>
        <p className="font-inter text-lg text-on-surface-variant max-w-2xl md:mx-auto mt-8 font-light leading-relaxed">
          Otkrijte savršen spoj italijanskog dizajna i vrhunskih performansi u svakoj kategoriji.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {models.map((model, idx) => (
          <article
            key={idx}
            className="group bg-surface-container-low border border-white/5 flex flex-col overflow-hidden transition-all duration-500 hover:border-secondary/30"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] bg-black overflow-hidden">
              <img
                src={model.image}
                alt={`Morbidelli ${model.title}`}
                className="w-full h-full object-cover object-center opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                loading="lazy"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-surface/90 text-primary font-inter font-semibold text-[10px] uppercase tracking-widest px-3 py-1 border border-white/10">
                  {model.tag}
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-8 flex flex-col flex-grow bg-surface-container-low">
              <h3 className="font-montserrat text-2xl font-bold text-primary mb-4 tracking-tight">
                {model.title}
              </h3>
              <p className="font-inter text-[15px] text-on-surface-variant mb-8 flex-grow leading-relaxed font-light">
                {model.description}
              </p>
              <a
                className="inline-flex items-center justify-center border border-white/20 text-primary font-inter uppercase tracking-widest text-[12px] font-semibold px-6 py-4 hover:bg-primary hover:text-background transition-all duration-300 w-full group/btn"
                href="#"
              >
                Detaljnije
                <span className="material-symbols-outlined ml-2 text-lg transform group-hover/btn:translate-x-1 transition-transform duration-300">
                  arrow_forward
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
