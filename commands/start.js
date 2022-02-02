module.exports = {
    checkStart: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    found = false
    color = '#00ADEF'

    var random = Math.floor(Math.random() * 69)

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog start'
            case 'start' :
                if (random == 42) {
                    const embed = new MessageEmbed()
                    .setImage('https://c.tenor.com/wHC9IYtiPMkAAAAC/starting-windows-logo.gif')
                    .setColor(color)
                    .setTimestamp()
                    receivedMessage.reply({ embeds: [embed]}) // start windows
                    found = true
                }
                else {
                    const embed = new MessageEmbed()
                    .setDescription(`kekw`)
                    .setImage('https://itknowledgeexchange.techtarget.com/windows-enterprise-desktop/files/2016/12/gsod.jpg')
                    .setColor(color)
                    .setTimestamp()
                    receivedMessage.reply({ embeds: [embed]}) // die
                }
            
        }

        // value of 'found' will be returned in bot.js
        return found
    }
}