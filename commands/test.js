const { Client, MessageEmbed } = require("discord.js")

module.exports = {
    checkTest: function(receivedMessage) {
    const client = new Client()

    const version = require('./version.json')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    var yourping = new Date().getTime() - receivedMessage.createdTimestamp
    // var botping = Math.round(client.pi)
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog test'
            case 'test' :
                const embed = new MessageEmbed()
                .setTitle('Bot Test')
                .setDescription(`Msg test = \`Success\` *(bot can send messages)*
Your ping = \`${yourping}ms\` *(questionable accuracy)*
Logging = \`True\` *(logging pog counts only)*
Version: \`${version.version}\` *(current bot version)*`)
                .setColor('#00ADEF')
                receivedMessage.channel.send(embed)
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}