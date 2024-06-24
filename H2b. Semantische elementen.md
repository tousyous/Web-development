# Semantische elementen

Om pagina's op te delen in **secties** kan je `<div>` elementen gebruiken, maar er werden ook nieuwe (semantische) elementen ontwikkeld:
* [header](#header)
* [nav](#nav)
* [footer](#footer)
* [section](#section)
* [article](#article)
* [aside](#aside)
* [hgroup](#hgroup)
* [time](#time)

Dankzij HTML5 en deze semantische elementen wordt een goede **document outline** verzorgt, die met behulp van de chrome extension "[HTML5 outliner](https://chromewebstore.google.com/detail/html5-outliner/afoibpobokebhgfnknfndkgemglggomo)" kan bekeken worden.

Vroeger werd de outline bepaald door de heading elementen `<h1>` tot en met `<h6>`, deze zullen nog steeds een nieuwe sectie definiëren.
* Wanneer een heading eerst staat in een sectie, wordt de heading als titel van de sectie gebruikt.
* Wanneer de heading niet eerst staat, zorgt deze voor een nieuwe opsplitsing in de outline.

Een schoolvoorbeeld van een HTML5-pagina met correcte semantische opbouw is hier terug te vinden: [schoolvoorbeeld_html5_pagina.html](./HTML_templates/schoolvoorbeeld_html5_pagina.html)


## `<header>`

Het `<header> `-element omvat de **content header** met o.m. banner, logo, zoekformulier
* Deze kan ook aan een sectie, zoals een artikel, worden toegevoegd om de titel en datum mee te geven
* Toegestaan in het element zijn o.m. figure, h1, h2 … nav en p elementen

```html
<header>
    <img  alt="mijn logo"  src=""/>
    <ul>    
        <li>home</li>
        <li>contact</li>  
    </ul>
</header>
```

## `<nav>`

Het `<nav>`-element omvat de **belangrijkste links** naar andere webpagina's en websites
* Er kunnen meerdere `<nav>`-elementen aan een pagina worden toegevoegd
* Komen vaak in `<header>` en `<footer>` voor

```html
<nav>
    <ul>    
        <li>home</li>
        <li>contact</li>  
    </ul>
</nav>
```

## `<footer>`

Het `<footer>` element omvat de contact informatie, copyright rechten e.a. onderaan de pagina

```html
<footer>
    <nav>
        // nav-element    
    </nav>
</footer>
```

## `<section>`

Het `<section>` element laat toe om gerelateerde stukken informatie te **groeperen**.

```html
<section>
    <article>   // eerste article      
        <header></header>       // header van eerste article
        <section></section>     // section binnen eerste article
    </article>
    <article></article> // tweede article
</section>
```

## `<article>`

Het `<article>` element laat toe om informatie dat onafhankelijk is van de rest te groeperen:
* Kan je het element lezen zonder de rest van de inhoud? Ja, gebruik `<article>`
* Is de inhoud gerelateerd aan de rest van de webpagina, gebruik dan beter `<section>`, deze omvat vaak meerdere articles
* Geen van beide, gebruik beter `<div>`

```html
<article>   // deze inhoud staat volledig los van de rest van de pagina
    <header>
        <h1>Titel</h1>
    </header>
    <p>
        // wat tekst
    </p>
    <footer></footer>
</article>
```

## `<aside>`

Het `<aside>` element stelt inhoud voor dat **zijdelings gerelateerd** is aan de inhoud rond het aside element. Bijvoorbeeld reclame elementen of quotes.

```html
<!--nog geen voorbeeld beschikbaar-->
```

## `<hgroup>`

Het `<hgroup>` element laat toe om een **titel en subtitel samen te voegen**.

```html
<hgroup>
    <h1>titel</h1>
    <h2>subtitel die bij titel hoort</h2>
</hgroup>
```

## `<time>`

Het `<time>` element maakt een tijdstip kenbaar aan de browsers.

```html
<time datetime="2024-04-26" pubdate="pubdate">26 april 2024</time>
```



---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).