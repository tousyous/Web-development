# Opslagmogelijkheden

Er zijn verschillende manieren om informatie op te slaan:
- over meerdere functie-oproepen: globale variabelen (zie [J1b.](<J1b. Variabelen en Scope.md>))
- over pagina's heen (4):
    - [cookies](#cookies)
    - [web storage API](#web-storage-api): session storage & local storage
    - web sql database (*wordt niet besproken*)

Merk op dat de informatie hier aan de **browserkant** wordt bijgehouden en niet op de server.

Om de opgeslagen data te bekijken, open je de *Developer Tools* in Chrome en kies je het *Application* tabblad.

## Cookies

> Een cookie is een stukje tekst dat door de browser (aan de client kant) wordt bewaard, maar eigenlijk voor de server bedoeld is.

Een cookie is gekoppeld aan een bepaald domein en bestaat uit **key/value pairs** die met ELKE http request naar een server op het domein worden verzonden. De omvang en efficiëntie van cookies is beperkt.

Er bestaan 2 soorten cookies:
- **permanente cookies** blijven in een bestand bewaard en krijgen een houdbaarheidsdatum
- **session cookies** gaan verloren als je de browser afsluit

Een belangrijke toepassing van cookies is het bewaren van een **sessionID**, waardoor de server de juiste sessie in de browser kan terugvinden. 
- hierdoor kan een sever bepalen of twee opeenvolgende http requests van eenzelfde gebruiker afkomstig zijn
- het 'onthou mij' vakje slaat de login gegevens van de gebruiker in een cookie op

## Web Storage API

De data (max. +/- 5MB) die met behulp van een web storage API in de browser wordt bewaard is per domein (protocol, host, poortnummer) afgebakend. 

Web storage maakt net zoals cookies gebruik van **key/value pairs**, beiden **strings (!)**, die enkel via Javascript toegankelijk zijn.
- hiervoor wordt vaak een JSON string met bijhorende methoden gebruikt (zie [J7a.](<J7a. Javascript Objecten.md>))

Er bestaan opnieuw 2 soorten web storage:
- **session storage** is gekoppeld aan één tabblad en blijft enkel in dat tabblad behouden (*~ session cookies*)
    - Wanneer je in het tabblad naar een andere pagina surft (binnen hetzelfde domein) blijft de data behouden.
    - Sluit je het tabblad of de browser af, dan wordt de data weggesmeten.
- **local storage** kan gedeeld worden over verschillende tabbladen en blijft ook na het afsluiten van de browser behouden (*~ permanente cookies*)

<br>

> Beide soorten zijn toegankelijk **via de globale variabelen** `sessionStorage` en `localStorage`.

<br>

Om waarden (key/value) **op te slaan of op te halen** gebruiken we de methoden `.setItem("myKey","myValue")` en `.getItem("myKey")`: 

```js
// localStorage
localStorage.setItem("myKey", "myValue");
console.log(localStorage.getItem("myKey")); // myValue

// sessionStorage
sessionStorage.setItem("myKey", "myValue");
console.log(sessionStorage.getItem("myKey")); // myValue
```

Test bij het ophalen van een item zeker of het item wel bestaat. Anders geeft de methode `undefined` terug. 

<br>

Om één of meerdere waarden **te verwijderen**:

```js
// verwijder "myKey"
localStorage.removeItem("myKey");

// verwijder alle items
sessionStorage.clear()
```

Bekijk zeker eens de volgende template:
- [localStorage_demo.html](JS_templates/localStorage_demo.html)
- [localStorage_demo.js](JS_templates/localStorage_demo.js) 



<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).