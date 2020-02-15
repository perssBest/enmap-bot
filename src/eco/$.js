module.exports = {
    name: '$',
    description: 'Узнать сколько на балансе $',
    aliases: [],
    public: true,

    async execute(bot, message, args, prefix, ico) {
        let user =  message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]) || message.author);
        let fetch = Users.get(`${user.id}-${message.guild.id}`).info.money
        if(user.user.bot) return message.reply(`Кажется вы хотите найти баг?`)
        message.reply(new Discord.RichEmbed().setColor(color)
        .setDescription(`У **${user.user.tag}** имеется ${fetch}${ico}`))
    }
}
