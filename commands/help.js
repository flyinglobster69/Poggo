module.exports = {
    checkHelp: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    const color = '#00ff00'
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog help'
            case 'help' : 
                if (arguments.includes("add")) {
                    const embed = new MessageEmbed()
                    .setTitle(`\`pog add\``)
                    .setDescription(`Adds two numbers together and returns the sum.

Usage: \`pog add [first number] [second number]\` (no operator symbols)`)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                }
                else if (arguments.includes("subtract")) {
                    const embed = new MessageEmbed()
                    .setTitle(`\`pog subtract\``)
                    .setDescription(`Subtracts the second number from the first number and returns the difference.

Usage: \`pog subtract [first number] [second number]\` (no operator symbols)`)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                }
                else if (arguments.includes("multiply")) {
                    const embed = new MessageEmbed()
                    .setTitle(`\`pog multiply\``)
                    .setDescription(`Multiplies two numbers together and returns the product.

Usage: \`pog multiply [first number] [second number]\` (no operator symbols)`)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                }
                else if (arguments.includes("divide")) {
                    const embed = new MessageEmbed()
                    .setTitle(`\`pog divide\``)
                    .setDescription(`Divides the first number by the second number and returns the quotient.

Usage: \`pog divide [first number] [second number]\` (no operator symbols)`)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                }
                else if (arguments.includes("exe")) {
                    const embed = new MessageEmbed()
                    .setTitle(`\`pog exe\``)
                    .setDescription(`Takes any text input after \`pog exe\` and returns the text with \`.exe\` at the end of it.

Usage: \`pog exe [any text]\``)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                }
                else if (arguments.includes("genshin")) {
                    const embed = new MessageEmbed()
                    .setTitle(`\`pog smol\``)
                    .setDescription(`Takes the text input after \`pog smol\` and interprets it as a Genshin Impact character name and returns a 'smol' pfp of that character (if available)

Usage: \`pog smol [character]\``)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                }
                else if (arguments.includes("sm")) {
                    const embed = new MessageEmbed()
                    .setTitle(`\`pog sm\``)
                    .setDescription(`Takes the text input after \`pog sm\` and interprets it as a Genshin Impact Stellar Moments soundtrack and returns the YouTube link to the song.

Usage: \`pog sm [character]\``)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                }
                else if (arguments.includes("count")) {
                    const embed = new MessageEmbed()
                    .setTitle(`\`pog count\``)
                    .setDescription(`Returns your current \`pog\` count or another user's \`pog\` count if specified.

Notice: If you mention another user that has no nickname, this command might not work. 

Usage: \`pog count\` (to check your \`pog\` count); \`pog count [@user]\` (mention the user you want to check the \`pog\` count for)`)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                }
                else if (arguments.includes("ecount")) {
                    const embed = new MessageEmbed()
                    .setTitle(`\`pog ecount\``)
                    .setDescription(`Returns your current \`e\` count or another user's \`e\` count if specified.

Notice: If you mention another user that has no nickname, this command might not work. 

Usage: \`pog ecount\` (to check your \`e\` count); \`pog ecount [@user]\` (mention the user you want to check the \`e\` count for)`)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                }
                else if (arguments.includes("wish")) {
                    const embed = new MessageEmbed()
                    .setTitle(`\`pog wish\``)
                    .setDescription(`A Genshin Impact wish simulation command.

Notice: The command only accepts single wishes or 10-wishes, as per the actual game. The pity system for 10-pulls also doesn't work (it works for singles but is a separate system).

Usage: \`pog wish\` (to do one wish); \`pog wish 10\` (to do a 10-pull wish)`)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                }
                else if (arguments.includes("help")) {
                    const embed = new MessageEmbed()
                    .setTitle(`Need more clarification?`)
                    .setDescription(`For more information about individual commands, click here: https://bit.ly/3h872Sg`)
                    .setColor('#01796f')
                    receivedMessage.channel.send(embed)
                }
                else {
                    const embed = new MessageEmbed()
                    .setTitle(`Prefix\: \`pog\``) 
                    .setDescription(`Command list\: \nBot Commands: \`help\`, \`test\`, \`code\`, \`user\`, \`ping\`, \`version\`, \`readme\`;
Troll Commands: \`biden\`, \`trump\`, \`buff\`, \`pirate\`, \`windows\`, \`start\`, \`butter\`, \`american\`, \`horny\`, \`isearthround\`, \`die\`;
Bigger Commands\: \`exe [insert text here]\`, \`smol [insert genshin waifu here]\`, \`sm [insert character name here]\`, \`wish [10]\`;
Count Commands: \`count [@user]\`, \`ecount [@user]\`;
Math commands\: \`add [number number]\`, \`subtract [number number]\`, \`multiply [number number]\`, \`divide [number number]\`;
Decimal points currently not supported.

Use \`pog help [command]\` on Math and Bigger commands for elaboration on command usage and operation, or \`pog help help\` to get a link to the bot's website for in-depth instructions.

Please note that the bot will collect and store Discord User IDs when the user sends their first pog. 
This allows the bot to count the number of pogs a user has.

More commands will be available over time.`) // lists commands and notices
                    .setColor('#00ADEF')
                    receivedMessage.channel.send(embed)
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}