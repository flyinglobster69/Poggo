// pog#2538 (PogChamp; pog bot)
// 1.0: June 03 2021
// Author: FlyingLobster69 (LooOOooL YT)

// Import the discord.js module
const {Client, MessageAttachment} = require('discord.js')
const fs = require('fs')
const { exitCode } = require('process')
const schedule = require('node-schedule')

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

// Math commands
const add = require('./commands/add')
const subtract = require('./commands/subtract')
const multiply = require('./commands/multiply')
const divide = require('./commands/divide')

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
const buff = require('./commands/buff')
const sm = require('./commands/sm')
const poggers = require('./commands/poggers')
const count = require('./commands/count')
const pirate = require('./commands/pirate')
const windows = require('./commands/windows')
const invite = require('./commands/invite')
const wish = require('./commands/wish')
// const time = require('./commands/time')

// Connect single attachments
const dewit = new MessageAttachment('dewit.gif')
const ehe = new MessageAttachment('ehe.gif')

// Connect client
const client = new Client()

// Gets called when our bot is successfully logged in and connected
client.on('ready', () => {
    console.log("Connected as " + client.user.tag)

    client.user.setActivity("pog help") // Activity status on Discord
})

client.on('message', receivedMessage => {
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return // kekw
    }
    
    if (receivedMessage.content.toLowerCase().startsWith(config.prefix)) { // If first 3 letters = 'pog', process receivedMessage function
        processCommand(receivedMessage)
    }

    // Single message responses
    if (receivedMessage.content.toLowerCase() == e.e) { // e
        receivedMessage.channel.send(e.e)
    }
    if (receivedMessage.content.toLowerCase() == help.help) { // help
        receivedMessage.channel.send(help.reply)
    }
    if (receivedMessage.content.includes(sixnine.input)) { // 69
        receivedMessage.channel.send(sixnine.reply)
    }
    if (receivedMessage.content.includes(paimon.paimon)) { // paimon 
        receivedMessage.channel.send(paimon.reply)
    }
    if (receivedMessage.content.toLowerCase() == dewitjson.dewit) { // dewit
        receivedMessage.channel.send(dewit)
        receivedMessage.channel.send(dewitjson.emote)
    }
    if (receivedMessage.content.toLowerCase() == dewitjson.kekw) { // kekw
        receivedMessage.channel.send(dewitjson.emote)
    }
    if (receivedMessage.content.toLowerCase() == ehetendandayo.ehe) { // ehe
        receivedMessage.channel.send(ehe)
        receivedMessage.channel.send(ehetendandayo.output)
    }
    if (receivedMessage.content.toLowerCase().includes(jimmy.jimmy)) { // jimmy
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
    else if (buff.checkBuff(receivedMessage)) { // pog buff
        return
    }
    else if (sm.checkStellarMoments(receivedMessage)) { // pog sm
        return
    }
    else if (count.checkCount(receivedMessage)) { // pog count
        return
    }
    else if (pirate.checkPirate(receivedMessage)) { // pog pirate
        return
    }
    else if (windows.checkWindows(receivedMessage)) { // pog windows
        return
    }
    // else if (invite.checkInvite(receivedMessage)) { // pog invite
    //     return
    // }
    else if (wish.checkWish(receivedMessage)) { // pog wish
        return
    }

    // else if (receivedMessage == "time") {
    //     const date = new Date(2021, 5, 25, 17, 51, 0);
    //     const job = schedule.scheduleJob(date, function(){
    //         console.log('time test message owowoowowowowowowowowowo')
    //         receivedMessage.channel.send('time test message owowoowowowowowowowowowo')
    //     })
    //     console.log(job)
    // }
    
    // Math
    if (add.checkAdd(receivedMessage)) { // pog add
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

// Deleted Message quoting system
var randomPity // create pity variable
randomPity = 0 // initialize pity system
client.on('messageDelete', receivedMessage => { // called whenever a message is deleted

    const random = Math.floor(Math.random() * 10) // generate a random number
    console.log(`${receivedMessage.author.username} deleted: \`${receivedMessage.content}\``) // log deleted message in console
    randomPity += 1

    if (randomPity > 9) { // if pity reaches 10, quote deleted message and reset pity counter
        console.log("Noted.")
        receivedMessage.channel.send(`\"${receivedMessage.content}\" - ${receivedMessage.author.username}`)
        randomPity = 0
    }
    if (random == 5) { // if random number (luck) is 5, quote delete message and reset pity count (10% luck)
        randomPity = 0
        console.log("Noted.")
        receivedMessage.channel.send(`\"${receivedMessage.content}\" - ${receivedMessage.author.username}`)
        console.log(randomPity)
    }
})

client.login(config.token)