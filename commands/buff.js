module.exports = {
    checkBuff: function(receivedMessage) {
    const {MessageAttachment} = require('discord.js')
    const buff = new MessageAttachment('buff.jpg') // connect buff.jpg attachment

    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog buff'
            case 'buff' :
                receivedMessage.channel.send(buff) // send buff.jpg attachment in chat
                receivedMessage.channel.send("\"A veteran of several wars, the B-52 has dropped only conventional munitions in combat. The B-52's official name Stratofortress is rarely used; informally, the aircraft has become commonly referred to as the BUFF (Big Ugly Fat Fu*ker/Fella).\" - Wikipedia") // sends a caption
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}