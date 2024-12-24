// Показываем экран загрузки
const loadingScreen = document.querySelector("#loadingScreen");
loadingScreen.style.display = "flex";

setTimeout(() => {
    loadingScreen.style.display = "none";
    document.getElementById("mainContent").style.display = "block";
}, 1000);

// Функция для обновления баланса
function updateBalance() {
    fetch('/api/get_balance?user_id=USER_ID') // Замените USER_ID на идентификатор пользователя
        .then(response => response.json())
        .then(data => {
            if (data.balance) {
                document.getElementById('balanceDisplay').textContent = `Баланс: ${data.balance} TON`;
            } else {
                console.error('Ошибка получения баланса:', data.error);
            }
        })
        .catch(error => console.error('Ошибка:', error));
}

// Функция для перенаправления в бота
function redirectToBot() {
    window.Telegram.WebApp.openLink('https://t.me/your_bot?start=deposit');
}

// Вызываем обновление баланса при загрузке страницы
document.addEventListener("DOMContentLoaded", updateBalance);
