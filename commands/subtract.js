module.exports = {
    checkSubtract: function(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    var first = splitCommand.slice(1)
    var second = splitCommand.slice(2)
    found = false

        switch(primaryCommand) {
            case 'subtract' :
                // console.log(first)
                // console.log(second)
                // console.log(first + second)
                var difference = parseInt(first) - parseInt(second)
                receivedMessage.channel.send(difference)
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}