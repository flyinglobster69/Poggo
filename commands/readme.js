module.exports = {
    checkReadme: function(receivedMessage) {
    const {MessageEmbed, MessageActionRow, MessageButton, Message} = require('discord.js')

    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog readme'
            case 'readme' :
                const embed = new MessageEmbed()
                .setTitle('Pog bot\'s README File')
                .setDescription('A basic README file that briefly describes the bot.\nTap the button below to read the file on GitHub.')
                .setColor('#00ADEF')
                .setTimestamp()

                const readme = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                    .setURL('https://github.com/flyinglobster69/Poggo#readme')
                    .setLabel('READ ME! READ MEEEE!!!!')
                    .setStyle('LINK')
                )
                receivedMessage.reply({ embeds: [embed], components: [readme]}) // send embed
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}