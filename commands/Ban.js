const Discord = require("discord.js");

module.exports = {
    name: 'Ban',
    /**
     * 
     * @param {Discord.Message} message 
     */
    async execute(message) {
        if (!message.member.hasPermission('BAN_MEMBERS')) {
            return message.channel.send(`${message.author.username}, tu n'a pas la permision de fair ca`)
        }

        const guild = message.guild
        const user = message.mentions.users.first();

        if (!user) {
            return message.channel.send(`${message.mentions.username} n'existe pas `)
        }

        let [, days, reson] = args;
        
        guild.members.ban(user, {days, reson})
        .then(user => message.channel.send(`L'uttilisateur -${user.username}- a été banni pour un durée de ${days} jour(s) pour la raison suviante: ${reson}.`))
        .catch(console.error);
    }
}