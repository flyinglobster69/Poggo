module.exports = {
    checkAmerican: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog american'
            case 'american' :
                const embed = new MessageEmbed()
                .setDescription('Haha funnie')
                .setImage('https://media.tenor.com/images/8bd3ce1541701bc7fb4105fe211143b2/tenor.gif')
                .setColor('#00ADEF')
                .setTimestamp()
                receivedMessage.reply({ embeds: [embed]}) // lol
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}