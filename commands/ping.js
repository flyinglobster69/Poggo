module.exports = {
    checkPing: function(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand) {
            case 'ping' :
                receivedMessage.channel.send("Pong!")
                receivedMessage.channel.send(`🏓Latency is ${Date.now() - receivedMessage.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms *(Disclaimer: these numbers might not be entirely accurate)*`)
        }
        // value of 'found' will be returned in index.js
        return found
    }
}