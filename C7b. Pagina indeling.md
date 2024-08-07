# Pagina indeling

In eerste instantie wordt [de opbouw van een pagina](#indelen-van-een-pagina) (her)bekeken. 

Vervolgens worden **drie technieken** voor indeling besproken:
* CSS Float
* CSS Grid
* CSS Flexbox

## Indelen van een pagina

Een typische indeling bestaat uit een hoofdding, verschillende kolommen en een footer. Hiervoor worden de nieuwe **semantische HTML5-elementen** gebruikt (zie [H2b. Semantische elementen](./H2b.%20Semantische%20elementen.md)).

Voor deze oefening wordt een [basis_html_indeling.html](./HTML_templates/basis_html_indeling.html) gebruikt.

De drie technieken worden gebruikt om de indeling/layout te voorzien. Geen methode staat op zich en elke methode heeft zijn voor en nadelen. 

## A) Float en position

Float en position zijn relatief oud. 
* `float` werkt niet met absolute positionering
* om elementen achter elkaar te plaatsen gebruik je beter het nieuwe `display: inline-block`
* float vereist een `width`
* ideaal om tekst rond een element heen te laten lopen

<br>

Een voorbeeld template:
* [basis_indeling_float.html](./CSS_templates/basis_indeling_float.html)
* [basis_indeling_float.css](./CSS_templates/basis_indeling_float.css)

Layout met behulp van `position: absolute` wordt bij voorkeur **NIET gebruikt**!

## B) Grid

Met CSS Grid wordt een **grid structuur** van de layout gedefinieerd: *het aantal rijen en kolommen*. Daarna bepaal je de positie van elke blok in de grid en hoeveel grid blokjes er worden ingenomen.

Om een grid structuur aan te maken is een container nodig:

```css
.container {
    display: grid;
}
```

Kolommen en rijen worden met **fractions** `fr` gedefinieerd:

```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;     /* 4 kolommen */
    grid-template-rows: 1fr 1fr 1fr;            /* 3 rijen */
    gap: .5rem .8rem;
    justify-items: stretch;
}
```

Eens het rooster is opgebouwd, kan je deze vullen met **grid-items**:

```css
.grid-item {
    background color: grey;
    border: 1px solid black;
    padding: 20px;
    font-size: 30px;
    text-align: center;
}
```

Elk item kan je ook, los van de HTML indeling, een **begin- en eindcoördinaat** geven:

```css
.item1 {
    grid-column-start: 1;
    grid-column-end: 3; /* loopt van eerste tot derde gridlijn = 2 blokken */
}
```

## C) Flexbox

<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).