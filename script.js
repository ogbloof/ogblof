// Показываем экран загрузки
const loadingScreen = document.querySelector("#loadingScreen");
loadingScreen.style.display = "flex";

setTimeout(() => {
    loadingScreen.style.display = "none";
    document.getElementById("mainContent").style.display = "block";
}, 1000);

// Проверяем наличие объекта Telegram WebApp
function updateBalance() {
    const userId = window.Telegram.WebApp.initDataUnsafe?.user?.id || '123456';
    fetch(`http://127.0.0.1:5000/api/get_balance?user_id=${userId}`)
        .then(response => response.json())
        .then(data => {
            if (data.balance !== undefined) {
                document.getElementById('balanceDisplay').textContent = `${data.balance} TON`;
            } else {
                console.error("Ошибка получения баланса:", data);
            }
        })
        .catch(error => console.error("Ошибка подключения к API:", error));
}

document.addEventListener("DOMContentLoaded", updateBalance);


document.addEventListener("DOMContentLoaded", updateBalance);


// Функция для перенаправления в бота
function redirectToBot() {
    window.Telegram.WebApp.openLink('https://t.me/your_bot?start=deposit');
}

// Вызываем обновление баланса при загрузке страницы
document.addEventListener("DOMContentLoaded", updateBalance);
