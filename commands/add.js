module.exports = {
    checkAdd: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    var first = splitCommand.slice(1) // first number in arguments = first number
    var second = splitCommand.slice(2) // second number in arguments = second number
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog add'
            case 'add' :
                var sum = parseFloat(first) + parseFloat(second) // adds first number and second number to get the sum
                const embed = new MessageEmbed()
                .setTitle(sum.toString())
                .setDescription('<@!' + receivedMessage.author.id + '>' + `\n${parseFloat(first)} + ${parseFloat(second)} =`)
                .setColor('#00ADEF')
                .setTimestamp()
                .setFooter({ text: 'ez mafs'})
                receivedMessage.reply({ embeds: [embed]}) // sends the sum to the message channel
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}