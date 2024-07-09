# Navigatie

Onderdeel van de navigatiestructuur zijn:
* **Hoofdnavigatie**
* **Subnavigatie**
* (Zoekfunctie)
* (Sitemap)
* (Veelgestelde vragen)

Om hoofd- en subnavigatie op te maken, worden drie concepten bekeken:
* [het opmaken van een `<a>`-link in CSS](#a-opmaak-van-een-link-in-css)
* [het `<li>`-element als structuur van de navigatie](#b-een-unordered-list-als-structuur-van-de-navigatie)
* een horizontale navigatie in een `<ul>`

## A) Opmaak van een link in CSS

Een link element `<a href="url">` heeft reeds een eigen opmaak:
* blauw, onderlijnd
* paars wanneer erop geklikt is

Je kan een eigen opmaak toepassen met behulp van pseudo-klassen. In volgorde: `:link`, `:visited`, `:hover`, `:active`: 

```css
a:link {
    color: #999999;
    text-decoration: none;
}
a:visited {
    color: #999999;
    text-decoration: none;
}
a:hover {
    color: #999999;
    text-decoration: underline;
}
a:active {
    color: #999999;
    text-decoration: none;
}
```

Om te vermijden dat de browsergeschiedenis moet worden verwijderd om terug de originele layout te krijgen, wordt *link = visited* en *active = hover*:

```css
a {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    font-weight: bold;
}
a:link, a:visited {
    background-color: #FF8080;
    color: #B30700;
    text-decoration: none;
}
a:hover, a:active {
    background-color: #B30700;
    color: #FFFFFF;
    text-decoration: underline;
}
```
&nbsp;

## B) Een unordered list als structuur van de navigatie 

Steek de hyperlinks niet in een tabel, maar bij voorkeur wel in een **unordered list** waarbij je het opsommingsteken verbergt met `list-style: none;` van het `<ul>`-element:

CSS (basic):
```css
ul {
    list-style: none;
}
a:link, a:visited {
    text-decoration: none;
    color: #F60;
}
a:hover, a:active {
    text-decoration: none;
    color: #000;
}
```

HTML (basic):
```html
<ul>
    <li><a href="#">link 1</a></li>
    <li><a href="#">link 2</a></li>
    <!-- ... -->
</ul>
```

Daarnaast kan je met behulp van margin/padding, background-color, borders en het nesten van `ul`-lijsten aan uitgebreidere navigatie bekomen: zie template 


<br>


---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).