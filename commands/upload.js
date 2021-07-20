module.exports = {
    checkUpload: function(receivedMessage) {
    const {MessageEmbed, MessageAttachment} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false
    color = '#00ADEF'
    const upload = new MessageAttachment('upload.mp4')

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog start'
            case 'upload' :
                if (receivedMessage.author.id == "456664720406085632") { // find out if the message sender is the bot's creator
                    receivedMessage.channel.send(upload) // start windows
                    found = true
                }
                else {
                    const embed = new MessageEmbed()
                    .setDescription(`***AAAAAAAAAAAAAAAAAAAA***`)
                    .setImage('http://i1.kym-cdn.com/photos/images/facebook/000/751/659/bf1.jpg')
                    .setColor(color)
                    receivedMessage.channel.send(embed) // lock out the user if its not the creator
                }
            
        }

        // value of 'found' will be returned in bot.js
        return found
    }
}