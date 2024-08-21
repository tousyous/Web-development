# Variabelen en Scope

Overzicht:
- [Codecademy "Variables"](#codecademy-variables)
- [Codecademy "Scope"](#codecademy-scope)
- [Globale variabelen](#globale-variabelen)

## Codecademy "Variables"

Deze les introduceerde je aan **variabelen**, een krachtig concept dat je in al je toekomstige programmeeractiviteiten zult gebruiken.

Variabelen bewaren herbruikbare gegevens in een programma en koppelen deze aan een naam. Variabelen worden opgeslagen in het geheugen en hebben een bepaalde [scope](#codecademy-scope).
- Variabelen die niet zijn geïnitialiseerd, slaan het primitieve gegevenstype `undefined` op.

<hr>

Belangrijke concepten in het werken met variabelen in JavaScript:

- Het `var` keyword werd gebruikt in pre-ES6 versies van JavaScript.

```js
var favoriteFood = 'pizza';
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);
```
- `let` is de voorkeursmanier om een variabele te declareren wanneer deze opnieuw toegewezen kan worden, en `const` is de voorkeursmanier om een variabele met een constante waarde te declareren.
```js
let changeMe = true;
changeMe = false;
console.log(changeMe); // false

const entree = 'Enchiladas';
console.log(entree);
entree = 'Tacos'; //TypeError: Assignment to constant variable.
```

- **Wiskundige toewijzingsoperatoren** maken het eenvoudig om een nieuwe waarde te berekenen en aan dezelfde variabele toe te wijzen.
```js
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// mathematical assignments
levelUp += 5; //15
powerLevel -= 100; //8901
multiplyMe *= 11; //352
quarterMe /= 4; //288
```

```js
let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++; //4
lostDollar--; //49
```

- De `+` operator wordt gebruikt om strings **samen te voegen**, inclusief stringwaarden die in variabelen worden opgeslagen.
```js
let favoriteAnimal = 'Cat';
console.log('My favorite animal: ' + favoriteAnimal);
```

- In ES6 gebruiken template literals backticks `` ` `` en `${}` om waarden in een string te **interpoleren**.
```js
let myName = 'Tous';
let myCity = 'Bruges';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);
```

- Het `typeof` keyword geeft het **gegevenstype** (als string) van een waarde terug.
```js
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable); //string
newVariable = 1;
console.log(typeof newVariable); //number
```

## Codecademy "Scope"

In deze les heb je geleerd over scope en hoe dit de toegankelijkheid van verschillende variabelen beïnvloedt.

Laten we de volgende termen herzien:

- **Scope** verwijst naar de locaties in het programma waar variabelen toegankelijk zijn en wordt bepaald door waar en hoe ze worden gedeclareerd.
- **Blokken** zijn statements die binnen accolades `{}` bestaan.
- **Global scope** verwijst naar de context waarin variabelen toegankelijk zijn voor elk deel van het programma.
    - **Globale variabelen** zijn variabelen die binnen de global scope bestaan.
- **Block scope** verwijst naar de context waarin variabelen alleen toegankelijk zijn binnen het blok waarin ze zijn gedefinieerd.
    - **Lokale variabelen** zijn variabelen die binnen de block scope bestaan.
- **Global namespace** is de ruimte in onze code die globaal gescopeerde informatie bevat.
- **Scope pollution** treedt op wanneer te veel variabelen in een namespace bestaan of wanneer variabelennamen opnieuw worden gebruikt.

Terwijl je verdergaat met je programmeerreis, onthoud dan om best practices te gebruiken bij het declareren van je variabelen! Het strak afbakenen van je variabelen zorgt ervoor dat je code schoon, georganiseerd en modulair is.

> **Introduceer in je programma's zo weinig mogelijk globale variabelen!**

## Globale variabelen

Globale variabelen laten toe om gegevens te onthouden over verschillende functie-oproepen heen. Let hierbij op voor **naam-conflicten** en beperk dus het gebruik van globale variabelen!

On Javascript zijn globale variabelen **properties van het `window` object**.
- dit object heeft al zeer veel voorgedefinieerde properties

Om de vervuiling van de global namespace tegen te gaan, lan men gebruik maken van *closures* en *Immediately Invoked Function Expressions* (IIFE) om variabelen af te schermen (worden hier niet besproken).

Om de risico's te beperken, wordt aangeraden om alle globale variabelen **samen in één object `global` te bundelen**:

```js
// een globaal object definiëren

let global = {
    score: 0,
    players: [],
    PATH_PREFIX: "images\sprite",
    PATH_SUFFIX: ".png"
}

// waarden ophalen als properties van het global object

let score = global.score;
let players = global.players;
```

Tijdens het debuggen kan je deze gemakkelijk terugvinden in de *Watch* van de developer tools.

Let op:
- het globale variabele hoort in de context van het huidige HTML document
- navigeren naar een andere pagina of het herladen van de pagina laat het variabel en zijn waarde verloren gaan :-(

<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).