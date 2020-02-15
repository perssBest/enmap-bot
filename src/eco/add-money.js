module.exports = {
    name: 'add-money',
    description: 'Добавить монет юзеру.',
    aliases: [],
    public: true,

    async execute(bot, message, args, prefix, ico) {
        let user =  message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]) || message.author);
        if(!args) return message.reply(`Испоьзование: \`${prefix}add-money 1000 @User#0000\n\nЕсли юзера не указать то монеты выдадутся автору сообщения.\``)
        if(!args[0]) return message.reply(`Укажите количество монет.`)
        if(isNaN(args[0])) return message.reply(`Я не вижу цифр.`)
        if(user.user.bot) return message.reply(`Кажется вы хотите найти баг?`)
        if(args[0] < 1) return message.reply(`Зачем выдавать мне такое количество?`)
        message.reply(new Discord.RichEmbed().setColor(color)
        .setDescription(`Вы успешно выдали ${user.user.tag} - ${args[0]}${ico}`))
        Users.math(`${user.id}-${message.guild.id}`,'+',Number(args[0]),'info.money')
    }
}
