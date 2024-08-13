# Codecademy "Loops"

In deze les hebben we geleerd hoe we schonere code kunnen schrijven met **loops**. 

> Loops voeren repetitieve handelingen uit, zodat we dat proces niet telkens handmatig hoeven te coderen.

Je weet nu:


- Hoe je `for`-loops schrijft met een iteratievariabele die toeneemt of afneemt.

```js
for(let counter = 5; counter <= 10; counter++) {
  console.log(counter);
}
```

```js
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}
```

- Hoe je een `for`-loop gebruikt om door een array te itereren.

```js
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i]);
}
```

- Een **geneste for-loop** is een loop binnen een andere loop.
```js
const bobsFollowers = ["Jan", "Piet", "Paul", "Tina"];
const tinasFollowers = ["Paul", "James", "Piet"];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
```


- `while`-loops staan verschillende soorten stopcondities toe.
- **Stopcondities** zijn cruciaal om oneindige loops te voorkomen.
```js
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;
while(currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)]; // select a random card
  console.log(currentCard);
}
```


- `do...while`-loops voeren de code ten minste één keer uit en controleren de stopconditie pas na de eerste uitvoering.
```js
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

// at least one cup will be added
do {
  cupsAdded++;
  console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded)
```

- Het `break`-keyword stelt programma's in staat om een loop te verlaten tijdens de uitvoering van het blok.
```js
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === "Notorious B.I.G.") {
    break; // verlaat for loop
  }
}
console.log("And if you don't know, now you know.");
```

<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).