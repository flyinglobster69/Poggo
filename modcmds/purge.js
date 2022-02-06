module.exports = {
    checkPurge: function(receivedMessage) {
    const { MessageEmbed, Permissions } = require('discord.js')

    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog purge'
            case 'purge' :
                
                    let amount = Number(arguments[0]); // amount = a number entered.

                    if (!receivedMessage.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) 
                        return // Does nothing if the author does not have administrator permission.
                    
                    if (!amount) 
                        // const embed = new MessageEmbed()
                        // .setTitle('Oopsie Poopsie!')
                        // .setDescription('Missing parameter: \`pog purge [number from 1-99]\`')
                        // .setFooter({ text: 'Task Failed Successfully'})
                        // .setTimestamp()
                        return receivedMessage.reply('Missing parameter: \`pog purge [number from 1-99]\`') // If amount is missing, then it raises an error.
                    let bool = false

                    if (!receivedMessage.member.id === receivedMessage.guild.ownerID) { // Bypass for the server owner.
                        if (amount >= 100) 
                            // const embed = new MessageEmbed()
                            // .setTitle('Oopsie Poopsie!')
                            // .setDescription('You can\'t clear more than 100 messages in one go!')
                            // .setFooter({ text: 'Task Failed Successfully'})
                            // .setTimestamp()
                            return receivedMessage.reply('You can\'t clear more than 100 messages in one go!') // If amount is over 100 then it raises an error.
                        } 
                    else {
                        bool = true
                    }
                    let maxAmount;
                    if (amount > 99) maxAmount = 100
                    else maxAmount = amount
                    for (receivedMessage.channel.bulkDelete(String(maxAmount + 1), bool); amount >= 0; amount -= 100) {
                        if (amount > 99) maxAmount = 100
                        else if (amount > 0) maxAmount = amount
                        else break
                        receivedMessage.channel.bulkDelete(String(maxAmount), bool)

                    const embed = new MessageEmbed()
                    .setTitle(`${amount} messages purged!`)
                    .setDescription(`Messages purged by <@${receivedMessage.member.id}>`)
                    .setThumbnail('https://c.tenor.com/yheo1GGu3FwAAAAd/rick-roll-rick-ashley.gif')
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