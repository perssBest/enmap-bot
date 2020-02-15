module.exports = {
    name: 'pay',
    description: 'Передать юзеру свои монеты.',
    aliases: ["give"],
    public: true,

    async execute(bot, message, args, prefix, ico) {
        let user =  message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!args) return message.reply(`Испоьзование: \`${prefix}pay @User#0000 1000\``)
        if(user.id === message.author.id) return message.reply(`Кажется вы хотите найти баг?`)
        if(user.user.bot) return message.reply(`Кажется вы хотите найти баг?`)
        if(!args[1]) return message.reply(`Укажите количество монет.`)
        if(isNaN(args[1])) return message.reply(`Я не вижу цифр.`)
        if(args[1] > Users.get(`${message.author.id}-${message.guild.id}`).info.money) return message.reply(`У вас нету такого количества денег`)
        if(args[1] < 1) return message.reply(`Зачем ты пытаешься сломать систему?)`)
        message.reply(`Вы успешно передали **${user.user.tag}** монет в количестве **${args[1]}**${ico}`)
        Users.math(`${message.author.id}-${message.guild.id}`,'-',Number(args[1]),'info.money')
        Users.math(`${user.id}-${message.guild.id}`,'+',Number(args[1]),'info.money')
    }
}
