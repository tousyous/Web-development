# Werken met tekst

De  **bladspiegel** is hoe beeld- en tekstelementen over de bladzijde zijn verdeeld.

## Tekst-properties

Deze eigenschappen omvatten uitlijnen, onderlijning, indentering, capitalisatie en schaduw.

|eigenschap|betekenis|waarden|
|---|---|---|
|text-align	|Horizontale uitlijning	|`left / right / center / justify` |
|text-decoration	|Voeg decoratie toe	|`underline / overline / line-through / blink`|
|text-indent	|Laat eerste lijn inspringen	|`<lengte> / <percentage>`|
|text-transform	|Bepaalt capitalisatie (uc/lc)	|`capitalize / uppercase / lowercase`|
|text-shadow|Schaduw	|`<horizontaal> <verticaal> [<blur> <color>]`|

Voorbeeld:

```css
.speciaal {
    text-align: center;
    text-decoration: underline;
    text-indent: 10%;
    text-transform: uppercase;
    text-shadow: 5px 10px 5px #000;
}
```

## Lettertype

Hier wordt de weergave van de tekst zelf bepaald: het lettertype, de grootte en stijlkenmerken zoals vet en cursief.

|eigenschap|betekenis|waarden|
|---|---|---|
|font|	Shorthand voor font properties	| &nbsp; |
|font-family|	lettertype, vaak meerdere waarden, de eerste beschikbare wordt gekozen	| &nbsp; |
|font-size|	tekengrootte (px, % of em, bij voorkeur niet px)|	`<px> / <em> / <%>` |
|font-style|	stijl zoals italic en normal|	`normal / italic / oblique`|
|font-weight	|dikte zoals normal en bold|	`normal / bold / bolder / lighter`|

```css
.aangepast-font {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 120%;
    font-style: italic;
    font-weight: bold;
}
```

Voor **font-size** gebruiken we bij voorkeur procenten `%` of `em`: 
*  De standaard font-size is vastgelegd op **16px**
    *  kies je font-size: 80% dan krijg je een tekengrootte van 80% van 16px
*  **1em** komt overeen met de standaard grootte van 16px
    * 0.8em komt overeen met 80% van 16px

Geneste elementen zullen elkaars groottes optellen. Om dit probleem op te lossen is het beter om de font-size van de body gelijk te stellen aan 10px (62.5%) en alle child elementen een aangepaste grootte ten opzichte van de body te geven.

```css
body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 62.5%;
}
p {
    font-size: 1.4em;
}
span {
    font-size: 1.4em;
}
```

## Achtergrond - kleur en afbeelding

Belangrijkste tekst achtergrond eigenschappen:

|eigenschap|betekenis|waarden|
|---|---|---|
|background-color|	achtergrond kleur|	`<kleur> / transparent`|
background-image|	achtergrond afbeelding|	`url("URI")`|
|background-position|	beginpositie van de background-image|	`[ [top / center / bottom] // [left / center / right] ]`|
|background-repeat|	verticale herhaling van de background-image|	`repeat / repeat-x / repeat-y / no-repeat`|

<br>

```css
body {
    background-color: aqua;
}
p.image {
    background-image: url("../images/profilefoto.jpg");
    background-attachment: fixed;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    background-origin: content-box;
}
```

<br>

Overige background image eigenschappen:

|eigenschap|betekenis|waarden|
|---|---|---|
|background-attachment|	background-image scrollt niet mee|	`scroll / fixed`|
|background-size|	grootte van de background image|	&nbsp;|
|background-origin|	laat background-image starten van de linkerboven hoek|	&nbsp;|

<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).