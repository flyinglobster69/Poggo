module.exports = {
    checkPirate: function(receivedMessage) {
    const {MessageAttachment} = require('discord.js')
    const pirate = new MessageAttachment('pirate.webm') // connect pirate.webm message attachment

    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog pirate'
            case 'pirate' :
                receivedMessage.channel.send(pirate) // send message attachment
                receivedMessage.channel.send("ඞ") // amogus SUS
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}