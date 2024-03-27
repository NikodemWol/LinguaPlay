const clearJson=document.body.querySelector('.clearJson')
clearJson.addEventListener('click', function(){
    localStorage.clear()
})
const imie= localStorage.getItem('name')
const czesc=document.body.querySelector('.imie')
czesc.innerText='Hi '+ imie+'!'