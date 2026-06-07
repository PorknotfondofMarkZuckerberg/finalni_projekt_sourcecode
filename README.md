# Movie Watchlist

## Popis projektu

Movie Watchlist je webová aplikace vytvořená pomocí HTML, CSS a JavaScriptu. Umožňuje vyhledávání filmů pomocí veřejného REST API a ukládání vybraných filmů do seznamu ke zhlédnutí.

Aplikace slouží jako jednoduchý osobní filmový seznam (watchlist), který se ukládá lokálně v prohlížeči.

---

## Funkce aplikace

- vyhledávání filmů pomocí OMDb API
- dynamické zobrazování výsledků pomocí JavaScriptu
- přidávání a odebírání filmů z watchlistu
- ukládání dat pomocí localStorage
- automatická aktualizace UI podle stavu watchlistu
- podpora Enter klávesy pro vyhledávání

---

## Použité technologie

- HTML5
- CSS3
- JavaScript (ES6)
- REST API (OMDb)
- localStorage

---

## REST API

Aplikace využívá OMDb API pro získávání dat o filmech.

### API endpoint (vyhledávání):

http://www.omdbapi.com/?apikey=858d05af&s=movie_name

### Příklad:

http://www.omdbapi.com/?apikey=858d05af&s=batman

### Popis parametrů:
- `apikey` → unikátní klíč pro přístup k API
- `s` → vyhledávaný název filmu

---

## Ukládání dat

Watchlist je ukládán pomocí `localStorage`, což umožňuje zachování dat i po obnovení stránky.

---

## Struktura projektu

index.html
style.css
script.js
manifest.json
service-worker.js
README.md

### Popis souborů:

- **index.html** → struktura webu
- **style.css** → stylování a layout
- **script.js** → logika aplikace (API, DOM, localStorage)
- **manifest.json** → konfigurace PWA
- **service-worker.js** → registrace service workeru
- **README.md** → dokumentace projektu

---

## Use-case

Uživatel může:
- vyhledat film
- zobrazit výsledky
- přidat film do watchlistu
- odstranit film z watchlistu

Aplikace slouží jako jednoduchý nástroj pro správu filmů ke zhlédnutí.

---

## Autor

Trish Fikarova