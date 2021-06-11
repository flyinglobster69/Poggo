module.exports = {
    checkStart: function(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand) {
            case 'start' :
                if (receivedMessage.author.id == "456664720406085632") {
                    receivedMessage.channel.send("Starting Windows...")
                    found = true
                }
                else {
                    return // receivedMessage.channel.send(bsod)
                }
            
        }

        // value of 'found' will be returned in index.js
        return found
    }
}