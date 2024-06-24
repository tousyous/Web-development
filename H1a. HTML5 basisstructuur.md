# HTML5

## Basisstructuur

De structuur van een HTML5-document:


```html
<!DOCTYPE html>
<html lang="nl">
    <head> 
        <meta charset="UTF-8">
        <title>Mijn eerste Test</title>
    </head>
    <body>

    </body>
</html>
```

Een basis HTML pagina template is voorzien in de HTML_templates map: [**basic_html_template.html**](./HTML_templates/basic_html_template.html)

Om fouten in de structuur en tags na te gaan, kan een **validatietool** gebruikt worden. De bekendste is de W3C markup validation service: [https://validator.w3.org](https://validator.w3.org)


## Basisstructuur uitleg

`<!DOCTYPE html>` geeft weer welke informatie de browser kan verwachten

* Het **root element** van een webpagina is `<html>`
    * Je kan de taal van de website als attribuut opnemen: `lang="nl"`
* Verder opgedeeld in **twee delen**:
    * [`<head>`-gedeelte](./H1b.%20HEAD-tags.md): niet verplicht deel van de inhoud, maar vereist een `<title>`-tag
    * `<body>`-gedeelte: de weer te geven content met behulp van [HTML-elementen](./H2a.%20HTML-elementen.md)

## Opbouw van een HTML-element

Syntax van een HTML-element:

```html
// een element met inhoud
<element attribuut="waarde">inhoud</element>

// een element zonder inhoud
<element attribuut="waarde" />
```

## Afspraken in verband met HTML

Volgende regeltjes worden in acht genomen:

* HTML is niet case-sensitive, maar we zullen steeds **kleine letters** gebruiken
* Het is niet verplicht om de elementen af te sluiten, wij zullen wel alle elementen afsluiten
    * Enkele elementen hoefden niet gesloten te worden: `<br>`, `<hr>`, `<img>`
    * Je mag deze elementen sluiten of kan de sluitingstag toevoegen aan de bestaande tag: `<br />`, `<hr />`, `<img />`
* Waarden van attributen moeten niet tussen quotes staan, maar we zullen waarden altijd tussen **dubbele quotes** plaatsen
* Elementen moeten correct genest worden
* Commentaar begint met `<!-- en eindigt met -->`
* Pas op met de tekens `& > <`
    * Gebruik hiervoor de entiteitsnamen *(p.15 cursus)*: `&amp; &gt; &lt;`
    * Deze **entity references** zijn afkomstig uit Document Type Definition (DTD)

Er bestaan een aantal deprecated HTML elementen, die niet meer worden gebruikt omdat het doel is om structuur en opmaak te scheiden *(p.16 cursus)*.

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).