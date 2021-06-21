module.exports = {
    checkCount: function(receivedMessage) {
    const {MessageAttachment} = require('discord.js')
    const fs = require('fs')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    found = false

        switch(primaryCommand.toLowerCase()) {
            case 'count' :
                let argsstring = arguments.toString()
                let sliceuid = argsstring.slice(3, -1)
                var argsuid = "pogcount" + sliceuid + ".txt"
                var uid = "pogcount" + parseInt(receivedMessage.author.id).toString() + ".txt"

                if (arguments == "") {
                    fs.open('./pogcount/' + uid, 'r', function(error, fd) {
                        fs.readFile('./pogcount/' + uid, "utf8", function(error, data) {
                            if (error) {
                                receivedMessage.channel.send("Oops you have no pogs :(")
                            }
                            else {
                                receivedMessage.channel.send("You've sent \`" + data + "\` pogs")
                            }
                        })
                    })
                }
                else {
                    fs.open('./pogcount/' + argsuid, 'r', function(error, fd) {
                        fs.readFile('./pogcount/' + argsuid, "utf8", function(error, data) {
                            if (error) {
                                receivedMessage.channel.send("Oops they have no pogs :(")
                            }
                            else {
                                receivedMessage.channel.send("They sent \`" + data + "\` pogs")
                            }
                        })
                    })
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}