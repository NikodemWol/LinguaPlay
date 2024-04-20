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


// ustawienia glosnosci ponizej
const wlaczmuzyke=document.querySelector('.wlaczmuzyke')
let poziom_glosnosci=document.querySelector('.poziom_glosnosci')

poziom_glosnosci.oninput=function(e){
    localStorage.setItem('poziom_glosnosci', e.target.value);
    muzyka.volume=localStorage.getItem('poziom_glosnosci')/1000
}


if(localStorage.getItem('poziom_glosnosci')!=null){
    poziom_glosnosci.value=localStorage.getItem('poziom_glosnosci')/1
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

// zmiana jezyka ponizej
const elementy_napisane_ang = document.querySelectorAll('.ang')
const elementy_napisane_pol = document.querySelectorAll('.pol')
const zmiana_jezyka = document.querySelector('#checkbox')


zmiana_jezyka.oninput=function(){
    localStorage.setItem('Jezyk', zmiana_jezyka.checked)
    if(localStorage.getItem('Jezyk')==='true'){
        elementy_napisane_ang.forEach(element=>element.style.display='block')
        elementy_napisane_pol.forEach(element=>element.style.display='none')
    } else{
        elementy_napisane_pol.forEach(element=>element.style.display='block')
        elementy_napisane_ang.forEach(element=>element.style.display='none')
    }
}

if(localStorage.getItem('Jezyk')!=null){
    zmiana_jezyka.checked=localStorage.getItem('Jezyk')==='true'
}


if(localStorage.getItem('Jezyk')==='true'){
    elementy_napisane_ang.forEach(element=>element.style.display='block')
    elementy_napisane_pol.forEach(element=>element.style.display='none')
} else{
    elementy_napisane_pol.forEach(element=>element.style.display='block')
    elementy_napisane_ang.forEach(element=>element.style.display='none')
}