module.exports = {
    checkExe: function(receivedMessage) {
    const fs = require('fs') // connect fs module
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog exe'
            case 'exe' :
                receivedMessage.channel.send(receivedMessage.content.substr(8) + ".exe") // send arguments with '.exe' at the end of it
                // let buffer = new Buffer.from(`
                // Command: ${receivedMessage.content.substr(8)};`)
                // fs.open('./msghistory/' + `msghistory${receivedMessage.author.username}.txt`, 'a', function(error, fd) { // open message sender's log file
                //     fs.write(fd, buffer, 0, buffer.length, null, function(err, writtenbytes) { // append the arguments to the bottom of the log file
                //         if (err) { // if the file doesn't exist, create one
                //             fs.writeFile('./msghistory/' + `msghistory${receivedMessage.author.username}.txt`, `Command: ${receivedMessage.content.substr(8)}; 
                //             Username: ${receivedMessage.author.username}; 
                //             UID: ${receivedMessage.author.id}`, "utf8", function(error, data){
                //                 console.log("Write complete");
                //             })
                //         }
                //         else { // if the file exists, save data
                //             console.log("File exists, write complete");
                //         }
                //     })
                // })
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}