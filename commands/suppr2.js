module.exports = {
    name: 'suppr2',
    /**
     * 
     * @param {Discord.Message} message 
     */
    async execute(message) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.channel.send(`${message.author.username}, tu n'a pas la permision de faire ca`)
        }
        else if ( amount <= 1 || amount > 100) {
            return message.reply("Tu dois saisir un nombre entre 1 et 99 !");
           }
    
           message.channel.bulkDelete(amount )
           .then(messages => console.log(`${messages.size - 1}messages suprimers`))
        }
    };