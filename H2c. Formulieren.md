# Formulieren

Dankzij **formulieren** is het mogelijk om dynamische websites te maken.

Voor een formulier gebruiken we de `<form>` tags
* Alle formulierelementen bevinden zich binnen deze tags
* Ook andere elementen, paragrafen, lijsten, tabellen … kunnen hierbinnen vallen
* Omvat **twee belangrijke attributen**:
    * Het `method` attribuut specifieert hoe de form-data verstuurd moet worden
        * De **GET-methode** plakt een querystring (max. 8192 karakters) achter de URL
        * De **POST-methode** kan een groter aantal gegevens verzenden
    * Het `action` attribuut bepaalt welke actie de server moet uitvoeren
        * Meestal wordt hiermee bepaald **naar waar** de data wordt verzonden

```html
<form action="./script.html" method="get">   
    <!-- inhoud van de form -->
</form>
```

## Formulierobjecten

Formulierobjecten worden met een `<input>` tag aangemaakt, *met uitzondering van een textarea en keuzelijst*. 
* Enkel het attribuut `name` is **verplicht** om het form-element te herkennen.

Voor elk form-element kan een **label** worden opgenomen:
* Het `for`-attribuut van het label verwijst naar de `id` van het input element

```html
<label for="name">Name: </label>
<input type="text" id="name" name="name" >
<br />
```


Binnen de formulierobjecten maken we een onderscheid tussen:

A) **Tekstvak en password**

```html
<input type="text" name="invoerveld" size="20" maxlength="20" value="startwaarde">
<input type="password" name="paswoord" size="10" maxlength="10">
```

B) **Email en webadres**

```html
<input type="email" name="txtEmail" >
<input type="url" name="txtURL" >
```

C) **Getallen** (enkel of range)

```html
<input type="number" name="getal" min="0" max="20" step="1" value="beginwaarde">
<input type="range" name="bereik" min="0" max="20" step="1" value="beginwaarde">
```

D) **Datum en tijd** (datum, maand, week, tijd)

```html
<input type="date" name="datum">
<input type="month" name="maand">
<input type="week" name="week">
<input type="time" name="tijd">
```

E) **Searchbox**

```html
<input type="search" name="txtSearch">
```

F) **Textarea**

```html
<textarea rows="3" cols="50" name="opmerkingen">
    Geef hier een opmerking op
</textarea>
```

G) **Checkbox**

```html
<input type="checkbox" name="checkbox" value="aanwezig" checked="checked">
```

H) **Radiobuttons en keuzelijst**

```html
<input type="radio" name="geslacht" value="m" checked="checked">
<input type="radio" name="geslacht" value="v">
<input type="radio" name="geslacht" value="x">
```

```html
<select name="geslacht" size="3" multiple>
   <option value="m" selected>Male</option>
   <option value="v">Female</option>
   <option value="x">X</option>
</select>
```

I) **Verborgen**

```html
<input type="hidden" name="verborgenInfo" value="verborgenWaarde">
```


<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).