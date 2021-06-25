module.exports = {
    checkWish: function(receivedMessage) {
        function random3star(star3) {
            return star3[Math.floor(Math.random() * star3.length)]
        }
        function random4star(star4) {
            return star4[Math.floor(Math.random() * star4.length)]
        }
        function random5star(star5) {
            return star5[Math.floor(Math.random() * star5.length)]
        }
        const star = "<:star:858047215952068628>"
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand) { // called when messages says 'pog wish'
            case 'wish' :
                const random = Math.floor(Math.random() * 100) // generates a random number between 1-20
                if (random < 3) { // if random number < 3, random 5-star
                    console.log("Gold!")
                    var star5 = ["Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                    receivedMessage.channel.send(star + star + star + star + star + " " + random5star(star5))
                }
                if (random < 11) { // if random number < 3, random 5-star
                    console.log("Purple!")
                    var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons
                    receivedMessage.channel.send(star + star + star + star + " " + random4star(star4))
                }
                else { // 3-star items
                    console.log("Blue.")
                    var star3 = ["Slingshot", "Sharpshooter's Oath", "Raven Bow", "Emerald Orb", "Thrilling Tales of Dragon Slayers", "Magic Guide", "Black Tassel", "Debate Club", "Bloodstained Greatsword", "Ferrous Shadow", "Skyrider Sword", "Harbringer of Dawn", "Cool Steel"] // List of 3-star weapons
                    receivedMessage.channel.send(star + star + star + " " + random3star(star3))
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}