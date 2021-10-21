module.exports = {
    checkBirthday: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

    var user = 0

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog birthday'
            case 'birthday' :
                if (receivedMessage.author.id == '456664720406085632') {
                    const embed = new MessageEmbed()
                    .setTitle('Happy birthday! 🎉')
                    .setDescription(``)
                    .setImage('https://c.tenor.com/Z6gmDPeM6dgAAAAC/dance-moves.gif')
                    .setThumbnail('https://c.tenor.com/yheo1GGu3FwAAAAd/rick-roll-rick-ashley.gif')
                    .setColor('#00ADEF')
                    receivedMessage.channel.send(embed)
                    receivedMessage.channel.send(`<@!${user}>`)
                }
                else if (receivedMessage.author.id == `${user}`) {
                    const embed = new MessageEmbed()
                    .setTitle('Happy birthday! 🎉')
                    .setDescription(``)
                    .setImage('https://c.tenor.com/Z6gmDPeM6dgAAAAC/dance-moves.gif')
                    .setThumbnail('https://c.tenor.com/yheo1GGu3FwAAAAd/rick-roll-rick-ashley.gif')
                    .setColor('#00ADEF')
                    receivedMessage.channel.send(embed)
                    receivedMessage.channel.send(`<@!${user}>`)
                }
                else {
                    receivedMessage.channel.send('null')
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}