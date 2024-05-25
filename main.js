Telegram.WebApp.ready();


const tele = window.Telegram.WebApp; 

tele.expand()



const btn = document.querySelector('.button_clicker')
let score = document.querySelector('.score')
let userName = document.querySelector('.name');

let counter = localStorage.getItem('counter') || 0;




score.innerHTML = counter




btn.addEventListener('click', (event) => {

    event.preventDefault();

    counter++

    score.innerHTML = counter


    localStorage.setItem('counter', counter);

    const numberElement = document.createElement('div');
    numberElement.classList.add('number-animation');
    numberElement.innerText = "+1";

    // Получаем координаты клика внутри кнопки
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    
    // Добавляем случайное смещение
    const randomOffsetX = (Math.random() - 0.5) * 20; // Смещение по X в диапазоне [-10, 10] пикселей
    const randomOffsetY = (Math.random() - 0.5) * 20; // Смещение по Y в диапазоне [-10, 10] пикселей

    numberElement.style.left = (offsetX + randomOffsetX) + "px";
    numberElement.style.top = (offsetY + randomOffsetY) + "px";

    // Добавляем элемент в кнопку
    button.appendChild(numberElement);

    // Удаляем элемент после завершения анимации
    setTimeout(() => {
        numberElement.remove();
    }, 1500);  // Убедитесь, что время тайм-аута совпадает с длительностью анимации

})











