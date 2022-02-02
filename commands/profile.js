module.exports = {
    checkProfile: function(receivedMessage) {
    const {MessageEmbed, Client} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    const user = splitCommand.slice(1)

    // let guild = client.guilds.fetch('serverID');
    // let member = guild.member(receivedMessage.author);
    // let nickname = member ? member.displayName : null;
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog user'
            case 'profile' :
                if (arguments == '') {
                    const embed = new MessageEmbed()
                    .setTitle('Discord Profile')
                    .setDescription(`Your username: ${receivedMessage.author.username}\nYour Discord Tag: ${receivedMessage.member.user.tag}\nYour ID: ${receivedMessage.author.id}\nPing pong: <@!${receivedMessage.author.id}>`) 
                    .setThumbnail(receivedMessage.author.avatarURL())
                    .setColor('#00ADEF')
                    .setTimestamp()
                    receivedMessage.reply({ embeds: [embed]}) // sends user information (username and uid)
                }
                else {
                    const embed = new MessageEmbed()
                    .setTitle('Discord Profile')
                    .setDescription(`Their username: ${receivedMessage.mentions.users.first().username}\nTheir Discord Tag: ${receivedMessage.mentions.users.first().tag}\nTheir ID: ${receivedMessage.mentions.users.first().id}\nPing pong: ${receivedMessage.mentions.users.first()}`) 
                    .setThumbnail(receivedMessage.mentions.users.first().avatarURL())
                    .setColor('#00ADEF')
                    .setTimestamp()
                    receivedMessage.reply({ embeds: [embed]}) // sends user information (username and uid)
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}