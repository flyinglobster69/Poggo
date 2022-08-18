const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    checkDm: function(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    var uid = splitCommand.slice(1) // user id - the user the dm is directed to
    var message = splitCommand.slice(2) // message to be sent through dm
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog dm'
            case 'dm' :

                // /**
                //  * @param {Client} client 
                //  * @param {Message} message 
                //  * @param {String[]} args 
                //  */
                // run: async(client, message, args) => {
                //     const user = uid || receivedMessage.guild.members.cache.get(args[0])?.user;

                //     user.send(args[1])
                // }
            }
        // value of 'found' will be returned in bot.js
        return found
    }
}