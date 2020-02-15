module.exports = {
    name: 'profile',
    description: 'Посмотреть профиль юзера',
    aliases: ["bal","balance"],
    public: true,

    async execute(bot, message, args, prefix, ico) {
        let user =  message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]) || message.author);
        let rep = Users.get(`${user.id}-${message.guild.id}`).info.rep
        if(user.user.bot) return message.reply(`Кажется вы хотите найти баг?`)
        if(rep <= 1) reps = '[ Плохая ]'; if(rep >= 5) reps = '[ Средняя ]'; if(rep >= 10) reps = '[ Хорошая ]'; if(rep >= 20) reps = '[ Отличная! ]'; 
        message.channel.send(new Discord.RichEmbed().setColor(color).setAuthor(`Профиль ${user.user.username}`,user.user.displayAvatarURL)
        .setDescription(`Монет: **${Users.get(`${user.id}-${message.guild.id}`).info.money}${ico}**\nУровень: **${Users.get(`${user.id}-${message.guild.id}`).info.level}**\nУважения: ${rep} ${reps}\nОпыта: \`\`\`${Users.get(`${user.id}-${message.guild.id}`).info.xp} / ${config.eco.xpNEW}\`\`\``))
    }
}
