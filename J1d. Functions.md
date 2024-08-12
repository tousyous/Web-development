# Codecademy "Functions"


In deze les hebben we enkele belangrijke concepten over functies behandeld:

- Een **functie** is een herbruikbaar blok code dat een reeks statements groepeert om een specifieke taak uit te voeren.

### Een functiedeclaratie:

- Een **parameter** is een benoemde variabele binnen het blok van een functie die de waarde zal krijgen van het argument dat wordt doorgegeven wanneer de functie wordt aangeroepen:

```js
function sayThanks(name) {
  console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}

sayThanks('Cole');
```
- ES6 introduceert nieuwe manieren om om te gaan met willekeurige parameters via **standaardparameters**, waarmee we een standaardwaarde aan een parameter kunnen toewijzen voor het geval er geen argument aan de functie wordt doorgegeven.
```js
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
```
- Om een waarde uit een functie te retourneren, gebruiken we een `return`-statement.

```js
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);
console.log(totalCost); //4000
```

### Om een functie te definiëren met behulp van functiedefinities:

```js
const plantNeedsWater = function(day){
  if(day === 'Wednesday') {
    return true;
  }
  return false;
};

console.log(plantNeedsWater('Tuesday')); //false
```

### Om een functie te definiëren met behulp van pijlnotatie: 

- Via een **arrow function**:
```js
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
```

- Functiedefinities kunnen worden verkort met behulp van **beknopte pijlnotatie**:

```js
const plantNeedsWater = day => day === 'Wednesday' ? true : false;
```

Het is goed om je bewust te zijn van de verschillen tussen functiedefinities, pijlfuncties, en functiedeclaraties. Naarmate je meer programmeert in JavaScript, zul je een breed scala aan manieren zien waarop deze functietypen worden gebruikt.

<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).