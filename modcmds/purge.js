module.exports = {
    checkPurge: function(receivedMessage) {
    const { MessageEmbed, Permissions } = require('discord.js')

    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    let amount = Number(arguments[0]); // amount = a number entered.
    let reason = 'unspecified' // all values after number are the reason for purge
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog purge'
            case 'purge' :
                
                    let bool = false
                    reason = arguments.slice(1) // all values after number are the reason for purge

                    if (!receivedMessage.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) 
                        return receivedMessage.reply('Lol you don\'t have permission to use this command, \nTake the L')
                    
                    if (!amount) {
                        const embed = new MessageEmbed()
                        .setTitle('Oopsie Poopsie!')
                        .setDescription('Missing parameter: \`pog purge [number from 1-99]\`')
                        .setFooter({ text: 'Task Failed Successfully'})
                        .setTimestamp()
                        receivedMessage.reply({ embeds: [embed]}) // If amount is missing, then it raises an error.
                        bool = false
                    }
                    if (amount >= 100) {
                        const embed = new MessageEmbed()
                        .setTitle('Oopsie Poopsie!')
                        .setDescription('You can\'t clear more than 100 messages in one go, therefore 100 messages have been purged')
                        .setFooter({ text: 'Task Failed Successfully'})
                        .setTimestamp()
                        receivedMessage.reply({ embeds: [embed]}) // If amount is over 100 then it raises an error.
                        bool = false
                    }

                    if (!receivedMessage.member.id === receivedMessage.guild.ownerID) { // Bypass for the server owner.
                        if (amount >= 100) {
                            const embed = new MessageEmbed()
                            .setTitle('Oopsie Poopsie!')
                            .setDescription('You can\'t clear more than 100 messages in one go, therefore 100 messages have been purged')
                            .setFooter({ text: 'Task Failed Successfully'})
                            .setTimestamp()
                            receivedMessage.reply({ embeds: [embed]}) // If amount is over 100 then it raises an error.
                            bool = false
                        }
                    } 
                    else {
                        bool = true
                    }

                    let maxAmount = 100
                    if (amount > 100) {
                        amount = 100
                    }
                    else {
                        maxAmount = amount
                    }

                    for (receivedMessage.channel.bulkDelete(String(amount + 1), bool); amount >= 0; amount -= 100) {
                        if (amount > 100) {
                            amount = 100
                        }
                        else if (amount > 0) {
                            maxAmount = amount
                        }
                        else {
                            break
                        }
                        receivedMessage.channel.bulkDelete(String(amount), bool)

                    const embed = new MessageEmbed()
                    .setTitle(`${amount} messages purged!`)
                    .setDescription(`Messages purged by <@${receivedMessage.member.id}>\nReason: \`${reason.join(' ')}\``)
                    .setThumbnail('https://c.tenor.com/7SC4ShnJbQgAAAAC/zhongli-zhong.gif')
                    .setColor('#00ADEF')
                    .setFooter({ text: 'Task Complete'})
                    .setTimestamp()
                    receivedMessage.channel.send({ embeds: [embed]})
                    
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}