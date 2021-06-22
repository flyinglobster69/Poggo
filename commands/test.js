const { Client } = require("discord.js")

module.exports = {
    checkTest: function(receivedMessage) {
    const client = new Client()

    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    var yourping = new Date().getTime() - receivedMessage.createdTimestamp
    var botping = Math.round(client.pi)

    let version = "1.4.5" // current bot version
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog test'
            case 'test' :
                receivedMessage.channel.send("Msg test = \`Success\`") // sends the message if the bot is able to send a message (lmao)
                receivedMessage.channel.send(`Your ping = \`${yourping}ms\``) // gets your latency and sends it in ms (questionable accuracy)
                receivedMessage.channel.send(`Bot\'s ping = \`${botping}\``) // gets the bot's latency and sends it in ms (doesn't work)
                receivedMessage.channel.send("Logging = \`True\`") // tells user that the bot is logging information
                receivedMessage.channel.send(`Version: \`${version}\``) // sends bot version number
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}