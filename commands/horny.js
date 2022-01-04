module.exports = {
    checkHorny: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog horny'
            case 'horny' :
                const embed = new MessageEmbed()
                .setTitle('BONK!')
                .setDescription("<@!" + receivedMessage.author.id + ">" + ' go to horny jail smh')
                .setImage('https://media1.tenor.com/images/6493bee2be7ae168a5ef7a68cf751868/tenor.gif?itemid=17298755')
                .setColor('#FF0000')
                .setTimestamp()
                receivedMessage.channel.send(embed) // horny bad
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}