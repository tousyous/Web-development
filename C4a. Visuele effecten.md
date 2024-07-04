# Visuele effecten

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

<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).