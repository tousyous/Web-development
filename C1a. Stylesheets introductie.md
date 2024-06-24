# Introductie tot CSS3

## Voordelen van CSS

* Veel flexibeler in opmaak dan HTML5
* Alle stijlelementen worden in een afzonderlijk document ondergebracht
* Je website wordt sneller geladen (minder code)
* Broncode is beter te indexeren door zoekmachines

## Stylesheets verbinden met HTML5

3 manieren om te verbinden:
* Via inline stijl
* Via een stijlblok
* Via een extern stijlblad

**A) Inline stijl**

Wanneer een stijl slechts een enkele keer wordt gebruikt. Maakt gebruik van het `style` attribuut van een element:

```html
<h1 style="color: red; background-color: blue">Mijn titel</h1>
```

**B) Stijlblok**

Een stijl wordt meerdere keren, binnen één document gebruikt. Voorzie een stijlblok binnen de `<head>`-tag van het document.

```html
<head>
    <style type="text/css">
        h1 { color: red; background-color: blue; }
    </style>
</head>
```

**C) Extern stijlblad**

Een stijl wordt in meerdere documenten voor één of meerdere elementen gebruikt. Alle stijlregels worden in aan afzonderlijk document, een **extern stijlblad** bijgehouden.

In het HTML document wordt met behulp van een `<link>` element een verwijzing naar het stijlblad ingevoegd.
* Voeg de attributen `href`, `rel` en `type` steeds toe aan de link.
* Het `type` attribuut is overbodig in HTML5.

```html
<link rel="stylesheet" href="styles/style.css" type="text/css">
```

Het optionele `media` attribuut kan verschillende waardes aannemen:
* `screen`: Default, voor computerschermen
* `print`: Met pagina-opmaak voor print preview
* `aural`: Voor spraaksynthesizer
* `all`: Voor alle apparaten

In CSS worden de stijlregels opgebouwd volgens het **selector-mechanisme**.

**D) Media-query's**

Met behulp van media-query's kan CSS de browser bevragen en een aangepaste stylesheet laden op basis van de uitkomst.


---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).