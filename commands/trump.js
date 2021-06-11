module.exports = {
    checkTrump: function(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand) {
            case 'trump' :
                receivedMessage.channel.send("***Mr. Orange*** *wants to build a wall (fence), it will be a big, beautiful wall (fence), and it will keep out all the Mexicans (not really lol).*")
        }
        // value of 'found' will be returned in index.js
        return found
    }
}