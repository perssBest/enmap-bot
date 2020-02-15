module.exports = {
    name: 'prefix',
    description: 'Сменить префикс боту',
    aliases: [],
    public: true,

    async execute(bot, message, args, prefix, ico) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Недостаточно прав`)
        if(!args[0]) return message.reply(`Укажите префикс.`)
        if(args[0].length > 4) return message.reply(`Префикс не может иметь длинну больше чем 4 символа.`)
        message.reply(`Вы успешно сменили серверный префикс с \`${Guilds.get(message.guild.id).info.prefix || config.bot.prefix}\` на \`${args[0]}\``)
        await Guilds.set(message.guild.id,`${args[0]}`,'info.prefix')
    }
}
