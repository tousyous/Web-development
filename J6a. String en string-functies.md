# Strings en string-functies

> **String**: Elke groepering van tekens op je toetsenbord (letters, cijfers, spaties, symbolen, enz.) omgeven door enkele aanhalingstekens: `' ... '` of dubbele aanhalingstekens `" ... "`, hoewel we de *voorkeur geven aan enkele aanhalingstekens*. Sommige mensen beschouwen een string als een chique woord voor tekst.

Speciale karakters kunnen met behulp van een backspace karakter worden ingevoegd:
- `\n` newline
- `\'` single quote
- `\"` single quote
- `\\` backslash

Inhoudsopgave:
- [Conversie van datatypes](#conversie-van-datatypes)
- [String concatenatie](#string-concatenatie)
- [String eigenschappen](#string-eigenschappenproperties)
- [Formatteringsfuncties](#formatteringsfuncties)
- [Zoekfuncties](#zoekfuncties)
- [Vergelijking van strings](#vergelijking-van-strings)


## Conversie van datatypes

Conversie van en naar String:

```js
// van String naar Geheel getal
let getalAlsTekst="123";
let getalAlsNumber=parseInt(getalAlsTekst, 10); // 123

// van String naar Float
let getalAlsTekst="123.45";
let getalAlsFloat=parseFloat(getalAlsTekst, 10); // 123.45

// van Number naar String
let aantal=10;
let aantalAlsTekst=aantal.toString(); // "10"
```

## String concatenatie

De `+` operator kan gebruikt worden om Strings samen te voegen:

```js
console.log('One' + ', ' + 'two' + ', ' + 'three!'); 
// Prints 'One, two, three!'
```

## String eigenschappen/properties

Met de *dot operator* kan de `.length` property, **de lengte van een string**, bepaald worden:

```js
console.log('Hello'.length); // Prints 5
```

## Formatteringsfuncties

De `.toUpperCase()` methode zet alle letters om in **HOOFDLETTERS**, `.toLowerCase()` in **kleine letters**

```js
console.log('TousYous'.toUpperCase());  // "TOUSYOUS"
console.log('TousYous'.toLowerCase());  // "tousyous"
```

De `.trim()` methode **verwijdert alle whitespaces** aan het begin en einde van een string:
```js
console.log('    Remove whitespace   '.trim());     // "Remove whitespace"
```

Er bestaan verschillende methoden om **een String op te delen**: `.substring()`, `.substr()` en `.slice()`.

```js
// we gebruiken bij voorkeur .slice(startIndex=inclusief, stopIndex=exclusief)
console.log('TousYous4ever'.slice(3, 7));  // "sYou"
```

## Zoekfuncties

Het is mogelijk om op twee manieren te zoeken in een String: op **index** of op **zoektekst**.

De `.charAt(index)` bepaalt welk *karakter op index* staat van een string:

```js
let tekst='Hello world';
console.log(tekst.charAt(1));   // "e"
```

Om een *zoektekst op te zoeken* in een String heb je twee methodes: `.indexOf()` en `.lastIndexOf()`

```js
tekst.indexOf(zoektekst);       // begint zoektocht vooraan de tekst
tekst.indexOf(zoektekst, startIndex);       // start met zoeken bij startIndex

tekst.lastIndexOf(zoektekst);   // begint zoektocht achteraan de tekst
tekst.lastIndexOf(zoektekst, startIndex);
```
- retourneert `-1` indien niet gevonden
- test via `(tekst.lastIndexOf(zoektekst) != -1)`

## Vergelijking van Strings

Om strings te vergelijken, wordt de `.localeCompare(andereTekst)` methode gebruikt.

```js
let s1 = 'this is text';
let s2 = 'this is tekst';

console.log(s1.localeCompare(s2));  // 1 (not the same)
```

- het resultaat is negatief als s1 voor s2 komt
- positief als s1 na s2 komt
- 0 als beide strings equivalent zijn

> Let op! Er bestaat een verschil tussen een `==` en `===` vergelijking. Voor strings zullen beide situaties een **equality check** uitvoeren (en geen identity check).



<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).