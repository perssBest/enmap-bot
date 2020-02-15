module.exports = {
    name: 'ignore',
    description: 'Добавить участника в черный список',
    aliases: ['blacklist'],
    public: true,

    async execute(bot, message, args, prefix, ico) {
      let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!user) return message.reply(`Укажи юзера`)
      if(user.id === message.author.id) return message.reply(`Не делай того о чем будешь желеть...`)
      
      if(Users.get(`${user.id}-${message.guild.id}`).info.bloked === false){
        message.reply(`${user} был успешно **добавлен** в список игнорируемых. Бот будет игнорировать данного участника на этом сервере.`)
        await Users.set(`${user.id}-${message.guild.id}`,true,'info.bloked')
      }else if(Users.get(`${user.id}-${message.guild.id}`).info.bloked === true){
        message.reply(`${user} был успешно **удален** из списока игнорируемых.`)
        await Users.set(`${user.id}-${message.guild.id}`,false,'info.bloked')
      }
    }
}
