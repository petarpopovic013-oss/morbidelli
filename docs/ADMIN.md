# Morbidelli Admin Panel - Tehnička Dokumentacija

Ovaj dokument opisuje tehničku arhitekturu i način rada Admin panela (`/admin`) unutar Morbidelli web aplikacije.

## 1. Arhitektura Autentifikacije

S obzirom na to da se admin panel koristi samo interno od strane vlasnika sajta, izbegnut je složen sistem korisničkih naloga u korist **jedinstvene lozinke**.

- **Ruta**: `/admin/login`
- **Mehanizam**: Koristi se Next.js `middleware.ts` za presretanje svih zahteva ka `/admin/*`. Ukoliko ne postoji validan `admin_session` cookie, korisnik se preusmerava na formu za prijavu.
- **Validacija**: Lozinka uneta u formi se proverava (kroz Server Action) u odnosu na `ADMIN_PASSWORD` promenljivu definisanu u `.env.local` fajlu.
- **Zaštita sesije**: Koristi se `HttpOnly`, `Secure` i `SameSite=lax` cookie u trajanju od 7 dana.

## 2. Pristup Bazi Podataka i Sigurnost (RLS)

- **Javni deo sajta (Frontend)**: Tabele (`morbidelli_motorcycles`) i Storage bucketi (`morbidelli_images`) imaju otvorene `SELECT` (čitaj) dozvole, tako da aplikacija može javno dohvatiti podatke koristeći `SUPABASE_ANON_KEY`.
- **Admin Panel (Backend)**: Bilo koja izmena baze (`INSERT`, `UPDATE`, `DELETE`) ili postavljanje slika zahteva posebne privilegije. Zbog toga se u admin panelu koristi **Supabase Service Role Key** (`SUPABASE_SERVICE_ROLE_KEY`).
  - *Važno*: Klijent baziran na ovom ključu (`app/utils/supabase/server.ts`) **isključivo** se koristi unutar Next.js Server Actions (`app/actions/*`). Ovaj kod se nikada ne šalje u browser, čime se obezbeđuje potpuna sigurnost.

## 3. Struktura Admin Komponenti

Rad sa admin panelom podeljen je na nekoliko ključnih fajlova:
- **`app/admin/layout.tsx`**: Glavni kostur admina (navigacioni meni sa opcijom za odjavu).
- **`app/admin/page.tsx`**: Dashboard koji kroz `getMotorcycles` dohvati sve modele iz baze i prikazuje ih tabelarno. Sadrži i `DeleteMotorcycleButton` (Client Component) zadužen za brisanje (sa upozorenjem pre potvrde).
- **`app/admin/components/MotorcycleForm.tsx`**: Kompleksna React komponenta (Client-side) koja služi i za *Dodavanje* i za *Izmenu* motora. 

### Specifičnosti Forme (`MotorcycleForm`)
- **Auto-generisanje slug-a**: Funkcija koja pri unosu naziva motora u realnom vremenu pravi URL-friendly `slug` (npr. "Morbidelli V21" -> "morbidelli-v21"). Ukoliko se motor menja, slug se ne generiše automatski da se ne bi prekinuli postojeći linkovi, ali admin ga i dalje može ručno prepraviti.
- **Dinamičke specifikacije**: Forma podržava unos specifikacija kao niz `Key: Value` parova (npr. "Težina": "180kg"). Prilikom čuvanja (Submit), niz se pretvara u jedan čist JSON objekat i čuva u `specifications` (JSONB) koloni u bazi.
- **Upload Slika i Galerija**: 
  - Forma sadrži polje za **glavnu sliku** i odvojeno polje za **galeriju** (`multiple` file input). 
  - Pre čuvanja podataka u PostgreSQL tabelu, fajlovi se šalju na Supabase Storage (kroz Server Action `uploadImage`). 
  - Tokom ovog procesa, sve slike se na backendu provlače kroz **`sharp`** biblioteku koja vrši automatsku optimizaciju i **WEBP** konverziju. 
  - Upload metoda vraća javne URL-ove slika koji se tek onda čuvaju u bazu (`image_url` i `gallery` array). 
  - Forma obezbeđuje i prikaz trenutne galerije, kao i mogućnost brisanja pojedinačnih slika pre čuvanja, što osigurava da ne ostaju zaboravljene (orphan) slike na serveru.

## 4. Dodavanje novih funkcionalnosti

Ukoliko bude potrebno dodati galeriju (više slika) ili novu tabelu:
1. **Server Actions**: Sve nove mutacije nad bazom napraviti u folderu `app/actions` i zaštititi ih korišćenjem `supabaseAdmin` klijenta.
2. **Zaštita ruta**: Ukoliko dodaješ nove stranice unutar `/admin`, middleware ih već automatski štiti.

## 5. Deployment i Okruženje

Kada se aplikacija prebacuje na produkcioni server (npr. Vercel), potrebno je postaviti sledeće ENV varijable:
```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
ADMIN_PASSWORD=neka_snazna_lozinka
```
Takodje, preporučljivo je u `next.config.ts` pod `remotePatterns` restriktovati domene isključivo na vaš konkretni Supabase domen (`xyz.supabase.co`) iz sigurnosnih razloga.
