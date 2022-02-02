module.exports = {
    checkServer: function(receivedMessage) {
    // const Discord = require('discord.js')
    const {MessageEmbed, MessageActionRow, MessageButton} = require('discord.js') // MessageComponentInteraction, Client, ButtonInteraction
    // const client = new Client({ intents: [Discord.Intents.FLAGS.GUILDS, 
    //     Discord.Intents.FLAGS.GUILD_MEMBERS, 
    //     Discord.Intents.FLAGS.GUILD_MESSAGES, 
    //     Discord.Intents.FLAGS.GUILD_WEBHOOKS, 
    //     Discord.Intents.FLAGS.GUILD_PRESENCES, 
    //     Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,
    //     Discord.Intents.FLAGS.GUILD_INTEGRATIONS, 
    //     Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS]})
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    // const filter = receivedMessage => receivedMessage.customId === 'profile'
    // const collector = receivedMessage.channel.createMessageComponentCollector({ filter, time: 1000 });
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog server'
            case 'server' :
                const embed = new MessageEmbed()
                .setTitle('Current Discord Server Info')
                .setDescription(`Server name: ${receivedMessage.guild.name}\nTotal members: ${receivedMessage.guild.memberCount}`)
                .setThumbnail(receivedMessage.guild.iconURL())
                .setColor('#00ADEF')
                .setTimestamp()

                const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                    .setURL('https://bit.ly/3h872Sg')
                    .setLabel('This button will do something in the future')
                    .setStyle('LINK'),
			    )
                // const interaction = new MessageComponentInteraction()
                // .addComponents(
                //     new MessageEmbed()
                //     .setTitle('Discord Profile')
                //     .setDescription(`Your username: ${receivedMessage.author.username}\nYour Discord Tag: ${receivedMessage.member.user.tag}\nYour ID: ${receivedMessage.author.id}\nPing pong: <@!${receivedMessage.author.id}>`) 
                //     .setThumbnail(receivedMessage.author.avatarURL())
                //     .setColor('#00ADEF')
                //     .setTimestamp()
                // )
                // collector.on('collect', async receivedMessage => {
                //     if (receivedMessage.customId === 'profile') {
                //         await receivedMessage.reply({ content: 'Test Success', components: [] });
                //     }
                // });

                // client.on('interactionCreate', interaction => {
                //     if (!interaction.isButton()) return
                //     console.log('Test Success')
                // });

                receivedMessage.reply({ embeds: [embed], components: [row]}) // Sends basic server info
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}