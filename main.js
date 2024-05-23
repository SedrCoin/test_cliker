const btn = document.querySelector('.button_clicker')
let score = document.querySelector('.score')

let counter = localStorage.getItem('counter') || 0;


score.innerHTML = counter


btn.addEventListener('click', () => {

    counter++

    score.innerHTML = counter

    // Сохраняем значение counter в localStorage
    localStorage.setItem('counter', counter);

})



