# Inheritance

Sommige eigenschappen worden door child-elementen overgeërfd. Voorbeelden:
- Overerfbare eigenschappen: `color`, `background-color`, `font`  
- Niet-overerfbare eigenschappen: `margin`, `padding`, `border`

Wanneer je zelf een eigenschap opgeeft, **wint** deze van overerving.

Het is mogelijk om **een niet-overerfbare eigenschap over te erven** van een parent-element via het sleutelwoord **`inherit`**:

```css
div {
    border: 1px solid red;
}
p {
    border: inherit; /* erf over van parent */
}
```

```html
<div>
    <p>dit element zal de border van div overerven</p>
</div>

<p>dit is geen child van div en zal dus geen border hebben</p>
```

## A) Volgorde van overerving

De **volgorde** waarin stijlregels worden uitgevoerd is:
1. stylesheets van de **browser** (look and feel)
    * bepalen standaardwaarden van vele elementen
    * worden door CSS gewijzigd
2. stylesheets van de **gebruiker**
    * deze kunnen bestaan
    * *Good Practice*: zorg zelf steeds voor een voorgrond- en achtergrondkleur!
    * als uitzondering wint een stijlregel met `!important` van de gebruiker van een gelijkaardige stijlregel van de webpagina
3. stylesheets van de **webpagina** (de auteur/bouwer van de website)
    * het is mogelijk om stijlregels op verschillende manieren in te voegen: zie [C1a. Stylesheets verbinden met HTML5](./C1a.%20Stylesheets%20introductie.md)
    * Wanneer meerdere stijlregels dezelfde selector, gewicht en specificiteit hebben, **wint de laatste stijlregel**.
    * Gelijkaardig worden **externe stylesheets in volgorde** uitgevoerd (en gecombineerd). Een gelijkaardige stijlregel in een verder bestand, wint van deze in een eerder bestand.
    * Een **inline-stijlregel wint** van een **style-blok** in de `<head>` en deze **wint** steeds van een **extern stijlblad**, onafhankelijk de volgorde.
    * Een geïmporteerd stijlblad wordt **tussengevoegd** op de plaats van de `@import`.

```css
@import url (./styles/styles.css);

div {
    /* overige stijlregels */
}
```

## B) Specificiteit

Het is mogelijk om de **specificiteit** van een selector `s` te berekenen als een code van 4 cijfers `abcd`. Hoe hoger de specificiteit, hoe meer voorrang:
* `a`: is de stijlregel gebaseerd op een style *attribuut* ipv een selector?
* `b`: aantal ID's in de selector
* `c`: aantal gebruikte attributen of pseudo-classen in de selector
* `d`: aantal gebruikte elementen of pseudo-elementen in de selector

|voorbeeld selector|specificiteit|
|---|---|
|`li`|0001|
|`.someclass`|0010|
|`li.someclass`|0011|
|`#eenid`|0100|
|`div#eenid`|0101|

Het is mogelijk om de specifivciteit te berekenen op https://specificity.keegan.st

## C) `!important` regels

Wanneer `!important` op het einde van een stijlregel wordt toegevoegd, wint deze altijd, ongeacht de volgorde.

```css
p {
    padding: 0px !important;
    padding-left: 10px; /* zal niet worden toegepast */
}
```

<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).