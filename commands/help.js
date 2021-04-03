module.exports = {
    name: 'help',
    execute(message) {
        message.channel.send('Les commende disponible sont :\n/youtube\n/twitch\n/serveur');
    }
}