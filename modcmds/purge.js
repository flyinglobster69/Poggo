module.exports = {
    checkPurge: function(receivedMessage) {
    const { MessageEmbed } = require('discord.js')

    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog version'
            case 'purge' :
                
                    let Member = receivedMessage.member
                    let server = receivedMessage.guild
                    let Channel = receivedMessage.channel
                    let amount = Number(arguments[0]); // amount = a number entered.

                    if (!Member.hasPermission("ADMINISTRATOR")) 
                        return // Does nothing if the author does not have administrator permission.

                    if (!amount) 
                        return Channel.send(`${Member} Missing parameter: \`pog purge [number from 1-99]\``) // If amount is missing, then it raises an error.
                    let bool = false;

                    if (!Member.id === server.ownerID) { // Bypass for the server owner.
                    if (amount >= 100) 
                        return Channel.send(`Oopsie! \nYou can\'t clear more than 100 messages in one go! ${Member}`) // If amount is over 100 then it raises an error.
                    } 
                    else {
                        bool = true
                    }
                    let maxAmount;
                    if (amount > 99) maxAmount = 100
                    else maxAmount = amount
                    for (Channel.bulkDelete(String(maxAmount + 1), bool); amount >= 0; amount -= 100) {
                        if (amount > 99) maxAmount = 100
                        else if (amount > 0) maxAmount = amount
                        else break
                        Channel.bulkDelete(String(maxAmount), bool)

                    const embed = new MessageEmbed()
                    .setDescription(`${amount} messages purged!`)
                    .setThumbnail('https://c.tenor.com/yheo1GGu3FwAAAAd/rick-roll-rick-ashley.gif')
                    .setColor('#00ADEF')
                    .setTimestamp()
                    receivedMessage.channel.send(embed)
                    
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}