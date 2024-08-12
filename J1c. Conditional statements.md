# Codecademy "Conditional statements"

Hier zijn enkele van de belangrijkste concepten voor **conditionals**:

- Een `if`-statement controleert een conditie en voert een taak uit als die conditie als `true` wordt geëvalueerd.
- `if...else`-statements maken binaire beslissingen en voeren verschillende codeblokken uit op basis van een gegeven conditie.

```js
let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!'); //will not run
} else {
  console.log('Time to wait for a sale.'); //will run
}
```


- Vergelijkingsoperatoren, waaronder `<`, `>`, `<=`, `>=`, `===`, en `!==`, kunnen twee waarden vergelijken.
```js
let hungerLevel = 7;
if (hungerLevel > 7) {
  console.log("Time to eat!");
} else {
  console.log("We can eat later!"); // will run
}
```

- De logische *and*-operator, `&&`, controleert of beide opgegeven expressies waarheidsgetrouw zijn.
- De logische *or*-operator, `||`, controleert of een van de opgegeven expressies waarheidsgetrouw is.
- De *bang*-operator, `!`, keert de waarheidsgetrouwheid en onwaarheidsgetrouwheid van een waarde om.

```js
let mood = "sleepy";
let tirednessLevel = 6;

if (mood === "sleepy" && tirednessLevel > 8) {
  console.log("time to sleep");
} else {
  console.log("not bed time yet"); //will run
}
```

```js
let wordCount = 1; //true

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = ''; //false

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
```

```js
let tool = 'marker';

// short circuit evaluation to assign writingUtensil variable:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`); //marker
```

- De `ternary`-operator is een verkorte manier om beknopte `if...else`-statements te vereenvoudigen.
```js
let isLocked = false;
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.'); //You will not need a key to open the door.

let isCorrect = true;
isCorrect ? console.log('Correct!') : console.log('Incorrect!'); //Correct!

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!"); //I love that!
```
- We kunnen meer voorwaarden toevoegen met `else if`-statements.
```js
let season = "summer";

if (season === "spring") {
  console.log("It's spring! The trees are budding!");
} else if (season === "winter") {
  console.log("It's winter! Everything is covered in snow.");
} else if (season === "fall") {
  console.log("It's fall! Leaves are falling!");
} else if (season === "summer") {
  console.log("It\'s sunny and warm because it\'s summer!"); //true
} else {
  console.log("Invalid season."); 
}
```
- Een `switch`-statement kan worden gebruikt om het proces van het schrijven van meerdere `else if`-statements te vereenvoudigen. Het `break`-keyword stopt de resterende cases van een `switch`-statement om gecontroleerd en uitgevoerd te worden.
```js
let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
  case 'first place': 
    console.log('You get the gold medal!'); //true
    break;
  case 'second place': 
    console.log('You get the silver medal!');
    break;
  case 'third place': 
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}
```

<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).