module.exports = {
    checkProfile: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    let firstMentioned = receivedMessage.mentions.users.first()

    let num0 = Math.floor(Math.random() * (255 - 0) + 0)
    let num1 = Math.floor(Math.random() * (255 - 0) + 0)
    let num2 = Math.floor(Math.random() * (255 - 0) + 0)
    let num3 = Math.floor(Math.random() * (255 - 0) + 0)
    let randomIP = `${num0}.${num1}.${num2}.${num3}`

    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog profile'
            case 'profile' :
                if (arguments == '') {
                    const embed = new MessageEmbed()
                    .setTitle('Your Discord Profile')
                    .setDescription(`Your server nickname: \`${receivedMessage.member.displayName}\`\nYour username: \`${receivedMessage.author.username}\`\nYour Discord Tag: \`${receivedMessage.member.user.tag}\`\nYour ID: \`${receivedMessage.author.id}\`\nYour IP Address (fake): \`${randomIP}\``) 
                    .setThumbnail(receivedMessage.author.avatarURL())
                    .setColor('#00ADEF')
                    .setTimestamp()
                    receivedMessage.reply({ embeds: [embed]}) // sends user information (username and uid)
                }
                else {
                    const embed = new MessageEmbed()
                    .setTitle('Their Discord Profile')
                    .setDescription(`Their username: \`${firstMentioned.username}\`\nTheir Discord Tag: \`${firstMentioned.tag}\`\nTheir ID: \`${firstMentioned.id}\`\nTheir IP Address (fake): \`${randomIP}\``) 
                    .setThumbnail(firstMentioned.avatarURL())
                    .setColor('#00ADEF')
                    .setTimestamp()
                    receivedMessage.reply({ embeds: [embed]}) // sends user information (username and uid)
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}