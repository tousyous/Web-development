const setup = () => {
    let btnSubmit = document.getElementById("submit");
    btnSubmit.addEventListener("click", toonResultaat);
}

const toonResultaat = () => {
    // chechbox --> boolean
    let checkRoker = document.getElementById("roker");
    if (checkRoker.checked) {
        console.log("is een roker");
    } else {
        console.log("is geen roker");
    }

    // radiobuttons: 1 waarde mogelijk --> boolean
    let radioMoedertaal = document.getElementsByName("moedertaal");
    for (let i = 0; i < radioMoedertaal.length; i++) {
        if (radioMoedertaal[i].checked) {
            console.log("moedertaal is " + radioMoedertaal[i].value);
        }
    }

    // keuzelijst met 1 optie geselecteerd
    let buurlandSelect = document.getElementById("buurland");
    let buurlandOptions = buurlandSelect.options;
    let selectIndex = buurlandSelect.selectedIndex;
    console.log("favoriete buurland is " + buurlandOptions[selectIndex].value);

    // keuzelijst met 0 of meerdere opties geselecteerd
    let bestellingSelect = document.getElementById("bestelling");
    let bestellingOptions = bestellingSelect.options;
    let outputTekst = 'bestelling bestaat uit'
    for (let i = 0; i < bestellingOptions.length; i++) {
        let bestellingOption = bestellingOptions[i];
        if (bestellingOption.selected) {
            outputTekst += " " + bestellingOption.value;
        }
    }
    console.log(outputTekst);

}

window.addEventListener("load", setup);