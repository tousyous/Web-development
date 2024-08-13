# Output en GUI

## Output

Je kunt in je javascript programma, tekst op de **console** plaatsen met de volgende opdracht:
```js
console.log("dit is een mededeling op de console");
```

## Prompting

Je kan met `prompt()` een waarde opvragen:
```js
function VraagWaardeOp() {
    // Vraag om een nieuwe waarde via prompt
    let nieuweWaarde = prompt("Voer een extra waarde in:");
}
```

## Popups

In javascript kun je **drie soorten popups** op het scherm plaatsen:

- Toont de mededeling in een popup met een 'ok' button
    - return is altijd `undefined`
```js
window.alert("Dit is een mededeling");
```

- Toont de vraag in een popup met een 'ok' en 'cancel' button:
    - De return waarde geeft aan op welke knop de gebruiker duwde: `true` of `false`
```js
window.confirm("Weet u het zeker?");
```


- Toont de vraag in een popup met een **tekstveld** met een 'ok' en een 'cancel' button.
    - De andere tekst ("onbekend" hierboven) wordt standaard al ingevuld bij het tonen.
    - De ingetypte waarde wordt geretourneerd of `null` bij cancel
```js
window.prompt("Wat is uw naam", "onbekend");
```
De console en window popups zijn geschikt **voor ontwikkelaars, niet voor eindgebruikers**. Als je programma output voor de eindgebruiker heeft, zul je deze via de **DOM-tree** moeten tonen.


<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).