module.exports = {
    checkUpload: function(receivedMessage) {
    const {MessageEmbed, MessageAttachment} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false
    color = '#00ADEF'
    const upload = new MessageAttachment('')

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog start'
            case 'upload' :
                if (receivedMessage.author.id == "456664720406085632") { // find out if the message sender is the bot's creator
                    receivedMessage.channel.send(upload) // start windows
                    receivedMessage.channel.send('null')
                    found = true
                }
                else {
                    null
                }
            
        }

        // value of 'found' will be returned in bot.js
        return found
    }
}