module.exports = {
    checkWish: function(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand) { // called when messages says 'pog wish'
            case 'wish' :
                const random = Math.floor(Math.random() * 20) // generates a random number between 1-20
                if (random == 5) { // if random number = 5, send 'life is pain :(' instead of 'Poggers!'
                    console.log("Noted.")
                    receivedMessage.channel.send("life is pain :(")
                }
                else { // poggers reply
                    receivedMessage.channel.send("Poggers!")
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}