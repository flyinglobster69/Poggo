module.exports = {
    checkPog: function(receivedMessage) {
    const fs = require('fs')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand) {
            case '' :
                const random = Math.floor(Math.random() * 20)
                if (random == 5) {
                    console.log("Noted.")
                    receivedMessage.channel.send("life is pain :(")
                }
                else {
                    receivedMessage.channel.send("Poggers!")
                }
                var uid = "pogcount" + parseInt(receivedMessage.author.id).toString() + ".txt"
                console.log(uid)
                fs.open('./pogcount/' + uid, 'r+', function(error, fd) {
                    if (error) {
                        fs.writeFile('./pogcount/' + uid, "1", "utf8", function(error, data) {
                            console.log("Write complete")
                        })
                    }
                    else {
                        fs.readFile('./pogcount/' + uid, "utf8", function(error, data) {
                            if (error) {
                                fs.writeFile('./pogcount/' + uid, "1", "utf8", function(error, data) {
                                    console.log("Write complete")
                                })
                            }
                            else {
                                console.log(data)
                                let pogcount = data
                                var pogint = parseInt(pogcount)
                                var pogtotal = pogint + 1
                                var pogtotalstring = pogtotal.toString()
                                fs.write(fd, pogtotalstring, 0, "utf8", function(error, writtenbytes) {
                                    console.log("Pog counted")
                                    console.log(pogtotal)
                                })
                            }
                        })
                    }
                })
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}