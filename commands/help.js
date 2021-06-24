module.exports = {
    checkHelp: function(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog help'
            case 'help' : 
                receivedMessage.channel.send(`Prefix\: \`pog\`; 
Command list\: \`help\`, \`test\`, \`horny\`, \`biden\`, \`trump\`, \`andrew\`, \`buff\`, \`user\`, \`pirate\`, \`invite\`, \`windows\`;
Bigger Commands\: \`exe [insert text here]\`, \`genshin [insert genshin waifu here]\`, \`sm [insert character name here]\`, \`undelete [module]\`, \`count [@user]\`;
Math commands\: \`add [number number]\`, \`subtract [number number]\`, \`multiply [number number]\`, \`divide [number number]\`;
Decimal points currently not supported.

Please note that the bot will collect and store Discord User IDs when the user sends their first pog. 
This allows the bot to count the number of pogs a user has.

More commands will be available over time.`) // lists commands and notices
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}