module.exports = {
    name: "help",
    description: "Список команд.",
    aliases: ["h"],
    public: true,
    async execute(bot, message, args, prefix, ico) {
        function list(cat, cname) {
            return `**${cname}**: ${commands.filter(cmd => cmd.category == cat).map(cmd => `\`${cmd.name}\``).join(", ")}`;
        }
        let command = args[0]
        if (!command)
            return message.channel.send(`
\`\`\`prolog\nEconomyBot. Simple code. Using Enmap\`\`\`

${list("eco", "**Economy**")}
${list("guild", "**Guild**")}

Code: https://github.com/perssBest/enmap-bot
`);
command = commands.get(command);
        if (command === undefined) {
            return message.reply('Указана неправильная команда');
        } else {
            try {
            message.channel.send(`
\`\`\`prolog\nEconomyBot. Simple code. Using Enmap\`\`\`
\`\`\`prolog
Name: ${command.name}
Aliases: ${command.aliases.join("; ")}
Description: ${command.description}
Public: ${command.public ? 'Да' : 'Нет'}
\`\`\`
`)
            } catch (err) {} 
        }
    }
};
