module.exports = {
    checkButter: function(receivedMessage) {

    const {MessageEmbed} = require('discord.js')

    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    function randomButter(butter) {
        return butter[Math.floor(Math.random() * butter.length)]
    }
    const butter = ["https://c.tenor.com/JPkgI9Se-MkAAAAd/plane-airplane.gif", "https://media1.tenor.com/images/9475b573a143c5a765caad621bdc82ec/tenor.gif", "https://c.tenor.com/mmRn1NnX5WkAAAAC/boeing-rfs.gif", "https://c.tenor.com/A9NhMybRH9YAAAAd/airplane-aircraft.gif", "https://c.tenor.com/CwNYY_Yq5AYAAAAC/airplane-landing.gif", "https://c.tenor.com/yeDN9Yjixh8AAAAd/plane-landing-scary.gif", "https://c.tenor.com/Pd7BBiLBDrgAAAAd/butter-a330.gif"]
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog butter'
            case 'butter' :
                // receivedMessage.channel.send(butter)
                const embed = new MessageEmbed()
                .setTitle('mmmm b u t t e r 🛬')
                .setDescription('https://youtu.be/lowrM-780tg 🧈')
                .setImage(randomButter(butter))
                .setColor('#FFFF00')
                receivedMessage.channel.send(embed)
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}