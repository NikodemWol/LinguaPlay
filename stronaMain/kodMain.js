const muzyka= document.querySelector('#music')
const x = document.querySelector('.x')
const ustawieniatlo = document.querySelector('.ustawieniatlo')
const ustawienia = document.querySelector('.ust')
const imie= localStorage.getItem('name')


function kliknieciex(){
    ustawieniatlo.classList.add('hidden')
}
function klikniecieustawien(){
    ustawieniatlo.classList.remove('hidden')
}


x.addEventListener('click', kliknieciex)
ustawienia.addEventListener('click', klikniecieustawien)

const clearJson=document.body.querySelector('.clearJson')
clearJson.addEventListener('click', function(){
    localStorage.clear()
})

const czesc=document.body.querySelector('.imie')
const twojeimie=document.body.querySelector('.imie2')
czesc.innerText='Hi '+ imie+'!'
twojeimie.innerText=imie.toUpperCase()
muzyka.volume=localStorage.getItem('poziom_glosnosci')/1000


// ustawienia ponizej
const wlaczmuzyke=document.querySelector('.wlaczmuzyke')
const poziom_glosnosci=document.querySelector('.poziom_glosnosci')

poziom_glosnosci.oninput=function(e){
    localStorage.setItem('poziom_glosnosci', e.target.value);
    muzyka.volume=localStorage.getItem('poziom_glosnosci')/1000
    console.log(localStorage.getItem('poziom_glosnosci')/1000);
}

wlaczmuzyke.oninput=function(e){
    muzyka.play()
    e.target.parentNode.classList.add('hidden');
}   

// przyciski do gier ponizej
const przycisk1 = document.querySelector('#przeniesc_do_gry1')
const przycisk2 = document.querySelector('#przeniesc_do_gry2')
const przycisk3 = document.querySelector('#przeniesc_do_gry3')


function gra1(){
    window.location.href='../Nikodem/indexGraNikodem.html'
}

przycisk1.addEventListener('click', gra1)


function gra2(){
    window.location.href='../ania/dopasowanie.html'
}

przycisk2.addEventListener('click', gra2)


function gra3(){
    window.location.href='../Krzys/html testy/index.html'
}

przycisk3.addEventListener('click', gra3)