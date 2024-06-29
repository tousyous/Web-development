# Selectors voor stijlregels

In een stijlbok of extern stijlblad worden stijlen vastgelegd met **stijlregels**. Een stijlregels bestaat uit:
* Een **selector**, een soort van filter
* Een blok met één of meerdere stijldeclaraties, begrensd door `{ }`
    * Elke declaratie omvat één of meerdere properties en bijhorende values

Er bestaan verschillende soorten selectors:

|Selector|Omschrijving|
|---|---|
|[Element-selector](#element-selector)|Selectie op basis van type element |
|[Class-selector](#class--en-id-selectoren)|Selectie op basis van het attribuut class<br>(kan meerdere keren voorkomen)|
|[Id-selector](#class--en-id-selectoren)|Selectie op basis van het unieke id-attribuut|
|Attribuut-selector||
|Pseudo-element selector ||
|Pseudo-class selector||


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


<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).