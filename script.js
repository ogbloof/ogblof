async function fetchBalance() {
    const userId = TelegramApp.getUserInfo().id;
    const balanceDisplay = document.getElementById('balanceDisplay');

    try {
        const response = await fetch(`/api/balance?user_id=${userId}`);
        const data = await response.json();
        if (data.balance) {
            balanceDisplay.innerText = `${data.balance} ₽`;
        } else {
            balanceDisplay.innerText = "Баланс недоступен";
        }
    } catch (error) {
        balanceDisplay.innerText = "Ошибка загрузки";
        console.error(error);
    }
}

document.addEventListener('DOMContentLoaded', fetchBalance);
