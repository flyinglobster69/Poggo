module.exports = {
    checkMultiply: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    var first = splitCommand.slice(1) // first number in arguments = first number
    var second = splitCommand.slice(2) // second number in arguments = second number
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog multiply'
            case 'multiply' :
                var product = parseInt(first) * parseInt(second) // multiplies first number with second number
                const embed = new MessageEmbed()
                .setTitle(product)
                .setDescription("<@!" + receivedMessage.author.id + ">" + `\n${parseInt(first)} × ${parseInt(second)} =`)
                .setColor('#00ADEF')
                receivedMessage.channel.send(embed) // sends the product in the chat
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}