module.exports = {
    checkStellarMoments: function(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    found = false

        switch(primaryCommand) {
            case 'sm' :
                // Soundtracks
                if (arguments.includes("ganyu")) {
                    receivedMessage.channel.send("https://youtu.be/vV7OmRpgXh4")
                }
                else if (arguments.includes("keqing")) {
                    receivedMessage.channel.send("https://youtu.be/vMeaJGQMvmw")
                }
                else if (arguments.includes("zhongli")) {
                    receivedMessage.channel.send("https://youtu.be/SBfoWTB-T_U")
                }
                else if (arguments.includes("mona")) {
                    receivedMessage.channel.send("https://youtu.be/xG4EDhX4tRg")
                }
                else if (arguments.includes("qiqi")) {
                    receivedMessage.channel.send("https://youtu.be/5prZq3ya7f0")
                }
                else if (arguments.includes("venti")) {
                    receivedMessage.channel.send("https://youtu.be/Oofw4zlXcNg")
                }
                else if (arguments.includes("xinyan")) {
                    receivedMessage.channel.send("https://youtu.be/diS-Mnwn7GI")
                }
                else if (arguments.includes("xiangling")) {
                    receivedMessage.channel.send("https://youtu.be/HXxPv9a_TnA")
                }
                else if (arguments.includes("diona")) {
                    receivedMessage.channel.send("https://youtu.be/qwlplyAJjjM")
                }
                // Doubles
                else if (arguments.includes("childe1")) {
                    receivedMessage.channel.send("https://youtu.be/AXjnVSZozYI")
                }
                else if (arguments.includes("childe2")) {
                    receivedMessage.channel.send("https://youtu.be/jUny1b9UnJw")
                }
                else if (arguments.includes("fischl1")) {
                    receivedMessage.channel.send("https://youtu.be/M4A6EDbWgzA")
                }
                else if (arguments.includes("fischl2")) {
                    receivedMessage.channel.send("https://youtu.be/yr5GC1AZ6b4")
                }
                else if (arguments.includes("klee1")) {
                   receivedMessage.channel.send("https://youtu.be/qQE1yJAoSYY")
                }
                else if (arguments.includes("klee2")) {
                   receivedMessage.channel.send("https://youtu.be/wzScVV24XYU")
                }
                else if (arguments.includes("albedo1")) {
                    receivedMessage.channel.send("https://youtu.be/GCnIxGuC740")
               }
                else if (arguments.includes("albedo2")) {
                    receivedMessage.channel.send("https://youtu.be/Fpt9YMaceqA")
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
        // value of 'found' will be returned in index.js
        return found
    }
}