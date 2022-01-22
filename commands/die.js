module.exports = {
    checkDie: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command

    function randomReply(reply) {
        return reply[Math.floor(Math.random() * reply.length)]
    }
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog die'
            case 'die' :
                var reply = ['no u :)', 
                    'Death is inevitable, why procrastinate? 💀', 
                    '```Your PC ran into a problem and needs to restart!```', 
                    'e', 
                    'I\'m not alive :)', 
                    'why?']
                    
                const embed = new MessageEmbed()
                .setDescription('<@!' + receivedMessage.author.id + '> ' + randomReply(reply))
                .setColor('#0827F5')
                .setImage('https://c.tenor.com/8YJd3Lvu67IAAAAC/peppa-pig-minecraft.gif')
                .setTimestamp()
                receivedMessage.channel.send(embed)
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}