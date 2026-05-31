export default function Hero() {
  const bgImage = "/heroimage.png";

  return (
    <section
      className="relative flex items-center justify-center min-h-[100dvh] md:min-h-screen pt-[90px] w-full bg-cover bg-center select-none overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(19, 19, 19, 0.9) 0%, rgba(19, 19, 19, 0.3) 40%, rgba(19, 19, 19, 0.95) 100%), url('${bgImage}')`,
      }}
    >
      <div className="relative z-10 text-center px-gutter max-w-container-max mx-auto w-full flex flex-col items-center justify-center">
        
        {/* Accent Label */}
        <span className="text-secondary font-inter tracking-[0.3em] text-xs md:text-sm font-semibold uppercase mb-6 animate-fadeInUp drop-shadow-lg">
          Novi model
        </span>

        {/* Animated Main Title */}
        <h1 
          className="font-montserrat text-5xl md:text-[5.5rem] font-light text-primary mb-6 tracking-tighter animate-fadeInUp leading-none drop-shadow-2xl"
          style={{ animationDelay: "0.1s" }}
        >
          Stvoren za <span className="font-bold relative inline-block">
            hrabre
            <span className="absolute -bottom-1 md:-bottom-3 left-0 w-full h-[4px] bg-secondary opacity-80 blur-[1px]"></span>
          </span>
        </h1>

        {/* Animated Subtitle */}
        <h2
          className="font-montserrat text-lg md:text-2xl text-on-surface-variant mb-12 animate-fadeInUp max-w-2xl drop-shadow-md"
          style={{ animationDelay: "0.2s" }}
        >
          Potpuno novi <span className="text-white font-medium">Morbidelli C1002V</span> donosi revoluciju na putu.
        </h2>

        {/* Call to action */}
        <a
          className="font-inter text-primary border border-secondary/30 hover:border-secondary bg-surface/30 hover:bg-secondary/10 backdrop-blur-md transition-all duration-500 flex items-center gap-4 group px-10 py-4 uppercase tracking-[0.2em] text-[12px] font-semibold animate-fadeInUp shadow-[0_0_15px_rgba(99,212,248,0.1)] hover:shadow-[0_0_25px_rgba(99,212,248,0.2)]"
          style={{ animationDelay: "0.4s" }}
          href="#"
        >
          Saznajte više
          <span className="group-hover:translate-x-2 transition-transform duration-300 text-secondary text-lg leading-none">
            &#8594;
          </span>
        </a>

      </div>
    </section>
  );
}
