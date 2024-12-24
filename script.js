// Переход на Telegram-бота при клике на кошелёк
document.getElementById('walletButton').addEventListener('click', () => {
    window.open("https://t.me/your_bot_username", "_blank");
});

// Функция для получения баланса
async function fetchBalance() {
    const balanceDisplay = document.getElementById('balanceDisplay');
    const userId = TelegramApp.getUserInfo().id; // Получение ID пользователя Telegram

    try {
        const response = await fetch(`/api/balance?user_id=${userId}`);
        const data = await response.json();

        if (data.balance !== undefined) {
            balanceDisplay.innerText = `${data.balance} ₽`;
        } else {
            balanceDisplay.innerText = 'Ошибка: баланс недоступен';
        }
    } catch (error) {
        balanceDisplay.innerText = 'Ошибка загрузки';
    }
}

// Вызов функции при загрузке страницы
document.addEventListener('DOMContentLoaded', fetchBalance);
