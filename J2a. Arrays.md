# Codecademy "Arrays"

In deze les hebben we de volgende concepten over **arrays** geleerd:

- **Arrays** zijn lijsten die gegevens opslaan in JavaScript.
- Arrays worden gemaakt met **haken** `[]`.
- Variabelen die arrays bevatten, kunnen worden gedeclareerd met `let` of `const`. Zelfs wanneer ze zijn gedeclareerd met `const`, zijn arrays nog steeds muteerbaar. Een variabele die met `const` is gedeclareerd, kan echter niet opnieuw worden toegewezen.

```js
const hobbies = ['rugby', 'zwemmen', 'ksa'];
console.log(hobbies); // [ 'rugby', 'zwemmen', 'ksa' ]
```

- Elk item in een array bevindt zich op een genummerde positie, of **index**, beginnend bij 0.
- We kunnen één item in een array openen met zijn index, met syntaxis zoals: `myArray[0]`.
- We kunnen ook een item in een array wijzigen met zijn index, met syntaxis zoals: `myArray[0] = 'nieuwe string';`.
```js
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]); //undefined
```

- Arrays hebben een **length**-eigenschap, waarmee je kunt zien hoeveel items er in een array zitten.
```js
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length); //3
```

- Arrays hebben hun eigen methoden, waaronder `.push()` en `.pop()`, die respectievelijk items aan een array toevoegen en verwijderen.
```js
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('sleep', 'repeat');
console.log(chores); // [ 'wash dishes', 'do laundry', 'take out trash', 'sleep', 'repeat' ]
```

```js
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores); // [ 'wash dishes', 'do laundry', 'take out trash', 'cook dinner' ]
```

- Arrays hebben veel methoden die verschillende taken uitvoeren, zoals `.slice()` en `.shift()`. Je kunt documentatie vinden op de Mozilla Developer Network-website.
- Sommige ingebouwde methoden zijn **muterend**, wat betekent dat de methode de array zal wijzigen, terwijl andere dat niet zijn. Je kunt dit altijd controleren in de documentatie.
```js
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift(); //remove first item
groceryList.unshift('popcorn') //add popcorn as first item

console.log(groceryList.slice(1,4)); //maak een kopie van een deel van de array
console.log(groceryList); // .slice() verwijdert de items niet

const pastaIndex = groceryList.indexOf('pasta'); //zoek plaats van element in array
console.log(pastaIndex); //4
```

- Arrays die binnen een functie worden gemuteerd, behouden die wijziging zelfs buiten de functie.
```js
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

const removeElement = newArr => {
  newArr.pop(); // verwijder laatste element
};

removeElement(concept);
console.log(concept);
```

- Arrays kunnen *genest* worden binnen andere arrays.
- Om elementen in geneste arrays te openen, keten je indices aan elkaar met behulp van bracketnotatie.
```js
const numberClusters = [[1, 2], [3, 4], [5,6]];
const target = numberClusters[2][1]; //6
```

<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).