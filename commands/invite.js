module.exports = {
    checkInvite: function(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog horny'
            case 'invite' :
                receivedMessage.channel.send("Invite me at https://discord.com/oauth2/authorize?client_id=837148121934725141&scope=bot&permissions=518152") // horny bad
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}