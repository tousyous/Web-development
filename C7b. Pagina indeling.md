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
.grid-container {
    display: grid;
}
```

Kolommen en rijen worden met **fractions** `fr` gedefinieerd:

```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;     /* 4 kolommen */
    grid-template-rows: 1fr 1fr 1fr;            /* 3 rijen */
    gap: .5rem .8rem;                           /* row - column */
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

.item2 {
    grid-column: 1;
    grid-row: 1; /* item op positie 1:1, zonder end te definiëren */
}
```

## C) Flexbox

> Flexible Box Layout Module, een speciale CSS-lay-out module

Voordelen:
- pagina inhoud kan in elke richting worden opgemaakt
- de visuele volgorde van stukjes inhoud kan worden gewijzigd
- ideaal om gelijke kolommen te bekomen (ongeacht de hoeveelheid inhoud)

Het idee is om **flex-items** flexibel in een container te verdelen.

De *flex container* omvat een as waarop de elementen worden geplaatst (= de **main axis**) en de daarop loodrechte as (= de **cross axis**), elk met een start en een end.
- afhankelijk van de richting is de main axis horizontaal (of net verticaal)
- de flex container wordt ingesteld met `display: flex`
- de richting wordt bepaald door `flex-direction: row | row-reverse | column | column-reverse`
- het is mogelijk om flex-items over meerdere meerdere rijen te laten omlopen met `flex-wrap: wrap | wrap-reverse | nowrap` 

Een krachtig gegeven van flexbox is de **uitlijning** van flex-items op zowel de main als de cross axis:
- `justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly` bepaalt de uitlijning op de main axis
- `align-items: flex-start | flex-end | center | baseline | stretch` bepaalt de uitlijning op de cross axis


```css
.container {
    display: flex;
    flex-direction: row;    /* van links naar rechts */
    flex-wrap: nowrap;      /* alle items op dezelfde rij */
    justify-content: space-between; /* uitlijning met ruimte tussen items */
    align-items: center;    /* gecentreerd ongeacht de hoogte van de elementen */
}
```

Als de inhoud van een container uit *meerdere rijen* bestaat, dan kan met `align-content: flex-start | flex-end | center | space-between | space-around | stretch` worden aangegeven hoe deze moeten worden uitgelijnd.

Met `order: integer` kan een element een andere plaats in de container krijgen dan deze zou krijgen op basis van de volgorde in de broncode.

```css
.item {
    order: 3;
}
```

<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).