document.addEventListener('DOMContentLoaded', function() {
    let punkty = 0;
    //https://www.w3schools.com/jsref/jsref_random.asp
    let Tablica = ["marchewka", "groszek", "papryka", "ogorek", "dynia", "kukurydza"];
    let TablicaAngielska = ["carrot", "pea", "pepper", "cucumber", "pumpkin", "corn"];
    let obrazki = document.querySelectorAll('.wystawa');
    function losujElement() {
        let WylosowanyIndeks = Math.floor(Math.random() * Tablica.length);
        let WylosowanyElement = Tablica[WylosowanyIndeks];
        let WylosowanyElementAngielski = TablicaAngielska[WylosowanyIndeks];
        obrazki.forEach(function(obrazek) {
            obrazek.classList.remove('punktowany');
        });
        //https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
        //https://www.w3schools.com/jsref/met_document_queryselector.asp
        //https://frontcave.pl/poznaj-queryselector-i-przestan-uzywac-getelementsby/
        let nowyObrazek = document.querySelector(`[data-nazwa="${WylosowanyElement}"]`);
        nowyObrazek.classList.add('punktowany');
        //https://www.w3schools.com/jsref/met_document_getelementbyid.asp
        document.getElementById('wylosowanyElementAngielski').textContent = WylosowanyElementAngielski;
    }
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    function obsluzKlikniecie(obrazek) {
        //https://www.w3schools.com/jsref/prop_element_classlist.asp
        if (obrazek.classList.contains('punktowany')) {
            punkty++;
            losujElement();
        } else {
            punkty--;
        }
        document.getElementById('punkty').textContent = punkty;
    }
    //https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    //https://www.w3schools.com/jsref/met_document_addeventlistener.asp
    obrazki.forEach(function(obrazek) {
        obrazek.addEventListener('click', function() {
            obsluzKlikniecie(obrazek);
        });
    });

    losujElement();
});
