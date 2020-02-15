module.exports = {
    name: 'timely',
    description: 'Получить награду',
    aliases: ["bonus","daily"],
    public: true,

    async execute(bot, message, args, prefix, ico) {
        last = await Users.get(`${message.author.id}-${message.guild.id}`).info.timer
        if(last !== null && config.eco.timelyTIME - (Date.now() - last) > 0){
            message.reply(`Вы уже взяли свой бонус. Приходите через ${ms(config.eco.timelyTIME - (Date.now() - last))}`)
        }else{
        Users.set(`${message.author.id}-${message.guild.id}`, Date.now(),'info.timer')
        message.reply(`Вы получили бонус в размере \`${config.eco.timely}\`${ico}`)
        Users.math(`${message.author.id}-${message.guild.id}`,'+',Number(config.eco.timely),'info.money')
        }
    }
}
