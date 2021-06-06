// Import the discord.js module
const {Client, MessageAttachment} = require('discord.js')
const fs = require('fs')
const { exitCode } = require('process')

// Create an instance of Discord that we will use to control the bot
const config = require('./config.json')
const client = new Client()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

// Gets called when our bot is successfully logged in and connected
client.on('ready', () => {
    console.log("Connected as " + client.user.tag)

    client.user.setActivity("an epic poggers game")
})

client.on('message', receivedMessage => {
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }
    
    if (receivedMessage.content.startsWith(config.prefix)) {
        processCommand(receivedMessage)
    }
    if (receivedMessage.content.startsWith(config.prefixUpper)) {
        processCommand(receivedMessage)
    }
    if (receivedMessage.content == "pog") {
        receivedMessage.channel.send("Poggers!")
    }
    if (receivedMessage.content == "poggers") {
        receivedMessage.channel.send("pog indeed")
    }
    if (receivedMessage.content == "e") {
        receivedMessage.channel.send("e")
    }
    if (receivedMessage.content == "help") {
        receivedMessage.channel.send("no :)")
    }
    if (receivedMessage.content == "cyka") {
        receivedMessage.channel.send("blyat")
    }
    if (receivedMessage.content == "69") {
        receivedMessage.channel.send("nice")
    }
    if (receivedMessage.content == "paimon") {
        receivedMessage.channel.send("Eat it! ***Eat it now!***")
    }
    if (receivedMessage.content == "ehe") {
        receivedMessage.channel.send("**Ehe te nandayo!**")
    }
    if (receivedMessage.content == "poggies") {
        receivedMessage.channel.send("wait thats illegal")
    }
})

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + arguments) // There may not be any arguments

    // Basic Commands
    if (primaryCommand == "start") {
        if (receivedMessage.author.id == "456664720406085632") {
            receivedMessage.channel.send("Starting Windows...")
        }
        else {
            return
        }
    }
    else if (primaryCommand == "help") {
        receivedMessage.channel.send(`Prefix\: \`pog\`; Command list\: \`test\`, \`horny\`, \`biden\`, \`trump\`, \`ping\`, \`andrew\`, \`buff\`, \`user\`, \`exe [insert text here]\``)
    }
    else if (primaryCommand == "test") {
        receivedMessage.channel.send(Math.random())
    }
    else if (primaryCommand == "horny") {
        receivedMessage.channel.send("go to horny jail smh")
    }
    else if (primaryCommand == "biden") {
        receivedMessage.channel.send("***Will you shut up man?***")
    }
    else if (primaryCommand == "trump") {
        receivedMessage.channel.send("Error 404: Not Found")
    }
    else if (primaryCommand == "ping") {
        receivedMessage.channel.send("Pong!")
        // var yourping = new Date().getTime() - receivedMessage.createdTimestamp
        // var botping = Math.round(bot.ws.ping)
        // receivedMessage.channel.send(`Your ping: ${yourping} \nBots ping: ${botping}`)
        receivedMessage.channel.send(`🏓Latency is ${Date.now() - receivedMessage.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)
    }

    // Image commands
    else if (primaryCommand == "andrew") {
        // Create the attachment using MessageAttachment
        const andrew = new MessageAttachment('andrew.jpg')
        // Send the attachment in the message channel with the content
        receivedMessage.channel.send(andrew)
        // Send caption
        receivedMessage.channel.send("what a gamer")
    }
    else if (primaryCommand == "buff") {
        // Create the attachment using MessageAttachment
        const andrewps = new MessageAttachment('andrewps.png')
        // Send the attachment in the message channel with the content
        receivedMessage.channel.send(andrewps)
        // Send caption
        receivedMessage.channel.send("lmfao photoshopped")
    }

    // Complex command thingies
    else if (primaryCommand.includes("exe")) {
        receivedMessage.channel.send(receivedMessage.content.substr(8) + ".exe")
        fs.writeFile(`msghistory${receivedMessage.author.username}${Math.random()}.txt`, `Command: ${receivedMessage.content.substr(8)}; 
        Username: ${receivedMessage.author.username}; 
        UID: ${receivedMessage.author.id}`, "utf8", function(error, data){
            console.log("Write complete");
        })
    }
    else if (primaryCommand == "user") {
		receivedMessage.channel.send(`Your username: ${receivedMessage.author.username}\nYour ID: ${receivedMessage.author.id}`)
	}

    // If pog
    else if (primaryCommand == "") {
        return
    }
    // If command doesn't exist
    else {
        receivedMessage.channel.send("Rip that command currently does not exist. Try `pog help` for a list of operable commands.")
    }
}

client.login(config.token)