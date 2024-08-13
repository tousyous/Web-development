# CSS properties instellen van een element

## Individuele stijlregels aanpassen/instellen

Om een CSS property van een element in te stellen in een javascript programma, moeten we de `.style` **object property** van een *elementNode* aanspreken.

```js
let paragrafen = document.getElementsByTagName("p");
for (let i=0; i<paragrafen.length; i++) {
    paragrafen[i].style.color="red";        // kleur alle p-elementen rood
}
```

Voorbeelden van eigenschappen:
- `.style.backgroundColor` voor background-color
- `.style.marginLeft` voor margin-left

Let op:

> Het aanpassen van individuele stijlregels is **geen** goed idee. 
>> Het is beter om **CSS classes** met stijlregels te definiëren en via JavaScript classes aan elementen toe te voegen of te verwijderen.

<br>

## CSS classes instellen van een element: `.className`

De classes van een HTML element kun je opvragen (en wijzigen) via diens `.className` property. De waarde van deze property is een string.

```js
let txtOutput = document.getElementById("txtOutput");
txtOutput.className += " invalid";          // class(es) toevoegen
txtOutput.className = "invalid";            // class(es) vervangen
txtOutput.className = "";                   // alle classes verwijderen
```

## CSS class toevoegen of verwijderen: `.classList`

Als je slechts 1 class wil toevoegen (of verwijderen) en eventuele andere classes wil behouden en dubbels vermijden, moet je  een hoop string bewerkingen doen. 

Gelukkig bestaat er ook een handige `.classList` **property** waarmee dit eenvoudiger kan:

```js
let txtOutput = document.getElementById("txtOutput");
txtOutput.classList.add("invalid");                 // voeg class "invalid" toe
txtOutput.classList.remove("invalid");              // verwijder class "invalid"
```

<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).