document.addEventListener("DOMContentLoaded", function() {
    // Генерация случайного количества монет
    var numberOfCoins = Math.floor(Math.random() * 20) + 10; // От 10 до 30 монет

    // Создание и добавление монет на страницу
    var coinsContainer = document.getElementById('coins');
    for (var i = 0; i < numberOfCoins; i++) {
        var coin = document.createElement('div');
        coin.classList.add('coin');
        coin.style.left = Math.random() * 100 + 'vw'; // Случайное горизонтальное положение монеты
        coin.style.animation = 'fall 5s linear ' + (Math.random() * 2) + 's infinite'; // Длительность анимации 5 секунд
        coinsContainer.appendChild(coin);
    }
});

// Получаем ссылку на аудиоэлемент
var audio = document.getElementById("myAudio");

// Включаем воспроизведение звука
function playAudio() {
  audio.play();
}

// Отключаем воспроизведение звука
function pauseAudio() {
  audio.pause();
}

document.addEventListener("DOMContentLoaded", function() {
    playAudio();
});
