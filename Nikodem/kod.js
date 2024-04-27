const start = document.querySelector('.start')
const glownydiv = document.querySelector('.glownydiv')
const licznik = document.querySelector('.licznik')
const slowodotlumaczenia= document.querySelector('.slowodotlumaczenia')
const input=document.querySelector('.inputwpisywania')
const koniec=document.querySelector('.koniec')
const wygranaczynie=document.querySelector('.wygranaczynie')
const wrocdolobby=document.querySelectorAll('.wrocdolobby')
let wartosclicznika=0
let maxwynik;

function wracaniedolobby(){
    window.location.href='../stronaMain/indexMain.html'
}

wrocdolobby.forEach(element=>element.addEventListener('click', wracaniedolobby))
if(localStorage.getItem('poziom_glosnosci')!=null){
    licznik.textContent='0/' +localStorage.getItem('najlepszywynik')/1
    maxwynik=localStorage.getItem('najlepszywynik')/1
} else{
    licznik.textContent='0'
    maxwynik=0
}

function rozpoczeciegry(){
    start.classList.add('hidden')
    glownydiv.classList.remove('hidden')
    const countDownDate = new Date().getTime()+60000;


    var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".wyswietlacztimera").textContent =seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        koniec.classList.remove('hidden')
        if(wartosclicznika>maxwynik){
            if(localStorage.getItem('Jezyk')){
            wygranaczynie.textContent='Congrats you beat your record!'
            } else{
            wygranaczynie.textContent='Brawo udalo ci sie pobic swoj wynik!'
            }
        } else{
            if(localStorage.getItem('Jezyk')){
                wygranaczynie.textContent='Congrats you beat your record!'
                } else{
                wygranaczynie.textContent='Moze nastepnym razem sie uda...'
                }
        }

    }
    }, 1000);
}

start.addEventListener('click', rozpoczeciegry)

// 
// function onEnter(e) {
//     if (e.key === 'Enter') {
//         e.preventDefault();
//         if(losoweslowoang===e.target.value){
//             wartosclicznika=wartosclicznika+1
//             console.log(wartosclicznika);
//         }

//     }
    
// }
// input.addEventListener('keydown', onEnter)




// 

let plik

fetch("finalnawersja.txt")
  .then((res) => res.text())
  .then((text) => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    plik=text
    plik=plik.split('\n')
    for(let i = 0;i<plik.length;i++){
        plik[i]=plik[i].replace('\r', "")
        plik[i]=plik[i].split(' ')
    }
    let losowynumer=getRandomInt(plik.length)
    let losoweslowoang=plik[losowynumer][0]
    let losoweslowopol=plik[losowynumer][1] 
    slowodotlumaczenia.textContent=losoweslowopol
    console.log(losoweslowoang, losoweslowopol);
    function noweslowa(){
        let liczba=getRandomInt(plik.length)
        losoweslowoang=plik[liczba][0]
        losoweslowopol=plik[liczba][1]
    }

    function onEnter(e) {
        if(e.key.length===1){
        e.preventDefault();
        e.target.value=e.target.value+e.key
        if(losoweslowoang===e.target.value){
            wartosclicznika=wartosclicznika+1
            noweslowa()
            slowodotlumaczenia.textContent=losoweslowopol

            if(localStorage.getItem('najlepszywynik')!=null){
                licznik.textContent=wartosclicznika+'/'+localStorage.getItem('najlepszywynik')
                if(localStorage.getItem('najlepszywynik')/1<=wartosclicznika){
                    localStorage.setItem('najlepszywynik', wartosclicznika)
                }
            } else{
                localStorage.setItem('najlepszywynik', 1)
            }
            
        }
    
        }
        if(e.key==='Enter'){
            e.preventDefault()
        }
    }   
        
    input.addEventListener('keydown', onEnter)

   })
  .catch((e) => console.error(e));

//   zmiana jezyka ponizej
const elementy_napisane_ang = document.querySelectorAll('.ang')
const elementy_napisane_pol = document.querySelectorAll('.pol')
const zmiana_jezyka = document.querySelector('#checkbox')


if(localStorage.getItem('Jezyk')==='true'){
    elementy_napisane_ang.forEach(element=>element.style.display='block')
    elementy_napisane_pol.forEach(element=>element.style.display='none')
} else{
    elementy_napisane_pol.forEach(element=>element.style.display='block')
    elementy_napisane_ang.forEach(element=>element.style.display='none')
}


// zmiana stylu strony ponizej
const borderkolor1=document.querySelectorAll('.kolor1')
const borderkolor2=document.querySelectorAll('.kolor2')




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
    .filter(el => getComputedStyle(el).backgroundColor==='rgb(88, 163, 153)')
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

