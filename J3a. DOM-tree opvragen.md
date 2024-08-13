# DOM-tree opvragen

Om toegang te krijgen tot de DOM-tree van de huidige pagina wordt een  (voorgedefinieerde) **`document` globale variabele** gebruikt.

De onderdelen van de DOM-tree noemt men nodes (zie [CSS DOM](./C1b.%20CSS%20Document%20Object%20Model.md))

## DOM verwijzing opvragen

Een verwijzing naar een elementnode uit de DOM-tree kan je (onder andere) op de volgende **drie manieren** bekomen :

- Doorzoek de DOM-tree naar **het element met id="abc"** en retourneert een verwijzing naar dit element. 
    - Indien geen element wordt gevonden, retourneert de functie de `null` waarde.
```js
document.getElementById("abc");
```
- Doorzoek de DOM-tree naar **elementen met class="xyz"** en retourneert een nodeList met verwijzingen naar deze elementen. 
    - Een nodeList is op dezelfde manier te gebruiken als een array, dus wat ons betreft is het verschil niet belangrijk. 
    - Indien geen enkel element wordt gevonden, retourneert de functie een lege list (net als een leeg array dus).
```js
document.getElementsByClassName("xyz");
```

- Doorzoek de DOM-tree naar **`img` elementen** en retourneert een nodeList met verwijzingen naar deze elementen. 
    - Een nodeList is op dezelfde manier te gebruiken als een array, dus wat ons betreft is het verschil niet belangrijk. 
    - Indien geen enkel element wordt gevonden, retourneert de functie een lege list (net als een leeg array dus).
```js
document.getElementsByTagName("img");
```

## JS code uitvoeren NA het opbouwen van de DOM-tree

Om te bekomen dat de browser bepaalde code pas uitvoert eenmaal te DOM-tree klaar is, kun je onderstaand fragment gebruiken:
```js
const setup = () => {
...
}
...
window.addEventListener("load", setup);
```
De code in de setup function zal pas worden uitgevoerd als de DOM-tree volledig werd opgebouwd.

Deze code wordt daarom standaard aan een nieuwe Javascript file template toegevoegd.

## Inhoud van een element raadplegen: `.innerHTML`

Wanneer de verwijzing naar een element werd opgevraagd, kan je de inhoud van het element raadplegen/wijzigen met behulp van de `.innerHTML` eigenschap.

Deze eigenschap is bijzonder bruikbaar bij het aanpassen van `<p>`, `<ul>` en andere elementen.

## Inhoud van een tekstveld raadplegen: `.value`

Je kan de tekst in een tekstveld bemachtigen via de 'value' property van het corresponderende element uit de DOM-tree, nadat je de verwijzing hebt opgevraagd.

- Het invoerveld van een [formulier](./H2c.%20Formulieren.md): 
```html
<input type="text" name="invoerveld" id="invoerveld">
```

- De waarde via JS opvragen:
```js
let invoerveld = document.getElementById("invoerveld");
console.log(invoerveld.value);
```

Deze methode is **niet bruikbaar** voor bijv. een `<p>`-element.

<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).