module.exports = {
    checkStart: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false
    color = '#00ADEF'

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog start'
            case 'start' :
                if (receivedMessage.author.id == "456664720406085632") { // find out if the message sender is the bot's creator
                    const embed = new MessageEmbed()
                    .setImage('https://c.tenor.com/wHC9IYtiPMkAAAAC/starting-windows-logo.gif')
                    .setColor(color)
                    receivedMessage.channel.send(embed) // start windows
                    found = true
                }
                else {
                    const embed = new MessageEmbed()
                    .setDescription(`*It's black in Windows 11 :)*`)
                    .setImage('https://img.memecdn.com/evolution-of-the-blue-screen-of-death_o_3216563.jpg')
                    .setColor(color)
                    receivedMessage.channel.send(embed) // lock out the user if its not the creator
                }
            
        }

        // value of 'found' will be returned in bot.js
        return found
    }
}