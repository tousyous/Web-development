# Responsive Web Development

## Viewport en mobile first

> het zichtbare gebied op een webpagina voor de gebruiker.

Het is mogelijk om de breedte van de pagina in te stellen op de breedte van het apparaat. De initial zoom voorkomt dat de browser moet in- of uitzoomen om de pagina weer te geven.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Bij het ontwikkelen van een pagina wordt gekozen om deze eerst voor mobiele apparaten te ontwikkelen: **mobile first**. Maw de CSS voor mobile is de standaard, zonder mediaqueries. Moet de pagina er anders uitzien op andere apparaten, dan kan je via mediaqueries extra CSS toevoegen.

Om een **image te laten meeschalen met de viewport**, vervang je het width attribuut door max-width. Zo wordt de afbeelding nooit groter dan zijn origineel formaat:

```css
img {
    max-width: 100%;
    height: auto;
    display: block;
}
```

Er bestaan verschillende technieken om een site Responsive te maken, waaronder:
* Media Queries
* Bootstrap (framework)

## Media Queries

Media queries kunnen worden gebruikt om veel dingen te controleren, zoals:
* breedte en hoogte van het viewport
* breedte en hoogte van het apparaat
* oriëntatie (staat de tablet/telefoon in liggend of staand formaat?)
* resolutie

Basissyntax:

```css
@media not|only mediatype and (mediafeature and|or|not mediafeature) {
  /* Css-code */
}
```

Om een responsieve pagina te bekomen:

```css
body {
    /* default voor phones < 768px */
}
@media screen and (min-width: 768px) {
    /* voor tablets >= 768px */
}
@media screen and (min-width: 992px) {
    /* voor desktops >= 992px */
}
```

Je kunt ook verschillende stylesheets hebben voor verschillende media, zoals dit:

```html
<link rel="stylesheet" media="screen and (min-width: 768px)" href="desktop.css">
<link rel="stylesheet" media="screen and (max-width: 767px)" href="mobile.css">
<link rel="stylesheet" media="print" href="print.css">
```

## Bootstrap


<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).