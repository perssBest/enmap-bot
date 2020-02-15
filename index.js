    global.enmap = require("enmap")
    global.config = require("./config.js");
    if(!config.bot.ready) { return console.log(`Проект не может быть загружен. Замените значения в ./config.js`) }
    global.bot = new (require("discord.js")).Client({ disableEveryone: true });
    global.Discord = require("discord.js");
    global.ms = require("ms");
    global.color = config.bot.color;
    global.fs = require('fs')
    global.commands = new enmap();
    global.Users = new enmap({ name: "Users" });
    global.Guilds = new enmap({ name: "Guilds" });

    try {
        require("fs").readdirSync("./util/").filter(file => file.endsWith(".js")).map(i => { 
            try {
              require("./util/" + i)
              if (config.logs.functionsLog) { console.log(`[Util] Утилита: ${i} была загружена.`) }
            } catch (e) {
              console.log(e.stack)
            }
          })
      } catch (e) {
        console.log(e.stack)
    }

fs.readdirSync('./src').forEach(module => {
    const commandFiles = fs.readdirSync(`./src/${module}/`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./src/${module}/${file}`);
        if(config.logs.cmdAddLog){
        console.log(`[Handler] ${file} Успешно загружен!`)
        }else return;
        command.category = module;
        commands.set(command.name, command);
    }
})
