module.exports = {
    checkButter: function(receivedMessage) {

    const {MessageEmbed, MessageAttachment} = require('discord.js')

    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    const butter = new MessageAttachment('butter.mp4')
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog butter'
            case 'butter' :
                receivedMessage.channel.send(butter)
                const embed = new MessageEmbed()
                .setTitle('mmmm b u t t e r 🛬')
                .setDescription('https://youtu.be/lowrM-780tg 🧈')
                .setImage('https://media1.tenor.com/images/e9dcba66f4220c77c0ad61531d0f4e20/tenor.gif')
                .setColor('#00ADEF')
                receivedMessage.channel.send(embed)
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}