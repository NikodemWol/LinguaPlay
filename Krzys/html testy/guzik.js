const obrazek = document.getElementById('obrazek');
const spanPunkty = document.getElementById('punkty');
const spanWynik = document.getElementById('wynik');
let punkty = 0;
function dodajPunkt() {
    punkty++;
    spanPunkty.textContent = punkty;
    spanWynik.textContent = punkty;
}
obrazek.addEventListener('click', dodajPunkt);
