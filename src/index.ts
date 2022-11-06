import TelegramBot from 'node-telegram-bot-api'

const bot = new TelegramBot('5618375726:AAFTw6THnjIkHuYKLh-7gWBjXnjaZBEYudc', {polling: true})

bot.on('message', msg => {
    console.log(msg)
    bot.sendMessage(msg.chat.id, msg.text || "")
})

