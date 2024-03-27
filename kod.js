const hwyn=document.querySelector('h1.wyn.przesunlewa')
const imie=document.querySelector('.imie')

function pokazimie(){
    imie.classList.add('pokaz')
}
function pokazsie(){
    const jmni = document.querySelector('h3.wyn')
    jmni.classList.add('przesunprawa')
    jmni.style.left=0
    jmni.addEventListener('animationend',pokazimie)

}
document.addEventListener('DOMContentLoaded', function(){
    if(localStorage.getItem('name')!=null){
        window.location.href='stronaMain/indexMain.html'
    }
})

function onEnter(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        localStorage.setItem('name', e.target.value)
        console.log(e.target.value);
        if(localStorage.getItem('name')!=null){
            window.location.href='stronaMain/indexMain.html'
        }

    }
    
}


hwyn.addEventListener('animationend', pokazsie);
imie.addEventListener('keydown', onEnter); // zmienione z keypress na keydown
