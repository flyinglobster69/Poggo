module.exports = {
    checkCount: function(receivedMessage) {
    const fs = require('fs') // connect fs module
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog count'
            case 'count' :
                let argsstring = arguments.toString() // converts 'arguments' to string-type
                let sliceuid = argsstring.slice(3, -1) // removes the '<@!' and '>' from the mention
                var argsuid = "pogcount" + parseInt(sliceuid).toString() + ".txt" // sets the mention uid into the file name for ident

                var uid = "pogcount" + parseInt(receivedMessage.author.id).toString() + ".txt" // sets sender uid into the file name for ident

                if (arguments == '') { // if there are no arguments (user looking for their own pog count)
                    fs.open('./pogcount/' + uid, 'r', function(error, fd) { // open the user's pog count txt file
                        fs.readFile('./pogcount/' + uid, "utf8", function(error, data) { // read the user's pog count txt file
                            if (error) { // if there is no file, that means the user has sent no pogs
                                receivedMessage.channel.send("<@!" + receivedMessage.author.id + ">" + " Oops you have no pogs :(")
                            }
                            else { // if the file exists, send the number of pogs into the chat
                                receivedMessage.channel.send("<@!" + receivedMessage.author.id + ">" + " You've sent \`" + data + "\` pogs")
                            }
                        })
                    })
                }
                else { // if there are arguments (user requested another user's pog count)
                    fs.open('./pogcount/' + argsuid, 'r', function(error, fd) { // open the mentioned user's pog count file
                        fs.readFile('./pogcount/' + argsuid, "utf8", function(error, data) { // read the mentioned user's pog count file
                            if (error) { // if there is no file, that means the mentioned user has sent no pogs
                                receivedMessage.channel.send("<@!" + receivedMessage.author.id + ">" + " Oops they have no pogs :(")
                            }
                            else { // if the file exists, send the number of pogs in the chat
                                receivedMessage.channel.send("<@!" + receivedMessage.author.id + ">" + " They sent \`" + data + "\` pogs")
                            }
                        })
                    })
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}