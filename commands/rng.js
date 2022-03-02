module.exports = {
    checkRng: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    var first = parseInt(splitCommand.slice(1, 2)) // first number in arguments = first number
    var second = parseInt(splitCommand.slice(2, 3)) // second number in arguments = second number
    found = false

    function random(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog rng'
            case 'rng' :
                if (arguments == "") {
                    const embed = new MessageEmbed() 
                    .setTitle("Error")
                    .setDescription("Please specify a range to generate numbers in (min, max)")
                    .setTimestamp()
                    receivedMessage.reply({ embeds: [embed]})
                }
                else if (second == "") {
                    const embed = new MessageEmbed() 
                    .setTitle("Error")
                    .setDescription("Please specify a maximum value as well.")
                    .setTimestamp()
                    receivedMessage.reply({ embeds: [embed]})
                }
                else if (first >= second) {
                    num = random(second, first + 1)
                    const embed = new MessageEmbed()
                    .setTitle(`${num}`)
                    .setDescription(`Randomly generated number between \`${second}\` and \`${first}\`.`)
                    .setFooter({ text: 'Why did you input the numbers backwards smh'})
                    .setTimestamp()
                    receivedMessage.reply({ embeds: [embed]})
                }
                else {
                    num = random(first, second + 1)
                    const embed = new MessageEmbed()
                    .setTitle(`${num}`)
                    .setDescription(`Randomly generated number between \`${first}\` and \`${second}\`.`)
                    .setFooter({ text: '🎲 Hehe gambling lol 🎲'})
                    .setTimestamp()
                    receivedMessage.reply({ embeds: [embed]})
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}