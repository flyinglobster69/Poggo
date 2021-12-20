module.exports = {
    checkShip: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    const firstperson = splitCommand.slice(1)
    const secondperson = splitCommand.slice(2)
    
    const heartpulse = "<:heartpulse:921853430161637418>"
    const brokenheart = "<:broken_heart:921853650400333904>"
    const hearteyes = "<:heart_eyes:921854451722104873>"

    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog lovecalc'
            case 'ship' :

                var percent = Math.floor(Math.random() * 100)

                if (arguments == "") {
                    if (percent < 30) {
                        const embed = new MessageEmbed()
                        .setTitle(`${brokenheart} ${percent}%`)
                        .setDescription(`<@!${receivedMessage.author.id}>'s compatibility with someone ${heartpulse}`)
                        .setColor('#00ADEF')
                        .setFooter("Maybe try someone else ;-;")
                        receivedMessage.channel.send(embed)
                    }
                    else if (percent > 80) {
                        const embed = new MessageEmbed()
                        .setTitle(`${hearteyes} ${percent}%`)
                        .setDescription(`<@!${receivedMessage.author.id}>'s compatibility with someone ${heartpulse}`)
                        .setColor('#ECC60D')
                        .setFooter("You're in luck!")
                        receivedMessage.channel.send(embed)
                    }
                    else {
                        const embed = new MessageEmbed()
                        .setTitle(`${heartpulse} ${percent}%`)
                        .setDescription(`<@!${receivedMessage.author.id}>'s compatibility with someone ${heartpulse}`)
                        .setColor('#FFC0CB')
                        .setFooter("Very nice!")
                        receivedMessage.channel.send(embed)
                    }
                }
                else if (secondperson == "") {
                    if (percent < 30) {
                        const embed = new MessageEmbed()
                        .setTitle(`${brokenheart} ${percent}%`)
                        .setDescription(`<@!${receivedMessage.author.id}>'s compatibility with ${firstperson} ${heartpulse}`)
                        .setColor('#00ADEF')
                        .setFooter("Maybe try someone else ;-;")
                        receivedMessage.channel.send(embed)
                    }
                    else if (percent > 80) {
                        const embed = new MessageEmbed()
                        .setTitle(`${hearteyes} ${percent}%`)
                        .setDescription(`<@!${receivedMessage.author.id}>'s compatibility with ${firstperson} ${heartpulse}`)
                        .setColor('#ECC60D')
                        .setFooter("You're in luck!")
                        receivedMessage.channel.send(embed)
                    }
                    else {
                        const embed = new MessageEmbed()
                        .setTitle(`${heartpulse} ${percent}%`)
                        .setDescription(`<@!${receivedMessage.author.id}>'s compatibility with ${firstperson} ${heartpulse}`)
                        .setColor('#FFC0CB')
                        .setFooter("Very nice!")
                        receivedMessage.channel.send(embed)
                    }
                }
                else {
                    if (percent < 30) {
                        const embed = new MessageEmbed()
                        .setTitle(`${brokenheart} ${percent}%`)
                        .setDescription(`${firstperson[0]}'s compatibility with ${secondperson} ${heartpulse}`)
                        .setColor('#00ADEF')
                        .setFooter("Maybe try someone else ;-;")
                        receivedMessage.channel.send(embed)
                    }
                    else if (percent > 80) {
                        const embed = new MessageEmbed()
                        .setTitle(`${hearteyes} ${percent}%`)
                        .setDescription(`${firstperson[0]}'s compatibility with ${secondperson} ${heartpulse}`)
                        .setColor('#ECC60D')
                        .setFooter("You're in luck!")
                        receivedMessage.channel.send(embed)
                    }
                    else {
                        const embed = new MessageEmbed()
                        .setTitle(`${heartpulse} ${percent}%`)
                        .setDescription(`${firstperson[0]}'s compatibility with ${secondperson} ${heartpulse}`)
                        .setColor('#FFC0CB')
                        .setFooter("Very nice!")
                        receivedMessage.channel.send(embed)
                    }
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}