module.exports = {
    checkExe: function(receivedMessage) {
    const fs = require('fs') // connect fs module
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog exe'
            case 'exe' :
                receivedMessage.channel.send(receivedMessage.content.substr(8) + ".exe") // send arguments with '.exe' at the end of it
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}