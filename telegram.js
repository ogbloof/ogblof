// Определяем функцию для взаимодействия с Telegram Web App
const TelegramApp = (() => {
    // Приватные методы и переменные
    let tg = window.Telegram.WebApp;

    // Публичные методы
    return {
        // Отправка данных боту и закрытие приложения
        sendDataToBot: (command) => {
            tg.sendData(command);
            tg.close();
        },

        // Получение информации о пользователе
        getUserInfo: () => {
            return tg.initDataUnsafe.user;
        },

        // Работа с основной кнопкой
        MainButton: {
            // Установка текста кнопки
            setText: (text) => {
                tg.MainButton.setText(text);
            },
            // Показать кнопку
            show: () => {
                tg.MainButton.show();
            },
            // Скрыть кнопку
            hide: () => {
                tg.MainButton.hide();
            },
            // Сделать кнопку активной
            enable: () => {
                tg.MainButton.enable();
            },
            // Сделать кнопку неактивной
            disable: () => {
                tg.MainButton.disable();
            }
        }
    };
})();
