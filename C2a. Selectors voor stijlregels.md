# Selectors voor stijlregels

In een stijlbok of extern stijlblad worden stijlen vastgelegd met **stijlregels**. Een stijlregels bestaat uit:
* Een **selector**, een soort van filter
* Een blok met één of meerdere stijldeclaraties, begrensd door `{ }`
    * Elke declaratie omvat één of meerdere properties en bijhorende values

Er bestaan verschillende soorten selectors:

|Selector|Omschrijving|
|---|---|
|[Element-selector](#element-selector)|Selectie op basis van type element (h1, div, p)|
|[Class-selector](#class--en-id-selectoren)|Selectie op basis van het attribuut **class**<br>(kan meerdere keren voorkomen)|
|[Id-selector](#class--en-id-selectoren)|Selectie op basis van het unieke **id**-attribuut|
|Attribuut-selector||
|[Pseudo-element selector](#pseudo-element-selectors) |Selecteert een deel van een element (eerste letter, voor of na, ...) |
|[Pseudo-class selector](#pseudo-class-selector)|Selectie van een element op basis van een eigenschap (bezocht, actief, focus, ...)|


## Element-selector

Het is mogelijk om een enkelvoudige- of meervoudige-selector te gebruiken.

Om de tekstkleur en achtergrondkleur te veranderen van **enkelvoudige h1** elementen:

```css
h1 {
    color: blue;
    background-color: grey;
}
```

Je kan ook **meerdere elementen** (gescheiden door komma's) samen opmaken:

```css
h2, p {
    font-size: 150%;
}
```

Het is mogelijk om stijl specifiek toe te passen op een **descendant-element** van een ander element:
* Bijv. Enkel op `<em>` binnen `<p>` elementen
* Niet p, wel em binnen p

```css
p em {
    color: blue;
}
```

Enkel van toepassing op een **direct child-element** van een parent element, maakt gebruik van het `>` teken:
* Enkel `<li>` direct onder `<ul>`, niet ul zelf

```css
ul > li {
    color: blue;
}
```

Een **adjacent sibling-selector** is van toepassing op elementen die direct na elkaar komen en maakt gebruik van het + teken: 
* bijv. elk h2 element, direct na een h1 element:

```css
h1 + h2 {
    color: blue;
}
```

&nbsp;

## Class- en id-selectoren

Het is mogelijk een `class` of `id` attribuut aan een element toe te voegen
* **Class** kan meerdere keren in hetzelfde document worden gebruikt
    * Een element kan meerdere class waarden hebben `class="value1 value2"`
* Een **id** is uniek voor een element in een document
* Opmaak op basis van class of id wordt meer gebruikt dan op basis van element type (zie 2.2)

&nbsp;

Om een stijl op een element van een bepaalde **class** toe te passen wordt de punt `.` notatie gebruikt:

```css
.class-name {
    color: blue;
}

/* Maak alle span elementen van p elementen met class="speciaal" op */
p.speciaal span {
    background-color: red;
}
```

&nbsp;
    
In plaats van een het class attribuut kan ook het **unieke id attribuut** geselecteerd worden met behulp van de hashtag `#` notatie:

```css
#element-id {
    color: blue;
}

/* het p-element met id="element-id" */
p#element-id {
    color: red;
}
```
&nbsp;

## Pseudo-element selectors

Een pseudo-element is een denkbeeldig element, dat niet in het document voorkomt, maar waarvoor je wel een stijl kan definiëren. Deze selectie maakt gebruik van de `:` notatie en kan op 4 manieren worden gebruikt:

|soort|omschrijving|
|---|---|
|`:first-line`|de eerste regel, niet de eerste zin van een element|
|`:first-leter`|de eerste letter van een element|
|`:before`<br>`:after`|laat toe om met het **content** attribuut extra tekst of afbeelding<br> *voor* of *na* een element toe te voegen|
|`::selection`|aangepaste stijl voor wanneer de gebruiker tekst selecteert in de browser <br>(vanaf CSS3)|

```css
p:first-line {
    font-weight: bold;
}
p:first-letter {
    font-size: 24pt;
}
p:before {
    content: "start tekst";
    color: green;
    font-style: italic;
}
p:after {
    content: "einde tekst";
}
::selection {
    color: red;
    background-color: blue;
}
```

&nbsp;

## Pseudo-class selector

Pas de opmaak aan op basis van **een eigenschap of kenmerk** van een element in plaats van op basis van naam, attributen of inhoud. Ook hier wordt opnieuw de `:` notatie gebruikt.

De meest voorkomende pseudo-class selectoren:

|notatie|omschrijving|
|---|---|
|`a:link`|niet bezochte hyperlink|
|`a:visited`|bezochte hyperlink|
|`a:active`|actieve hyperlink|
|`::hover`|elementen waar de gebruiker over *hangt* met zijn muisaanwijzer|

Een overzicht van ALLE mogelijke pseudo-classen is op de [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) pagina terug te vinden.

Enkele voorbeelden:

```css
/*de layout van een hyperlink*/
a:link {
    color: #999999;
    text-decoration: none;
}
a:visited {
    color: #999999;
    text-decoration: none;
}
a:hover {
    color: #999999;
    text-decoration: underline;
}
a:active {
    color: #999999;
    text-decoration: none;
}

/*opmaak van de eerste paragraaf*/
p:first-of-type {
    background: #ff0000;
}

/*oneven rijen in een tabel*/
tr:nth-child(2n+1) {
    background-color: #ccc;
}
```

<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).