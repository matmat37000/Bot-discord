module.exports = {
    name: 'adrien',
    execute(message) {
        message.channel.send("C'est le meilleur pote !!! 😆😁")

        client.user.setActivity('discord.js', { type: '' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
    }
}