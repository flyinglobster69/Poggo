const { Client, MessageEmbed } = require('discord.js')

module.exports = {
    checkVersion: function(receivedMessage) {
    const client = new Client()

    const version = require('./version.json')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog version'
            case 'version' :
                const embed = new MessageEmbed()
                .setTitle('Current Version')
                .setDescription(`\`${version.version}\``)
                .setColor('#00ADEF')
                .setTimestamp()
                .setFooter('UwU <3')
                receivedMessage.channel.send(embed)
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}