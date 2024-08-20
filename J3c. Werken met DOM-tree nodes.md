# Werken met DOM-tree nodes

- [DOM-tree node eigenschappen](#dom-tree-node-eigenschappen)
- [Werken met DOM-tree nodes](#werken-met-dom-tree-nodes-1)

## DOM-tree node eigenschappen

We zagen reeds eerder dat een pagina bestaat uit een boom van nodes, zie [C1b. CSS Document Object Model](<C1b. CSS Document Object Model.md>). Deze **nodes** bestaan hoofdzakelijk uit **elementen**, maar zijn niet beperkt tot elementen.

Elke node `n` heeft een aantal eigenschappen die de relatie van *n* tot andere nodes in de DOM-tree omschrijft. **Dit is niet beperkt tot elementen!**

|eigenschap|omschrijving|
|---|---|
|`n.parentNode`|de parent van n (of *null*)|
|`n.childNodes`|een lijst van alle kinderen van n<br>geeft toegang tot `.length` en `[index]`|
|`n.firstChild` / `n.lastChild`|her eerste/laatste kind van n (of *null*)|
|`n.nextSibling` / `n.previousSibling`|de volgende/vorige sibling van n (of *null*)|

<br>

Om ons te **beperken tot elementen** kunnen volgende eigenschappen gebruikt worden:

|eigenschap|omschrijving|
|---|---|
|`n.children`|een lijst van alle child elementeb van n|
|`n.firstElementChild` / <br>`n.lastElementChild`|her eerste/laatste child element van n (of *null*)|
|`n.nextElementSibling` / <br>`n.previousElementSibling`|het volgende/vorige sibling element van n (of *null*)|

Om het soort node te bepalen, kunnen volgende eigenschappen gebruikt worden:

|eigenschap|omschrijving|
|---|---|
|`n.nodeName`|een string met de elementnaam of *#text* voor een text node|
|`n.nodeType`|het soort node als getal: 1 voor element, 3 voor text (zie [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType))|
|`n.nodeValue`|geeft de text van een text node als string|

Het is natuurlijk veel handiger om de `.textContent` van een element te bewerken dan te werken met text nodes.

<br>

## Werken met DOM-tree nodes

De informatie die hier staat omschreven, dient als alternatief voor het werken met `.innerHTML`.

Werken met nodes omvat verschillende **stappen**:
1. Nodes aanmaken
2. Attributen opvragen en aanpassen van een element node
3. Nodes toevoegen en verwijderen

### 1. Nodes aanmaken met `.createElement()` en `.createTextNode)`

Het is mogelijk om met behulp van het `document` globaal variabel een element of text node aan te maken:

```js
let elementNode = document.createElement("a"); // element van type <a>
let textNode = document.createTextNode("Hello World!"); // tekst node met .nodeValue "Hello World!"
```

### 2. Attributen opvragen `.getAttribute()` en aanpassen `.setAttribute()`

Enkel **voor element nodes**, kan je attributen opvragen en aanpassen:

```js
let koppeling = elementNode.getAttribute("href"); // haal de waarde op van het "href" attribuut, leeg of null (afhankelijk van de browser) indien niet aanwezig

elementNode.setAttribute("href", "https://google.com"); // pas de href waarde aan
```
<br>

Het is mogelijk om een **custom attribuut** aan een element toe te voegen, op voorwaarde dat het attribuut begint met `"data-"`:

```js
elementNode.setAttribute("data-persoon", "4012"); // stel een custom data-persoon attribuut in 
```

### 3. Nodes toevoegen `.createElement()` en verwijderen `.removeChild()`

Een node aan de DOM-tree toevoegen of verwijderen gebeurt via de parent node:

```js
let firstList = document.getElementByTagName("ul")[0]; // parent ophalen

let item = document.createElement("li");
item.textContent = "mijn nieuwe item";

/* een node toevoegen */
firstList.appendChild(item);

/* een node verwijderen */
let eenWillekeurigItem = firstList.children[2];
firstList.removeChild(eenWillekeurigItem);
```

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).