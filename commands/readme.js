module.exports = {
    checkReadme: function(receivedMessage) {
    const {MessageAttachment, MessageEmbed} = require('discord.js')
    const readme = new MessageAttachment('README.cmd') // connect README.cmd message attachment

    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog pirate'
            case 'readme' :
                const embed = new MessageEmbed()
                .setTitle('Pog bot\'s README File')
                .setDescription('A basic README file that briefly describes the bot.\nIt\'s recommended that you download the file and open it on your computer.')
                .setColor('#00ADEF')
                .attachFiles(readme)
                .setTimestamp()
                receivedMessage.reply({ embeds: [embed]}) // send embed
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}