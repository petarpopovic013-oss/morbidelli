import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <main className="flex-grow flex flex-col w-full">
      <Header />

      <main
        id="app"
        className="relative w-full mx-auto mb-auto"
        style={{ maxWidth: "2560px" }}
      >
        <span className="nuxt-route-announcer" style={{ position: "absolute" }}>
          <span
            role="alert"
            aria-live="polite"
            aria-atomic="false"
            style={{
              border: "0px",
              clip: "rect(0px, 0px, 0px, 0px)",
              clipPath: "inset(50%)",
              height: "1px",
              width: "1px",
              overflow: "hidden",
              position: "absolute",
              whiteSpace: "nowrap",
              overflowWrap: "normal",
              margin: "-1px",
              padding: "0px",
            }}
          >
            About us
          </span>
        </span>
        <section className="overflow-x-hidden">
          <section className="relative w-full">
            <div
              className="relative md:block hidden w-full overflow-hidden md:bg-center bg-no-repeat bg-right md:bg-cover about-us-hero-bg-section h-[480px] md:h-[850px] lg:h-[630px] xl:h-[744px] 2xl:h-[960px] 3xl:h-[1024px] xl:block"
              style={{
                backgroundImage: "url('/photos/history/hero-najveci.jpg')",
              }}
            >
              <div className="h-[480px] md:h-[497px] lg:h-[560px] xl:h-[740px]">
                <div className="container mx-auto md:relative absolute top-[120px] lg:pt-[70px] md:pb-[100px] lg:pb-0 xl:pb-[84px]">
                  <div className="mb-10">
                    <img
                      src="/photos/history/morbidelli-vector.png"
                      alt="morbidelli"
                      className="h-[39px]"
                      loading="lazy"
                    />
                  </div>
                  <h1 className="text-[28px] lg:text-[48px] leading-[34px] xl:text-[52px] font-normal font-replica-pro w-[299px] md:w-[320px] lg:w-[510px] xl:w-[587px] lg:leading-[54px] xl:leading-[58px] text-start text-white mt-12">

                    Giancarlo Morbidelli: Legendarni inženjer trkačkih motocikala

                  </h1>
                </div>
              </div>
            </div>
            <div className="block lg:hidden md:hidden">
              <div
                className="relative h-[480px]" data-aos="fade-up"
                data-aos-delay="100"
                data-aos-offset="100"
              >
                <img
                  className="relative object-cover object-center w-full h-full"
                  src="/photos/history/hero-najveci.jpg"
                  alt="Morbidelli Banner"
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-start order-2 px-4 pt-[30px] pb-[60px] overflow-hidden md:w-1/2" data-aos="fade-up"
                data-aos-delay="100"
                style={{ background: "rgb(25, 25, 25)" }}
              >
                <div className="w-auto">
                  <div className="md:mt-5 lg:mt-[99px] mb-[31px">
                    <img
                      className="h-[21px]"
                      src="/photos/history/morbidelli-vector.png"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <h1 className="text-[28px] font-replica-pro w-[345px] sm:w-full tracking-[-2%] leading-[36px] font-normal text-start text-white mt-6">
                    Giancarlo Morbidelli: Legendarni inženjer trkačkih motocikala
                  </h1>
                </div>
              </div>
            </div>
          </section>
          <section className="block md:hidden"></section>
          <section className="border-t border-[#ECECEC] md:border-none items-stretch lg:flex">
            <div className="w-full overflow-hidden md:flex md:flex-row">
              <div
                className="overflow-hidden md:order-1 xl:flex md:w-1/2 md:h-[800px] lg:h-[977px] sm:h-[600] 2xl:h-[1100px]" data-aos="fade-up"
                data-aos-delay="100"
                data-aos-offset="50"
              >
                <img
                  src="/photos/history/morbidelli-giancarlo.png"
                  style={{ objectPosition: "50% 25%" }}
                  className="self-center object-top w-full h-full max-w-full mx-auto md:object-cover xl:object-right "
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-start overflow-hidden md:order-2 xl:py-8 md:w-1/2" data-aos="fade-up"
                data-aos-delay="10"
              >
                <div className="w-full lg:w-[525px] px-4 md:mx-8 xl:mx-20 md:my-0 my-10">
                  <h1 className="text-xl md:text-[22px] md:leading-[28px] lg:text-2xl xl:text-[28px] font-replica-bold text-[#0A0908] uppercase xl:tracking-normal tracking-[-2%] leading-[39px] xl:leading-[32px] text-start">
                    Giancarlo morbidelli
                  </h1>
                  <p className="text-sm mt-4 md:text-base lg:text-lg xl:text-xl font-normal lg:!leading-[30px] font-replica-light text-[#020202]">
                    Đankarlo Morbideli rođen je u radničkoj, seoskoj porodici 18. oktobra 1934. godine u Pezaru, u Italiji. Odrastao je u okruženju u kojem su njegove komšije iz kompanija Benelli i Motobi ispisivale istoriju moto-industrije, kako kroz razvoj motocikala, tako i kroz uspehe svojih trkačkih odeljenja. Svoj prvi motocikl, stari Alpino, modifikovao je samostalno u garaži – sa minimalno resursa, ali sa jasnim ciljem da izvuče bolje performanse. Ipak, na očev nagovor, Đankarlo upisuje tehničku školu za obradu drveta jer je Pezaro u to vreme bio ozbiljan centar industrije nameštaja, pa su šanse za zaposlenje bile velike.<br /><br />Već 1959. godine, sa svega 25 godina, osnovao je sopstvenu firmu za razvoj, proizvodnju i prodaju mašina za obradu drveta – Morbidelli Woodworking Machines. Spojivši inženjersko znanje i izuzetan njuh za biznis, tokom narednih 15 godina izgradio je izuzetno uspešnu kompaniju u Pezaru koja je zapošljavala preko 350 ljudi i izvozila u više od 60 zemalja širom sveta. Međutim, Đankarlova energija je bila neograničena, pa je pored vođenja velike kompanije uvek nalazio vremena da se posveti svojoj najvećoj strasti – motociklima.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="relative pt-2 md:pt-0 md:border-none">
            <img
              src="/photos/history/morbidelli-motorcycle-banner.png"
              loading="lazy"
              className="order-1 w-full h-[325px] pt-[15px] px-[15px] md:p-0 md:h-[600] lg:h-[740px] xl:h-[818px] object-top object-cover bg-black"
              alt=""
            />
            <div className="xl:-mt-3 py-5 xl:px-4 pt-6 xl:pt-[61px] pb-[30px] xl:pb-[54px] order-2 w-full bg-black">
              <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] mx-auto skew-x-[-50deg] border-[#5ACCF0]"></div>
              <div className="w-full px-4 mt-[16px] xl:mt-[25px] md:mx-auto md:max-w-7xl md:px-16">
                <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] leading-[24px] xl:leading-[30px] lg:mt-4 xl:text-[20px] text-white text-center font-replica-light font-normal">
                  Prvi trkački Morbidelli motocikl bio je jedinstven projekat: mašina od 60cc bazirana na Benelli agregatu sa modifikovanim cilindrom i glavom, smeštena u ram modela Bianchi Falco Supersport. Sa ovim motociklom se Enco Lazarini takmičio na lokalnim trkama. Ubrzo se okupio i prvi interni trkački tim koji su, pored Đankarla Morbidelija, činili tehničar Serđo Grasini i vozači Franko Ringini i Euđenio Lazarini. Godine 1968. zvanično počinju da se takmiče kao deo novooformljenog trkačkog odeljenja (Reparto Corse).
                </p>
              </div>
            </div>
          </section>
          <section
            className="border-t border-[#ECECEC] md:pt-0 md:border-none items-stretch lg:flex"
            id="about_1969"
          >
            <div className="w-full overflow-hidden md:flex md:flex-row">
              <div
                className="overflow-hidden md:order-1 xl:flex md:w-1/2 md:h-[640px] 2xl:h-[750px] h-[325px]" data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src="/photos/history/morbidelli-1969-bike.png"
                  style={{ objectPosition: "50% 25%" }}
                  className="self-center object-cover w-full h-full max-w-full pt-[15px] px-[15px] mx-auto md:p-0 xl:object-right "
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-start px-[15px] pt-6 pb-10 overflow-hidden md:py-0 md:order-2 md:w-1/2" data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] md:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-[22px] leading-[30px] md:leading-[32px] md:text-2xl xl:text-3xl mt-4 font-replica-bold text-[#020202] uppercase tracking-[-0.3px;]">
                    {" "}
                    1969{" "}
                  </div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] leading-[24px] xl:leading-[30px] mt-1 md:mt-4 xl:text-[20px] text-[#020202] font-replica-light font-normal">
                    Ringini i Lazarini su veoma uspešno vozili Morbidelli 50cc na nekoliko trka, osvojivši prvo i drugo mesto na Velikoj nagradi Slovenije, a ubrzo su pobedili i na prvenstvu Italije. Ova prva internacionalna pobeda bila je prelomna tačka i motivisala je Morbidelija da pređe u višu klasu, pa tim započinje razvoj potpuno novog dvocilindričnog agregata od 125cc za nastup na Svetskom šampionatu 1970. godine.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="border-t border-[#ECECEC] md:pt-0 md:border-none items-stretch lg:flex">
            <div className="w-full overflow-hidden md:flex md:flex-row">
              <div
                className="overflow-hidden md:order-2 xl:flex md:w-1/2 xl:h-[640px] h-[325px] mt-[15px] mx-[15px] md:m-0" data-aos="fade-up"
                data-aos-delay="100"
                style={{ background: "rgb(239, 239, 239)" }}
              >
                <img
                  src="/photos/history/morbidelli-1969-logo.png"
                  className="self-center xl:object-right h-full mx-auto max-w-full  object-cover xl:h-[574px]"
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-end pt-6 pb-10 px-[15px] overflow-hidden md:py-0 md:order-1 md:w-1/2 md:px-0" data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-[22px] leading-[30px] md:leading-[32px] md:text-2xl xl:text-3xl mt-4 font-replica-bold text-[#020202] uppercase tracking-[-0.3px;]">
                    {" "}
                    1969{" "}
                  </div>
                  <p className="text-[22px] leading-[32px] md:text-3xl md:leading-[36px] lg:text-[32px] lg:leading-[40px] md:leading-[30px] mt-1 md:mt-4 xl:text-[40px] xl:leading-[50px] text-[#020202] font-replica-light font-normal">
                    U ovom uspešnom periodu nastaje i prvi zvanični logo koji je koristio Morbidelli trkački tim.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            className="border-t border-[#ECECEC] md:pt-0 md:border-none items-stretch lg:flex"
            id="about_1970"
          >
            <div className="w-full overflow-hidden md:flex md:flex-row">
              <div
                className="overflow-hidden md:order-1 xl:flex md:w-1/2 md:h-[640px] 2xl:h-[750px] h-[325px]" data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src="/photos/history/morbidelli-1970-bike.png"
                  className="self-center object-cover w-full h-full max-w-full pt-[15px] px-[15px] mx-auto md:p-0 xl:object-right "
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-start px-[15px] pt-6 pb-10 overflow-hidden md:py-0 md:order-2 md:w-1/2" data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-[22px] leading-[30px] md:leading-[32px] md:text-2xl xl:text-3xl mt-4 font-replica-bold text-[#020202] uppercase tracking-[-0.3px;]">
                    {" "}
                    1970{" "}
                  </div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] leading-[24px] xl:leading-[30px] mt-1 md:mt-4 xl:text-[20px] text-[#020202] font-replica-light font-normal">
                    Morbidelli tim u klasi 50cc čvrsto je pozicionirao svoje mesto na svetskoj sceni, ostvarivši pet podijuma iz osam trka sa Lazarinijem i Ringinijem. U međuvremenu, Đankarlo Morbideli povlači ključni potez i u klasu 125cc dovodi Gilberta Parlotija, koji je prethodno vozio četvorocilindrični Benelli 250 i pomogao Kelu Karadersu da osvoji svetsku titulu 1969. godine. U svojoj prvoj sezoni, Parloti odmah opravdava poverenje i donosi tri velike pobede: jednu u svetskom šampionatu i dve na nacionalnim trkama. Svetski šampionat 1970. godine započeo je Franko Ringini, a od Velike nagrade Češke pridružio mu se i Gilberto Parloti.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            className="border-t border-[#ECECEC] md:pt-0 md:border-none items-stretch lg:flex"
            id="about_1971"
          >
            <div className="w-full overflow-hidden md:flex md:flex-row">
              <div
                className="overflow-hidden md:order-2 xl:flex md:w-1/2 h-[325px] md:h-[640px] 2xl:h-[750px]" data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src="/photos/history/morbidelli-1971-bike.png"
                  className="self-center object-cover w-full h-full max-w-full pt-[15px] px-[15px] mx-auto md:p-0 xl:object-right "
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-end px-[15px] pt-6 pb-10 overflow-hidden md:order-1 md:py-0 md:w-1/2 md:px-4" data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-[22px] leading-[30px] md:leading-[32px] md:text-2xl xl:text-3xl mt-4 font-replica-bold text-[#020202] uppercase tracking-[-0.3px;]">
                    {" "}
                    1971{" "}
                  </div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] leading-[24px] xl:leading-[30px] mt-1 md:mt-4 xl:text-[20px] text-[#020202] font-replica-light font-normal">
                    Nakon dve pobede na nacionalnim trkama i dva druga mesta na Velikim nagradama Austrije i Nemačke, Parloti odnosi pobedu i na Gran priju Nacija u Monci, čime je cementirao poziciju prvog vozača tima. Te sezone je završio na osmom mestu u generalnom plasmanu svetskog šampionata. U isto vreme, sa četiri pobede u prvenstvu Italije u klasi 50cc, Alberto Leva iz Rima doneo je Morbidelli timu prvu veliku titulu postavši šampion Italije.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            className="border-t border-[#ECECEC] md:pt-0 md:border-none relative"
            id="about_1972"
          >
            <div className="xl:-mt-3 px-[15px] pt-6 xl:pt-[61px] pb-10 xl:pb-[54px] order-2 w-full bg-white">
              <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] md:mx-auto skew-x-[-50deg] border-[#5ACCF0]"></div>
              <div className="text-lg xl:text-[28px] font-replica-bold text-[#020202] uppercase xl:tracking-normal tracking-[-2%] xl:mt-[25px] mt-4 leading-[39px] md:leading-[3rem] xl:leading-[32px] md:text-center">
                {" "}
                1972{" "}
              </div>
              <div className="w-full xl:mt-[25px] md:mx-auto md:max-w-7xl md:px-16">
                <p className="text-[15px] md:text-base md:text-center lg:text-lg lg:leading-[28px] md:leading-[26px] leading-[24px] xl:leading-[30px] lg:mt-4 xl:text-[20px] text-[#020202] font-replica-light font-normal">
                  Godine 1972, razvoj modela od 50cc je obustavljen jer se trkačko odeljenje u potpunosti fokusiralo na klasu od 125cc. Gilberto Parloti je bio nezaustavljiv sa četiri uzastopne pobede i nalazio se na samom vrhunu svog napretka, ali je tim tada zadesila velika tragedija. Dok je ubedljivo vodio u svetskom šampionatu, Parloti doživljava fatalnu nesreću na čuvenoj trci Isle of Man Tourist Trophy. Ceo tim je bio duboko pogođen ovim gubitkom, ali Đankarlo ostaje odlučan i odbija da odustane, nastavljajući borbu u Parlotijevu čast.
                </p>
              </div>
            </div>
          </section>
          <section
            className="border-t border-[#ECECEC] md:pt-0 md:border-none items-stretch lg:flex"
            id="about_1973"
          >
            <div className="w-full pt-[15px] px-[15px] overflow-hidden md:flex md:flex-row md:m-0">
              <div
                className="overflow-hidden md:order-2 xl:flex md:w-1/2 md:h-[640px] 2xl:h-[750px] h-[325px] flex items-center justify-center" data-aos="fade-up"
                data-aos-delay="100"
                style={{ backgroundColor: "rgb(239, 239, 239)" }}
              >
                <img
                  src="/photos/history/morbidelli-1973-logo.png"
                  className="self-center xl:object-right mx-auto max-w-full xl:w-[522px] py-16 xl:py-0  object-contain xl:h-[70px] px-4"
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-end pt-6 pb-10 overflow-hidden md:order-1 md:py-0 md:w-1/2 md:px-4" data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-[22px] leading-[30px] md:leading-[32px] md:text-2xl xl:text-3xl mt-4 font-replica-bold text-[#020202] uppercase tracking-[-0.3px;]">
                    {" "}
                    1973{" "}
                  </div>
                  <p className="text-[22px] leading-[32px] md:text-3xl md:leading-[36px] lg:text-[32px] lg:leading-[40px] md:leading-[30px] mt-1 md:mt-4 xl:text-[40px] xl:leading-[50px] text-[#020202] font-replica-light font-normal">
                    U znak sećanja i nastavka borbe, tim nastavlja sa radom pod prepoznatljivim vizuelnim identitetom i logom koji su koristili Morbidelli i drugi partnerski trkački timovi.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            className="border-t border-[#ECECEC] md:pt-0 md:border-none items-stretch lg:flex"
            id="about_1975"
          >
            <div className="w-full overflow-hidden md:flex md:flex-row">
              <div
                className="overflow-hidden md:order-1 xl:flex md:w-1/2 h-[325px] md:h-[640px] 2xl:h-[750px]" data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src="/photos/history/morbidelli-1975.png"
                  className="self-center object-cover w-full h-full max-w-full pt-[15px] px-[15px] mx-auto md:p-0 xl:object-right "
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-start overflow-hidden px-[15px] pt-6 pb-10 md:py-0 md:order-2 md:w-1/2" data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <h1 className="text-[22px] leading-[30px] md:leading-[32px] md:text-2xl xl:text-3xl mt-4 font-replica-bold text-[#020202] uppercase tracking-[-0.3px;]">
                    {" "}
                    1975{" "}
                  </h1>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] leading-[24px] xl:leading-[30px] mt-2 md:mt-4 xl:text-[20px] text-[#020202] font-replica-light font-normal">
                    Trud i posvećenost su se u potpunosti isplatili jer su Paolo Pileri i Pjer Paolo Bjanki osvojili prvo i drugo mesto u svetskom šampionatu, ostvarivši potpunu dominaciju. Od ukupno 16 trka 1975. godine, Morbidelli tim beleži čak 15 podijuma. Pobedničku ekipu činili su vlasnik Đankarlo Morbideli i tim vrhunskih mehaničara: Jorg Meler, Đankarlo Čekini, Đankarlo Bonaventura i Franko Dionizi. Ovaj tim osvaja prvo mesto u šampionatu konstruktora, pobedivši najveće svetske fabričke brendove, dok su Pileri i Bjanki podelili prva dva mesta u svetu, i obrnuto na italijanskom nacionalnom šampionatu.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="border-t border-[#ECECEC] md:pt-0 md:border-none items-stretch lg:flex">
            <div className="w-full overflow-hidden md:flex md:flex-row">
              <div
                className="overflow-hidden md:order-2 mt-[15px] mx-[15px] xl:flex md:w-1/2 h-[325px] md:h-[640px] 2xl:h-[750px] flex items-center justify-center" data-aos="fade-up"
                data-aos-delay="100"
                style={{ backgroundColor: "rgb(239, 239, 239)" }}
              >
                <img
                  src="/photos/history/morbidelli-benelli-armi.png"
                  className="self-center xl:object-right h-full max-w-full object-contain md:px-10 py-16 md:py-0  md:h-[294px]"
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-end px-[15px] pt-6 pb-10 overflow-hidden md:order-1 md:py-0 md:w-1/2 md:px-4" data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] leading-[24px] xl:leading-[30px] mt-2 md:mt-4 xl:text-[20px] text-[#020202] font-replica-light font-normal">
                    Krajem te uspešne 1975. godine, Đankarlo Morbideli, Paolo Beneli i Inočenco Nardi Dei (Benelli Armi) udružuju snage i pokreću zajednički projekat. Osnivaju kompaniju MBA – što je akronim za Morbidelli Benelli Armi – sa ciljem da pokrenu serijsku proizvodnju replika svog pobedničkog modela 125 i ponude ih privatnim timovima.<br /><br />Model MBA VR 125 se prvobitno proizvodio u pogonima Benelli Armi u Urbinu, da bi se kasnije proizvodnja preselila u Sant Angelo in Vado. Ovaj spoj dva velika sportska i industrijska imena doneće još više uspeha i ispisati nove stranice istorije u godinama koje dolaze.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            className="border-t border-[#ECECEC] md:pt-0 md:border-none items-stretch lg:flex"
            id="about_1976"
          >
            <div className="w-full overflow-hidden md:flex md:flex-row">
              <div
                className="overflow-hidden md:order-1 xl:flex md:w-1/2 h-[325px] md:h-[640px] 2xl:h-[750px]" data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src="/photos/history/morbidelli-1976.png"
                  className="self-center object-cover w-full h-full max-w-full pt-[15px] px-[15px] md:p-0 xl:object-right "
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-start overflow-hidden px-[15px] pt-6 pb-10 md:py-0 md:order-2 md:w-1/2" data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-[22px] leading-[30px] md:leading-[32px] md:text-2xl xl:text-3xl mt-4 font-replica-bold text-[#020202] uppercase tracking-[-0.3px;]">
                    {" "}
                    1976{" "}
                  </div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] leading-[24px] xl:leading-[30px] mt-1 md:mt-4 xl:text-[20px] text-[#020202] font-replica-light font-normal">
                    Pjer Paolo Bjanki postaje svetski šampion u klasi 125cc na motociklu Morbidelli MBA VR125, dominirajući sezonom baš kao i godinu dana ranije. To je bila druga uzastopna titula svetskog šampiona za brend. Tim je obezbedio podijum na svih devet Grand Prix trka, pri čemu je Bjanki pobedio na čak sedam. Drugu godinu zaredom, Morbidelli osvaja šampionat konstruktora, Bjanki postaje šampion, a Paolo Pileri zauzima treće mesto na svetu.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="border-t border-[#ECECEC] md:pt-0 md:border-none relative">
            <div className="xl:-mt-3 py-5 xl:px-4 pt-6 xl:pt-[61px] pb-[30px] xl:pb-[54px] order-2 w-full bg-black">
              <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] mx-auto skew-x-[-50deg] border-[#5ACCF0]"></div>
              <div className="w-full px-4 mt-4 xl:mt-[25px] md:mx-auto md:max-w-7xl md:px-16">
                <p className="text-[15px] text-center md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] leading-[24px] xl:leading-[30px] lg:mt-4 xl:text-[20px] text-white font-replica-light font-normal">
                  U međuvremenu, Đankarlo Morbideli u svojim radionicama pokreće i podstiče razvoj novih modela od 250cc i 350cc. Razvoj je vođen logikom prelaska sa 42 KS u klasi 125cc na snažnijih 62 KS pri 12.000 obrtaja u klasi 250cc. Prvi Morbidelli 250 modeli ubrzo su počeli da se takmiče i uz pomoć Pilerija i Bjankija ostvarili šest podijuma i drugo mesto na Velikoj nagradi Belgije. Čak je i legendarni višestruki svetski šampion Đakomo Agostini 8. avgusta 1976. seo za upravljač modela Morbidelli 250 i u Mizanu osvojio drugo mesto.
                </p>
              </div>
            </div>
          </section>
          <section className="items-stretch lg:flex" id="about_1977">
            <div className="w-full overflow-hidden md:flex md:flex-row">
              <div
                className="overflow-hidden md:order-1 xl:flex md:w-1/2 h-[325px] md:h-[640px] 2xl:h-[750px]" data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src="/photos/history/morbidelli-1977.png"
                  className="self-center object-cover w-full h-full max-w-full pt-[15px] px-[15px] mx-auto md:p-0 xl:object-right "
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-start px-[15px] overflow-hidden pt-6 pb-[30px] md:py-0 md:order-2 md:w-1/2" data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-[22px] leading-[30px] md:leading-[32px] md:text-2xl xl:text-3xl mt-4 font-replica-bold text-[#020202] uppercase tracking-[-0.3px;]">
                    {" "}
                    1977{" "}
                  </div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] leading-[24px] xl:leading-[30px] mt-1 md:mt-4 xl:text-[20px] text-[#020202] font-replica-light font-normal">
                    U drugoj sezoni za model od 250cc, planirano je da Paolo Pileri bude jedini vozač u Svetskom šampionatu. Nažalost, zbog povreda prilikom pada, Pileri nije mogao da započne sezonu i predložio je Marija Legu kao zamenu. Na opšte iznenađenje javnosti, Lega vozi neverovatno dobro i konstantno završava skoro svaku trku na visokim pozicijama, iako je pobedio na samo jednoj. Te 1977. godine osvaja titulu svetskog šampiona, dok tim zauzima treće mesto u poretku konstruktora.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="relative md:pt-0 md:border-none">
            <div className="xl:-mt-3 py-5 xl:px-4 pt-6 xl:pt-[61px] pb-10 xl:pb-[54px] order-2 w-full bg-black">
              <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] mx-auto skew-x-[-50deg] border-[#5ACCF0]"></div>
              <div className="w-full px-4 mt-4 xl:mt-[25px] md:mx-auto md:max-w-7xl md:px-16">
                <p className="text-[15px] md:text-base text-white lg:text-lg lg:leading-[28px] md:leading-[26px] leading-[24px] xl:leading-[30px] lg:mt-4 xl:text-[20px] font-replica-light font-normal">
                  Krajem 1977. godine, Đankarlo Morbideli donosi odluku da napusti MBA jer je Paolo Beneli želeo da lansira male mopede od 50cc na italijansko komercijalno tržište. Đankarlo, koji je već imao previše obaveza oko svoje primarne fabrike mašina za obradu drveta i trkačkog tima, nije bio zainteresovan za ulazak u masovnu prodaju. Akronim MBA je ostao, ali je sada umesto Morbidelli Benelli Armi dobio značenje Moto Benelli Armi.
                </p>
              </div>
            </div>
          </section>
          <section
            className="border-t border-[#ECECEC] md:pt-0 md:border-none items-stretch lg:flex"
            id="about_1978"
          >
            <div className="w-full overflow-hidden md:flex md:flex-row">
              <div
                className="overflow-hidden md:order-2 xl:flex md:w-1/2 h-[325px] md:h-[640px] 2xl:h-[750px]" data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src="/photos/history/morbidelli-1978-bike.png"
                  className="self-center object-cover w-full h-full max-w-full px-[15px] pt-[15px] mx-auto md:p-0 xl:object-right "
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-end px-[15px] overflow-hidden pt-6 pb-10 md:order-1 md:py-0 md:w-1/2" data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-[22px] leading-[30px] md:leading-[32px] md:text-2xl xl:text-3xl mt-4 font-replica-bold text-[#020202] uppercase tracking-[-0.3px;]">
                    {" "}
                    1978{" "}
                  </div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] leading-[24px] xl:leading-[30px] mt-1 md:mt-4 xl:text-[20px] text-[#020202] font-replica-light font-normal">
                    Ranije te godine, Đankarlo Morbideli predstavlja svoje poslednje trkačko remek-delo: neverovatni Morbidelli 500cc. Motocikl je imao četvorocilindrični "box" motor, rotacione ventile i dvostruku radilicu, a agregat je razvijao zapanjujućih 130 konjskih snaga na 11.500 obrtaja. Prva verzija je imala cevasti ram, ali je zbog sirove snage vrlo brzo razvijen napredni aluminijumski monocoque ram, sa rezervoarom integrisanim unutar same strukture.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            className="border-t border-[#ECECEC] md:pt-0 md:border-none items-stretch bg-black lg:flex"
            id="about_1979_1982"
          >
            <div className="w-full overflow-hidden md:flex md:flex-row">
              <div
                className="overflow-hidden md:order-1 xl:flex md:w-1/2 h-[325px] md:h-[640px] 2xl:h-[750px]" data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src="/photos/history/morbidelli-1979-1982-bike.png"
                  className="self-center object-cover w-full h-full max-w-full px-[15px] pt-[15px] mx-auto md:p-0 xl:object-right "
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-start px-[15px] overflow-hidden pt-6 pb-10 md:py-0 md:order-2 md:w-1/2" data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-lg lg:text-[28px] mt-4 font-replica-bold text-white uppercase lg:tracking-normal tracking-[-2%] md:text-xl md:leading-[28px] lg:leading-[32px] text-start">
                    {" "}
                    1979-1982{" "}
                  </div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] text-white leading-[24px] xl:leading-[30px] mt-1 md:mt-4 xl:text-[20px] font-replica-light font-normal">
                    Dolazak talentovanog vozača iz Pezara, Gracijana Rosija, označio je početak nove ere za tim. Gracijano, koji je baš u to vreme postao otac buduće legende moto-sporta Valentina Rosija, vozio je briljantno i ostvario tri pobede uz još dva podijuma u klasi 250cc. Uprkos brojnim tehničkim izazovima, Rosi je završio sezonu 1979. na sjajnom trećem mestu. Đankarlo Morbideli nakon ovoga prebacuje svoj potpuni fokus na klasu 500cc i formira snažan tim sa Gracijanom Rosijem i Đovanijem Peletjeom.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            id="about_1994"
            className="border-t border-[#ECECEC] border-opacity-20 md:pt-0 md:border-none items-stretch bg-black lg:flex"
          >
            <div className="w-full overflow-hidden md:flex md:flex-row">
              <div
                className="overflow-hidden md:order-2 xl:flex h-[325px] md:h-[640px] 2xl:h-[750px] md:w-1/2" data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src="/photos/history/morbidelli-1994-bike.png"
                  className="self-center w-full h-full max-w-full px-[15px] pt-[15px] mx-auto md:p-0 xl:xl:object-right  xl:object-cover"
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-end px-[15px] pt-6 pb-10 overflow-hidden bg-black md:order-1 md:py-0 md:w-1/2" data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-lg lg:text-[28px] mt-4 font-replica-bold text-white uppercase lg:tracking-normal tracking-[-2%] md:text-xl md:leading-[28px] lg:leading-[32px] text-start">
                    {" "}
                    1994{" "}
                  </div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] text-white leading-[24px] xl:leading-[30px] mt-1 md:mt-4 xl:text-[20px] font-replica-light font-normal">
                    Nakon što se na neko vreme povukao iz sveta trka, Morbideli se vraća svojoj prvoj ljubavi i predstavlja javnosti još jedno inženjersko čudo: ekskluzivni model Morbidelli 850cc sa V8 motorom, čiji je dizajn potpisala čuvena kuća Pininfarina. Ovaj vrhunski sport-touring model pokazao je neverovatne mogućnosti, isporučujući 120 KS na 11.000 obrtaja. Međutim, zbog izuzetno visokih troškova proizvodnje, napravljena su svega četiri primerka, koja danas imaju neprocenjivu kolekcionarsku vrednost.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            className="items-stretch bg-black md:pt-0 md:border-none lg:flex"
            id="about_2020"
          >
            <div className="w-full overflow-hidden md:flex md:flex-row">
              <div
                className="overflow-hidden md:order-1 xl:flex md:w-1/2 h-[325px] md:h-[640px] 2xl:h-[750px]" data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src="/photos/history/morbidelli-2020-bike.png"
                  style={{ objectPosition: "50% 25%" }}
                  className="self-center object-cover w-full h-full max-w-full pt-[15px] px-[15px] mx-auto md:p-0 xl:object-right "
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-start px-[15px] overflow-hidden pt-6 pb-10 md:py-0 md:order-2 md:w-1/2" data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-lg lg:text-[28px] mt-4 font-replica-bold text-white uppercase lg:tracking-normal tracking-[-2%] md:text-xl md:leading-[28px] lg:leading-[32px] text-start">
                    {" "}
                    2020{" "}
                  </div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] text-white leading-[24px] xl:leading-[30px] mt-1 md:mt-4 xl:text-[20px] font-replica-light font-normal">
                    Nakon što je otvorio sopstveni muzej sa preko 400 istorijskih motocikala i najvećom kolekcijom trkačkih mašina, Đankarlo Morbideli je u svojim poznim godinama radio na razvoju naprednog V12 motora. Nažalost, projekat je ostao u završnoj fazi jer mu nije preostalo dovoljno vremena da ga privede kraju. Početkom 2020. godine, u 85. godini života, Đankarlo nas je napustio, ostavljajući iza sebe istoriju, rekorde i tradiciju dostojnu holivudskog filma.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="relative h-[460px] md:h-[528px]" id="about_2021">
            <img
              src="/photos/history/2021_mbp.png"
              loading="lazy"
              className="absolute object-cover w-full h-full bg-secondary"
              alt=""
            />
            <div className="container mx-auto relative z-20 flex items-center justify-center md:justify-start h-full">
              <div className="w-[345px] md:w-[587px] flex flex-col items-center md:items-start md:justify-center">
                <p className="text-[22px] md:text-[32px] lg:text-[40px] leading-[1.3] md:leading-[1.2] text-white font-replica-light font-normal text-center md:text-start filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] max-w-xl">
                  Godine 2021. osnovan je MBP u Bolonji, Italija.
                </p>
              </div>
            </div>
          </section>
          <section className="relative" id="about_2021">
            <div className="xl:-mt-3 py-5 xl:px-4 pt-6 xl:pt-[61px] pb-10 xl:pb-[54px] order-2 w-full bg-black">
              <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] mx-auto skew-x-[-50deg] border-[#5ACCF0]"></div>
              <div className="w-full px-4 mt-4 xl:mt-[25px] md:mx-auto md:max-w-7xl md:px-16">
                <p className="text-[15px] md:text-base text-center lg:text-lg lg:leading-[28px] md:leading-[26px] leading-[24px] xl:leading-[30px] lg:mt-4 xl:text-[20px] text-white font-replica-light font-normal">
                  Godine 2021. u Bolonji, u Italiji, osnovana je kompanija MBP Moto S.r.l. pod okriljem Keeway Group-e, sa jasnom vizijom da nastavi veliko nasleđe koje je ostavio Đankarlo Morbideli. Strateški pozicioniran u samom centru italijanske moto-industrije, MBP je odmah započeo proces uspešnog oživljavanja ovog legendarnog brenda.
                </p>
              </div>
            </div>
          </section>
          <section
            className="border-t border-[#ECECEC] border-opacity-20 md:pt-0 md:border-none items-stretch bg-black lg:flex"
            id="about_2022"
          >
            <div className="w-full overflow-hidden md:flex md:flex-row">
              <div
                className="overflow-hidden md:order-1 xl:flex md:w-1/2 h-[325px] md:h-[640px] 2xl:h-[750px]" data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src="/photos/history/morbidelli-2022.png"
                  className="self-center object-cover w-full h-full max-w-full px-[15px] pt-[15px] mx-auto md:p-0 xl:object-right "
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-start px-[15px] overflow-hidden bg-black pt-6 pb-10 md:py-0 md:order-2 md:w-1/2" data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-lg lg:text-[28px] mt-4 font-replica-bold text-white uppercase lg:tracking-normal tracking-[-2%] md:text-xl md:leading-[28px] lg:leading-[32px] text-start">
                    {" "}
                    2022{" "}
                  </div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] text-white leading-[24px] xl:leading-[30px] mt-1 md:mt-4 xl:text-[20px] font-replica-light font-normal">
                    Na prestižnom EICMA sajmu 2022. godine, MBP Moto predstavlja seriju prototipova koji su momentalno privukli pažnju svetske javnosti. Inovativan dizajn postavio je nove standarde i dokazao ozbiljne namere brenda, a iste godine započela je i zvanična prodaja prvih motocikala – modela M502N i C1002V.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            className="border-t border-[#ECECEC] border-opacity-20 md:pt-0 md:border-none items-stretch bg-black lg:flex"
            id="about_2023"
          >
            <div className="w-full overflow-hidden md:flex md:flex-row">
              <div
                className="overflow-hidden md:order-2 xl:flex md:w-1/2 h-[325px] md:h-[640px] 2xl:h-[750px]" data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src="/photos/history/morbidelli-2023.png"
                  className="self-center object-cover w-full h-full max-w-full px-[15px] pt-[15px] mx-auto md:p-0 xl:object-right "
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-end px-[15px] overflow-hidden bg-black pt-6 pb-10 md:order-1 md:py-0 md:w-1/2" data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-lg lg:text-[28px] mt-4 font-replica-bold text-white uppercase lg:tracking-normal tracking-[-2%] md:text-xl md:leading-[28px] lg:leading-[32px] text-start">
                    {" "}
                    2023{" "}
                  </div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] text-white leading-[24px] xl:leading-[30px] mt-1 md:mt-4 xl:text-[20px] font-replica-light font-normal">
                    Već na EICMA sajmu 2023. godine, brend predstavlja svoj napredni električni koncept HYPEVISION, kao i potpunu liniju modela za narednu sezonu. Kompanija nastavlja snažnu globalnu ekspanziju i pokreće prodaju širom Kine, Italije i Španije.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            className="border-t border-[#ECECEC] border-opacity-20 md:pt-0 md:border-none items-stretch bg-black lg:flex"
            id="about_2024"
          >
            <div className="w-full overflow-hidden md:flex md:flex-row">
              <div
                className="overflow-hidden px-[15px] pt-[15px] md:p-0 md:order-1 xl:flex md:w-1/2 h-[325px] md:h-[640px] 2xl:h-[750px]" data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src="/photos/history/morbidelli-2024.png"
                  className="self-center object-contain w-full h-full bg-[#000] mx-auto md:object-scale-down "
                  loading="lazy"
                  alt="2024"
                />
              </div>
              <div
                className="flex items-center justify-start px-[15px] overflow-hidden bg-black pt-6 pb-10 md:py-0 md:order-2 md:w-1/2" data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-lg lg:text-[28px] mt-4 font-replica-bold text-white uppercase lg:tracking-normal tracking-[-2%] md:text-xl md:leading-[28px] lg:leading-[32px] text-start">
                    {" "}
                    2024{" "}
                  </div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] text-white leading-[24px] xl:leading-[30px] lg:mt-4 xl:text-[19px] font-replica-light font-normal">
                    Nakon što je Keeway Grupa u potpunosti konsolidovala vlasništvo, doneta je odluka o strateškom rebrendiranju: ime se zvanično menja nazad u Morbidelli, uz predstavljanje novog, modernizovanog logotipa inspirisanog bogatim trkačkim nasleđem. Crna pozadina asocira na eleganciju, dok beli detalji simbolizuju brzinu i inženjersku preciznost, a samo ime obuhvata centralni krug kao omaž slavnoj prošlosti i jasna vizija budućnosti.<br /><br />Tradicionalni lovorov venac na vrhu logotipa predstavlja trijumf i odaje počast impresivnoj trkačkoj istoriji brenda. Jarko crvena boja simbolizuje prepoznatljivu italijansku strast, dok plavi tonovi unose originalni Morbidelli trkački DNK u savremene motocikle, opremu i salone.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="border-t border-[#ECECEC] border-opacity-20 md:pt-0 md:border-none items-stretch bg-black lg:flex">
            <div className="w-full overflow-hidden md:flex md:flex-row">
              <div
                className="overflow-hidden md:order-2 xl:flex md:w-1/2 h-[325px] md:h-[640px] 2xl:h-[750px]" data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src="/photos/history/morbidelli-beyond-ride.png"
                  className="self-center object-cover w-full h-full max-w-full px-[15px] pt-[15px] mx-auto md:p-0 xl:object-right "
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-end px-[15px] overflow-hidden bg-black pt-6 pb-10 md:order-1 md:py-0 md:w-1/2" data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-lg lg:text-[28px] mt-4 font-replica-bold text-white uppercase lg:tracking-normal tracking-[-2%] md:text-xl md:leading-[28px] lg:leading-[32px] text-start">
                    “BEYOND THE RIDE”
                  </div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] text-white leading-[24px] xl:leading-[30px] mt-1 md:mt-4 xl:text-[20px] font-replica-light font-normal font-light">
                    Ovo je mnogo više od običnog slogana – to je sama srž i filozofija brenda u kojoj se vrhunski inženjering spaja sa čistim uzbuđenjem vožnje. Predstavlja pravu radost putovanja, neraskidivu vezu između motocikliste i asfalta, kao i beskompromisni italijanski takmičarski duh. Morbidelli danas nisu samo motocikli i tehničke specifikacije na papiru; to su jedinstvena iskustva, stil života i avanture koje oživljavaju sa svakim novim kilometrom. Ovaj slogan vas poziva da i vi postanete deo priče o strasti, slobodi i vrhunskoj umetnosti vožnje na dva točka.<br /><br /><br />Dobrodošli i postanite deo priče koja nastavlja da ispisuje istoriju!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </main>
  );
}
