module.exports = {
    checkUndelete: function(receivedMessage) {
    const {MessageAttachment} = require('discord.js')
    
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand) {
            case 'undelete' :
                const msgdeleted = new MessageAttachment('./msgdeleted/' + `msgdeleted${receivedMessage.author.username}.txt`)
                receivedMessage.channel.send(msgdeleted)
        }
        // value of 'found' will be returned in index.js
        return found
    }
}