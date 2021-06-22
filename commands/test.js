const { Client } = require("discord.js")

module.exports = {
    checkTest: function(receivedMessage) {
    const client = new Client()

    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    var yourping = new Date().getTime() - receivedMessage.createdTimestamp
    var botping = Math.round(client.pi)

    let version = "1.4.3"
    found = false

        switch(primaryCommand.toLowerCase()) {
            case 'test' :
                receivedMessage.channel.send("Msg test = \`Success\`")
                receivedMessage.channel.send(`Your ping = \`${yourping}ms\``)
                receivedMessage.channel.send(`Bot\'s ping = \`${botping}\``)
                receivedMessage.channel.send("Logging = \`True\`")
                receivedMessage.channel.send(`Version: \`${version}\``)
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}