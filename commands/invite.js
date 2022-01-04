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
                .setTitle("Invite pog bot to your server!")
                .setURL("https://discord.com/oauth2/authorize?client_id=837148121934725141&scope=bot&permissions=274878426112")
                .setThumbnail("https://tetris.wiki/images/thumb/9/98/Discord_logo.svg/1200px-Discord_logo.svg.png")
                .setImage('https://c.tenor.com/DRd36YfJrnAAAAAi/pog-pog-champ.gif')
                .setColor('#00ADEF')
                .setTimestamp()
                receivedMessage.channel.send(embed)
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}