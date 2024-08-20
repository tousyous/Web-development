# Formulierelementen

Overzicht:
- [Verschillende soorten formulierelementen](./H2c.%20Formulieren.md)
- [Form waarden opvragen](#form-waarden-opvragen)
- [Formvalidatie](#formvalidatie)

<br>

> *Herhaling*:
> - het `action` attribuut van een form bepaalt naar waar de data van de form wordt doorgestuurd
> - De **HTTP methode** GET of POST bepaalt hoe de data verstuurd wordt
>> - **GET** staat voor 'lees van resource' en slaat de data niet op de server op. Deze mag wel door de proxy/browser gecached worden.
>> - **POST** staat voor 'schrijf naar resource' en slaat de data wel op de server op

Per submit button kan je de methode instellen met behulp van de `formaction` en `formmethod` attributen.

> *Herhaling* 2.0:
> - elk form-element heeft een `name` attribuut dat wordt gebruikt bij het doorsturen van de data
> - een form-element kan ook een `id` hebben, met (vaak) dezelfde waarde als het *name*-attribuut
>> - het *id* wordt gebruikt in de javascript code
>> - een *id* moet uniek zijn, *name* niet!

<br>

> *Herhaling* 3.0:
> - het `<label>`-element wordt gebruikt om betekenis aan een input element toe te voegen
>> - niet nodig in combinatie met een *checkbox* of *radiobutton*
>> - gebruik steeds een `for` attribuut om het label aan het element te linken!

<br>

> *Herhaling* 4.0:
> - de browser weet welke **radiobuttons** samen horen aan de hand van het `name` attribuut
>> - zorg dat er altijd een optie geselecteerd is
> - geef ook **submit buttons** een (verschillende) `name` waarde, zodat duidelijk is op welke button werd geklikt
>> - gebruik hiervoor niet de *value* waarde


## Form waarden opvragen

Waarden opvragen is afhankelijk van het type element:
- waarden van elementen van het **`input` type** gebruiken de `.value` eigenschap
    - zal altijd een *string* opleveren!
- een **`checkbox` element** maakt gebruik van de `.checked` eigenschap
    - levert een *boolean* op
- ook een **`radio`-button** gebruikt de `.checked` eigenschap, maar slechts één van alle buttons zal *true* opleveren
    - gebruik hiervoor de `document.getElementsByName("xyz")` methode om te itereren over de elementen
- voor een **keuzelijst**, een `select` element met meerdere `option` elementen, is het opvragen iets ingewikkelder:
    - de *option* elementen van een *select* element kunnen met de `.options` methode opgevraagd worden
        - dit gedraagt zich als een array
        - de geselecteerde option wordt met de `.selectedIndex` methode bepaald
    - elk option element heeft volgende nuttige eigenschappen:
        - `.selected` een boolean die aangeeft of de optie geselecteerd is
        - `.value` de waarde van het value attribuut van een option
        - `.text` de tekst van de option tussen begin- en eindtag
    - indien een keuzelijst meerdere geselecteerde opties toelaat, moeten ze allemaal overlopen worden en moet de *.selected* eigenschap van elke optie bekeken worden

<br>

> Een voorbeeld van elke soort is terug te vinden in deze **template**:
> - [formwaarden_opvragen.html](./JS_templates/formwaarden_opvragen.html)
> - [formwaarden_opvragen.css](./JS_templates/formwaarden_opvragen.css)
> - [formwaarden_opvragen.js](./JS_templates/formwaarden_opvragen.js)

<br>

## Formvalidatie

Een form vereist vaak ook validatie van de ingevoerde waarden. De nieuwe semantische elementen voorzien hierin al veel mogelijkheden, maar worden nog niet overal ondersteund.

> Een template voor **formvalidatie** is hier terug te vinden:
> - [formvalidatie.html](./JS_templates/formvalidatie.html)
> - [formvalidatie.css](./JS_templates/formvalidatie.css)
> - [formvalidatie.js](./JS_templates/formvalidatie.js)

In de praktijk wordt eerder een externe library gebruikt ter validatie van forms, zoals [JQuery Validation Plugin](https://jqueryvalidation.org/) of [Parsley.js](https://parsleyjs.org/).

Om na te gaan of een string een getal bevat gebruik je volgende functie:

```js
const isGetal = (tekst) => {
    return !isNaN(tekst);
}
```

<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).