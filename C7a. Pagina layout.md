# Lay-out

De opbouw en weergave van een pagina wordt bepaald door:
* het document [normal flow](#normal-flow-of-natuurlijke-flow)
* het [box-model](#de-box)
* [visual formatting model](#visual-formatting-model)
* en [positioneringsschema](#het-positioneringsschema)

## Normal flow of natuurlijke flow

>= een document wordt van **boven naar beneden** en van **links naar rechts** opgebouwd

Het **box-model** beschrijft de opmaak van een element, zoals een h-, p-, li-, tabel-element.

Het **visual formatting model** (of weergavemodel) bepaalt hoe alle blokken zich tot elkaar verhouden:
* de eigenschap `display` speelt hierin een hoofdrol

Uiteindelijk bepaalt het **positioneringsschema** of we afwijken van de normale plaatsing op basis van *floats* of absolute positionering.

## De box

Elke element bestaat in CSS uit een box, deze is, **van binnen naar buiten**, opgebouwd uit:
* inhoud
* padding
* border
* margin

<br>

De **margin** is de afstand van de rand van een element tot de rand van het parent of een ander element
* de margin is **transparant** en neemt de kleur aan van het parent element
* aangrenzende margins schuiven in elkaar (overlappen)
* de grootste negatieve margin wordt afgetrokken van de grootste positieve margin

De **border** is de rand van het element

De **padding** is de ruimte tussen de rand en de inhoud van het element
* de achtergrond is dezelfde als de inhoud

De som van alle afmetingen (inclusief margin) bepaalt de **grootte** van de box.
* Horizontaal (van links naar rechts): `margin-left + border-left-width + padding-left + width + padding-right + border-right-width + margin-right`
* Deze horizontale afmeting komt overeen met de breedte van het parent element 
* Om dit mogelijk te maken moet één van deze drie eigenschappen de waarde **auto** hebben: `margin-left` / `width` / `margin-right`

De eigenschappen **width** en **height** bepalen de afmetingen van de inhoud, niet de margin, border en padding.

## Visual formatting model

Het boxmodel bepaalt enkel de afmeting van de elementen. De weergave van de elementen tov elkaar wordt bepaald door het **visual formatting model**. Dit model bepaalt of elementen:
* naast elkaar worden gezet (*inline*)
* of onder elkaar worden gezet (*blok*)

<br>

**Blokelementen** nemen de volledige breedte in beslag en hebben de waarde `display: block`. Deze worden *onder elkaar* geplaatst. Je kan ze wel combineren met een *inline* element. Voorbeelden:
* `<h1>`
* `<p>`

Elementen die doorlopen in de regel worden **inline elementen** genoemd. Deze hebben de waarde `display: inline` of `display: inline-block`. De laatste plaatst een blokelement inline. Inline elementen worden horizontaal naast elkaar geplaatst. Voorbeelden:
* `<span>`
* `<em>`

Het is mogelijk om **inline-block elementen verticaal te centreren** op een regel met behulp van de `verticle-align: middle` eigenschap.

## Het positioneringsschema

Met het positioneringsschema kan je elementen plaatsen buiten de *natuurlijke flow* van de pagina. 

We maken een onderscheid tussen:
* zwevende (float)
* relatieve
* absolute
* fixed positionering

### A) Zwevende elementen

Een zwevend element:
* wordt langs de linker- of rechterrand van het *parent* element geplaatst
* heeft een vaste breedte (`width`)
* de andere boxen krijgen een plaats naast het *float* element en herkennen het float element niet meer in de normale flow van de pagina
* om de volgende box onder het float element te plaatsen wordt `clear` gebruikt
    * dit is enkel **zinvol** bij zwevende `display: block` elementen, 
    * **niet** zinvol bij `inline(-block)` elementen


```css
.floatleft40 {
    background: green;
    float: left;
    width: 40%;
    height: 100px;
    margin-right: 10px;
}

.floatright40 {
    background: red;
    float: right;
    width: 40%;
    height: 100px;
}

.normalflow {
    background: blue;
    height: 200px;
}

.clear {
    clear: both;
    background: blue;
    height: 200px;
}
```
<br>

Om **twee boxen gelijkmatig naast elkaar te verdelen** over een pagina, wordt de `box-sizing` property gebruikt:
* `box-sizing: content-box;` breedte en hoogte obv content
* `box-sizing: border-box;` breedte en hoogte obv content, padding en border

Dit werkt zowel met *float* als met *inline-block* in combinatie met een *width*.
<br>

```css
div1 {
    width: 50%;
    border: 1px solid black;
    float: left;
    padding: 10px;
    box-sizing: border-box;
}

div2 {
    width: 50%;
    border: 1px solid black;
    display: inline-block;
    padding: 10px;
    box-sizing: border-box;
}
```


### B) Relatief positioneren

De ``position`` eigenschap heeft als mogelijke waarden: *static*, *fixed*, **absolute**, **relative**. Enkel de laatste twee worden besproken.

De eigenschap `position: relative` laat toe om een element tov zijn gebruikelijke positie te verplaatsen. De originele plaats blijft wel behouden.

Om een element 80px naar beneden en 20px naar rechts te verplaatsen:
```css
.move {
    position: relative;
    top: 80px;
    left: 20px;
}
```

Relatief positioneren is bijzonder bruikbaar om binnen het element een ander element absoluut te positioneren. 

### C) Absoluut positioneren

Geeft een element een plaats tov een **referentiebox** (een ouder-element met een niet-static, bijv. **absolute** of **relative**, position). Indien zo'n ouder-elemnt er niet is, wordt het `body`-element genomen.

Voor een span element binnen een div:

```css
div {
    position: relative; /* top en left zijn default 0 */
    width: 150px;
    height: 100px;
}

span {
    position: absolute;
    top: 20px;
    left: 50px;
}
```

### D) Fixed positioning

Een element met een `position: fixed` waarde, heeft een vaste plaats tov de viewport, bijvoorbeeld onderaan rechts:

```css
div.fixed {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 300px;
    border: 3px solid #73AD21;
}
```

<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).