module.exports = {
    checkHelp: function(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand.toLowerCase()) {
            case 'help' :
                receivedMessage.channel.send(`Prefix\: \`pog\`; 
                Command list\: \`help\`, \`version\`, \`test\`, \`horny\`, \`biden\`, \`trump\`, \`andrew\`, \`buff\`, \`user\`, \`pirate\`, \`exe [insert text here]\`, \`genshin [insert genshin waifu here]\`, \`sm [insert character name here]\`, \`undelete [module]\`, \`count [@user]\`;
                Math commands\: \`add [number number]\`, \`subtract [number number]\`, \`multiply [number number]\`, \`divide [number number]\`;
                Decimal points currently not supported.

                More commands will be available over time.`)
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}