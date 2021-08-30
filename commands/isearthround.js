module.exports = {
    checkIsearthround: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog isearthround'
            case 'isearthround' :
                const embed = new MessageEmbed()
                .setDescription("<@!" + receivedMessage.author.id + ">" + 'Ye, Earth is round ya dingus.')
                .setTitle('Is earth round?')
                .setColor('#00ff00')
                receivedMessage.channel.send(embed) // horny bad
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}