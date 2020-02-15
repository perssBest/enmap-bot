module.exports = {
    name: 'ping',
    description: 'Команда для проверки, живет ли бот или нет',
    aliases: [],
    public: true,

    async execute(bot, message, args) {
        message.reply(`Понг! У меня пинг **${Math.floor(bot.ping)}мс**`)
    }
}
