module.exports = {
    checkUser: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog user'
            case 'user' :
                const embed = new MessageEmbed()
                .setTitle('Discord Profile')
                .setDescription(`Your username: ${receivedMessage.author.username}\nYour ID: ${receivedMessage.author.id}`) 
                .setImage(receivedMessage.author.avatarURL())
                receivedMessage.channel.send(embed) // sends user information (username and uid)
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}