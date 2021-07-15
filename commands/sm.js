module.exports = {
    checkStellarMoments: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    const sm = 'https://game.video.tm/wp-content/uploads/sites/10/2021/02/Genshin-Impact-Character-OST-Album-The-Stellar-Moments.jpg'
    const color = '#191a36'
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog sm'
            case 'sm' :
                // Soundtracks
                if (arguments.includes("ganyu")) {
                    const embed = new MessageEmbed()
                    .setTitle(`Qilin's Prance (Ganyu)`)
                    .setURL('https://youtu.be/vV7OmRpgXh4')
                    .setImage(sm)
                    .setColor(color)
                    receivedMessage.channel.send(embed) // legit just sends yt links lmao
                }
                else if (arguments.includes("keqing")) {
                    const embed = new MessageEmbed()
                    .setTitle(`Nimble as Lightning (Keqing)`)
                    .setURL('https://youtu.be/vMeaJGQMvmw')
                    .setImage(sm)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                }
                else if (arguments.includes("zhongli")) {
                    const embed = new MessageEmbed()
                    .setTitle(`Rex Incognito (Rex Lapis)`)
                    .setURL('https://youtu.be/SBfoWTB-T_U')
                    .setImage(sm)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                }
                else if (arguments.includes("mona")) {
                    const embed = new MessageEmbed()
                    .setTitle(`Surge of Prophecies (Mona)`)
                    .setURL('https://youtu.be/xG4EDhX4tRg')
                    .setImage(sm)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                }
                else if (arguments.includes("qiqi")) {
                    const embed = new MessageEmbed()
                    .setTitle(`Preserver of Fortune (Qiqi)`)
                    .setURL('https://youtu.be/5prZq3ya7f0')
                    .setImage(sm)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                }
                else if (arguments.includes("venti")) {
                    const embed = new MessageEmbed()
                    .setTitle(`Bard's Adventure (drunk bard)`)
                    .setURL('https://youtu.be/Oofw4zlXcNg')
                    .setImage(sm)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                }
                else if (arguments.includes("xinyan")) {
                    const embed = new MessageEmbed()
                    .setTitle(`Rockin' With Fire (Xinyan)`)
                    .setURL('https://youtu.be/diS-Mnwn7GI')
                    .setImage(sm)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                }
                else if (arguments.includes("xiangling")) {
                    const embed = new MessageEmbed()
                    .setTitle(`Flaming Fry (Xiangling)`)
                    .setURL('https://youtu.be/HXxPv9a_TnA')
                    .setImage(sm)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                }
                else if (arguments.includes("diona")) {
                    const embed = new MessageEmbed()
                    .setTitle(`Exclusive Specialty (Diona)`)
                    .setURL('https://youtu.be/qwlplyAJjjM')
                    .setImage(sm)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                }
                // Doubles
                else if (arguments.includes("childe1")) {
                    const embed = new MessageEmbed()
                    .setTitle(`Letter from Ajax (Ajax)`)
                    .setURL('https://youtu.be/AXjnVSZozYI')
                    .setImage(sm)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                }
                else if (arguments.includes("childe2")) {
                    const embed = new MessageEmbed()
                    .setTitle(`From Snehznaya with Boldness (Ajax)`)
                    .setURL('https://youtu.be/jUny1b9UnJw')
                    .setImage(sm)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                }
                else if (arguments.includes("fischl1")) {
                    const embed = new MessageEmbed()
                    .setTitle(`Ouvertüre der ewigen Nacht (Prinzessin der Verurteilung)`)
                    .setURL('https://youtu.be/M4A6EDbWgzA')
                    .setImage(sm)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                }
                else if (arguments.includes("fischl2")) {
                    const embed = new MessageEmbed()
                    .setTitle(`Sieh an, mein Sommernachtgarten! (Prinzessin der Verurteilung)`)
                    .setURL('https://youtu.be/yr5GC1AZ6b4')
                    .setImage(sm)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                }
                else if (arguments.includes("klee1")) {
                    const embed = new MessageEmbed()
                    .setTitle(`Let's go, Crimson Knight! (terrorist loli)`)
                    .setURL('https://youtu.be/qQE1yJAoSYY')
                    .setImage(sm)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                }
                else if (arguments.includes("klee2")) {
                    const embed = new MessageEmbed()
                    .setTitle(`Where the Sunlight Flees (terrorist loli)`)
                    .setURL('https://youtu.be/wzScVV24XYU')
                    .setImage(sm)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                }
                else if (arguments.includes("albedo1")) {
                    const embed = new MessageEmbed()
                    .setTitle(`Contemplation in Snow (Albedo)`)
                    .setURL('https://youtu.be/GCnIxGuC740')
                    .setImage(sm)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
               }
                else if (arguments.includes("albedo2")) {
                    const embed = new MessageEmbed()
                    .setTitle(`Genius of Takwin (Albedo)`)
                    .setURL('https://youtu.be/Fpt9YMaceqA')
                    .setImage(sm)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                }

                // Confirm doubles
                else if (arguments == "childe") {
                    receivedMessage.channel.send("Try `childe1` or `childe2` :)")
                }
                else if (arguments == "fischl") {
                    receivedMessage.channel.send("Try `fischl1` or `fischl2` :)")
                }
                else if (arguments == "klee") {
                    receivedMessage.channel.send("Try `klee1` or `klee2` :)")
                }
                else if (arguments == "albedo") {
                    receivedMessage.channel.send("Try `albedo1` or `albedo2` :)")
                }
                else { // called if character has no stellar moments soundtrack
                    const embed = new MessageEmbed()
                    .setURL(`Uh oh, this character has no Stellar Moments Soundtrack :(
                        
The characters are: \`ganyu\`, \`keqing\`, \`zhongli\`, \`mona\`, \`qiqi\`, \`venti\`, \`xinyan\`, \`xiangling\`, \`diona\`, \`childe\`, \`fischl\`, \`klee\`, \`albedo\`.
If you selected one of these characters, be sure the name is in *lowercase* and try again.`)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}