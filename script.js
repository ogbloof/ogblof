document.addEventListener("DOMContentLoaded", function() {
    // Генерация случайного количества монет
    var numberOfCoins = Math.floor(Math.random() * 20) + 10; // От 10 до 30 монет

    // Создание и добавление монет на страницу
    var coinsContainer = document.getElementById('coins');
    for (var i = 0; i < numberOfCoins; i++) {
        var coin = document.createElement('div');
        coin.classList.add('coin');
        coin.style.left = Math.random() * 100 + 'vw'; // Случайное горизонтальное положение монеты
        coin.style.animation = 'fall ' + (Math.random() * 2 + 1) + 's linear ' + (Math.random() * 2) + 's infinite'; // Случайная длительность анимации и задержка
        coinsContainer.appendChild(coin);
    }
});

