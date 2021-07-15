module.exports = {
    checkBiden: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog biden'
            case 'biden' :
                const embed = new MessageEmbed()
                .setImage('https://hypixel.net/attachments/will_you_shut_up_man_meme_banner-jpg.2080238/')
                .setColor('#00ADEF')
                receivedMessage.channel.send(embed) // tells user to shut up
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}