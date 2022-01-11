module.exports = {
    checkRoot: function(receivedMessage) {
    const {MessageEmbed, Math} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    var first = splitCommand.slice(1) // first number in arguments = first number
    var second = splitCommand.slice(2) // second number in arguments = second number
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog root'
            case 'root' :
                var base = parseFloat(first)
                var radicand = parseFloat(second)

                var root = base ** (1 / radicand)

                if (parseFloat(radicand) != 2) {
                    const embed = new MessageEmbed()
                    .setTitle(root)
                    .setDescription('<@!' + receivedMessage.author.id + '>' + `\n${parseFloat(radicand)} √${parseFloat(base)}`)
                    .setColor('#00ADEF')
                    .setTimestamp()
                    receivedMessage.channel.send(embed)
                }
                else {
                    const embed = new MessageEmbed()
                    .setTitle(root)
                    .setDescription('<@!' + receivedMessage.author.id + '>' + `\n√${parseFloat(base)}`)
                    .setColor('#00ADEF')
                    .setTimestamp()
                    receivedMessage.channel.send(embed) 
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}