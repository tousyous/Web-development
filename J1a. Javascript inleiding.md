# JavaScript inleiding

> Javascript is een programmeertaal met bijhorende run-time omgeving

Het kan stand-alone gebruikt worden, maar hier ligt de focus op het toevoegen van gedrag aan webpagina's.

Bepaalde stukken code worden aan **gebeurtenissen** gekoppeld. Mogelijke wijzigingen in de DOM-tree zijn:
* elementen toevoegen of verwijderen
* CSS-classes of CSS-eigenschappen van een element wijzigen
* http requests versturen op de achtergrond en de response verwerken (zie AJAX)


## Javascript code toevoegen

Om Javascript code aan een HTML document te koppelen, zijn er verschillende mogelijkheden:

De **code opnemen** binnen de `<body>`-tags met behulp van het `<script>`-element:

```html
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="styles/style.css">
    <title>demo</title>
</head>
<body>
<h1>Inleiding JavaScript</h1>
<script>
    console.log("dit is een voorbeeld");
</script>
</body>
</html>
```

Verwijzen naar code in **een extern bestand**, vaak binnen de `<head>`-tag:

```html
<script type="text/javascript" charset="utf-8" src="scripts/code.js"></script>
```

Omdat de inhoud pas verder wordt geladen, na het laden en uitvoeren van de Javascript code, wordt gekozen om `<script>` pas net voor de sluitende `</body>` tag te plaatsen.

## Codecademy "Introduction to Javascript"

Concepten: 
* de **console**

### A) Comments

Commentaar: single line comment en multi-line comment

```js
// Prints 5 to the console
console.log(5);

/*
This is all commented 
console.log(10);
None of this is going to run!
console.log(99);
*/
```

### B) Data types

Primitieve datatypes:
- **Number**: Any number, including numbers with decimals: `4`, `8`, `1516`, `23.42`.
- **BigInt**: Any number, greater than 2^53-1 or less than -(2^53-1), with n appended to the number: `1234567890123456n`.
- **String**: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: `' ... '` or double quotes `" ... "`, though we *prefer single quotes*. Some people like to think of string as a fancy word for text.
- **Boolean**: This data type only has two possible values— either `true` or `false` (without quotes). It’s helpful to think of booleans as on and off switches or as the answers to a “yes” or “no” question.
- **Null**: This data type represents the intentional absence of a value, and is represented by the keyword `null` (without quotes).
- **Undefined**: This data type is denoted by the keyword `undefined` (without quotes). It also represents the absence of a value though it has a different use than null. undefined means that a given value does not exist.
- **Symbol**: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.

Andere:
- **Object**: Collections of related data.

Het is mogelijk om een **conversie** van datatypes te doen:

```js
// van String naar Number
let getalAlsTekst="123";
let getalAlsNumber=parseInt(getalAlsTekst, 10); // 123

// van Number naar String
let aantal=10;
let aantalAlsTekst=aantal.toString(); // "10"

// een getal beperken in het aantal cijfers
let getal=1234.56789
console.log( getal.toFixed(2) );    // toont "1234.57" (afronding!)
```

### C) String concatenation

De `+` operator kan gebruikt worden om Strings samen te voegen:

```js
console.log('One' + ', ' + 'two' + ', ' + 'three!'); 
// Prints 'One, two, three!'
```

### D) Javascript properties en methodes

Met de *dot operator* kan de `.length` property, **de lengte van een string**, bepaald worden:

```js
console.log('Hello'.length); // Prints 5
```

De `.toUpperCase()` methode zet alle letters om in **HOOFDLETTERS**:

```js
console.log('Codecademy'.toUpperCase());
```
De `.trim()` methode **verwijdert alle whitespaces** aan het begin en einde van een string:
```js
console.log('    Remove whitespace   '.trim());
```

De `.charAt(index)` bepaalt welk karakter op index staat van een string:

```js
let tekst='Hello world';
console.log(tekst.charAt(1));   // "e"
```

Om een **zoektekst op te zoeken** in een String heb je twee methodes: `.indexOf()` en `.lastIndexOf()`

```js
tekst.indexOf(zoektekst);       // begint zoektocht vooraan de tekst
tekst.indexOf(zoektekst, startIndex);       // start met zoeken bij startIndex

tekst.lastIndexOf(zoektekst);   // begint zoektocht achteraan de tekst
tekst.lastIndexOf(zoektekst, startIndex);
```
- retourneert `-1` indien niet gevonden
- test via `(tekst.lastIndexOf(zoektekst) != -1)`

### E) Built-in Objects

Het built-in `Math` object heeft enkele complexere wiskundige functies, zoals de `.random()` methode om **een willekeurig getal** te genereren:

```js
console.log(Math.random()); // Prints a random number between 0 and 1
```

<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).