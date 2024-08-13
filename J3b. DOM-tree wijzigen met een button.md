# DOM-tree wijzigen na druk op een knop

1. **Stap 1: HTML**: maak een input button met een bepaalde id

```html
<body>
    <p id="txtOutput">Hello world!</p>
    <!-- maak een input button met een bepaalde id -->
    <input type="button" value="Wijzig" id="btnWijzig">
</body>
```

2. **Stap 2**: JS: haal de verwijzing van de button op

```js
// Haal de verwijzing van de button op via de DOM-tree
let btnWijzig = document.getElementById("btnWijzig");
```

3. **Stap 3: JS**: maak een functie die moet worden aangeroepen

```js
// Maak een functie die moet worden aangeroepen bij het aanklikken van de button
const wijzig = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}
```

4. **Stap 4: JS**: voer de functie uit bij het klikken op de button met behulp van `.addEventListener()` 
```js
// Gebruik een addEventListener om de functie aan te roepen bij het klikken op de button
btnWijzig.addEventListener("click", wijzig);
```

## Alles samen (JavaScript only)

```js
const setup = () => {
    // Haal de verwijzing van de button op via de DOM-tree
    let btnWijzig = document.getElementById("btnWijzig");

    // Maak een functie die moet worden aangeroepen bij het aanklikken van de button
    const wijzig = () => {
        let pElement=document.getElementById("txtOutput");
        pElement.innerHTML="Welkom!";
    }

    // Gebruik een addEventListener om de functie aan te roepen bij het klikken op de button
    btnWijzig.addEventListener("click", wijzig);
}
window.addEventListener("load", setup);
```

<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).