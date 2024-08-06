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
* om de volgende box na het float element te plaatsen wordt `clear` gebruikt

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



### B) Relatief positioneren

### C) Absoluut positioneren

<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).