module.exports = {
    name: 'rep',
    description: 'Дать/Отнять rep',
    aliases: [],
    public: true,

    async execute(bot, message, args, prefix, ico) {
        let user =  message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        last = await Users.get(`${message.author.id}-${message.guild.id}`).info.reptime
        if(last !== null && config.eco.reptime - (Date.now() - last) > 0){
        message.reply(`Вы уже давали/отнимали реп, подождите ${ms(config.eco.reptime - (Date.now() - last))}`)
        }else{
        if(!user) return message.reply(`Укажи юзера.`)
        last = await Users.get(`${message.author.id}-${message.guild.id}`).info.reptime
        if(!args[1] && args[1].toLowerCase() !== '+' && args[1].toLowerCase() !== '-'){ return message.reply(`\`\`\`Использование:\n${prefix}rep @User#0000 + [коментарий] - Добавление\n\n${prefix}rep @User#0000 - [коментарий] - Удаление\n\nКоментарий не обязателен.\`\`\``) }
        if(user.id === message.author.id) return message.reply(`Кажется вы хотите найти баг?`)
        if(user.user.bot) return message.reply(`Кажется вы хотите найти баг?`)
        else{
            Users.math(`${user.id}-${message.guild.id}`,args[1],Number(1),'info.rep')
            Users.set(`${message.author.id}-${message.guild.id}`, Date.now(),'info.reptime')
            if(args[1] === '+') text = 'Добавили'; if(args[1] === '-') text = 'Отняли у';
            message.reply(`Вы ${text} **${user.user.tag}** ${args[1]}1rep.`)
         }
        }
    }
}
