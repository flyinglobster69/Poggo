module.exports = {
    checkSus: function(receivedMessage) {
    found = false
    function randomsus(sussylist) {
        return sussylist[Math.floor(Math.random * sussylist.length)]
    }

        switch(receivedMessage.content.toLowerCase()) { // called when messages says 'sus'
            case 'sus' || 'amogus' :
                var sussylist = ["ඞ", "ඞු්ි", "ඩ", "ඹ", "ඩිුා", "වා"]
                var sussyreply = randomsus(sussylist)
                receivedMessage.channel.send(sussyreply)
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}