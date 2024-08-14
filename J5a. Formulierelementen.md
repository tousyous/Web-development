# Formulierelementen

> Herhaling:
> - het `action` attribuut van een form bepaalt naar waar de data van de form wordt doorgestuurd
> - De **HTTP methode** GET of POST bepaalt hoe de data verstuurd wordt
>> - **GET** staat voor 'lees van resource' en slaat de data niet op de server op. Deze mag wel door de proxy/browser gecached worden.
>> - **POST** staat voor 'schrijf naar resource' en slaat de data wel op de server op

Per submit button kan je de methode instellen met behulp van de `formaction` en `formmethod` attributen.

> Herhaling 2.0:
> - elk form-element heeft een `name` attribuut dat wordt gebruikt bij het doorsturen van de data
> - een form-element kan ook een `id` hebben, met (vaak) dezelfde waarde als het *name*-attribuut
>> - het *id* wordt gebruikt in de javascript code
>> - een *id* moet uniek zijn, *name* niet!

<br>

> Herhaling 3.0:
> - het `<label>`-element wordt gebruikt om betekenis aan een input element toe te voegen
>> - niet nodig in combinatie met een *checkbox* of *radiobutton*
>> - gebruik steeds een `for` attribuut om het label aan het element te linken!

<br>

> Herhaling 4.0:
> - de browser weet welke **radiobuttons** samen horen aan de hand van het `name` attribuut
>> - zorg dat er altijd een optie geselecteerd is
> - geef ook **submit buttons** een (verschillende) `name` waarde, zodat duidelijk is op welke button werd geklikt
>> - gebruik hiervoor niet de *value* waarde


## Subtitel

Uitleg

---

HTML-codeblock:

```html
<!--html code-->
```
<br> 

CSS-codeblock:
```css
/*css code*/
```
<br>

JavaScript-codeblock:
```js
/*javascript*/
```
<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).