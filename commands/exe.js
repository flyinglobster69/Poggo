module.exports = {
    checkExe: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    let filename = receivedMessage.content.substr(8)

    //
    // WORD FILTER LIST
    // !!! 
    // filter = ['fuck', 'shit', 'ass', 'retard', 'stupid', 'idiot', 'cum']


    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog exe'
            case 'exe' :
                if (receivedMessage.content.length < 14) {

                    // if (receivedMessage.includes(filter)) {
                    //     // haha L
                    // }
                    // else {
                        const embed = new MessageEmbed()
                        .setTitle(filename + '.exe')
                        .setDescription('sussy baka!')
                        .setThumbnail('https://aux2.iconspalace.com/uploads/448592549.png')
                        .setURL('https://bit.ly/3h872Sg')
                        .setTimestamp()
                        receivedMessage.reply({ embeds: [embed]}) // send arguments with '.exe' at the end of it
                    // }

                }
                else {
                    null
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}