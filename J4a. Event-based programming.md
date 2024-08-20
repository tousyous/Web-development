# Event-based programming

> Een programma vereist een gebeurtenis (**event**) vooraleer er iets gebeurt. Het is nuttig om onze code te structuren volgens de gebeurtenissen.

Een overzicht van events is hier terug te vinden: https://developer.mozilla.org/en-US/docs/Web/Events en https://developer.mozilla.org/en-US/docs/Web/API/Element#events 

Hier zullen we focussen op gebeurtenissen die de browser ons aanbiedt voor elementen in de DOM-tree: **DOM events**.

Om code aan een event te koppelen, gebruiken we een `.addEventListener()`:

```js
elementNode.addEventListener("anEvent", ourFunction);
```

- de `elementNode` is de verwijzing naar een element (zie [J3a](./J3a.%20DOM-tree%20opvragen.md))
- `"anEvent"` is een String waarde met de naam van het event waarin we geinteresseerd zijn
- `ourFunction` is de naam van de function die moet opgeroepen worden wanneer *anEvent* zich voordoet op *elementNode*. 
    - Zo'n function noemen we een **event listener**.

## Window load event: `"load"`

Zie [J3a](./J3a.%20DOM-tree%20opvragen.md): de code wordt pas uitgevoerd als de pagina klaar is met laden.

```js
const setup = () => {
...
}

// load event
window.addEventListener("load", setup);
```

## Click event: `"click"`

Waarschijnlijk het meest gebruikte event, wanneer een element wordt aangeklikt:

```js
let btnWijzig = document.getElementById("btnWijzig");

// click event
btnWijzig.addEventListener("click", wijzig);
```

## Werken met een Slider: `"change"` en `"input"`

Om een functie aan een slider te koppelen, zijn twee events vereist: `change` en `input`: zie documentatie: http://stackoverflow.com/questions/18544890

HTML code slider:

```html
<input type="range" class="slider" value="50" min="0" max="100" />
```

JS code events:

```js
let sliders = document.getElementsByClassName("slider");
// er zit maar één slider in het document dus index = 0
sliders[0].addEventListener("change", update);
sliders[0].addEventListener("input", update);
```

## Event handling

Elke event listener functie heeft een **parameter** die het event voorstelt dat zich voordeed. 

- `event.target` omvat het DOM-tree element waar het event zich voordeed
- `event.currentTarget` is het DOM-tree element wiens event listener we aan het uitvoeren zijn
    - wordt soms vervangen door `this`, maar is minder betrouwbaar (en niet bruikbaar in arrow functies)

```js
const klik = (event) => {
    console.log("target is " + event.target.nodeName 
    + ", currentTarget is " + event.currentTarget.nodeName);
};
```

Het kan handig zijn om een event listener aan **een ancestor** te koppelen:
- een *section* heeft verschillende *img* children
- ipv aan elk *img* element een event listener te koppelen, wordt de event listener aan de *section* gekoppeld

Om het **event afhandeling** nog beter te controleren bestaan er nog twee functies:
- `event.stopPropagation()`: stop de bubbling fase (de listeners van ancestors worden niet verwittigd)
- `event.preventDefault()`: stop het standaard gedrag (bijv. navigatie naar een andere pagina bij het klikken op een link)
- `return false;` uit de event listener = beide voorgaande samen

<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).