module.exports = {
    checkExe: function(receivedMessage) {
    const fs = require('fs')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand) {
            case 'exe' :
                receivedMessage.channel.send(receivedMessage.content.substr(8) + ".exe")
                let buffer = new Buffer.from(`
                Command: ${receivedMessage.content.substr(8)};`)
                fs.open('./msghistory/' + `msghistory${receivedMessage.author.username}.txt`, 'a', function(error, fd) {
                    fs.write(fd, buffer, 0, buffer.length, null, function(err, writtenbytes) {
                        if (err) {
                            fs.writeFile('./msghistory/' + `msghistory${receivedMessage.author.username}.txt`, `Command: ${receivedMessage.content.substr(8)}; 
                            Username: ${receivedMessage.author.username}; 
                            UID: ${receivedMessage.author.id}`, "utf8", function(error, data){
                                console.log("Write complete");
                            })
                        }
                        else {
                            console.log("File exists, write complete");
                        }
                    })
                })
        }
        // value of 'found' will be returned in index.js
        return found
    }
}