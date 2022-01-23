module.exports = {
    checkExe: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog exe'
            case 'exe' :
                const embed = new MessageEmbed()
                .setTitle(receivedMessage.content.substr(8) + '.exe')
                .setDescription('sussy baka!')
                .setThumbnail('https://aux2.iconspalace.com/uploads/448592549.png')
                .setTimestamp()
                receivedMessage.reply({ embeds: [embed]}) // send arguments with '.exe' at the end of it
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}