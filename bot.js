// pog#2538 (PogChamp; pog bot)
// Version 1.3
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

// Connect commands
const start = require('./commands/start')
const helpcmd = require('./commands/help')
const test = require('./commands/test')
const horny = require('./commands/horny')
const biden = require('./commands/biden')
const trump = require('./commands/trump')
const poggies = require('./commands/poggies')
const ping = require('./commands/ping')
const exe = require('./commands/exe')
const user = require('./commands/user')
const pog = require('./commands/pog')
const genshin = require('./commands/genshin')
const undelete = require('./commands/undelete')
const andrew = require('./commands/andrew')
const buff = require('./commands/buff')
const sm = require('./commands/sm')

// Connect single attachments
const dewit = new MessageAttachment('dewit.gif')
const ehe = new MessageAttachment('ehe.jpg')

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
    if (receivedMessage.content == ehetendandayo.ehe) {
        // Send the attachment in the message channel with the content
        receivedMessage.channel.send(ehe)
        // Send caption
        receivedMessage.channel.send(ehetendandayo.output)
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
    else if (poggies.checkPoggies(receivedMessage)) { // poggies
        return
    }
    else if (ping.checkPing(receivedMessage)) { // ping
        return
    }
    else if (exe.checkExe(receivedMessage)) { // exe
        return
    }
    else if (user.checkUser(receivedMessage)) { // user
		return
	}
    else if (pog.checkPog(receivedMessage)) { // pog
        return
    }
    else if (genshin.checkGenshin(receivedMessage)) { // genshin
        return
    }
    else if (undelete.checkUndelete(receivedMessage)) { // undelete
        return
    }
    else if (andrew.checkAndrew(receivedMessage)) { // andrew
        return
    }
    else if (buff.checkBuff(receivedMessage)) { // buff
        return
    }
    else if (sm.checkStellarMoments(receivedMessage)) { // stellar moments
        return
    }
    // If command doesn't exist
    else {
        return null
    }
}

// Logging message deletions
client.on('messageDelete', receivedMessage => {

    console.log(`${receivedMessage.author.username} deleted: \`${receivedMessage.content}\``)
    let buffer = new Buffer.from(`
        Deleted Message: ${receivedMessage.content};`)
        fs.open('./msgdeleted/' + `msgdeleted${receivedMessage.author.username}.txt`, 'a', function(error, fd) {
            fs.write(fd, buffer, 0, buffer.length, null, function(err, writtenbytes) {
                if (err) {
                    fs.writeFile('./msgdeleted/' + `msghistory${receivedMessage.author.username}.txt`, `Deleted Message: ${receivedMessage.content}; 
                    Username: ${receivedMessage.author.username}; 
                    UID: ${receivedMessage.author.id}`, "utf8", function(error, data){
                        console.log("Write complete");
                    })
                }
                else {
                    console.log("File exists, write complete");
                }
            })
        })
    if (receivedMessage.author.id == '527744355302244353') {
        receivedMessage.channel.send(`\"${receivedMessage.content}\" - ${receivedMessage.author.username}`)
    }
    
})

client.login(config.token)