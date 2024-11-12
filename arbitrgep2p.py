from telegram import Bot, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

# Функция для отправки поста в канал
async def send_post(update, context: ContextTypes.DEFAULT_TYPE):
    text = (
        "🎯 **Готовы начать обучение по P2P арбитражу?**\n\n"
        "Узнайте все секреты успешных сделок! Сделайте всего **один шаг** и получите доступ к бесплатному обучению. 📚\n\n"
        "🔗 **Перейдите в нашего бота** и оставьте заявку прямо сейчас. Это абсолютно бесплатно и поможет вам "
        "быстро войти в мир P2P торговли! 💸\n\n"
        "🔥 Не упустите возможность начать зарабатывать вместе с нами!"
    )

    button = InlineKeyboardButton("💼 НАЧАТЬ ОБУЧЕНИЕ", url="https://t.me/lsr_crypto_bot?start=KAdZ5Q8Y")
    keyboard = InlineKeyboardMarkup([[button]])

    chat_id = -1002451337663  # Замените на ваш ID канала
    await context.bot.send_message(chat_id=chat_id, text=text, reply_markup=keyboard, parse_mode="Markdown")

# Главная функция для запуска бота
def main():
    TOKEN = '7877379401:AAHIGcaff0jvi4L15e7Jp3gl7RQS0g2QNH4'

    # Инициализация бота
    application = ApplicationBuilder().token(TOKEN).build()

    # Команда для отправки поста
    application.add_handler(CommandHandler('send_post', send_post))

    # Запуск бота
    application.run_polling()

if __name__ == '__main__':
    main()
