// pog#2538 (PogChamp; pog bot)
// Version 1.4
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
const ehetendandayo = require('./singles/ehe.json')
const jimmy = require('./singles/jimmy.json')

// Connect commands
const start = require('./commands/start')
const helpcmd = require('./commands/help')
const test = require('./commands/test')
const horny = require('./commands/horny')
const biden = require('./commands/biden')
const trump = require('./commands/trump')
const poggies = require('./commands/poggies')
const exe = require('./commands/exe')
const user = require('./commands/user')
const pog = require('./commands/pog')
const genshin = require('./commands/genshin')
const undelete = require('./commands/undelete')
const andrew = require('./commands/andrew')
const buff = require('./commands/buff')
const sm = require('./commands/sm')
const version = require('./commands/version')
const poggers = require('./commands/poggers')

// Math
const add = require('./commands/add')
const subtract = require('./commands/subtract')
const multiply = require('./commands/multiply')
const divide = require('./commands/divide')

// Connect single attachments
const dewit = new MessageAttachment('dewit.gif')
const ehe = new MessageAttachment('ehe.gif')

// Connect client
const client = new Client()

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
    if (receivedMessage.content == e.e) { // e
        receivedMessage.channel.send(e.e)
    }
    if (receivedMessage.content == help.help) { // help
        receivedMessage.channel.send(help.reply)
    }
    if (receivedMessage.content.includes(sixnine.input)) { // 69
        receivedMessage.channel.send(sixnine.reply)
    }
    if (receivedMessage.content.includes(paimon.paimon)) { // paimon 
        receivedMessage.channel.send(paimon.reply)
    }
    if (receivedMessage.content == dewitjson.dewit) { // dewit
        receivedMessage.channel.send(dewit)
        receivedMessage.channel.send(dewitjson.emote)
    }
    if (receivedMessage.content == dewitjson.kekw) { // kekw
        receivedMessage.channel.send(dewitjson.emote)
    }
    if (receivedMessage.content == ehetendandayo.ehe) { // ehe
        receivedMessage.channel.send(ehe)
        receivedMessage.channel.send(ehetendandayo.output)
    }
    if (receivedMessage.content.includes(jimmy.jimmy)) { // jimmy
        receivedMessage.channel.send(jimmy.reply)
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
    console.log("Arguments: " + arguments) // There might not be any arguments

    // Basic Commands
    if (start.checkStart(receivedMessage)) { // pog start
        return
    }
    else if (version.checkVersion(receivedMessage)) { // pog version
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
    else if (poggies.checkPoggies(receivedMessage)) { // poggies
        return
    }
    else if (poggers.checkPoggers(receivedMessage)) { // poggers
        return
    }
    else if (exe.checkExe(receivedMessage)) { // pog exe
        return
    }
    else if (user.checkUser(receivedMessage)) { // pog user
		return
	}
    else if (pog.checkPog(receivedMessage)) { // pog
        return
    }
    else if (genshin.checkGenshin(receivedMessage)) { // pog genshin
        return
    }
    else if (undelete.checkUndelete(receivedMessage)) { // pog undelete
        return
    }
    else if (andrew.checkAndrew(receivedMessage)) { // pog andrew
        return
    }
    else if (buff.checkBuff(receivedMessage)) { // pog buff
        return
    }
    else if (sm.checkStellarMoments(receivedMessage)) { // pog sm
        return
    }
    // Math
    else if (add.checkAdd(receivedMessage)) { // pog add
        return
    }
    else if (subtract.checkSubtract(receivedMessage)) { // pog subtract
        return
    }
    else if (multiply.checkMultiply(receivedMessage)) { // pog multiply
        return
    }
    else if (divide.checkDivide(receivedMessage)) { // pog divide
        return
    }
    // If command doesn't exist
    else {
        return null
    }
}

// Logging message deletions
// Use 'pog undelete' to access
var randomPity 
randomPity = 0
client.on('messageDelete', receivedMessage => {

    const random = Math.floor(Math.random() * 10)
    console.log(`${receivedMessage.author.username} deleted: \`${receivedMessage.content}\``)
    let buffer = new Buffer.from(`
        Deleted Message: ${receivedMessage.content};`)
        fs.open('./msgdeleted/' + `msgdeleted${receivedMessage.author.username}.txt`, 'a', function(error, fd) {
            fs.write(fd, buffer, 0, buffer.length, null, function(err, writtenbytes) {
                if (err) {
                    fs.writeFile('./msgdeleted/' + `msghistory${receivedMessage.author.username}.txt`, `Deleted Message: ${receivedMessage.content}; 
                    Username: ${receivedMessage.author.username}; 
                    UID: ${receivedMessage.author.id}`, "utf8", function(error, data) {
                        console.log("Write complete")
                    })
                    randomPity += 1
                    console.log(randomPity)
                    if (randomPity > 9) {
                        console.log("Noted.")
                        receivedMessage.channel.send(`\"${receivedMessage.content}\" - ${receivedMessage.author.username}`)
                        randomPity = 0
                    }
                }
                else {
                    console.log("File exists, write complete")
                    randomPity += 1
                    console.log(randomPity)
                    if (randomPity > 9) {
                        console.log("Noted.")
                        receivedMessage.channel.send(`\"${receivedMessage.content}\" - ${receivedMessage.author.username}`)
                        randomPity = 0
                    }
                }
            })
        })
    if (random == 5) {
        randomPity = 0
        console.log("Noted.")
        receivedMessage.channel.send(`\"${receivedMessage.content}\" - ${receivedMessage.author.username}`)
        console.log(randomPity)
    }
    if (randomPity > 9) {
        randomPity = 0
    }
    
    
})

client.login(config.token)