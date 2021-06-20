module.exports = {
    checkGenshin: function(receivedMessage) {
    const {MessageAttachment} = require('discord.js')

    // Connect Genshin pfps
    const ganyupfp = new MessageAttachment('./smolgenshin/ganyu_pfp.png')
    const keqingpfp = new MessageAttachment('./smolgenshin/keqing_pfp.png')
    const noellepfp = new MessageAttachment('./smolgenshin/noelle_pfp.png')
    const barbarapfp = new MessageAttachment('./smolgenshin/barbara_pfp.png')
    const monapfp = new MessageAttachment('./smolgenshin/mona_pfp.png')
    const kleepfp = new MessageAttachment('./smolgenshin/klee_pfp.png')
    const qiqipfp = new MessageAttachment('./smolgenshin/qiqi_pfp.png')
    const fischlpfp = new MessageAttachment('./smolgenshin/fischl_pfp.png')
    const sucrosepfp = new MessageAttachment('./smolgenshin/sucrose_pfp.png')
    const hutaopfp = new MessageAttachment('./smolgenshin/hutao_pfp.png')
    const eulapfp = new MessageAttachment('./smolgenshin/eula_pfp.png')

    const chibizhongli = new MessageAttachment('./smolgenshin/chibi_zhongli.jpg')

    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    found = false

        switch(primaryCommand.toLowerCase()) {
            case 'genshin' :
                if (arguments.includes("ganyu")) {
                    receivedMessage.channel.send("Ganyu poggers UwU")
                    receivedMessage.channel.send(ganyupfp)
                }
                else if (arguments.includes("keqing")) {
                    receivedMessage.channel.send("Keqing poggers UwU")
                    receivedMessage.channel.send(keqingpfp)
                }
                else if (arguments.includes("noelle")) {
                    receivedMessage.channel.send("Noelle poggers UwU")
                    receivedMessage.channel.send(noellepfp)
                }
                else if (arguments.includes("barbara")) {
                    receivedMessage.channel.send("Barbara poggers UwU")
                    receivedMessage.channel.send(barbarapfp)
                }
                else if (arguments.includes("mona")) {
                    receivedMessage.channel.send("Mona poggers UwU")
                    receivedMessage.channel.send(monapfp)
                }
                else if (arguments.includes("klee")) {
                    receivedMessage.channel.send("Klee poggers UwU")
                    receivedMessage.channel.send(kleepfp)
                }
                else if (arguments.includes("qiqi")) {
                    receivedMessage.channel.send("Qiqi poggers UwU")
                    receivedMessage.channel.send(qiqipfp)
                }
                else if (arguments.includes("fischl")) {
                    receivedMessage.channel.send("Fischl poggers UwU")
                    receivedMessage.channel.send(fischlpfp)
                }
                else if (arguments.includes("sucrose")) {
                    receivedMessage.channel.send("Sucrose poggers UwU")
                    receivedMessage.channel.send(sucrosepfp)
                }
                else if (arguments.includes("hutao")) {
                    receivedMessage.channel.send("Hu Tao poggers UwU")
                    receivedMessage.channel.send(hutaopfp)
                }
                else if (arguments.includes("eula")) {
                    receivedMessage.channel.send("Eula poggers UwU")
                    receivedMessage.channel.send(eulapfp)
                }
                else if (arguments.includes("zhongli")) {
                    receivedMessage.channel.send("In terms of mora, we have no mora.")
                    receivedMessage.channel.send(chibizhongli)
                }
                else {
                    receivedMessage.channel.send("Oops the smol character pfp doesn't exist, the available characters are: `ganyu`, `keqing`, `noelle`, `barbara`, `mona`, `klee`, `qiqi`, `fischl`, `sucrose`, `hutao`, `eula`. Ex. `pog genshin ganyu` (use lowercase)")
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}