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

        let nowyObrazek = document.querySelector(`[data-nazwa="${WylosowanyElement}"]`);
        nowyObrazek.classList.add('punktowany');
        document.getElementById('wylosowanyElementAngielski').textContent = WylosowanyElementAngielski;
    }
    function obsluzKlikniecie(obrazek) {
        if (obrazek.classList.contains('punktowany')) {
            punkty++;
            losujElement();
        } else {
            punkty--;
        }
        document.getElementById('punkty').textContent = punkty;
    }

    obrazki.forEach(function(obrazek) {
        obrazek.addEventListener('click', function() {
            obsluzKlikniecie(obrazek);
        });
    });

    losujElement();
});
