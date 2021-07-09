module.exports = {
    checkTrump: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog trump'
            case 'trump' :
                const embed = new MessageEmbed()
                .setDescription('[this command has been removed for impeachment]')
                .setImage('https://th.bing.com/th/id/R.794fd892046872b59fb299b2691af272?rik=P%2bbgp4Dp4sqfIA&pid=ImgRaw')
                receivedMessage.channel.send(embed) // e
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}