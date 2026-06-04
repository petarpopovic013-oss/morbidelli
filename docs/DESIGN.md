# Design System & Guidelines (Morbidelli App)

Ovaj dokument definiše precizan dizajn sistem i tehničke smernice zasnovane na trenutnom stanju sajta. Dizajn je rađen tako da pruži "premium" doživljaj (vibrantne boje, oštri i prilagođeni fontovi, fluidne mikro-animacije i savršen kontrast između svetlih i tamnih sekcija).

## 1. Paleta Boja

Sajt koristi kombinaciju jako čistih i kontrastnih boja (black/white) sa specifičnim akcentima (Cijan i Crvena).

- **Background (Main)**: `#ffffff` (Bela) - osnovna boja sajta.
- **Dark Elements Background**: `#101010` (Veoma tamno siva, gotovo crna) - koristi se za Footer i overlay-e.
- **Text (Light Theme)**: `#000000` (Crna) za naslove i tekstove, `#4b5563` (Siva 600) za podnaslove.
- **Text (Dark Theme)**: `#ffffff` (Bela) za naslove, `#d1d5db` (Siva 300) ili `#6b7280` (Siva 500) za sekundarni tekst u futeru.
- **Akcentna boja (Primarna)**: `#5ACCF0` (Cyan / `track-cyan`) - koristi se za hover efekte, pregradne linije, naslove kolona u futeru, ivice dugmića.
- **Akcentna boja (Sekundarna)**: `#FF212A` (Red) - koristi se povremeno za naglašavanje (ne koristi se dominantno).

## 2. Tipografija

Sajt koristi specifičan custom font **Replica** u tri različite debljine:

1. **Replica-Light (Weight: 300)**
   - Varijabla: `--font-replica-light`
   - Tailwind klasa: `font-replica-light`
   - Upotreba: Podnaslovi, opisi, dugački tekstovi, sitni detalji.

2. **ReplicaPro (Weight: 500 - Medium)**
   - Varijabla: `--font-replica` (kombinovana u array)
   - Tailwind klase: `font-replica font-medium`
   - Upotreba: Glavni naslovi u hero sekciji (`text-[43px]`), navigacioni linkovi u header-u.

3. **Replica-Bold (Weight: 700 - Bold)**
   - Varijabla: `--font-replica`
   - Tailwind klase: `font-replica font-bold` (ili samo `font-replica` ako element automatski forsira bold)
   - Upotreba: Primarni navigacioni link "MODELI", akcentovani delovi naslova, logotipi i ključne reči.

**Smernice za tekst:**
- Linije teksta kod velikih naslova se gusto zbijaju (`leading-[1.1]` ili `leading-none`).
- Razmaci između paragrafa i naslova su mali za kompaktniji izgled (npr. `mb-1`, `mb-2`).
- Navigacija i linkovi u futeru se pišu uvek velikim slovima (`uppercase`).

## 3. Komponente i Layout

### 3.1. Header (Navigacija)
- **State 1 (Na vrhu / Pre skrolovanja)**: Pozadina je polu-transparentna tvrda crna (`bg-black/40`), sa minimalnim vertikalnim razmakom (`py-2`). Tekst linkova je beo.
- **State 2 (Odskrolovano)**: Pozadina prelazi u čisto belu (`bg-white`) sa blagom senkom (`shadow-md`), vertikalni razmak se povećava (`py-4`). Logo i tekst linkova menjaju boju u crnu (`brightness-0 invert` za sliku).
- **Struktura**:
  - Logo je postavljen sa 5% uvučenosti sa leve strane (`lg:pl-[5%]`).
  - Navigacija je idealno centrirana.
  - "MODELI" (sa ikonicom strelice) je primaran link, boldovan i fizički odvojen kratkom Cijan vertikalnom linijom od ostalih regular/medium linkova ("PRODAVNICE", "VESTI", "O NAMA", "POSTANITE DISTRIBUTER", "APLIKACIJA").
  - Prazan `flex-1` `div` sa desne strane služi kao savršen balans za centriranje.

### 3.2. Hero Sekcija
- Visina je `h-screen`, pokrivena videom iz pozadine sa `bg-black/30` overlay filterom kako bi tekst bio potpuno čitljiv.
- **Sadržaj**:
  - Glavni naslov ("Dizajnirano za hrabre"): Manjih custom dimenzija (`text-[22px] md:text-[29px] lg:text-[43px]`), `font-medium`, `leading-[1.1]`.
  - Podnaslov ("Potpuno novi..."): Upečatljiv, `text-[23px] md:text-[26px]`, `font-replica-light`, sa nešto većim marging-bottom razmakom (`mb-6`).
  - Link "Saznaj više >>" (`font-replica`, `hover:text-track-cyan`).
  - Dugme Play je "staklasto" (`bg-white/20 backdrop-blur-sm`).
- **NEMA** dodatnih plivajućih (floating) socijalnih ikona na desnoj strani u ovom prikazu.

### 3.3. Featured Models Sekcija
- **Dark Card (50/50 split)**: Pozadine su tamni gradijenti (`bg-gradient-to-br from-gray-900 to-black`) sa hover efektom preko crnog overlay-a koji prelazi iz `bg-black/20` u `bg-black/40`. Na hover, ceo content blok se podiže (`-translate-y-4`).
- **Light Grid**: Korišćena čisto bela pozadina sa tamnim tekstom. Glavni naslovi na hover menjaju boju u Cijan. Play dugmići su potpuno crni (`bg-black`).

### 3.4. Footer (Dark Theme)
- Izgleda izrazito "premium" u tamnoj boji (`bg-[#101010]`).
- **Vodeni žig (Watermark)**: Heritage logo velikih razmera (h-[150%]) smešten je u pozadini sa leve strane ekrana (`left-[-15%]`), sa `opacity-5` i prebačen u belu boju (`brightness-0 invert`).
- **Top Section**: Beli Morbidelli logo levo, a desno sekcija "Pronađite nas na društvenim mrežama:" sa čistim SVG socijalnim ikonicama unutar polutransparentnih belih kvadratnih kutija (bg-white/5, border-white/10) koje svetle jače na hover.
- **Linkovi**: Grid u 4 kolone. Naslovi kolona su Cijan i uppercase (npr. "MORBIDELLI INTERNACIONAL"). Tekst linkova je `font-replica-light`, veličine `text-xs`, svetlo siv (`text-gray-300`) a na hover postaje beo. Svi tekstovi su na Srpskom jeziku.
- **Centralni deo**: Veliki beli slogan "Beyond the Ride" postavljen je iznad dugačke bledo-cijan linije (`border-track-cyan/30`).
- **Donji blok**: Sadrži "Keeway GROUP" logo dizajniran tekstom, sitnim sivim tekstom za copyright, polise privatnosti sa belim hover-om, kao i Language Selector u obliku "pilule" (pill button) sa tamnom pozadinom, cijan `border`-om i `Globe` ikonicom ("INT - EN").

## 4. Efekti i Mikro-animacije (Micro-interactions)
- **Tranzicije**: Sve interaktivne komponente koriste glatke tranzicije (`transition-all duration-300`).
- **Hover na tekst (Linkovi)**: Tekst linkova glatko prelazi u Cijan (`hover:text-track-cyan`) ili iz sive u belu u Footer-u.
- **Dugmići**: Blagi skalirajući efekti (`hover:scale-110`) na manjim round dugmićima i hover background svetljenje (prelazak transparentnosti iz `20%` na `40%`).
- **Card Hover**: Blokovi kod "Featured models" pomeraju unutrašnji element blago na gore (`-translate-y-4`).

## 5. Internaciolizacija (Lokalizacija)
Trenutni "default" prikaz interfejsa je **Srpski jezik** ("MODELI", "PRODAVNICE", "VESTI", "O NAMA", "Dizajnirano za hrabre", "Saznaj više", "PRIČE", itd.). Pri daljem dizajnu novih ekrana, primarni tekst treba da odgovara ovim prevodima.
