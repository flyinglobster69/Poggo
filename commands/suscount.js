module.exports = {
    checkSuscount: function(receivedMessage) {
    const fs = require('fs') // connect fs module
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog suscount'
            case 'suscount' :
                let argsstring = arguments.toString() // converts 'arguments' to string-type
                let sliceuid = argsstring.slice(3, -1) // removes the '<@!' and '>' from the mention
                var argsuid = 'suscount' + parseInt(sliceuid).toString() + '.txt' // sets the mention uid into the file name for ident

                var uid = 'suscount' + parseInt(receivedMessage.author.id).toString() + '.txt' // sets sender uid into the file name for ident

                if (arguments == '') { // if there are no arguments (user looking for their own esuscount)
                    fs.open('./suscount/' + uid, 'r', function(error, fd) { // open the user's sus count txt file
                        fs.readFile('./suscount/' + uid, 'utf8', function(error, data) { // read the user's sus count txt file
                            if (error) { // if there is no file, that means the user has sent no sus
                                receivedMessage.reply('<@!' + receivedMessage.author.id + '>' + ' You\'re apparently not a sussy baka 🤔')
                            }
                            else { // if the file exists, send the number of sus into the chat
                                receivedMessage.reply('<@!' + receivedMessage.author.id + '>' + ' You\'ve said \'sus\' \`' + data + '\` times, you\'re a sussy baka.')
                            }
                        })
                    })
                }
                else { // if there are arguments (user requested another user's sus count)
                    fs.open('./suscount/' + argsuid, 'r', function(error, fd) { // open the mentioned user's e count file
                        fs.readFile('./suscount/' + argsuid, 'utf8', function(error, data) { // read the mentioned user's e count file
                            if (error) { // if there is no file, that means the mentioned user has sent no sus
                                receivedMessage.reply('<@!' + receivedMessage.author.id + '>' + ' They\'re apparently not a sussy baka 🤔')
                            }
                            else { // if the file exists, send the number of sus in the chat
                                receivedMessage.reply('<@!' + receivedMessage.author.id + '>' + ' They said \'sus\' \`' + data + '\` times, they\'re a sussy baka.')
                            }
                        })
                    })
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
} 