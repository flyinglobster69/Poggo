module.exports = {
    checkBuff: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')

    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog buff'
            case 'buff' :
                const embed = new MessageEmbed()
                .setTitle('Boeing B-52 Stratofortress')
                .setDescription(`*"A veteran of several wars, the B-52 has dropped only conventional munitions in combat. The B-52's official name Stratofortress is rarely used; informally, the aircraft has become commonly referred to as the BUFF (Big Ugly Fat Fu*ker/Fella)."* - Wikipedia`)
                .setImage('https://live.staticflickr.com/7103/27511257554_6e6afc378f_b.jpg')
                receivedMessage.channel.send(embed) // sends buff
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}