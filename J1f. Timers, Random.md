# Timers, Random

Overzicht:
- [Een functie herhalen of plannen met Timers](#timers)
- [Een willekeurig getal genereren met Random](#random-getallen)

## Timers

Er bestaan 2 manieren om met timers om te gaan:
1. de `setInterval` functie: code uitvoeren om de zoveel milliseconden
2. de `setTimeout` functie: code éénmaal uitvoeren na een wachttijd in milliseconden

### 1. de `setInterval` functie

De volgende functie laat een callback functie *f* uitvoeren om de *m* milliseconden:

```js
let taskID = setInterval(setup, 1000); // voer functie "setup" uit om de 1000 ms
```

Om de herhaling te stoppen gebruik je volgende code:

```js
clearInterval(taskID);
```

### 2. de `setTimeout` functie

De volgende functie laat een callback functie *f* uitvoeren na *m* milliseconden:

```js
let taskID = setTimeout(setup, 1000); // voer functie "setup" uit na 1000 ms
```

Om de geplande taak te annuleren gebruik je volgende code:

```js
clearTimeout(taskID);
```

## Random getallen

Om een willekeurig kommagetal te bekomen binnen het interval `[0,1[` gebruik je de volgende functie:

```js
let getal = Math.random();
```

Ook andere willeurige getallen kunnen bekomen worden:

```js
let getal = Math.random();              // [0,1[
let getal = Math.random() * 15;         // [0,15[
let getal = 10 + Math.random() * 15 ;   // [10,25[
```

### Extra: (willekeurige) getallen afronden

Er bestaan nog verschillende Math functies die toelaten om getallen naar onderen, boven of "gewoon" af te ronden:

```js
let getalFloor = Math.floor(16.6);  // naar onderen: 16
let getalFloor = Math.floor(-7.34);  // naar onderen: -8 !

let getalCeil = Math.ceil(12.3);    // naar boven: 13
let getalCeil = Math.ceil(-7.67);    // naar boven: -7 !

let getalRound = Math.round(7.5);   // afronden: 8
let getalRound = Math.round(-7.5);   // afronden: -7 !
```


<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).