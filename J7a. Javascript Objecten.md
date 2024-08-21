# Javascript Objecten

Overzicht:
- [Objecten maken](#objecten-maken)
- [JSON notatie](#json-notatie)

## Objecten maken

Sinds ECMAscript 6 ondersteunt Javascript het gebruik van klassen, maar deze zijn nog niet overal beschikbaar. 

Voorlopig beperken we ons tot het rechtstreeks **aanmaken van objecten, zonder klassen** met behulp van de `{}` notatie. Binnen de objecten worden variabelen als *properties* toegevoegd en opgevraagd met de dot `.` notatie:

```js
let student1 = {};  // leeg object

student1.voornaam = "Tous";
student1.achternaam = "Yous";
student1.adres = {}; // leeg object binnen object
student1.adres.gemeente = "8200";

console.log(student1.voornaam + " woont in " + student1.adres.gemeente);
```

Alternatief kan je een **object literal** (= een vaste waarde, niet variabel, die direct in een script worden meegegegeven) gebruiken om een object aan te maken:
- de properties worden binnen de `{}` benoemd
- er wordt een `:` gebruikt ipv een "="
- properties worden gescheiden door een `,`

```js
let postcodeVanBrugge = "8200";

let student1 = {
    voornaam : "Tous",
    achternaam : "Yous", 
    adres : {               // een object
        gemeente : postcodeVanBrugge,
        straat : "Kerkweg",
        nummer : "16a"
    },
    ouders : ["ma", "pa"]   // een array
};  
```

Een eigenschap **verwijderen** kan met `delete object.property`:

```js
delete student1.adres;
```

Een eigenschap die niet bestaat, levert `undefined` op:

```js
console.log(student1.postcode); // undefined
```

Alternatief kan je een property **aanspreken** met behulp van de `[]` notatie:
- dit werkt gelijkaardig aan de *querySelector*, waar de waarde tussen "" moet geplaatst worden
- we gebruiken deze notatie enkel wanneer de naam van de property speciale tekens (zoals spaties) bevat OF uit een variabel komt

```js
console.log(student1["voornaam"]);  // Tous
console.log(student1.voornaam);     // Tous

let opTeVragenEigenschap = "voornaam";
console.log(student1[opTeVragenEigenschap]);  // Tous
```
<br>

## JSON notatie

> **J**ava**S**cript **O**bject **N**otatie

JSON is een tekstvoorstelling van objecten in Javascript. Maw: **een String met de object literal notatie**.

JSON wordt gebruikt als:
- data uitwisselingsformaat (bijv. in een http request of response)
- data opslagformaat (bijv. in een cookie of local storage)

Om een **JSON string aan te maken** van een object wordt de `JSON.stringify(object)` functie gebruikt:

```js
let student1 = {
    voornaam : "Tous",
    achternaam : "Yous"
}; 

let tekst = JSON.stringify(student1);
```

Omgekeerd wordt een **object aangemaakt van JSON tekst** met `JSON.parse(tekst)`:

```js
let student1 = JSON.parse(tekst);
```

<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).