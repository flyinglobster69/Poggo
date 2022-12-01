module.exports = {
    checkShe: function(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    var first = splitCommand.slice(1) // first word
    var second = splitCommand.slice(2) // second word
    var third = splitCommand.slice(3) // third word
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog she'
            case 'she' :
                var phrase = `She ${first[0]} on my ${second[0]} til I ${third[0]}`
                receivedMessage.reply(phrase) // sends the sum to the message channel
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}