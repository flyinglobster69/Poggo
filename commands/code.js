module.exports = {
    checkCode: function(receivedMessage) {

    const {MessageEmbed} = require('discord.js')

    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    // const readme = new MessageAttachment('./README.cmd')
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog code'
            case 'code' :
                const embed = new MessageEmbed()
                .setTitle('Source Code')
                .setDescription(`Here is the link to the GitHub repository: https://github.com/flyinglobster69/pog
And here is the link to the Discord: https://discord.gg/JDTRUPP`)
                .setImage('https://www.foxforcefivenews.com/wp-content/uploads/2016/09/sullygif.gif')
                .setColor('#ffff00')
                .setTimestamp()
                // .attachFiles(readme)
                receivedMessage.channel.send(embed)
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}