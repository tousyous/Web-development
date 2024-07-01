# Lay-out

De opbouw en weergave van een pagina wordt bepaald door:
* het document [normal flow](#normal-flow-of-natuurlijke-flow)
* het [box-model](#de-box)
* visual formatting model
* en positioneringsschema

## Normal flow of natuurlijke flow

>= een document wordt van **boven naar beneden** en van **links naar rechts** opgebouwd

Het **box-model** beschrijft de opmaak van een element, zoals een h-, p-, li-, tabel-element.

Het **visual formatting model** (of weergavemodel) bepaalt hoe alle blokken zich tot elkaar verhouden:
* de eigenschap `display` speelt hierin een hoofdrol

Uiteindelijk bepaalt het **positioneringsschema** of we afwijken van de normale plaatsing op basis van *floats* of absolute positionering.

## De box

Elke element bestaat in CSS uit een box, deze is, **van binnen naar buiten**, opgebouwd uit:
* inhoud
* padding
* border
* margin

<br>

De **margin** is de afstand van de rand van een element tot de rand van het parent of een ander element
* de margin is **transparant** en neemt de kleur aan van het parent element
* aangrenzende margins schuiven in elkaar (overlappen)
* de grootste negatieve margin wordt afgetrokken van de grootste positieve margin

De **border** is de rand van het element

De **padding** is de ruimte tussen de rand en de inhoud van het element
* de achtergrond is dezelfde als de inhoud

De som van alle afmetingen (inclusief margin) bepaalt de **grootte** van de box.
* Horizontaal (van links naar rechts): `margin-left + border-left-width + padding-left + width + padding-right + border-right-width + margin-right`
* Deze horizontale afmeting komt overeen met de breedte van het parent element 
* Om dit mogelijk te maken moet één van deze drie eigenschappen de waarde **auto** hebben: `margin-left` / `width` / `margin-right`

De eigenschappen **width** en **height** bepalen de afmetingen van de inhoud, niet de margin, border en padding.

<br>

---

&larr; Terug naar [**OVERZICHT**](./README.md#overview).