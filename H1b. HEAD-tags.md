# Elementen van de `<head>`-tag

De `<head>`-tag kan drie elementen omvatten: `<title>`, `<meta>` en `<link>`:
* `<title>` element is **verplicht** om een titel aan de webpagina te geven
* `<meta>` element specifieert meta-data, vereist **minstens één** van volgende attributen:
    * `name` (vereist content attribuut), 
    * `http-equiv` (vereist content attribuut), 
    * `charset` of 
    * `itemprop`
* `<link>` element definieert de relatie met externe bronnen zoals CSS

Een voorbeeld:
```html
<title>Titel</title>

<meta charset="UTF-8" />
<meta name="keywords" content="HTML, CSS, JS" /> 
<meta name="description" content="Een pagina over het web" />
<meta name="author" content="firstname lastname" /> 
<meta http-equiv="refresh" content="30" /> 

<link rel="stylesheet" href="styles/style.css" />
```
<br> 

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).