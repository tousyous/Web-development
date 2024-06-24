# Het Document Object Model (DOM)

> = verzameling regels en afspraken over hoe een browser een webpagina interpreteert


* Is een hiërarchische structuur van een HTML-pagina
    * Maakt gebruik van **parent**- en **child**-elementen
    * Soms ook **ancestor** en **siblings/descendants** genoemd
* De pagina vormt een verzameling op zich staande elementen (objecten)
* Het DOM is object georiënteerd
    
De DOM start met het `HTML` element, met twee kinderen: het `HEAD` element en het `BODY` element. Het **nesten** van elementen creëert kinderen van elementen,

Volgende afspraken/naamgevingen worden vastgelegd:

|Naam|Omschrijving|
|---|---|
|Parent|Elk element heeft exact één parent|
|Child|A is een child van B, enkel wanneer B de parent is van A|
|Descendant|Alle downstream elementen van een parent|
|Ancestor|Omgekeerd|
|Sibling|Gelijke child elementen van dezelfde parent|

&nbsp;

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).