# Codecademy "Variables & Scope"

Deze les introduceerde je aan **variabelen**, een krachtig concept dat je in al je toekomstige programmeeractiviteiten zult gebruiken.

Variabelen bewaren herbruikbare gegevens in een programma en koppelen deze aan een naam. Variabelen worden opgeslagen in het geheugen.
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

## Scope

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


<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).