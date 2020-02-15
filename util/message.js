try{
    global.bot.on('message', async (message) => {

        if(message.author.bot) return;
        if(message.channel.type === 'dm') return message.channel.send(`Не пиши мне больше! Пожалуйста!`);
        if(!Users.get(`${message.author.id}-${message.guild.id}`)){ Users.set(`${message.author.id}-${message.guild.id}`, { id: message.author.id, info: {money: 0, xp: 0, level: 0, rep: 0, timer: 0, reptime: 0, bloked: false}})}
        if(!Guilds.get(message.guild.id)){ Guilds.set(message.guild.id, { id: message.guild.id, info: {prefix: config.bot.prefix}})}

        Users.math(`${message.author.id}-${message.guild.id}`,'+',Number(config.eco.xp),'info.xp')
        Users.math(`${message.author.id}-${message.guild.id}`,'+',Number(config.eco.money),'info.money')
        
        if(Users.get(`${message.author.id}-${message.guild.id}`).info.xp >= config.eco.xpNEW){ 
            Users.math(`${message.author.id}-${message.guild.id}`,'+',Number(1),'info.level') 
            Users.set(`${message.author.id}-${message.guild.id}`,0,'info.xp')
            if(config.logs.lvlLog){ console.log(`${message.author.tag} Повысил свой уровень. Теперь он имеет ${Users.get(`${message.author.id}-${message.guild.id}`).info.level}`) }else return;
            if(config.eco.lvlMess){
              if(!config.eco.lvlDM){
                  message.reply(`:tada:Поздравляем! Теперь вы имеете **${Users.get(`${message.author.id}-${message.guild.id}`).info.level}** уровень`)
              }else{
                  message.author.send(`:tada:Поздравляем! Теперь вы имеете **${Users.get(`${message.author.id}-${message.guild.id}`).info.level}** уровень`)
              }
            }else return;
        }

        global.prefix = Guilds.get(message.guild.id).info.prefix || config.bot.prefix;
        ico = config.eco.ico;
        if(!message.content.startsWith(prefix)) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmdName = args.shift().toLowerCase();
        const command = commands.get(cmdName) || commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));
        if(Users.get(`${message.author.id}-${message.guild.id}`).info.bloked === true) return message.reply(`Вы находитесь в черном листе данного сервера. Только админ может удалить/добавить вас в него.`)
        if(command.public === false && message.author.id !== config.bot.owner) return message.reply(`Доступ заблокирован!`);
            command.execute(bot, message, args, prefix, ico);
    })

}catch(err){
    console.log(err)
}
