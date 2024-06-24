# Elementen binnen de `<body>`-tag

Er bestaan een 10-tal containertags of elementen om het document structuur te geven

We splitsen de elementen op in [**Headings**](#headings), [**Gestructureerde tekst**](#gestructureerde-tekst), [**Lijsten**](#lijsten), [**Tabellen**](#tabellen) en [**Links en figuren**](#hyperlinks-figuren-en-anchors).

[**Semantische elementen**](./H2b.%20Semantische%20elementen.md) voor de opbouw van een HTML5-pagina worden afzonderlijk besproken.

## Headings

6 niveaus van **titels**:

```html
<h1>titel</h1>
<h2>titel</h2>
<h3>titel</h3>
<h4>titel</h4>
<h5>titel</h5>
<h6>titel</h6>
```

Een verdere opdeling in blokken gebeurt met de `<div>`-tags.

## Gestructureerde tekst

Tekst kan worden onderverdeeld in **paragrafen**:

```html
<p>Tekst van een paragraaf</p>
```

Hier wordt door de browser automatisch een marge boven en onder de paragraaf voorzien.

Zinsdelen kunnen we structureren met volgende tags:

```html
We kunnen tekst <em>cursief</em> plaatsen of in het <strong>bold</strong> benadrukken.
<cite>Een citaat wordt door een tag omgeven.</cite>
Zowel <code>code</code> als <dfn>definitie term</dfn> krijgen een monospace font zoals courier.
Een <abbr>afkorting</abbr> krijgt zijn eigen tag.
Om <samp>programma of script output</samp> weer te geven, gebruikt men samp.
Een sneltoets zoals <kbd>Ctrl</kbd> heeft zijn eigen tag, alsook <var>variabelen of argumenten</var>.
```

Misbruik de tags niet om een bepaalde opmaak te bekomen. Gebruik hiervoor beter een `<span>` tag.

Witregels toevoegen kan met de `<br />` tag.

Om tekst te printen zoals hij is, kan je deze omsluiten door `<pre>` tags.

Een horizontale lijn voeg je in met `<hr />`.


## Lijsten

Er bestaan 3 soorten lijsten: **genummerde lijsten** `<ol>`, **ongenummerde lijsten** `<ul>` en **definitielijsten** `<dl>` voor definitietermen en -descriptions.

Zowel genummerde als ongenummerde lijsten maken gebruik van *list items* `<li>` en kan je nesten.

1) **Genummerde lijsten** bevatten een opsomming met letters of getallen en de items springen in:
```html
<ol>    
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
</ol>
```

2) **Ongenummerde lijsten** bevatten een opsommingsteken en de items springen in:
```html
<ul>    
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
</ul>
```

Een *geneste lijst* vereist nog steeds een tekst bij elk list item:

```html
<ul>
    <li>item 1</li>
    <li>item 2    // vergeet de tekst hier niet!
        <ul>       
            <li>subitem 1</li>
            <li>subitem 2</li>    
        </ul>
    </li>
    <li>item 3</li>
</ul>
```

3) **Definitielijsten** bevatten koppen en inspringende alinea's:

```html
<dl>  
    <dt>HTML</dt> // definition term 
    <dd>Hypertext markup language</dd> // definition description
    <dt>JS</dt>
    <dd>JavaScript</dd>
</dl>
```

## Tabellen

Tabellen worden gedefinieerd met de `<table>` tag en bevatten rijen `<tr>`, met `<th>` voor de eerste vette rij, en cellen (kolommen) binnen een rij `<td>`
* De `rowspan="aantal"` en `colspan="aantal"` attributen laten toe om een cel over meerdere rijen of kolommen uit te breiden
* Het `valign="top|middle|bottom|baseline"` attribuut van een cel past de verticale alignment aan binnen de cel
* Een cel mag nooit leeg zijn, voeg daarom een no-breaking space toe: `&nbsp;`

Een titel boven de tabel voeg je als caption toe, als eerste binnen de `<table>` tags:

```html
<caption>de titel van de tabel</caption>
```

Na de `<caption>` tag kan een optionele `<colgroup>` tag volgen, die aangeeft hoeveel kolommen, en hoe breed, de tabel zal bevatten
* Hierin worden `<col>` elementen voor elke kolom gedefinieerd
* Voor elke kolom kan je de breedte met behulp van het attribuut `width="waarde"` opgeven

Vervolgens kunnen drie delen worden gedefinieerd: een header met `<thead>` tag, een footer met `<tfoot>` tag en een body-gedeelte met `<tbody>` tag, in volgorde:

```html
<table width="95%" border="1">
    <caption>titel van de tabel</caption>
    <colgroup> // optioneel
        <col width="30%">
        <col width="*">
        <col width="30%">
    </colgroup>
    <thead>
        <tr>
            <th>0.1 th bold en centered</th>
            <th>0.2 th bold en centered</th>
            <th>0.3 th bold en centered</th>
        </tr>
    </thead>
    <tfoot>
        <tr>
            <td>4.1 tf laatste rij</td>
            <td>4.2 tf laatste rij</td>
            <td>4.3 tf laatste rij</td>
        </tr>
    </tfoot>
    <tbody>
        <tr>
            <td colspan="3">1.1-3 uitgebreid over 3 kolommen</td>
            // laatste twee kolommen afwezig
        </tr>
        <tr>
            <td rowspan="2">2-3.1 uitgebreid over 2 rijen</td>
            <td>2.2</td>
            <td>2.3</td>
        </tr>
        <tr>
            // eerste cel afwezig
            <td>3.2</td>
            <td>3.3</td>
        </tr>
    </tbody>
</table>
```

Zie ook voorbeeld: [table_met_caption_colgroup_thead_tfoot_tbody.html](./HTML_templates/table_met_caption_colgroup_thead_tfoot_tbody.html)


## Hyperlinks, figuren en anchors

**Verwijzen** naar gegevens op een andere pagina kan met behulp van de `<a>` tag
* Het `href` attribuut bevat het internetadres 
* Een link kan ook verwijzen naar een gedeelte op en webpagina obv het `id`-attribuut (destination anchor) op de pagina

```html
<a href="test.html">Link naar test</a>
<a href="mailto:test@vives.be">Mail me</a>
<a href="#Hoofdstuk2">Link naar hoofdstuk 2</a>
```    

Een **figuur** wordt ingevoegd met behulp van de `<img />`  tag
* Omvat een `src` attribuut van type gif of jpg
* Een `alt` attribuut voor alternatieve tekst
* En een breedte `width` en hoogte `height`

```html
<img src="path/logo.jpg" alt="mijn logo" width="600" height="800"/>
```

Om foto's correct op verschillende apparaten weer te geven, kan het nieuwe `<picture>` element gebruikt worden:
* Is de eerste `source` niet correct, dan wordt de tweede gebruikt enz.
* Mogelijke waarden van het `media`-attribuut:
    * `(min-width: 600px)`
    * `(orientation: portrait)`

```html
<picture>
    <source srcset="image.jpg" media="(orientation: portrait)" />
    <img src="/media/cc0-images/painted-hand-298-332.jpg" alt="hand" />
</picture>
```

Gangbare bestandsformaten voor afbeeldingen zijn jpeg, png en gif:
* **lossy compressie** verkleint de bestandsgrootte door irrelevante informatie te verwijderen ten koste van kwaliteit, terwijl **lossless compressie** de bestandsgrootte verkleint zonder enig verlies van kwaliteit 
* Jpeg is lossy, PNG is lossless, GIF is beide

<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).