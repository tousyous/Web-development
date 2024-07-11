# Visuele effecten

Overzicht:
* [Prefixen en hulpmiddelen](#prefixes-en-hulpmiddelen) voor verschillende browsers
* [Border (randen)](#borders) inclusief schaduw, [afronden](#a-hoeken-afronden) en [border-image](#b-afbeelding-als-rand)
* [Opmaak van lijsten](#opmaak-van-lijsten)

## Prefixes en hulpmiddelen

Niet alle features worden automatisch in alle browsers ondersteund. Experimentele ondersteuning maakt daarom gebruik van **prefixes**, die enkel door dat type browser worden herkend.

|browser|prefix|
|---|---|
|Safari, iOS, Chrome, Edge, Brave, Opera| `-webkit-`|
|Firefox, Thunderbird|`-moz-`|
|Konqueror|`-khtml-`|

Plaats steeds de eigenlijke CSS3 eigenschap **als laatste in de declaratie**, zodat deze de experimentele versie (met prefix) overschrijft.

Een voorbeeld met border-radius:

```css
.rounded {
    border: 2px solid;
    padding: 10px;
    width: 250px;
    -webkit-border-radius: 10px; /* experimenteel */
    border-radius: 10px; /* eigenlijke als laatste */
}
```

Gelukkig zijn er **hulpmiddelen** om browser-specifieke CSS3 te schrijven:
* CSS3 Generator: https://css3generator.com/ 
* CollorZilla: https://www.colorzilla.com/gradient-editor/ 

## Borders

Met borders kunnen randen worden ingesteld. Tegenwoordig kunnen ook images gebruikt worden en kunnen de hoeken worden afgerond (in volgorde volgens de wijzers van de klok: top-left, top-right, bottom-right, bottom left).

Een template is beschikbaar: [effecten_border.html](./CSS_templates/effecten_border.html) met [effecten_border.css](./CSS_templates/effecten_border.css)

|eigenschap|betekenis|waarden|
|---|---|---|
|border|shorthand voor border-width, border-style en border-color|`10px solid black`|
|border-width|dikte van de border|`<value>`|
|border-style|lijn-stijl van de border|`none / dotted / solid / ...`|
|border color|kleur van de rand|`<kleur>`|
|border-radius|de mate van afronding als lengte (px) of % |`TL TR BR BL`|
|box-shadow|schaduw met als parameters in volgorde:<br>h-shadow v-shadow [blur spread color inset]|`10px 10px 5px #888888`|

border-width, border-style en border-color kunnen ook als *vier waarden* worden weergegeven, in volgorde: top, right, bottom, left
* `border-color: red green blue yellow`


### A) Hoeken afronden

Bij het **afronden** van hoeken kan je één, twee of vier waarden meegeven: `border-radius`
* één waarde wordt voor alle vier de hoeken gebruikt
* twee waarden worden herhaald: de eerste telt voor de eerste en derde hoek, de tweede waarde voor de tweede en vierde hoek
    * TL = BR
    * TR = BL
* vier waarden geven elke hoek een eigen waarde

```css
div {
    border: 2px solid black;
    padding: 5px;
    background: #dddddd;
    width: 300px;
}

div.schaduw {
    box-shadow: 10px 10px 5px #888888;
}

div.gelijkehoeken {
    border-radius: 10px;
}
div.diagonalehoeken {
    border-radius: 10px 30px;
}
div.ongelijkehoeken {
    border-radius: 10px 15px 20px 5px;
}
```

Daarnaast kan je asymmetrische of elliptische hoeken maken met de `waarde / waarde` notatie:
* de eerste waarde stelt de horizontale straal voor
* de tweede waarde de verticale straal

```css 
div.gelijkeelliptischehoeken {
    border-radius: 50px / 10px;
}
div.ongelijkeelliptischehoeken {
    border-radius: 20px 10px 10px 20px / 40px 20px 20px 40px;
}
```

### B) Afbeelding als rand

Met behulp van de `border-image` eigenschap kan je een **afbeelding** als border gebruiken:

|eigenschap|betekenis|waarden|
|---|---|---|
|border-image|shorthand voor border-image-source, border-image-slice en border-imdage-repeat|`url(foto.gif) 40 repeat`|
|border-image-source|bronbestand|`url(URI)`|
|border-image-slice|aantal px (zonder px te typen) of % dat van de boven, rechtse, onder, linkse rand wordt genomen om hoek, randmidden en één centrale slice te maken|`20 40 30 50`|
|border-image-repeat|afbeelding herhalen, stretchen of afronden|`repeat / round / stretch`|

<hr>

## Opmaak van lijsten

Om een lijst op te maken, wordt de `list-style` property van het `<ul>`-element gebruikt.

|eigenschap|omschrijving|waarden|
|---|---|---|
|list-style|shorthand voor list-style-type, list-style-position en list-style-image |`square outside none`|
|list-style-type| bepaalt het opsommingsteken|`disc / circle / square / decimal / decimal-leading-zero / none / ...`|
|list-style-position|plaats van het opsommingsteken voorafgaand of in de voorziene ruimte | `outside / inside` 
|list-style-image|laat toe een afbeelding te gebruiken|`url(path/to/file.png)`|

```css
.vierkantenlijst {
    list-style: square outside none;
}

.lijstmetafbeelding {
    list-style-image: url(images/bullet.png);
}
```

Een overzicht met voorbeelden van lijstjes is hier terug te vinden: [HTML](./CSS_templates/lijstjes.html) en [CSS](./CSS_templates/lijstjes.css).

<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).