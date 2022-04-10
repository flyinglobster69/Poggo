const { MessageEmbed, Permissions } = require('discord.js')

module.exports = {
    checkTest: function(receivedMessage) {

    const version = require('./version.json')
    // const Discord = require('discord.js')
    // const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, 
    //     Discord.Intents.FLAGS.GUILD_MEMBERS, 
    //     Discord.Intents.FLAGS.GUILD_MESSAGES, 
    //     Discord.Intents.FLAGS.GUILD_WEBHOOKS, 
    //     Discord.Intents.FLAGS.GUILD_PRESENCES, 
    //     Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,
    //     Discord.Intents.FLAGS.GUILD_INTEGRATIONS, 
    //     Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS]})
    // let botuid = '<@653775043486154752>'
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    var yourping = new Date().getTime() - receivedMessage.createdTimestamp
    // var botping = Math.round(client.pi)
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog test'
            case 'test' :

                let perms = 'no perms haha L'

                // if (!receivedMessage.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) 
                //     return perms = 'no perms haha L'

                if (!receivedMessage.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
                    perms = 'no perms haha L'
                }
                else {
                    perms = 'You have admin perms... ew thats like being a government agent'
                }

                const embed = new MessageEmbed()
                .setTitle('Bot Test')
                .setDescription(`Test successful!
Latency: \`${yourping}ms\` (questionable accuracy)
Admin Perms: \`${perms}\`
Bot Version: \`${version.version}\``)
                .setColor('#00ADEF')
                .setTimestamp()
                .setFooter({ text: `Poggo version ${version.version}`})
                receivedMessage.reply({ embeds: [embed]})
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}