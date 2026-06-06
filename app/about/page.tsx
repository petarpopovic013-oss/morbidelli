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
                className="relative h-[480px] aos-init aos-animate"
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
                className="flex items-center justify-start order-2 px-4 pt-[30px] pb-[60px] overflow-hidden md:w-1/2 aos-init aos-animate"
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
                    <span
                      style={{
                        fontFamily: "var(--font-inter-local)",
                        fontWeight: "300",
                      }}
                    >
                      Đ
                    </span>
                    ankarlo Morbideli: Legendarni konstruktor trka
                    <span
                      style={{
                        fontFamily: "var(--font-inter-local)",
                        fontWeight: "300",
                      }}
                    >
                      č
                    </span>
                    kih motocikala
                  </h1>
                </div>
              </div>
            </div>
          </section>
          <section className="block md:hidden"></section>
          <section className="border-t border-[#ECECEC] md:border-none items-stretch lg:flex">
            <div className="w-full overflow-hidden md:flex md:flex-row">
              <div
                className="overflow-hidden md:order-1 xl:flex md:w-1/2 md:h-[800px] lg:h-[977px] sm:h-[600] 2xl:h-[1100px] aos-init aos-animate"
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
                className="flex items-center justify-start overflow-hidden md:order-2 xl:py-8 md:w-1/2 aos-init aos-animate"
                data-aos-delay="10"
              >
                <div className="w-full lg:w-[525px] px-4 md:mx-8 xl:mx-20 md:my-0 my-10">
                  <h1 className="text-xl md:text-[22px] md:leading-[28px] lg:text-2xl xl:text-[28px] font-replica-bold text-[#0A0908] uppercase xl:tracking-normal tracking-[-2%] leading-[39px] xl:leading-[32px] text-start">
                    Giancarlo morbidelli
                  </h1>
                  <p className="text-sm mt-4 md:text-base lg:text-lg xl:text-xl font-normal lg:!leading-[30px] font-replica-light text-[#020202]">
                    <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>Đ</span>ankarlo Morbideli ro<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>đ</span>en je u radni<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>koj, seoskoj porodici 18. oktobra 1934. godine u Pezaru, u Italiji. Odrastao je u okru<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span>enju u kojem su njegove kom<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>ije iz kompanija Benelli i Motobi ispisivale istoriju moto-industrije, kako kroz razvoj motocikala, tako i kroz uspehe svojih trka<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>kih odeljenja. Svoj prvi motocikl, stari Alpino, modifikovao je samostalno u gara<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span>i – sa minimalno resursa, ali sa jasnim ciljem da izvu<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>e bolje performanse. Ipak, na o<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ev nagovor, <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>Đ</span>ankarlo upisuje tehni<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ku <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>kolu za obradu drveta jer je Pezaro u to vreme bio ozbiljan centar industrije name<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>taja, pa su <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>anse za zaposlenje bile velike.<br /><br />Ve<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ć</span> 1959. godine, sa svega 25 godina, osnovao je sopstvenu firmu za razvoj, proizvodnju i prodaju ma<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>ina za obradu drveta – Morbidelli Woodworking Machines. Spojiv<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>i in<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span>enjersko znanje i izuzetan njuh za biznis, tokom narednih 15 godina izgradio je izuzetno uspe<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>nu kompaniju u Pezaru koja je zapo<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>ljavala preko 350 ljudi i izvozila u vi<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>e od 60 zemalja <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>irom sveta. Me<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>đ</span>utim, <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>Đ</span>ankarlova energija je bila neograni<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ena, pa je pored vo<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>đ</span>enja velike kompanije uvek nalazio vremena da se posveti svojoj najve<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ć</span>oj strasti – motociklima.
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
                  Prvi trka<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ki Morbidelli motocikl bio je jedinstven projekat: ma<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>ina od 60cc bazirana na Benelli agregatu sa modifikovanim cilindrom i glavom, sme<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>tena u ram modela Bianchi Falco Supersport. Sa ovim motociklom se Enco Lazarini takmi<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>io na lokalnim trkama. Ubrzo se okupio i prvi interni trka<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ki tim koji su, pored <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>Đ</span>ankarla Morbidelija, <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>inili tehni<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ar Ser<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>đ</span>o Grasini i voza<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>i Franko Ringini i Eu<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>đ</span>enio Lazarini. Godine 1968. zvani<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>no po<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>inju da se takmi<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>e kao deo novooformljenog trka<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>kog odeljenja (Reparto Corse).
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
                className="overflow-hidden md:order-1 xl:flex md:w-1/2 md:h-[640px] 2xl:h-[750px] h-[325px] aos-init aos-animate"
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
                className="flex items-center justify-start px-[15px] pt-6 pb-10 overflow-hidden md:py-0 md:order-2 md:w-1/2 aos-init aos-animate"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] md:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-[22px] leading-[30px] md:leading-[32px] md:text-2xl xl:text-3xl mt-4 font-replica-bold text-[#020202] uppercase tracking-[-0.3px;]">
                    {" "}
                    1969{" "}
                  </div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] leading-[24px] xl:leading-[30px] mt-1 md:mt-4 xl:text-[20px] text-[#020202] font-replica-light font-normal">
                    Ringini i Lazarini su veoma uspe<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>no vozili Morbidelli 50cc na nekoliko trka, osvojiv<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>i prvo i drugo mesto na Velikoj nagradi Slovenije, a ubrzo su pobedili i na prvenstvu Italije. Ova prva internacionalna pobeda bila je prelomna ta<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ka i motivisala je Morbidelija da pre<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>đ</span>e u vi<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>u klasu, pa tim zapo<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>inje razvoj potpuno novog dvocilindri<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>nog agregata od 125cc za nastup na Svetskom <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>ampionatu 1970. godine.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="border-t border-[#ECECEC] md:pt-0 md:border-none items-stretch lg:flex">
            <div className="w-full overflow-hidden md:flex md:flex-row">
              <div
                className="overflow-hidden md:order-2 xl:flex md:w-1/2 xl:h-[640px] h-[325px] mt-[15px] mx-[15px] md:m-0 aos-init aos-animate"
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
                className="flex items-center justify-end pt-6 pb-10 px-[15px] overflow-hidden md:py-0 md:order-1 md:w-1/2 md:px-0 aos-init aos-animate"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-[22px] leading-[30px] md:leading-[32px] md:text-2xl xl:text-3xl mt-4 font-replica-bold text-[#020202] uppercase tracking-[-0.3px;]">
                    {" "}
                    1969{" "}
                  </div>
                  <p className="text-[22px] leading-[32px] md:text-3xl md:leading-[36px] lg:text-[32px] lg:leading-[40px] md:leading-[30px] mt-1 md:mt-4 xl:text-[40px] xl:leading-[50px] text-[#020202] font-replica-light font-normal">
                    U ovom uspe<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>nom periodu nastaje i prvi zvani<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ni logo koji je koristio Morbidelli trka<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ki tim.
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
                className="overflow-hidden md:order-1 xl:flex md:w-1/2 md:h-[640px] 2xl:h-[750px] h-[325px] aos-init aos-animate"
                data-aos-delay="100"
              >
                <img
                  src="/photos/history/morbidelli-1970-bike.png"
                  className="self-center object-cover w-full h-full max-w-full pt-[15px] px-[15px] mx-auto md:p-0 xl:object-right "
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-start px-[15px] pt-6 pb-10 overflow-hidden md:py-0 md:order-2 md:w-1/2 aos-init aos-animate"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-[22px] leading-[30px] md:leading-[32px] md:text-2xl xl:text-3xl mt-4 font-replica-bold text-[#020202] uppercase tracking-[-0.3px;]">
                    {" "}
                    1970{" "}
                  </div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] leading-[24px] xl:leading-[30px] mt-1 md:mt-4 xl:text-[20px] text-[#020202] font-replica-light font-normal">
                    Morbidelli tim u klasi 50cc <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>vrsto je pozicionirao svoje mesto na svetskoj sceni, ostvariv<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>i pet podijuma iz osam trka sa Lazarinijem i Ringinijem. U me<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>đ</span>uvremenu, <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>Đ</span>ankarlo Morbideli povla<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>i klju<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ni potez i u klasu 125cc dovodi Gilberta Parlotija, koji je prethodno vozio <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>etvorocilindri<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ni Benelli 250 i pomogao Kelu Karadersu da osvoji svetsku titulu 1969. godine. U svojoj prvoj sezoni, Parloti odmah opravdava poverenje i donosi tri velike pobede: jednu u svetskom <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>ampionatu i dve na nacionalnim trkama. Svetski <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>ampionat 1970. godine zapo<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>eo je Franko Ringini, a od Velike nagrade <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>Č</span>e<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>ke pridru<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span>io mu se i Gilberto Parloti.
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
                className="overflow-hidden md:order-2 xl:flex md:w-1/2 h-[325px] md:h-[640px] 2xl:h-[750px] aos-init aos-animate"
                data-aos-delay="100"
              >
                <img
                  src="/photos/history/morbidelli-1971-bike.png"
                  className="self-center object-cover w-full h-full max-w-full pt-[15px] px-[15px] mx-auto md:p-0 xl:object-right "
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-end px-[15px] pt-6 pb-10 overflow-hidden md:order-1 md:py-0 md:w-1/2 md:px-4 aos-init aos-animate"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-[22px] leading-[30px] md:leading-[32px] md:text-2xl xl:text-3xl mt-4 font-replica-bold text-[#020202] uppercase tracking-[-0.3px;]">
                    {" "}
                    1971{" "}
                  </div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] leading-[24px] xl:leading-[30px] mt-1 md:mt-4 xl:text-[20px] text-[#020202] font-replica-light font-normal">
                    Nakon dve pobede na nacionalnim trkama i dva druga mesta na Velikim nagradama Austrije i Nema<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ke, Parloti odnosi pobedu i na Gran priju Nacija u Monci, <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ime je cementirao poziciju prvog voza<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>a tima. Te sezone je zavr<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>io na osmom mestu u generalnom plasmanu svetskog <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>ampionata. U isto vreme, sa <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>etiri pobede u prvenstvu Italije u klasi 50cc, Alberto Leva iz Rima doneo je Morbidelli timu prvu veliku titulu postav<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>i <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>ampion Italije.
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
                  Godine 1972, razvoj modela od 50cc je obustavljen jer se trka<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ko odeljenje u potpunosti fokusiralo na klasu od 125cc. Gilberto Parloti je bio nezaustavljiv sa <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>etiri uzastopne pobede i nalazio se na samom vrhunu svog napretka, ali je tim tada zadesila velika tragedija. Dok je ubedljivo vodio u svetskom <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>ampionatu, Parloti do<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span>ivljava fatalnu nesre<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ć</span>u na <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>uvenoj trci Isle of Man Tourist Trophy. Ceo tim je bio duboko pogo<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>đ</span>en ovim gubitkom, ali <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>Đ</span>ankarlo ostaje odlu<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>an i odbija da odustane, nastavljaju<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ć</span>i borbu u Parlotijevu <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ast.
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
                className="overflow-hidden md:order-2 xl:flex md:w-1/2 md:h-[640px] 2xl:h-[750px] h-[325px] flex items-center justify-center aos-init aos-animate"
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
                className="flex items-center justify-end pt-6 pb-10 overflow-hidden md:order-1 md:py-0 md:w-1/2 md:px-4 aos-init aos-animate"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-[22px] leading-[30px] md:leading-[32px] md:text-2xl xl:text-3xl mt-4 font-replica-bold text-[#020202] uppercase tracking-[-0.3px;]">
                    {" "}
                    1973{" "}
                  </div>
                  <p className="text-[22px] leading-[32px] md:text-3xl md:leading-[36px] lg:text-[32px] lg:leading-[40px] md:leading-[30px] mt-1 md:mt-4 xl:text-[40px] xl:leading-[50px] text-[#020202] font-replica-light font-normal">
                    U znak se<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ć</span>anja i nastavka borbe, tim nastavlja sa radom pod prepoznatljivim vizuelnim identitetom i logom koji su koristili Morbidelli i drugi partnerski trka<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ki timovi.
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
                className="overflow-hidden md:order-1 xl:flex md:w-1/2 h-[325px] md:h-[640px] 2xl:h-[750px] aos-init aos-animate"
                data-aos-delay="100"
              >
                <img
                  src="/photos/history/morbidelli-1975.png"
                  className="self-center object-cover w-full h-full max-w-full pt-[15px] px-[15px] mx-auto md:p-0 xl:object-right "
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-start overflow-hidden px-[15px] pt-6 pb-10 md:py-0 md:order-2 md:w-1/2 aos-init aos-animate"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <h1 className="text-[22px] leading-[30px] md:leading-[32px] md:text-2xl xl:text-3xl mt-4 font-replica-bold text-[#020202] uppercase tracking-[-0.3px;]">
                    {" "}
                    1975{" "}
                  </h1>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] leading-[24px] xl:leading-[30px] mt-2 md:mt-4 xl:text-[20px] text-[#020202] font-replica-light font-normal">
                    Trud i posve<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ć</span>enost su se u potpunosti isplatili jer su Paolo Pileri i Pjer Paolo Bjanki osvojili prvo i drugo mesto u svetskom <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>ampionatu, ostvariv<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>i potpunu dominaciju. Od ukupno 16 trka 1975. godine, Morbidelli tim bele<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span>i <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ak 15 podijuma. Pobedni<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ku ekipu <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>inili su vlasnik <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>Đ</span>ankarlo Morbideli i tim vrhunskih mehani<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ara: Jorg Meler, <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>Đ</span>ankarlo <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>Č</span>ekini, <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>Đ</span>ankarlo Bonaventura i Franko Dionizi. Ovaj tim osvaja prvo mesto u <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>ampionatu konstruktora, pobediv<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>i najve<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ć</span>e svetske fabri<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ke brendove, dok su Pileri i Bjanki podelili prva dva mesta u svetu, i obrnuto na italijanskom nacionalnom <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>ampionatu.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="border-t border-[#ECECEC] md:pt-0 md:border-none items-stretch lg:flex">
            <div className="w-full overflow-hidden md:flex md:flex-row">
              <div
                className="overflow-hidden md:order-2 mt-[15px] mx-[15px] xl:flex md:w-1/2 h-[325px] md:h-[640px] 2xl:h-[750px] flex items-center justify-center aos-init"
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
                className="flex items-center justify-end px-[15px] pt-6 pb-10 overflow-hidden md:order-1 md:py-0 md:w-1/2 md:px-4 aos-init"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] leading-[24px] xl:leading-[30px] mt-2 md:mt-4 xl:text-[20px] text-[#020202] font-replica-light font-normal">
                    Krajem te uspe<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>ne 1975. godine, <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>Đ</span>ankarlo Morbideli, Paolo Beneli i Ino<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>enco Nardi Dei (Benelli Armi) udru<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span>uju snage i pokre<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ć</span>u zajedni<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ki projekat. Osnivaju kompaniju MBA – <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>to je akronim za Morbidelli Benelli Armi – sa ciljem da pokrenu serijsku proizvodnju replika svog pobedni<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>kog modela 125 i ponude ih privatnim timovima.<br /><br />Model MBA VR 125 se prvobitno proizvodio u pogonima Benelli Armi u Urbinu, da bi se kasnije proizvodnja preselila u Sant Angelo in Vado. Ovaj spoj dva velika sportska i industrijska imena done<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ć</span>e jo<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span> vi<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>e uspeha i ispisati nove stranice istorije u godinama koje dolaze.
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
                className="overflow-hidden md:order-1 xl:flex md:w-1/2 h-[325px] md:h-[640px] 2xl:h-[750px] aos-init"
                data-aos-delay="100"
              >
                <img
                  src="/photos/history/morbidelli-1976.png"
                  className="self-center object-cover w-full h-full max-w-full pt-[15px] px-[15px] md:p-0 xl:object-right "
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-start overflow-hidden px-[15px] pt-6 pb-10 md:py-0 md:order-2 md:w-1/2 aos-init"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-[22px] leading-[30px] md:leading-[32px] md:text-2xl xl:text-3xl mt-4 font-replica-bold text-[#020202] uppercase tracking-[-0.3px;]">
                    {" "}
                    1976{" "}
                  </div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] leading-[24px] xl:leading-[30px] mt-1 md:mt-4 xl:text-[20px] text-[#020202] font-replica-light font-normal">
                    Pjer Paolo Bjanki postaje svetski <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>ampion u klasi 125cc na motociklu Morbidelli MBA VR125, dominiraju<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ć</span>i sezonom ba<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span> kao i godinu dana ranije. To je bila druga uzastopna titula svetskog <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>ampiona za brend. Tim je obezbedio podijum na svih devet Grand Prix trka, pri <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>emu je Bjanki pobedio na <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ak sedam. Drugu godinu zaredom, Morbidelli osvaja <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>ampionat konstruktora, Bjanki postaje <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>ampion, a Paolo Pileri zauzima tre<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ć</span>e mesto na svetu.
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
                  U me<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>đ</span>uvremenu, <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>Đ</span>ankarlo Morbideli u svojim radionicama pokre<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ć</span>e i podsti<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>e razvoj novih modela od 250cc i 350cc. Razvoj je vo<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>đ</span>en logikom prelaska sa 42 KS u klasi 125cc na sna<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span>nijih 62 KS pri 12.000 obrtaja u klasi 250cc. Prvi Morbidelli 250 modeli ubrzo su po<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>eli da se takmi<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>e i uz pomo<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ć</span> Pilerija i Bjankija ostvarili <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>est podijuma i drugo mesto na Velikoj nagradi Belgije. <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>Č</span>ak je i legendarni vi<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>estruki svetski <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>ampion <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>Đ</span>akomo Agostini 8. avgusta 1976. seo za upravlja<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span> modela Morbidelli 250 i u Mizanu osvojio drugo mesto.
                </p>
              </div>
            </div>
          </section>
          <section className="items-stretch lg:flex" id="about_1977">
            <div className="w-full overflow-hidden md:flex md:flex-row">
              <div
                className="overflow-hidden md:order-1 xl:flex md:w-1/2 h-[325px] md:h-[640px] 2xl:h-[750px] aos-init"
                data-aos-delay="100"
              >
                <img
                  src="/photos/history/morbidelli-1977.png"
                  className="self-center object-cover w-full h-full max-w-full pt-[15px] px-[15px] mx-auto md:p-0 xl:object-right "
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-start px-[15px] overflow-hidden pt-6 pb-[30px] md:py-0 md:order-2 md:w-1/2 aos-init"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-[22px] leading-[30px] md:leading-[32px] md:text-2xl xl:text-3xl mt-4 font-replica-bold text-[#020202] uppercase tracking-[-0.3px;]">
                    {" "}
                    1977{" "}
                  </div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] leading-[24px] xl:leading-[30px] mt-1 md:mt-4 xl:text-[20px] text-[#020202] font-replica-light font-normal">
                    U drugoj sezoni za model od 250cc, planirano je da Paolo Pileri bude jedini voza<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span> u Svetskom <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>ampionatu. Na<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span>alost, zbog povreda prilikom pada, Pileri nije mogao da zapo<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ne sezonu i predlo<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span>io je Marija Legu kao zamenu. Na op<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>te iznena<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>đ</span>enje javnosti, Lega vozi neverovatno dobro i konstantno zavr<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>ava skoro svaku trku na visokim pozicijama, iako je pobedio na samo jednoj. Te 1977. godine osvaja titulu svetskog <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>ampiona, dok tim zauzima tre<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ć</span>e mesto u poretku konstruktora.
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
                  Krajem 1977. godine, <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>Đ</span>ankarlo Morbideli donosi odluku da napusti MBA jer je Paolo Beneli <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span>eleo da lansira male mopede od 50cc na italijansko komercijalno tr<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span>i<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>te. <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>Đ</span>ankarlo, koji je ve<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ć</span> imao previ<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>e obaveza oko svoje primarne fabrike ma<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>ina za obradu drveta i trka<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>kog tima, nije bio zainteresovan za ulazak u masovnu prodaju. Akronim MBA je ostao, ali je sada umesto Morbidelli Benelli Armi dobio zna<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>enje Moto Benelli Armi.
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
                className="overflow-hidden md:order-2 xl:flex md:w-1/2 h-[325px] md:h-[640px] 2xl:h-[750px] aos-init"
                data-aos-delay="100"
              >
                <img
                  src="/photos/history/morbidelli-1978-bike.png"
                  className="self-center object-cover w-full h-full max-w-full px-[15px] pt-[15px] mx-auto md:p-0 xl:object-right "
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-end px-[15px] overflow-hidden pt-6 pb-10 md:order-1 md:py-0 md:w-1/2 aos-init"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-[22px] leading-[30px] md:leading-[32px] md:text-2xl xl:text-3xl mt-4 font-replica-bold text-[#020202] uppercase tracking-[-0.3px;]">
                    {" "}
                    1978{" "}
                  </div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] leading-[24px] xl:leading-[30px] mt-1 md:mt-4 xl:text-[20px] text-[#020202] font-replica-light font-normal">
                    Ranije te godine, <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>Đ</span>ankarlo Morbideli predstavlja svoje poslednje trka<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ko remek-delo: neverovatni Morbidelli 500cc. Motocikl je imao <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>etvorocilindri<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ni "box" motor, rotacione ventile i dvostruku radilicu, a agregat je razvijao zapanjuju<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ć</span>ih 130 konjskih snaga na 11.500 obrtaja. Prva verzija je imala cevasti ram, ali je zbog sirove snage vrlo brzo razvijen napredni aluminijumski monocoque ram, sa rezervoarom integrisanim unutar same strukture.
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
                className="overflow-hidden md:order-1 xl:flex md:w-1/2 h-[325px] md:h-[640px] 2xl:h-[750px] aos-init"
                data-aos-delay="100"
              >
                <img
                  src="/photos/history/morbidelli-1979-1982-bike.png"
                  className="self-center object-cover w-full h-full max-w-full px-[15px] pt-[15px] mx-auto md:p-0 xl:object-right "
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-start px-[15px] overflow-hidden pt-6 pb-10 md:py-0 md:order-2 md:w-1/2 aos-init"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-lg lg:text-[28px] mt-4 font-replica-bold text-white uppercase lg:tracking-normal tracking-[-2%] md:text-xl md:leading-[28px] lg:leading-[32px] text-start">
                    {" "}
                    1979-1982{" "}
                  </div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] text-white leading-[24px] xl:leading-[30px] mt-1 md:mt-4 xl:text-[20px] font-replica-light font-normal">
                    Dolazak talentovanog voza<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>a iz Pezara, Gracijana Rosija, ozna<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>io je po<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>etak nove ere za tim. Gracijano, koji je ba<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span> u to vreme postao otac budu<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ć</span>e legende moto-sporta Valentina Rosija, vozio je briljantno i ostvario tri pobede uz jo<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span> dva podijuma u klasi 250cc. Uprkos brojnim tehni<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>kim izazovima, Rosi je zavr<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>io sezonu 1979. na sjajnom tre<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ć</span>em mestu. <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>Đ</span>ankarlo Morbideli nakon ovoga prebacuje svoj potpuni fokus na klasu 500cc i formira sna<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span>an tim sa Gracijanom Rosijem i <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>Đ</span>ovanijem Peletjeom.
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
                className="overflow-hidden md:order-2 xl:flex h-[325px] md:h-[640px] 2xl:h-[750px] md:w-1/2 aos-init"
                data-aos-delay="100"
              >
                <img
                  src="/photos/history/morbidelli-1994-bike.png"
                  className="self-center w-full h-full max-w-full px-[15px] pt-[15px] mx-auto md:p-0 xl:xl:object-right  xl:object-cover"
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-end px-[15px] pt-6 pb-10 overflow-hidden bg-black md:order-1 md:py-0 md:w-1/2 aos-init"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-lg lg:text-[28px] mt-4 font-replica-bold text-white uppercase lg:tracking-normal tracking-[-2%] md:text-xl md:leading-[28px] lg:leading-[32px] text-start">
                    {" "}
                    1994{" "}
                  </div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] text-white leading-[24px] xl:leading-[30px] mt-1 md:mt-4 xl:text-[20px] font-replica-light font-normal">
                    Nakon <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>to se na neko vreme povukao iz sveta trka, Morbideli se vra<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ć</span>a svojoj prvoj ljubavi i predstavlja javnosti jo<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span> jedno in<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span>enjersko <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>udo: ekskluzivni model Morbidelli 850cc sa V8 motorom, <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>iji je dizajn potpisala <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>uvena ku<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ć</span>a Pininfarina. Ovaj vrhunski sport-touring model pokazao je neverovatne mogu<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ć</span>nosti, isporu<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>uju<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ć</span>i 120 KS na 11.000 obrtaja. Me<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>đ</span>utim, zbog izuzetno visokih tro<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>kova proizvodnje, napravljena su svega <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>etiri primerka, koja danas imaju neprocenjivu kolekcionarsku vrednost.
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
                className="overflow-hidden md:order-1 xl:flex md:w-1/2 h-[325px] md:h-[640px] 2xl:h-[750px] aos-init"
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
                className="flex items-center justify-start px-[15px] overflow-hidden pt-6 pb-10 md:py-0 md:order-2 md:w-1/2 aos-init"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-lg lg:text-[28px] mt-4 font-replica-bold text-white uppercase lg:tracking-normal tracking-[-2%] md:text-xl md:leading-[28px] lg:leading-[32px] text-start">
                    {" "}
                    2020{" "}
                  </div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] text-white leading-[24px] xl:leading-[30px] mt-1 md:mt-4 xl:text-[20px] font-replica-light font-normal">
                    Nakon <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>to je otvorio sopstveni muzej sa preko 400 istorijskih motocikala i najve<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ć</span>om kolekcijom trka<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>kih ma<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>ina, <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>Đ</span>ankarlo Morbideli je u svojim poznim godinama radio na razvoju naprednog V12 motora. Na<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span>alost, projekat je ostao u zavr<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>noj fazi jer mu nije preostalo dovoljno vremena da ga privede kraju. Po<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>etkom 2020. godine, u 85. godini <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span>ivota, <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>Đ</span>ankarlo nas je napustio, ostavljaju<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ć</span>i iza sebe istoriju, rekorde i tradiciju dostojnu holivudskog filma.
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
            <div className="container mx-auto relative z-20 flex justify-center md:block">
              <div className="w-[345px] md:w-[587px] pt-6 pb-10 md:pt-[90px] flex flex-col items-center md:items-start md:justify-start">
                <svg
                  width="113"
                  height="113"
                  viewBox="0 0 113 113"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white w-[112px] h-[112px]"
                >
                  <path
                    d="M103.775 26.8242C98.33 18.1691 90.2967 10.674 79.7654 5.40931L79.1406 5.05315V107.039C86.3701 104.184 89.672 100.704 89.672 100.704V62.6931C89.672 62.6931 109.755 62.6036 111.897 62.6036C112.7 48.8629 110.022 36.7278 103.775 26.8242ZM89.5834 52.0752V27.5375C89.5834 27.5375 89.672 27.5375 90.8329 28.5194C97.2596 34.2298 100.651 42.9744 100.651 51.9857C94.2243 52.0752 90.5653 52.0752 89.5834 52.0752Z"
                    fill="currentColor"
                  />
                </svg>
                <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] leading-[24px] xl:leading-[30px] mt-4 xl:text-[20px] text-white font-replica-light font-normal text-center md:text-start">
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
                  Godine 2021. u Bolonji, u Italiji, osnovana je kompanija MBP Moto S.r.l. pod okriljem Keeway Group-e, sa jasnom vizijom da nastavi veliko nasle<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>đ</span>e koje je ostavio <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>Đ</span>ankarlo Morbideli. Strate<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>ki pozicioniran u samom centru italijanske moto-industrije, MBP je odmah zapo<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>eo proces uspe<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>nog o<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span>ivljavanja ovog legendarnog brenda.
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
                className="overflow-hidden md:order-1 xl:flex md:w-1/2 h-[325px] md:h-[640px] 2xl:h-[750px] aos-init"
                data-aos-delay="100"
              >
                <img
                  src="/photos/history/morbidelli-2022.png"
                  className="self-center object-cover w-full h-full max-w-full px-[15px] pt-[15px] mx-auto md:p-0 xl:object-right "
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-start px-[15px] overflow-hidden bg-black pt-6 pb-10 md:py-0 md:order-2 md:w-1/2 aos-init"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-lg lg:text-[28px] mt-4 font-replica-bold text-white uppercase lg:tracking-normal tracking-[-2%] md:text-xl md:leading-[28px] lg:leading-[32px] text-start">
                    {" "}
                    2022{" "}
                  </div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] text-white leading-[24px] xl:leading-[30px] mt-1 md:mt-4 xl:text-[20px] font-replica-light font-normal">
                    Na presti<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span>nom EICMA sajmu 2022. godine, MBP Moto predstavlja seriju prototipova koji su momentalno privukli pa<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span>nju svetske javnosti. Inovativan dizajn postavio je nove standarde i dokazao ozbiljne namere brenda, a iste godine zapo<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ela je i zvani<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>na prodaja prvih motocikala – modela M502N i C1002V.
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
                className="overflow-hidden md:order-2 xl:flex md:w-1/2 h-[325px] md:h-[640px] 2xl:h-[750px] aos-init"
                data-aos-delay="100"
              >
                <img
                  src="/photos/history/morbidelli-2023.png"
                  className="self-center object-cover w-full h-full max-w-full px-[15px] pt-[15px] mx-auto md:p-0 xl:object-right "
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-end px-[15px] overflow-hidden bg-black pt-6 pb-10 md:order-1 md:py-0 md:w-1/2 aos-init"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-lg lg:text-[28px] mt-4 font-replica-bold text-white uppercase lg:tracking-normal tracking-[-2%] md:text-xl md:leading-[28px] lg:leading-[32px] text-start">
                    {" "}
                    2023{" "}
                  </div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] text-white leading-[24px] xl:leading-[30px] mt-1 md:mt-4 xl:text-[20px] font-replica-light font-normal">
                    Ve<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ć</span> na EICMA sajmu 2023. godine, brend predstavlja svoj napredni elektri<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ni koncept HYPEVISION, kao i potpunu liniju modela za narednu sezonu. Kompanija nastavlja sna<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span>nu globalnu ekspanziju i pokre<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ć</span>e prodaju <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>irom Kine, Italije i <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>Š</span>panije.
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
                className="overflow-hidden px-[15px] pt-[15px] md:p-0 md:order-1 xl:flex md:w-1/2 h-[325px] md:h-[640px] 2xl:h-[750px] aos-init"
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
                className="flex items-center justify-start px-[15px] overflow-hidden bg-black pt-6 pb-10 md:py-0 md:order-2 md:w-1/2 aos-init"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-lg lg:text-[28px] mt-4 font-replica-bold text-white uppercase lg:tracking-normal tracking-[-2%] md:text-xl md:leading-[28px] lg:leading-[32px] text-start">
                    {" "}
                    2024{" "}
                  </div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] text-white leading-[24px] xl:leading-[30px] lg:mt-4 xl:text-[19px] font-replica-light font-normal">
                    Nakon <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>to je Keeway Grupa u potpunosti konsolidovala vlasni<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>tvo, doneta je odluka o strate<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>kom rebrendiranju: ime se zvani<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>no menja nazad u Morbidelli, uz predstavljanje novog, modernizovanog logotipa inspirisanog bogatim trka<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>kim nasle<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>đ</span>em. Crna pozadina asocira na eleganciju, dok beli detalji simbolizuju brzinu i in<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span>enjersku preciznost, a samo ime obuhvata centralni krug kao oma<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span> slavnoj pro<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>losti i jasna vizija budu<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ć</span>nosti.<br /><br />Tradicionalni lovorov venac na vrhu logotipa predstavlja trijumf i odaje po<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ast impresivnoj trka<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>koj istoriji brenda. Jarko crvena boja simbolizuje prepoznatljivu italijansku strast, dok plavi tonovi unose originalni Morbidelli trka<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ki DNK u savremene motocikle, opremu i salone.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="border-t border-[#ECECEC] border-opacity-20 md:pt-0 md:border-none items-stretch bg-black lg:flex">
            <div className="w-full overflow-hidden md:flex md:flex-row">
              <div
                className="overflow-hidden md:order-2 xl:flex md:w-1/2 h-[325px] md:h-[640px] 2xl:h-[750px] aos-init"
                data-aos-delay="100"
              >
                <img
                  src="/photos/history/morbidelli-beyond-ride.png"
                  className="self-center object-cover w-full h-full max-w-full px-[15px] pt-[15px] mx-auto md:p-0 xl:object-right "
                  loading="lazy"
                />
              </div>
              <div
                className="flex items-center justify-end px-[15px] overflow-hidden bg-black pt-6 pb-10 md:order-1 md:py-0 md:w-1/2 aos-init"
                data-aos-delay="100"
              >
                <div className="w-full lg:w-[525px] lg:pl-4 lg:pr-6 md:mx-4 lg:mx-8 xl:mx-20">
                  <div className="border-b-4 w-[69px] md:w-[108px] h-[4px] skew-x-[-50deg] border-[#5ACCF0]"></div>
                  <div className="text-lg lg:text-[28px] mt-4 font-replica-bold text-white uppercase lg:tracking-normal tracking-[-2%] md:text-xl md:leading-[28px] lg:leading-[32px] text-start">
                    “BEYOND THE RIDE”
                  </div>
                  <p className="text-[15px] md:text-base lg:text-lg lg:leading-[28px] md:leading-[26px] text-white leading-[24px] xl:leading-[30px] mt-1 md:mt-4 xl:text-[20px] font-replica-light font-normal font-light">
                    Ovo je mnogo vi<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>e od obi<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>nog slogana – to je sama sr<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span> i filozofija brenda u kojoj se vrhunski in<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span>enjering spaja sa <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>istim uzbu<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>đ</span>enjem vo<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span>nje. Predstavlja pravu radost putovanja, neraskidivu vezu izme<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>đ</span>u motocikliste i asfalta, kao i beskompromisni italijanski takmi<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>arski duh. Morbidelli danas nisu samo motocikli i tehni<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ke specifikacije na papiru; to su jedinstvena iskustva, stil <span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span>ivota i avanture koje o<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span>ivljavaju sa svakim novim kilometrom. Ovaj slogan vas poziva da i vi postanete deo pri<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>e o strasti, slobodi i vrhunskoj umetnosti vo<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>ž</span>nje na dva to<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>ka.<br /><br /><br />Dobrodo<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>š</span>li i postanite deo pri<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>č</span>e koja nastavlja da ispisuje istoriju!
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
