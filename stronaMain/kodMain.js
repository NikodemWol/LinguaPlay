const muzyka= document.querySelector('#music')
const x = document.querySelector('.x')
const ustawieniatlo = document.querySelector('.ustawieniatlo')
const ustawienia = document.querySelector('.ust')
const imie= localStorage.getItem('name')
const wrocdomenu=document.querySelector('.wrocdomenu')
const menututorialu=document.querySelector('.menututorialu')
const tutorial = document.querySelector('.tutorial')

function wracamy(){
    menututorialu.classList.add('hidden')
}

wrocdomenu.addEventListener('click', wracamy)

function otworztutorial(){
    menututorialu.classList.remove('hidden')
}

tutorial.addEventListener('click', otworztutorial)

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

// zmiana stylu strony ponizej
const wyglad1= document.querySelector('.checkbox1')
const wyglad2= document.querySelector('.checkbox2')
const wyglad3= document.querySelector('.checkbox3')
const borderkolor1=document.querySelectorAll('.kolor1')
const borderkolor2=document.querySelectorAll('.kolor2')

if(localStorage.getItem('wyglad_strony')==null){
    localStorage.setItem('wyglad_strony', 1)
} else{
    sprawdz_checkboxy_wygladu_strony(localStorage.getItem('wyglad_strony')/1)
}

function sprawdz_checkboxy_wygladu_strony(numerek)
{
    console.log(numerek);
    if(numerek==1){
        
        wyglad1.checked=true
        wyglad2.checked=false
        wyglad3.checked=false
        console.log(wyglad1.checked);
        console.log(wyglad2.checked);
    }
    if(numerek==2){
        wyglad2.checked=true
        wyglad1.checked=false
        wyglad3.checked=false
    }
    if(numerek==3){
        wyglad3.checked=true
        wyglad2.checked=false
        wyglad1.checked=false
    }
    localStorage.setItem('wyglad_strony', numerek)
}

function zielony(){
    wyglad1.checked=true
    wyglad2.checked=false
    wyglad3.checked=false
    sprawdz_checkboxy_wygladu_strony(1)
    
}
function czerwony(){
    wyglad2.checked=true
    wyglad1.checked=false
    wyglad3.checked=false
    
    sprawdz_checkboxy_wygladu_strony(2)
    
}
function zolty(){
    wyglad3.checked=true
    wyglad2.checked=false
    wyglad1.checked=false
    sprawdz_checkboxy_wygladu_strony(3)
    
}
wyglad1.addEventListener('click', zielony)
wyglad2.addEventListener('click', czerwony)
wyglad3.addEventListener('click', zolty)



const kolor1=[...document.querySelectorAll('*')]
    .filter(el => getComputedStyle(el).color === 'rgb(226, 244, 197)')
const kolor2=[...document.querySelectorAll('*')]
    .filter(el => getComputedStyle(el).color === 'rgb(168, 205, 159)')
const kolor3=[...document.querySelectorAll('*')]
    .filter(el => getComputedStyle(el).color === 'rgb(88, 163, 153)')
const kolor4=[...document.querySelectorAll('*')]
    .filter(el => getComputedStyle(el).color === 'rgb(73, 105, 137)')
const kolor1bg=[...document.querySelectorAll('*')]
    .filter(el => getComputedStyle(el).backgroundColor === 'rgb(226, 244, 197)')
const kolor2bg=[...document.querySelectorAll('*')]
    .filter(el => getComputedStyle(el).backgroundColor === 'rgb(168, 205, 159)')
const kolor3bg=[...document.querySelectorAll('*')]
    .filter(el => getComputedStyle(el).backgroundColor === 'rgb(88, 163, 153)')
const kolor4bg=[...document.querySelectorAll('*')]
    .filter(el => getComputedStyle(el).backgroundColor === 'rgb(73, 105, 137)')
let notsdfdsfdsfsdaf

function zmien_wyglad(){
    numerek=localStorage.getItem('wyglad_strony')/1
    if(numerek===1){
        document.body.style.backgroundImage='linear-gradient(to bottom right, rgb(73, 105, 137), rgb(88, 163, 153))'
        kolor1.forEach(element=>element.style.color='rgb(226, 244, 197)')
        kolor2.forEach(element=>element.style.color='rgb(168, 205, 159)')
        kolor3.forEach(element=>element.style.color='rgb(88, 163, 153)')
        kolor4.forEach(element=>element.style.color='rgb(73, 105, 137)')
        kolor1bg.forEach(element=>element.style.backgroundColor ='rgb(226, 244, 197)')
        kolor2bg.forEach(element=>element.style.backgroundColor='rgb(168, 205, 159)')
        kolor3bg.forEach(element=>element.style.backgroundColor='rgb(88, 163, 153)')
        kolor4bg.forEach(element=>element.style.backgroundColor='rgb(73, 105, 137)')
        borderkolor1.forEach(element=>element.style.borderColor ='rgb(226, 244, 197)')
        borderkolor2.forEach(element=>element.style.borderColor='rgb(168, 205, 159)')
    }
    if(numerek===2){
        document.body.style.backgroundImage='linear-gradient(to bottom left, rgb(12, 12, 12), rgb(72, 30, 20))'
        kolor1.forEach(element=>element.style.color='rgb(242, 97, 63)')
        kolor2.forEach(element=>element.style.color='rgb(155, 57, 34)')
        kolor3.forEach(element=>element.style.color='rgb(72, 30, 20)')
        kolor4.forEach(element=>element.style.color='rgb(12, 12, 12)')
        kolor1bg.forEach(element=>element.style.backgroundColor='rgb(242, 97, 63)')
        kolor2bg.forEach(element=>element.style.backgroundColor ='rgb(155, 57, 34)')
        kolor3bg.forEach(element=>element.style.backgroundColor='rgb(72, 30, 20)')
        kolor4bg.forEach(element=>element.style.backgroundColor='rgb(12, 12, 12)')
        borderkolor1.forEach(element=>element.style.borderColor='rgb(242, 97, 63)')
        borderkolor2.forEach(element=>element.style.borderColor ='rgb(155, 57, 34)')
    }
    if(numerek===3){
        document.body.style.backgroundImage='linear-gradient(to bottom right, rgb(255, 251, 218), rgb(255, 236, 158))'
        kolor1.forEach(element=>element.style.color='rgb(237, 148, 85)')
        kolor2.forEach(element=>element.style.color='rgb(255, 187, 112)')
        kolor3.forEach(element=>element.style.color='rgb(255, 236, 158)')
        kolor4.forEach(element=>element.style.color='rgb(255, 251, 218)')
        kolor1bg.forEach(element=>element.style.backgroundColor ='rgb(237, 148, 85)')
        kolor2bg.forEach(element=>element.style.backgroundColor='rgb(255, 187, 112)')
        kolor3bg.forEach(element=>element.style.backgroundColor='rgb(255, 236, 158)')
        kolor4bg.forEach(element=>element.style.backgroundColor='rgb(255, 251, 218)')
        borderkolor1.forEach(element=>element.style.borderColor ='rgb(237, 148, 85)')
        borderkolor2.forEach(element=>element.style.borderColor='rgb(255, 187, 112)')
    }
}


if(localStorage.getItem('wyglad_strony')!=null){
    zmien_wyglad(localStorage.getItem('wyglad_strony')/1)   
}

wyglad1.addEventListener('click', zmien_wyglad)

wyglad2.addEventListener('click', zmien_wyglad)

wyglad3.addEventListener('click', zmien_wyglad)


