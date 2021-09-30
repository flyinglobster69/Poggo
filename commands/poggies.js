module.exports = {
    checkPoggies: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'poggies'
            case 'ies' :
                const embed = new MessageEmbed()
                .setDescription(`*Wait, that's illegal!*`)
                .setThumbnail(`https://media.discordapp.net/attachments/852751760324821042/859958039406837770/unknown.png`) 
                receivedMessage.channel.send(embed) // for legal reasons, this is a joke
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}