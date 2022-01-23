module.exports = {
    checkPing: function(receivedMessage) {
        let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
        let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
        let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
        let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
        var yourping = new Date().getTime() - receivedMessage.createdTimestamp
        found = false

        switch(primaryCommand.toLowerCase()) {
            case 'ping':
                receivedMessage.reply('<@!' + receivedMessage.author.id + '>' + `🏓 Pong in just ${yourping}ms!
*(questionable accuracy)*`)
        }
        return found
    }
}