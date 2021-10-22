module.exports = {
    checkBirthday: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

    const user = ''
    const bdayTitle = 'Happy birthday! 🎉'
    const bdayDescription = ''
    const bdayImg = 'https://c.tenor.com/Bo1p87vHb6IAAAAC/happy-birthday-cat.gif'
    const bdayThumb = 'https://c.tenor.com/yheo1GGu3FwAAAAd/rick-roll-rick-ashley.gif'
    const pink = '#FFC0CB'

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog birthday'
            case 'birthday' :
                if (receivedMessage.author.id == '456664720406085632') {
                    const embed = new MessageEmbed()
                    .setTitle(bdayTitle)
                    .setDescription(bdayDescription)
                    .setImage(bdayImg)
                    .setThumbnail(bdayThumb)
                    .setColor(pink)
                    receivedMessage.channel.send(embed)
                    receivedMessage.channel.send(`<@!${user}>`)
                }
                else if (receivedMessage.author.id == `${user}`) {
                    const embed = new MessageEmbed()
                    .setTitle(bdayTitle)
                    .setDescription(bdayDescription)
                    .setImage(bdayImg)
                    .setThumbnail(bdayThumb)
                    .setColor(pink)
                    receivedMessage.channel.send(embed)
                    receivedMessage.channel.send(`<@!${user}>`)
                }
                else {
                    null // do absolutely nothing kek
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}