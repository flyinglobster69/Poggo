module.exports = {
    checkPog: function(receivedMessage) {
    const fs = require('fs')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand) {
            case '' :
                receivedMessage.channel.send("Poggers!")
                fs.open('./pogcount/' + `pogcount${receivedMessage.author.username}.txt`, 'r+', function(error, fd) {
                    if (error) {
                        fs.writeFile('./pogcount/' + `pogcount${receivedMessage.author.username}.txt`, "1", "utf8", function(error, data) {
                            console.log("Write complete")
                        })
                    }
                    else {
                        fs.readFile('./pogcount/' + `pogcount${receivedMessage.author.username}.txt`, "utf8", function(error, data) {
                            if (error) {
                                fs.writeFile('./pogcount/' + `pogcount${receivedMessage.author.username}.txt`, "1", "utf8", function(error, data) {
                                    console.log("Write complete")
                                })
                            }
                            else {
                                console.log(data)
                                let pogcount = data
                                var pogint = parseInt(pogcount)
                                var pogtotal = pogint + 1
                                fs.write(fd, pogtotal, 0, "utf+8", function(error, writtenbytes) {
                                    console.log("Pog counted")
                                    console.log(pogtotal)
                                })
                                // console.log(data)
                                // console.log(pogint)
                                // console.log(pogtotal)
                            }
                        })
                    }
                })
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}