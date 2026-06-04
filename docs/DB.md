# Dokumentacija Baze Podataka (Supabase)

Ovaj dokument služi kao "context engineering" fajl koji pruža tačan pregled trenutne arhitekture baze podataka za projekat "Keeway + Morbidelli". Baza je smeštena na Supabase platformi i dizajnirana je tako da podrži oba sajta u istoj bazi, ali sa potpuno odvojenim tabelama i Storage bucket-ima.

> [!NOTE]
> Za ovaj konkretan sajt (Morbidelli) koristiće se **isključivo** tabele i bucketi sa prefiksom `morbidelli_`. Keeway deo baze je samo pripremljen za budući sajt.

---

## 1. Supabase Storage (Slike)

Slike motora (glavne slike i galerije) smeštaju se u Supabase Storage, koji je podeljen na dva odvojena, javna bucketa.

### `morbidelli_images` (Public)
Sadrži sve slike vezane za Morbidelli ponudu. Nema Row Level Security (RLS) restrikcija za čitanje, što znači da bilo ko može pristupiti slikama putem javnog URL-a. Ovo se koristi na aplikaciji za prikaz slika.

### `keeway_images` (Public)
Sadrži sve slike vezane za Keeway ponudu.

---

## 2. PostgreSQL Tabele

Kreirane su dve odvojene tabele za podatke o motorima. Obe tabele imaju ukinute RLS restrikcije za `SELECT` (Public Read), što omogućava lakši dohvat podataka iz Next.js aplikacije za posetioce.

### Tabela: `morbidelli_motorcycles`

Ovo je glavna i jedina tabela koju koristi Morbidelli sajt za katalog i prikaz motora.

| Kolona | Tip Podataka | Opis / Značenje |
| :--- | :--- | :--- |
| `id` | `uuid` | Primarni ključ, automatski se kreira (`gen_random_uuid()`). |
| `name` | `text` | Puni naziv motora (npr. "Morbidelli T1002VX"). |
| `slug` | `text` | URL-friendly putanja, ujedno i jedinstven ključ (npr. "t1002vx"). |
| `price` | `numeric` | Cena u brojanom formatu radi lakšeg sortiranja. (Oznaka valute i formatiranje se obavljaju na frontendu). |
| `category` | `text` | Kategorija motora (npr. Scooter, Trail, Street fighter, Cruisers, Naked). |
| `short_description`| `text` | Kratak opisni tekst za prikaz u obliku kartice u katalogu. |
| `image_url` | `text` | Putanja/URL do glavne slike unutar `morbidelli_images` bucketa. |
| `gallery` | `text[]` | Niz putanja/URL-ova za dodatne slike koje se prikazuju u galeriji. |
| `specifications` | `jsonb` | JSON objekat za fleksibilan upis specifikacija (npr. `{ "engine": "1000cc", "weight": "265kg" }`). |
| `created_at` | `timestamptz`| Datum i vreme kreiranja rekorda, automatski se popunjava. |

---

### Tabela: `keeway_motorcycles`

Ista strukturna šema kao gore, rezervisana za upotrebu na odvojenom sajtu za Keeway brend.

| Kolona | Tip Podataka | Opis / Značenje |
| :--- | :--- | :--- |
| `id` | `uuid` | Primarni ključ. |
| `name` | `text` | Naziv motora. |
| `slug` | `text` | URL-friendly putanja. |
| `price` | `numeric` | Cena. |
| `short_description`| `text` | Kratak opis. |
| `image_url` | `text` | Glavna slika u `keeway_images` bucket-u. |
| `gallery` | `text[]` | Dodatne slike (galerija). |
| `specifications` | `jsonb` | Fleksibilne specifikacije. |
| `created_at` | `timestamptz`| Datum i vreme unosa. |

---

## 3. Način Korišćenja (Frontend & Admin)

- **Admin Panel:** Koristiće isključivo `.env` lozinku za prijavu. Svi pozivi ka Supabase za `INSERT`, `UPDATE` i `DELETE` će se obavljati iz zaštićenih Next.js API ruta koristeći `SUPABASE_SERVICE_ROLE_KEY` koji ima pravo da piše u bazu (RLS restrikcije ne važe za admina sa ovim ključem).
- **Frontend (Katalog):** Next.js aplikacija dohvatiće podatke pomoću `SUPABASE_ANON_KEY` jer su kreirane polise za `SELECT USING (true)` koje to javno dozvoljavaju.
