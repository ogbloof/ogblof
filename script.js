function redirectToCoinGame() {
    window.location.href = "coin_game.html";
}

function flipCoin() {
    var coin = document.getElementById('coin');
    coin.classList.add('flip-animation');

    setTimeout(function() {
        coin.classList.remove('flip-animation');
        var result = Math.random() < 0.5 ? 'Орёл' : 'Решка';
        alert('Выпало: ' + result);
        showButtons(); // Показываем кнопки после завершения анимации броска монеты
    }, 500); // Измените таймаут, чтобы он соответствовал продолжительности анимации броска
}

var chosenSide = '';

function chooseSide(side) {
    chosenSide = side;
    var buttons = document.querySelectorAll('.button');
    buttons.forEach(function(button) {
        button.style.display = 'none';
    });
    var coin = document.getElementById('coin');
    coin.style.backgroundImage = "url('coin.png')";
    coin.classList.add('flip-animation');
    setTimeout(flipCoin, 2000); // Имитация броска монеты после 2 секунд
}

function showButtons() {
    var playAgainButton = document.getElementById('playAgainButton');
    var returnToMenuButton = document.getElementById('returnToMenuButton');
    playAgainButton.style.display = 'block';
    returnToMenuButton.style.display = 'block';
}

function returnToMenu() {
    window.location.href = "index.html";
}
