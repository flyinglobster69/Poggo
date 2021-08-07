module.exports = {
    checkPog: function(receivedMessage) {
    const fs = require('fs') // connect fs module
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand) { // called when messages says 'pog'
            case '' :
                const random = Math.floor(Math.random() * 20) // generates a random number between 1-20
                if (random == 5) { // if random number = 5, send 'life is pain :(' instead of 'Poggers!'
                    receivedMessage.channel.send("life is pain :(")
                }
                else { // poggers reply
                    receivedMessage.channel.send("Poggers!")
                }
                var uid = "pogcount" + parseInt(receivedMessage.author.id).toString() + ".txt" // takes the message author uid and puts it into the file name
                fs.open('./pogcount/' + uid, 'r+', function(error, fd) { // opens the user's pog count file
                    if (error) { // if user has no pog count file, create one
                        fs.writeFile('./pogcount/' + uid, "1", "utf8", function(error, data) { // start user with 1 pog
                            null
                        })
                    }
                    else { // if user has a pog count file
                        fs.readFile('./pogcount/' + uid, "utf8", function(error, data) { // read the value in the pog count file
                            if (error) { // if file does not exist, create one (this is unlikely to be needed)
                                fs.writeFile('./pogcount/' + uid, "1", "utf8", function(error, data) { // start user with 1 pog
                                    null
                                })
                            }
                            else { // log pogs
                                let pogcount = data // initialize pog count variable and assign it to data from fs.readFile()
                                var pogint = parseInt(pogcount) // convert pog count to an int variable
                                var pogtotal = pogint + 1 // add 1 to the pog count
                                var pogtotalstring = pogtotal.toString() // convert new pog count back to string value
                                fs.write(fd, pogtotalstring, 0, "utf8", function(error, writtenbytes) { // overwrite the old pog count value with the new one
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