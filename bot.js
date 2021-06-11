// pog#2538 (PogChamp; pog bot)
// Version 1.2.5
// 1.0: June 03 2021
// Author: FlyingLobster69 (LooOOooL YT)

// Import the discord.js module
const {Client, MessageAttachment} = require('discord.js')
const fs = require('fs')
const { exitCode } = require('process')

// Create an instance of Discord that we will use to control the bot
const config = require('./config.json')

// Connect singles
const e = require('./singles/e.json')
const help = require('./singles/help.json')
const sixnine = require('./singles/69.json')
const paimon = require('./singles/paimon.json')
const dewitjson = require('./singles/dewit.json')

// Connect commands
const start = require('./commands/start')
const helpcmd = require('./commands/help')
const test = require('./commands/test')
const horny = require('./commands/horny')
const biden = require('./commands/biden')
const trump = require('./commands/trump')

// Connect single attachments
const dewit = new MessageAttachment('dewit.gif')
const ehe = new MessageAttachment('ehe.jpg')

// Connect Andrew
const andrew = new MessageAttachment('andrew.jpg')
const andrewps = new MessageAttachment('andrewps.png')

// Connect Genshin pfps
const ganyupfp = new MessageAttachment('ganyu_pfp.png')
const keqingpfp = new MessageAttachment('keqing_pfp.png')
const noellepfp = new MessageAttachment('noelle_pfp.png')
const barbarapfp = new MessageAttachment('barbara_pfp.png')
const monapfp = new MessageAttachment('mona_pfp.png')
const kleepfp = new MessageAttachment('klee_pfp.png')
const qiqipfp = new MessageAttachment('qiqi_pfp.png')
const fischlpfp = new MessageAttachment('fischl_pfp.png')
const sucrosepfp = new MessageAttachment('sucrose_pfp.png')
const hutaopfp = new MessageAttachment('hutao_pfp.png')
const eulapfp = new MessageAttachment('eula_pfp.png')

const chibizhongli = new MessageAttachment('chibi_zhongli.jpg')

// Connect Stellar Moments
const sm = require('./sm/sm.json')

// Connect Stellar Moments YouTube links
const smyt = require('./sm/smyt.json')

// Connect client
const client = new Client()
// const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

// Gets called when our bot is successfully logged in and connected
client.on('ready', () => {
    console.log("Connected as " + client.user.tag)

    client.user.setActivity("an epic poggers game")
})

client.on('message', receivedMessage => {
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return // kekw
    }
    
    if (receivedMessage.content.startsWith(config.prefix)) {
        processCommand(receivedMessage)
    }
    if (receivedMessage.content.startsWith(config.prefixUpper)) {
        processCommand(receivedMessage)
    }

    // Single message responses
    if (receivedMessage.content == e.e) {
        receivedMessage.channel.send(e.e)
    }
    if (receivedMessage.content == help.help) {
        receivedMessage.channel.send(help.reply)
    }
    if (receivedMessage.content == sixnine.input) {
        receivedMessage.channel.send(sixnine.reply)
    }
    if (receivedMessage.content == paimon.paimon) {
        receivedMessage.channel.send(paimon.reply)
    }
    if (receivedMessage.content == dewitjson.dewit) {
        receivedMessage.channel.send(dewit)
    }
    if (receivedMessage.content == "ehe") {
        // Send the attachment in the message channel with the content
        receivedMessage.channel.send(ehe)
        // Send caption
        receivedMessage.channel.send("**Ehe te nandayo!**")
    }
})

// Command function
function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    // Console printout (commands received and reply)
    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + arguments) // There may not be any arguments

    // Basic Commands
    if (start.checkStart(receivedMessage)) { // pog start
        return
    }
    else if (helpcmd.checkHelp(receivedMessage)) { // pog help
        return
    }
    else if (test.checkTest(receivedMessage)) { // pog test
        return
    }
    else if (horny.checkHorny(receivedMessage)) { // pog horny
        return
    }
    else if (biden.checkBiden(receivedMessage)) { // pog biden
        return 
    }
    else if (trump.checkTrump(receivedMessage)) { // pog trump
        return
    }
    else if (primaryCommand == "ies") {
        receivedMessage.channel.send("*Wait, that's illegal!*")
    }
    else if (primaryCommand == "ping") {
        receivedMessage.channel.send("Pong!")
        receivedMessage.channel.send(`🏓Latency is ${Date.now() - receivedMessage.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms *(Disclaimer: these numbers might not be entirely accurate)*`)
    }

    // Andrew commands
    else if (primaryCommand == "andrew") {
        // Send the attachment in the message channel with the content
        receivedMessage.channel.send(andrew)
        // Send caption
        receivedMessage.channel.send("what a gamer")
    }
    else if (primaryCommand == "buff") {
        // Send the attachment in the message channel with the content
        receivedMessage.channel.send(andrewps)
        // Send caption
        receivedMessage.channel.send("lmfao photoshopped")
    }

    // Complex command thingies
    else if (primaryCommand.includes("exe")) {
        receivedMessage.channel.send(receivedMessage.content.substr(8) + ".exe")
        let buffer = new Buffer.from(`
        Command: ${receivedMessage.content.substr(8)};`)
        fs.open(`msghistory${receivedMessage.author.username}.txt`, 'a', function(error, fd) {
            fs.write(fd, buffer, 0, buffer.length, null, function(err, writtenbytes) {
                if (err) {
                    fs.writeFile(`msghistory${receivedMessage.author.username}.txt`, `Command: ${receivedMessage.content.substr(8)}; 
                    Username: ${receivedMessage.author.username}; 
                    UID: ${receivedMessage.author.id}`, "utf8", function(error, data){
                        console.log("Write complete");
                    })
                }
                else {
                    console.log("Write complete");
                }
            })
        })
    }
    else if (primaryCommand == "user") {
		receivedMessage.channel.send(`Your username: ${receivedMessage.author.username}\nYour ID: ${receivedMessage.author.id}`)
	}

    // If pog
    else if (primaryCommand == "") {
        // poggers
        receivedMessage.channel.send("Poggers!")
    }

    // Genshin commands
    else if (primaryCommand.includes(config.genshin)) {
        // Genshin pfps
        if (arguments.includes("ganyu")) {
            receivedMessage.channel.send("Ganyu " + config.gp)
            receivedMessage.channel.send(ganyupfp)
        }
        else if (arguments.includes("keqing")) {
            receivedMessage.channel.send("Keqing " + config.gp)
            receivedMessage.channel.send(keqingpfp)
        }
        else if (arguments.includes("noelle")) {
            receivedMessage.channel.send("Noelle " + config.gp)
            receivedMessage.channel.send(noellepfp)
        }
        else if (arguments.includes("barbara")) {
            receivedMessage.channel.send("Barbara " + config.gp)
            receivedMessage.channel.send(barbarapfp)
        }
        else if (arguments.includes("mona")) {
            receivedMessage.channel.send("Mona " + config.gp)
            receivedMessage.channel.send(monapfp)
        }
        else if (arguments.includes("klee")) {
            receivedMessage.channel.send("Klee " + config.gp)
            receivedMessage.channel.send(kleepfp)
        }
        else if (arguments.includes("qiqi")) {
            receivedMessage.channel.send("Qiqi " + config.gp)
            receivedMessage.channel.send(qiqipfp)
        }
        else if (arguments.includes("fischl")) {
            receivedMessage.channel.send("Fischl " + config.gp)
            receivedMessage.channel.send(fischlpfp)
        }
        else if (arguments.includes("sucrose")) {
            receivedMessage.channel.send("Sucrose " + config.gp)
            receivedMessage.channel.send(sucrosepfp)
        }
        else if (arguments.includes("hutao")) {
            receivedMessage.channel.send("Hu Tao " + config.gp)
            receivedMessage.channel.send(hutaopfp)
        }
        else if (arguments.includes("eula")) {
            receivedMessage.channel.send("Eula " + config.gp)
            receivedMessage.channel.send(eulapfp)
        }
        else if (arguments.includes("zhongli")) {
            receivedMessage.channel.send("In terms of mora, we have no mora.")
            receivedMessage.channel.send(chibizhongli)
        }
        else {
            receivedMessage.channel.send("Oops the smol character pfp doesn't exist, the available characters are: `ganyu`, `keqing`, `noelle`, `barbara`, `mona`, `klee`, `qiqi`, `fischl`, `sucrose`, `hutao`, `eula`. Ex. `pog genshin ganyu`")
        }
    }

    // Stellar Moments
    else if (primaryCommand.includes(config.sm)) {
        // Soundtracks
        if (arguments.includes(sm.ganyu)) {
            receivedMessage.channel.send(smyt.ganyu)
        }
        else if (arguments.includes(sm.keqing)) {
            receivedMessage.channel.send(smyt.keqing)
        }
        else if (arguments.includes(sm.zhongli)) {
            receivedMessage.channel.send(smyt.zhongli)
        }
        else if (arguments.includes(sm.mona)) {
            receivedMessage.channel.send(smyt.mona)
        }
        else if (arguments.includes(sm.qiqi)) {
            receivedMessage.channel.send(smyt.qiqi)
        }
        else if (arguments.includes(sm.venti)) {
            receivedMessage.channel.send(smyt.venti)
        }
        else if (arguments.includes(sm.xinyan)) {
            receivedMessage.channel.send(smyt.xinyan)
        }
        else if (arguments.includes(sm.xiangling)) {
            receivedMessage.channel.send(smyt.xiangling)
        }
        else if (arguments.includes(sm.diona)) {
            receivedMessage.channel.send(smyt.diona)
        }
        // Doubles
        else if (arguments.includes(sm.childe1)) {
            receivedMessage.channel.send(smyt.childe1)
        }
        else if (arguments.includes(sm.childe2)) {
            receivedMessage.channel.send(smyt.childe2)
        }
        else if (arguments.includes(sm.fischl1)) {
            receivedMessage.channel.send(smyt.fischl1)
        }
        else if (arguments.includes(sm.fischl2)) {
            receivedMessage.channel.send(smyt.fischl2)
        }
        else if (arguments.includes(sm.klee1)) {
            receivedMessage.channel.send(smyt.klee1)
        }
        else if (arguments.includes(sm.klee2)) {
            receivedMessage.channel.send(smyt.klee2)
        }
        else if (arguments.includes(sm.albedo1)) {
            receivedMessage.channel.send(smyt.albedo1)
        }
        else if (arguments.includes(sm.albedo2)) {
            receivedMessage.channel.send(smyt.albedo2)
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
    }
    
    // If command doesn't exist
    else {
        return null
    }
}

client.login(config.token)