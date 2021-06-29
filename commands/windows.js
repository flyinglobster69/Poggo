module.exports = {
    checkWindows: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog windows'
            case 'windows' :
                // receivedMessage.channel.send(chilledwindows) // sends a virus
                const embed = new MessageEmbed()
                .setTitle('Windows 11 Installer')
                .setDescription(`Install Windows 11 using the installer, I promise it\'s safe :)

(for legal reasons, this is a joke)`)
                .setImage('https://c.s-microsoft.com/en-us/CMSImages/1399_Panel01_Hero_WindowsSV.jpg?version=7b8fd32d-ae59-c18a-c858-7f309b21ec98')
                .attachFiles('./win11_installer.exe')
                receivedMessage.channel.send(embed)
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}