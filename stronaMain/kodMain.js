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
muzyka.play()

const clearJson=document.body.querySelector('.clearJson')
clearJson.addEventListener('click', function(){
    localStorage.clear()
})

const czesc=document.body.querySelector('.imie')
const twojeimie=document.body.querySelector('.imie2')
czesc.innerText='Hi '+ imie+'!'
twojeimie.innerText=imie.toUpperCase()
muzyka.volume=1
