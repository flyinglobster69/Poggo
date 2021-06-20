module.exports = {
    checkAndrew: function(receivedMessage) {
    const {MessageAttachment} = require('discord.js')
    const andrew = new MessageAttachment('andrew.jpg')

    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand.toLowerCase()) {
            case 'andrew' :
                receivedMessage.channel.send(andrew)
                receivedMessage.channel.send("what a gamer")
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}