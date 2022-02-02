module.exports = {
    checkExe: function(receivedMessage) {
    const {MessageEmbed, MessageAttachment} = require('discord.js')
    const fs = require('fs')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    let filename = receivedMessage.content.substr(8)

    // function createFile() { // creates the exe file (file does nothing)
    //     fs.writeFile(`./${filename}.exe`, 'deeznuts', 'utf8', function (error, data) {
    //         null
    //     })
    // }
    // function deleteFile() { // deletes the created exe file
    //     fs.unlink(`./${filename}.exe`, function (err) {
    //         null
    //     })
    // }

    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog exe'
            case 'exe' :
                if (receivedMessage.content.length < 14) {

                    // createFile() // create exe file
                    // var file = new MessageAttachment(`./${filename}.exe`) // exe file message attachment

                    const embed = new MessageEmbed()
                    .setTitle(filename + '.exe')
                    .setDescription('sussy baka!')
                    .setThumbnail('https://aux2.iconspalace.com/uploads/448592549.png')
                    .setURL('https://bit.ly/3h872Sg')
                    .setTimestamp()
                    receivedMessage.reply({ embeds: [embed]}) // send arguments with '.exe' at the end of it
                    // receivedMessage.reply(file)

                    // deleteFile() // delete created exe file
                }
                else {
                    null
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}