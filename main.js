Telegram.WebApp.ready();
const tele = window.Telegram.WebApp; 

tele.expand()


const btn = document.querySelector('.button_clicker')
let score = document.querySelector('.score')

let counter = localStorage.getItem('counter') || 0;


score.innerHTML = counter


btn.addEventListener('touchstart', (event) => {

    event.preventDefault();

 if (navigator.vibrate) {
        navigator.vibrate(200); 
    } else {
        console.log('');
    }
    
    counter++

    score.innerHTML = counter

    // Сохраняем значение counter в localStorage
    localStorage.setItem('counter', counter);

})



