module.exports = {
    checkHelp: function(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand) {
            case 'help' :
                receivedMessage.channel.send(`Prefix\: \`pog\`; Command list\: \`test\`, \`horny\`, \`biden\`, \`trump\`, \`ping\`, \`andrew\`, \`buff\`, \`user\`, \`exe [insert text here]\`, \`genshin [insert waifu here]\`, \`sm [insert name here]\``)
        }
        // value of 'found' will be returned in index.js
        return found
    }
}