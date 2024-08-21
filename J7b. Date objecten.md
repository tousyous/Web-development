# Date objecten

Het huidige tijdstip (datum en tijd) kan je achterhalen met (zie [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)):

```js
let today = new Date();
```

Om echt met data te werken, gebruik je beter een library zoals:
- moment.js
- xdate

Een datum aanmaken kan op verschillende manieren en vereist vaak het ISO-8601 formaat. Enkele voorbeelden:

```js
var verjaardag = new Date('December 17, 2020 03:24:00');
var verjaardag = new Date('2020-12-17T03:24:00');
var verjaardag = new Date(2020, 11, 17);
var verjaardag = new Date(2020 11, 17, 3, 24, 0);
```

Om een tekstvoorstelling van een datum te maken, bestaan er verschillende mogelijkheden:

```js
const event = new Date('2020-04-10T23:15:30');

console.log(event.toString());
// "Fri Apr 10 2020 23:15:30 GMT+0200 (Midden-Europese zomertijd)"
// afhankelijk van je tijdszone

console.log(event.toISOString());
// "2020-04-10T21:15:30.000Z"
// altijd in zero UTC offset (dus 2 uur verschil)

console.log(event.toDateString());
// "Fri Apr 10 2020"

console.log(event.toTimeString());
// "23:15:30 GMT+0200 (Midden-Europese zomertijd)"

console.log(event.getDate() + "-"+ (event.getMonth()+1) + "-" + event.getFullYear() + " " + event.getHours()
+":"+event.getMinutes() +":"+event.getSeconds());
// "10-4-2020 23:15:30"
// getMonth() geeft de maand als een getal tussen 0 en 11 (januari is maand 0 daarom + 1)
```

Het verschil tussen twee date objecten levert een tijd in *ms* op.

<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).