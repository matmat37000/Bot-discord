const fs = require("fs")
const Discord = require("discord.js");

const { prefix , tocken, commend} = require('./config.json') 

const client = new Discord.Client();
client.commands = new  Discord.Collection();

const commandFils = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFils) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once("ready" , () => {
    console.log("ready! ")
});

client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
      client.commands.get(command).execute(message, args);
    } catch (error) {
      console.log(error);
      message.reply("Une erreur c'est produite pendant l'excution de le command !!!\n-erreur message-"); 
    }
})

client.login(process.env.TOKEN);