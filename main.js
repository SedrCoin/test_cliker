Telegram.WebApp.ready();
const tele = window.Telegram.WebApp; 

tele.expand()


const btn = document.querySelector('.button_clicker')
let score = document.querySelector('.score')

let counter = localStorage.getItem('counter') || 0;


score.innerHTML = counter


btn.addEventListener('click', (event) => {

    event.preventDefault();
    counter++

    score.innerHTML = counter

    // Сохраняем значение counter в localStorage
    localStorage.setItem('counter', counter);

})



