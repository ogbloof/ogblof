// Показываем экран загрузки
const loadingScreen = document.querySelector("#loadingScreen");
loadingScreen.style.display = "flex";

setTimeout(() => {
    loadingScreen.style.display = "none";
    document.getElementById("mainContent").style.display = "block";
}, 1000);

// Проверяем наличие объекта Telegram WebApp
if (window.Telegram && Telegram.WebApp) {
    const tg = Telegram.WebApp;

    // Получаем данные пользователя
    const userInfo = tg.initDataUnsafe?.user;

    if (userInfo) {
        const userId = userInfo.id; // Идентификатор пользователя

        // Функция для обновления баланса с использованием userId
        function updateBalance() {
            fetch(`/db/get_user_info?user_id=${userId}`)
                .then(response => response.json())
                .then(data => {
                    if (data.balance) {
                        document.getElementById('balanceDisplay').textContent = `Баланс: ${data.balance} TON`;
                    } else {
                        console.error('Ошибка получения баланса:', data.error);
                        document.getElementById('balanceDisplay').textContent = 'Ошибка загрузки баланса';
                    }
                })
                .catch(error => {
                    console.error('Ошибка:', error);
                    document.getElementById('balanceDisplay').textContent = 'Ошибка загрузки баланса';
                });
        }

        // Вызываем обновление баланса при загрузке страницы
        document.addEventListener("DOMContentLoaded", updateBalance);
    } else {
        console.error('Ошибка: пользователь не авторизован через Telegram');
        document.getElementById('balanceDisplay').textContent = 'Ошибка авторизации';
    }
} else {
    console.error('Telegram WebApp API не доступен');
    document.getElementById('balanceDisplay').textContent = 'Ошибка подключения к Telegram';
}

// Функция для перенаправления в бота
function redirectToBot() {
    window.Telegram.WebApp.openLink('https://t.me/your_bot?start=deposit');
}

// Вызываем обновление баланса при загрузке страницы
document.addEventListener("DOMContentLoaded", updateBalance);
