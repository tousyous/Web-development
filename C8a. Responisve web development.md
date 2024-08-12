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
* [Media Queries](#media-queries)
* [Bootstrap (framework)](#bootstrap)

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

Om een responsieve pagina te bekomen met kolommen van afbeeldingen:

```css
figure {
	background: black;
	border-radius: 5px;
	color: white;
	margin: 0 0 25px 0;
	padding: 10px;
	text-align: center;
	box-sizing: border-box;
}
img {
	max-width: 100%;
}

@media screen and (min-width: 768px) {
    /* voor tablets >= 768px 
    2 kolommen */
    figure {
		float: left;
		width: 45%;
		margin-right: 5%;
	}
}
@media screen and (min-width: 992px) {
    /* voor desktops >= 992px 
    3 kolommen*/
    figure {
		width: 30.8%;
		margin-right: 2.5%;
	}
}
```

Je kunt ook verschillende stylesheets hebben voor verschillende media, zoals dit:

```html
<link rel="stylesheet" media="screen and (min-width: 768px)" href="desktop.css">
<link rel="stylesheet" media="screen and (max-width: 767px)" href="mobile.css">
<link rel="stylesheet" media="print" href="print.css">
```

## Bootstrap 5

> een CSS framework om snel en efficiënt moderne responsive websites te bouwen. 

Je kan:
* bootstrap 5 includen via CDN (Content Delivery Network)
* bootstrap 5 downloaden en zelf hosten via https://getbootstrap.com

Gebruik jsDelivr om de gecompileerde CSS en JS van Bootstrap direct vanuit de cache in je project te laden, zonder dat je ze eerst hoeft te downloaden:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
```

Bootstrap maakt gebruik van het **bootstrap grid system** (https://www.w3schools.com/bootstrap5/bootstrap_grid_basic.php).

Het grid-systeem van Bootstrap is gebouwd met flexbox en maakt het mogelijk om tot **12 kolommen** over de pagina te verdelen.

Het Bootstrap 5 grid-systeem heeft **zes klassen**:

- `.col-` (extra kleine apparaten - schermbreedte minder dan 576px)
- `.col-sm-` (kleine apparaten - schermbreedte gelijk aan of groter dan 576px)
- `.col-md-` (middelgrote apparaten - schermbreedte gelijk aan of groter dan 768px)
- `.col-lg-` (grote apparaten - schermbreedte gelijk aan of groter dan 992px)
- `.col-xl-` (zeer grote apparaten - schermbreedte gelijk aan of groter dan 1200px)
- `.col-xxl-` (extra zeer grote apparaten - schermbreedte gelijk aan of groter dan 1400px)

De bovenstaande klassen kunnen worden gecombineerd om dynamischere en flexibelere lay-outs te creëren.

>Tip: Elke klasse schaalt naar boven. Dus als je dezelfde breedtes wilt instellen voor zowel `sm` als `md`, hoef je alleen `sm` te specificeren.

Het volgende voorbeeld laat zien hoe je twee kolommen met verschillende breedtes kunt maken, **beginnend bij tablets en opschalend naar grote extra desktops**:

```html
<div class="row">
    <div class="col-sm-4">.col-sm-4</div>
    <div class="col-sm-8">.col-sm-8</div>
</div>
```

<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).