// Показываем экран загрузки
const loadingScreen = document.querySelector("#loadingScreen");
loadingScreen.style.display = "flex";

// Устанавливаем таймер для скрытия экрана загрузки через 5 секунд
setTimeout(() => {
    loadingScreen.style.display = "none";
    document.getElementById("mainContent").style.display = "block"; // Показываем основной контент
}, 1000);
