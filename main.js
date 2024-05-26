Telegram.WebApp.ready();


const tele = window.Telegram.WebApp; 

tele.expand()



const btn = document.querySelector('.button_clicker')
let score = document.querySelector('.score')
let userName = document.querySelector('.name');

let counter = localStorage.getItem('counter') || 0;




score.innerHTML = counter




document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button_clicker');
    
    button.addEventListener('touchstart', (event) => {
        event.preventDefault();
        for (let i = 0; i < event.touches.length; i++) {
            createNumber(event.touches[i]);
        }
    });
});

function createNumber(touch) {
    const numberElement = document.createElement('div');
    numberElement.classList.add('number-animation');
    numberElement.innerText = "+1";

    const button = touch.target;
    const rect = button.getBoundingClientRect();
    const offsetX = touch.clientX - rect.left;
    const offsetY = touch.clientY - rect.top;

    // Добавляем случайное смещение
    const randomOffsetX = (Math.random() - 0.5) * 20; // Смещение по X в диапазоне [-10, 10] пикселей
    const randomOffsetY = (Math.random() - 0.5) * 20; // Смещение по Y в диапазоне [-10, 10] пикселей

    numberElement.style.left = (offsetX + randomOffsetX) + "px";
    numberElement.style.top = (offsetY + randomOffsetY) + "px";

    button.appendChild(numberElement);

    setTimeout(() => {
        numberElement.remove();
    }, 1500);  // Убедитесь, что время тайм-аута совпадает с длительностью анимации
}






