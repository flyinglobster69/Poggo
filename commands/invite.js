module.exports = {
    checkInvite: function(receivedMessage) {
    const {MessageEmbed, MessageActionRow, MessageButton} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog invite'
            case 'invite' :
                const embed = new MessageEmbed()
                .setTitle('Invite Poggo to your server!')
                .setThumbnail('https://avatars.githubusercontent.com/u/73574038?v=4')
                .setColor('#00ADEF')
                .setTimestamp()
                .setFooter({ text: 'UwU'})

                const invite = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                    .setURL('https://discord.com/oauth2/authorize?client_id=837148121934725141&scope=bot&permissions=274878426112')
                    .setLabel('Click to invite')
                    .setStyle('LINK')
                )
                receivedMessage.reply({ embeds: [embed], components: [invite]})
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}