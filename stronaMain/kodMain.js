const clearJson=document.body.querySelector('.clearJson')
clearJson.addEventListener('click', function(){
    localStorage.clear()
})
const imie= localStorage.getItem('name')
const czesc=document.body.querySelector('.imie')
const twojeimie=document.body.querySelector('.imie2')
czesc.innerText='Hi '+ imie+'!'
twojeimie.innerText=imie.toUpperCase()