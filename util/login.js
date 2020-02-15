try{
    global.bot.on('ready', async () =>{
        if(config.logs.readyLog){
        console.log(`-----------------Authors-----------------\nGithub: https://githib.com/perssBest\nDiscord: https://discord.gg/xYBqvxQ\n-----------------------------------------`)
        }else return;

        if(config.bot.status){
           bot.user.setPresence(config.bot.statusTEXT)
        }else return;
    })
    bot.login(config.bot.token)
}catch(err){
    console.log(`Oh shit. This is error. ${err} | ${err.name}`)
}
