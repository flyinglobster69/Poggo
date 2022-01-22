module.exports = {
    checkIsearthround: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command

    function randomReply(reply) {
        return reply[Math.floor(Math.random() * reply.length)]
    }
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog isearthround'
            case 'isearthround' :
                const reply = ['Yes Earth is round ya dingus!', 'Is it? Why are the sun and moon round?', 
                    'Yes, no, maybe (?) - if its flat then you should be flat on the ground rather than 3D', 
                    'Thats like... elementary school knowledge lmao (yes earth is round)', 
                    'Logically speaking, if the Earth isn\'t round, there wouldn\'t be sunrises and sunsets everywhere in the world. If Earth is flat, airlines wouldn\'t fly their aircraft in curved \'longer routes\', notably Qantas flights between Sydney and New York, which take over 20 hours.', 
                    'Oui oui... baguette', 
                    'Technically if the earth is flat, then everything should be flat and 2D... ~~*Anime*~~', 
                    'I believe so...', 'No, earth is a baguette.']

                const embed = new MessageEmbed()
                .setDescription('<@!' + receivedMessage.author.id + '> ' + randomReply(reply))
                .setTitle('Is earth round?')
                .setImage('https://i.imgflip.com/1qr9fk.jpg')
                .setColor('#00ff00')
                .setTimestamp()
                receivedMessage.channel.send({ embeds: [embed]}) 
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}