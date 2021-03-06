module.exports = {
    checkEcount: function(receivedMessage) {
    const fs = require('fs') // connect fs module
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog count'
            case 'ecount' :
                let argsstring = arguments.toString() // converts 'arguments' to string-type
                let sliceuid = argsstring.slice(3, -1) // removes the '<@!' and '>' from the mention
                var argsuid = 'ecount' + parseInt(sliceuid).toString() + '.txt' // sets the mention uid into the file name for ident

                var uid = 'ecount' + parseInt(receivedMessage.author.id).toString() + '.txt' // sets sender uid into the file name for ident

                if (arguments == '') { // if there are no arguments (user looking for their own e count)
                    fs.open('./ecount/' + uid, 'r', function(error, fd) { // open the user's e count txt file
                        fs.readFile('./ecount/' + uid, 'utf8', function(error, data) { // read the user's e count txt file
                            if (error) { // if there is no file, that means the user has sent no e
                                receivedMessage.reply('<@!' + receivedMessage.author.id + '>' + ' Where e?')
                            }
                            else { // if the file exists, send the number of e into the chat
                                receivedMessage.reply('<@!' + receivedMessage.author.id + '>' + ' You\'ve said \'e\' \`' + data + '\` times')
                            }
                        })
                    })
                }
                else { // if there are arguments (user requested another user's e count)
                    fs.open('./ecount/' + argsuid, 'r', function(error, fd) { // open the mentioned user's e count file
                        fs.readFile('./ecount/' + argsuid, 'utf8', function(error, data) { // read the mentioned user's e count file
                            if (error) { // if there is no file, that means the mentioned user has sent no e
                                receivedMessage.reply('<@!' + receivedMessage.author.id + '>' + ' no e sadge')
                            }
                            else { // if the file exists, send the number of e in the chat
                                receivedMessage.reply('<@!' + receivedMessage.author.id + '>' + ' They said \'e\' \`' + data + '\` times')
                            }
                        })
                    })
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}