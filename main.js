
const tele = window.Telegram.WebApp; 

tele.ready()
tele.expand()



const btn = document.querySelector('.button_clicker')
let score = document.querySelector('.score')
let userName = document.querySelector('.name');

let counter = localStorage.getItem('counter') || 0;


score.innerHTML = counter

userName.innerHTML = window.Telegram.WebApp.initData


btn.addEventListener('touchstart', (event) => {

    event.preventDefault();

     if ("vibrate" in navigator) {
        navigator.vibrate(100); // Вибрация на 200 миллисекунд
    } else {
        console.log("Ваше устройство не поддерживает функцию вибрации.");
    }

    
    counter++

    score.innerHTML = counter

    // Сохраняем значение counter в localStorage
    localStorage.setItem('counter', counter);

})



