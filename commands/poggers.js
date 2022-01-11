module.exports = {
    checkPoggers: function(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'poggers'
            case 'ers' :
                receivedMessage.channel.send('Pog Indeed :)') // very much pog indeed
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}