module.exports = {
    checkInvite: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog invite'
            case 'invite' :
                const embed = new MessageEmbed()
                .setTitle('Invite pog bot!')
                .setDescription('Invite me at https://discord.com/oauth2/authorize?client_id=837148121934725141&scope=bot&permissions=518152')
                .setThumbnail('https://vignette3.wikia.nocookie.net/kancolle/images/2/21/PogChamp_Emote.png/revision/latest?cb=20160817151144')
                receivedMessage.channel.send(embed)
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}