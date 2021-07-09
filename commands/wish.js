var star5pity = 0
var star4pity = 0

module.exports = {
    checkWish: function(receivedMessage) {

    const {MessageEmbed} = require('discord.js')
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
        const star2 = "<:star2:861084656060334100>"
        // const toad = require('./character5star/toad.png')

        var star3 = ["Slingshot", "Sharpshooter's Oath", "Raven Bow", "Emerald Orb", "Thrilling Tales of Dragon Slayers", "Magic Guide", "Black Tassel", "Debate Club", "Bloodstained Greatsword", "Ferrous Shadow", "Skyrider Sword", "Harbringer of Dawn", "Cool Steel"] // List of 3-star weapons
        var item1 = star + star + star + random3star(star3)
        var item2 = star + star + star + random3star(star3)
        var item3 = star + star + star + random3star(star3)
        var item4 = star + star + star + random3star(star3)
        var item5 = star + star + star + random3star(star3)
        var item6 = star + star + star + random3star(star3)
        var item7 = star + star + star + random3star(star3)
        var item8 = star + star + star + random3star(star3)
        var item9 = star + star + star + random3star(star3)
        var item10 = star + star + star + random3star(star3)

    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    found = false

        switch(primaryCommand) { // called when messages says 'pog wish'
            case 'wish' :
                if (arguments == "10") {
                    const random1 = Math.floor(Math.random() * 90)
                    const random2 = Math.floor(Math.random() * 90)
                    const random3 = Math.floor(Math.random() * 90)
                    const random4 = Math.floor(Math.random() * 90)
                    const random5 = Math.floor(Math.random() * 90)
                    const random6 = Math.floor(Math.random() * 90)
                    const random7 = Math.floor(Math.random() * 90)
                    const random8 = Math.floor(Math.random() * 90)
                    const random9 = Math.floor(Math.random() * 90)
                    const random10 = Math.floor(Math.random() * 90)

                    if (random1 < 3) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        if (randompull == "Venti") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Venti"
                        }
                        else if (randompull == "Tartaglia") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Tartaglia"
                        }
                        else if (randompull == "Klee") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Klee"
                        }
                        else if (randompull == "Albedo") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Albedo"
                        }
                        else if (randompull == "Ganyu") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Ganyu"
                        }
                        else if (randompull == "Xiao") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Xiao"
                        }
                        else if (randompull == "Hu Tao") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Hu Tao"
                        }
                        else if (randompull == "Zhongli") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Zhongli"
                        }
                        else if (randompull == "Eula") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Eula"
                        }
                        else if (randompull == "Kazuha") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Kaedehara Kazuha"
                        }
                        else if (randompull == "Ayaka") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Kamisato Ayaka"
                        }
                        else if (randompull == "Yoimiya") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Yoimiya"
                        }
                        else if (randompull == "Keqing") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Keqing"
                        }
                        else if (randompull == "Mona") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Mona"
                        }
                        else if (randompull == "Diluc") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Diluc"
                        }
                        else if (randompull == "Jean") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Jean"
                        }
                        else if (randompull == "Qiqi") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Qiqi"
                        }
                        else {
                            item1 = star2 + star2 + star2 + star2 + star2 + randompull
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    if (random2 < 3) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        if (randompull == "Venti") {
                            item2 = star2 + star2 + star2 + star2 + star2 + "Venti"
                        }
                        else if (randompull == "Tartaglia") {
                            item2 = star2 + star2 + star2 + star2 + star2 + "Tartaglia"
                        }
                        else if (randompull == "Klee") {
                            item2 = star2 + star2 + star2 + star2 + star2 + "Klee"
                        }
                        else if (randompull == "Albedo") {
                            item2 = star2 + star2 + star2 + star2 + star2 + "Albedo"
                        }
                        else if (randompull == "Ganyu") {
                            item2 = star2 + star2 + star2 + star2 + star2 + "Ganyu"
                        }
                        else if (randompull == "Xiao") {
                            item2 = star2 + star2 + star2 + star2 + star2 + "Xiao"
                        }
                        else if (randompull == "Hu Tao") {
                            item2 = star2 + star2 + star2 + star2 + star2 + "Hu Tao"
                        }
                        else if (randompull == "Zhongli") {
                            item2 = star2 + star2 + star2 + star2 + star2 + "Zhongli"
                        }
                        else if (randompull == "Eula") {
                            item2 = star2 + star2 + star2 + star2 + star2 + "Eula"
                        }
                        else if (randompull == "Kazuha") {
                            item2 = star2 + star2 + star2 + star2 + star2 + "Kaedehara Kazuha"

                        }
                        else if (randompull == "Ayaka") {
                            item2 = star2 + star2 + star2 + star2 + star2 + "Kamisato Ayaka"
                        }
                        else if (randompull == "Yoimiya") {
                            item2 = star2 + star2 + star2 + star2 + star2 + "Yoimiya"
                        }
                        else if (randompull == "Keqing") {
                            item2 = star2 + star2 + star2 + star2 + star2 + "Keqing"
                        }
                        else if (randompull == "Mona") {
                            item2 = star2 + star2 + star2 + star2 + star2 + "Mona"
                        }
                        else if (randompull == "Diluc") {
                            item2 = star2 + star2 + star2 + star2 + star2 + "Diluc"
                        }
                        else if (randompull == "Jean") {
                            item2 = star2 + star2 + star2 + star2 + star2 + "Jean"
                        }
                        else if (randompull == "Qiqi") {
                            item2 = star2 + star2 + star2 + star2 + star2 + "Qiqi"
                        }
                        else {
                            item2 = star2 + star2 + star2 + star2 + star2 + randompull
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    if (random3 < 3) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        if (randompull == "Venti") {
                            item3 = star2 + star2 + star2 + star2 + star2 + "Venti"
                        }
                        else if (randompull == "Tartaglia") {
                            item3 = star2 + star2 + star2 + star2 + star2 + "Tartaglia"
                        }
                        else if (randompull == "Klee") {
                            item3 = star2 + star2 + star2 + star2 + star2 + "Klee"
                        }
                        else if (randompull == "Albedo") {
                            item3 = star2 + star2 + star2 + star2 + star2 + "Albedo"
                        }
                        else if (randompull == "Ganyu") {
                            item3 = star2 + star2 + star2 + star2 + star2 + "Ganyu"
                        }
                        else if (randompull == "Xiao") {
                            item3 = star2 + star2 + star2 + star2 + star2 + "Xiao"
                        }
                        else if (randompull == "Hu Tao") {
                            item3 = star2 + star2 + star2 + star2 + star2 + "Hu Tao"
                        }
                        else if (randompull == "Zhongli") {
                            item3 = star2 + star2 + star2 + star2 + star2 + "Zhongli"
                        }
                        else if (randompull == "Eula") {
                            item3 = star2 + star2 + star2 + star2 + star2 + "Eula"
                        }
                        else if (randompull == "Kazuha") {
                            item3 = star2 + star2 + star2 + star2 + star2 + "Kaedehara Kazuha"
                        }
                        else if (randompull == "Ayaka") {
                            item3 = star2 + star2 + star2 + star2 + star2 + "Kamisato Ayaka"
                        }
                        else if (randompull == "Yoimiya") {
                            item3 = star2 + star2 + star2 + star2 + star2 + "Yoimiya"
                        }
                        else if (randompull == "Keqing") {
                            item3 = star2 + star2 + star2 + star2 + star2 + "Keqing"
                        }
                        else if (randompull == "Mona") {
                            item3 = star2 + star2 + star2 + star2 + star2 + "Mona"
                        }
                        else if (randompull == "Diluc") {
                            item3 = star2 + star2 + star2 + star2 + star2 + "Diluc"
                        }
                        else if (randompull == "Jean") {
                            item3 = star2 + star2 + star2 + star2 + star2 + "Jean"
                        }
                        else if (randompull == "Qiqi") {
                            item3 = star2 + star2 + star2 + star2 + star2 + "Qiqi"
                        }
                        else {
                            item3 = star2 + star2 + star2 + star2 + star2 + randompull
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    if (random4 < 3) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        if (randompull == "Venti") {
                            item4 = star2 + star2 + star2 + star2 + star2 + "Venti"
                        }
                        else if (randompull == "Tartaglia") {
                            item4 = star2 + star2 + star2 + star2 + star2 + "Tartaglia"
                        }
                        else if (randompull == "Klee") {
                            item4 = star2 + star2 + star2 + star2 + star2 + "Klee"
                        }
                        else if (randompull == "Albedo") {
                            item4 = star2 + star2 + star2 + star2 + star2 + "Albedo"
                        }
                        else if (randompull == "Ganyu") {
                            item4 = star2 + star2 + star2 + star2 + star2 + "Ganyu"
                        }
                        else if (randompull == "Xiao") {
                            item4 = star2 + star2 + star2 + star2 + star2 + "Xiao"
                        }
                        else if (randompull == "Hu Tao") {
                            item4 = star2 + star2 + star2 + star2 + star2 + "Hu Tao"
                        }
                        else if (randompull == "Zhongli") {
                            item4 = star2 + star2 + star2 + star2 + star2 + "Zhongli"
                        }
                        else if (randompull == "Eula") {
                            item4 = star2 + star2 + star2 + star2 + star2 + "Eula"
                        }
                        else if (randompull == "Kazuha") {
                            item4 = star2 + star2 + star2 + star2 + star2 + "Kaedehara Kazuha"
                        }
                        else if (randompull == "Ayaka") {
                            item4 = star2 + star2 + star2 + star2 + star2 + "Kamisato Ayaka"
                        }
                        else if (randompull == "Yoimiya") {
                            item4 = star2 + star2 + star2 + star2 + star2 + "Yoimiya"
                        }
                        else if (randompull == "Keqing") {
                            item4 = star2 + star2 + star2 + star2 + star2 + "Keqing"
                        }
                        else if (randompull == "Mona") {
                            item4 = star2 + star2 + star2 + star2 + star2 + "Mona"
                        }
                        else if (randompull == "Diluc") {
                            item4 = star2 + star2 + star2 + star2 + star2 + "Diluc"
                        }
                        else if (randompull == "Jean") {
                            item4 = star2 + star2 + star2 + star2 + star2 + "Jean"
                        }
                        else if (randompull == "Qiqi") {
                            item4 = star2 + star2 + star2 + star2 + star2 + "Qiqi"
                        }
                        else {
                            item4 = star2 + star2 + star2 + star2 + star2 + randompull
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    if (random5 < 3) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        if (randompull == "Venti") {
                            item5 = star2 + star2 + star2 + star2 + star2 + "Venti"
                        }
                        else if (randompull == "Tartaglia") {
                            item5 = star2 + star2 + star2 + star2 + star2 + "Tartaglia"
                        }
                        else if (randompull == "Klee") {
                            item5 = star2 + star2 + star2 + star2 + star2 + "Klee"
                        }
                        else if (randompull == "Albedo") {
                            item5 = star2 + star2 + star2 + star2 + star2 + "Albedo"
                        }
                        else if (randompull == "Ganyu") {
                            item5 = star2 + star2 + star2 + star2 + star2 + "Ganyu"
                        }
                        else if (randompull == "Xiao") {
                            item5 = star2 + star2 + star2 + star2 + star2 + "Xiao"
                        }
                        else if (randompull == "Hu Tao") {
                            item5 = star2 + star2 + star2 + star2 + star2 + "Hu Tao"
                        }
                        else if (randompull == "Zhongli") {
                            item5 = star2 + star2 + star2 + star2 + star2 + "Zhongli"
                        }
                        else if (randompull == "Eula") {
                            item5 = star2 + star2 + star2 + star2 + star2 + "Eula"
                        }
                        else if (randompull == "Kazuha") {
                            item5 = star2 + star2 + star2 + star2 + star2 + "Kaedehara Kazuha"
                        }
                        else if (randompull == "Ayaka") {
                            item5 = star2 + star2 + star2 + star2 + star2 + "Kamisato Ayaka"
                        }
                        else if (randompull == "Yoimiya") {
                            item5 = star2 + star2 + star2 + star2 + star2 + "Yoimiya"
                        }
                        else if (randompull == "Keqing") {
                            item5 = star2 + star2 + star2 + star2 + star2 + "Keqing"
                        }
                        else if (randompull == "Mona") {
                            item5 = star2 + star2 + star2 + star2 + star2 + "Mona"
                        }
                        else if (randompull == "Diluc") {
                            item5 = star2 + star2 + star2 + star2 + star2 + "Diluc"
                        }
                        else if (randompull == "Jean") {
                            item5 = star2 + star2 + star2 + star2 + star2 + "Jean"
                        }
                        else if (randompull == "Qiqi") {
                            item5 = star2 + star2 + star2 + star2 + star2 + "Qiqi"
                        }
                        else {
                            item5 = star2 + star2 + star2 + star2 + star2 + randompull
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    if (random6 < 3) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        if (randompull == "Venti") {
                            item6 = star2 + star2 + star2 + star2 + star2 + "Venti"
                        }
                        else if (randompull == "Tartaglia") {
                            item6 = star2 + star2 + star2 + star2 + star2 + "Tartaglia"
                        }
                        else if (randompull == "Klee") {
                            item6 = star2 + star2 + star2 + star2 + star2 + "Klee"
                        }
                        else if (randompull == "Albedo") {
                            item6 = star2 + star2 + star2 + star2 + star2 + "Albedo"
                        }
                        else if (randompull == "Ganyu") {
                            item6 = star2 + star2 + star2 + star2 + star2 + "Ganyu"
                        }
                        else if (randompull == "Xiao") {
                            item6 = star2 + star2 + star2 + star2 + star2 + "Xiao"
                        }
                        else if (randompull == "Hu Tao") {
                            item6 = star2 + star2 + star2 + star2 + star2 + "Hu Tao"
                        }
                        else if (randompull == "Zhongli") {
                            item6 = star2 + star2 + star2 + star2 + star2 + "Zhongli"
                        }
                        else if (randompull == "Eula") {
                            item6 = star2 + star2 + star2 + star2 + star2 + "Eula"
                        }
                        else if (randompull == "Kazuha") {
                            item6 = star2 + star2 + star2 + star2 + star2 + "Kaedehara Kazuha"
                        }
                        else if (randompull == "Ayaka") {
                            item6 = star2 + star2 + star2 + star2 + star2 + "Kamisato Ayaka"
                        }
                        else if (randompull == "Yoimiya") {
                            item6 = star2 + star2 + star2 + star2 + star2 + "Yoimiya"
                        }
                        else if (randompull == "Keqing") {
                            item6 = star2 + star2 + star2 + star2 + star2 + "Keqing"
                        }
                        else if (randompull == "Mona") {
                            item6 = star2 + star2 + star2 + star2 + star2 + "Mona"
                        }
                        else if (randompull == "Diluc") {
                            item6 = star2 + star2 + star2 + star2 + star2 + "Diluc"
                        }
                        else if (randompull == "Jean") {
                            item6 = star2 + star2 + star2 + star2 + star2 + "Jean"
                        }
                        else if (randompull == "Qiqi") {
                            item6 = star2 + star2 + star2 + star2 + star2 + "Qiqi"
                        }
                        else {
                            item6 = star2 + star2 + star2 + star2 + star2 + randompull
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    if (random7 < 3) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        if (randompull == "Venti") {
                            item7 = star2 + star2 + star2 + star2 + star2 + "Venti"
                        }
                        else if (randompull == "Tartaglia") {
                            item7 = star2 + star2 + star2 + star2 + star2 + "Tartaglia"
                        }
                        else if (randompull == "Klee") {
                            item7 = star2 + star2 + star2 + star2 + star2 + "Klee"
                        }
                        else if (randompull == "Albedo") {
                            item7 = star2 + star2 + star2 + star2 + star2 + "Albedo"
                        }
                        else if (randompull == "Ganyu") {
                            item7 = star2 + star2 + star2 + star2 + star2 + "Ganyu"
                        }
                        else if (randompull == "Xiao") {
                            item7 = star2 + star2 + star2 + star2 + star2 + "Xiao"
                        }
                        else if (randompull == "Hu Tao") {
                            item7 = star2 + star2 + star2 + star2 + star2 + "Hu Tao"
                        }
                        else if (randompull == "Zhongli") {
                            item7 = star2 + star2 + star2 + star2 + star2 + "Zhongli"
                        }
                        else if (randompull == "Eula") {
                            item7 = star2 + star2 + star2 + star2 + star2 + "Eula"
                        }
                        else if (randompull == "Kazuha") {
                            item7 = star2 + star2 + star2 + star2 + star2 + "Kaedehara Kazuha"
                        }
                        else if (randompull == "Ayaka") {
                            item7 = star2 + star2 + star2 + star2 + star2 + "Kamisato Ayaka"
                        }
                        else if (randompull == "Yoimiya") {
                            item7 = star2 + star2 + star2 + star2 + star2 + "Yoimiya"
                        }
                        else if (randompull == "Keqing") {
                            item7 = star2 + star2 + star2 + star2 + star2 + "Keqing"
                        }
                        else if (randompull == "Mona") {
                            item7 = star2 + star2 + star2 + star2 + star2 + "Mona"
                        }
                        else if (randompull == "Diluc") {
                            item7 = star2 + star2 + star2 + star2 + star2 + "Diluc"
                        }
                        else if (randompull == "Jean") {
                            item7 = star2 + star2 + star2 + star2 + star2 + "Jean"
                        }
                        else if (randompull == "Qiqi") {
                            item7 = star2 + star2 + star2 + star2 + star2 + "Qiqi"
                        }
                        else {
                            item7 = star2 + star2 + star2 + star2 + star2 + randompull
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    if (random8 < 3) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        if (randompull == "Venti") {
                            item8 = star2 + star2 + star2 + star2 + star2 + "Venti"
                        }
                        else if (randompull == "Tartaglia") {
                            item8 = star2 + star2 + star2 + star2 + star2 + "Tartaglia"
                        }
                        else if (randompull == "Klee") {
                            item8 = star2 + star2 + star2 + star2 + star2 + "Klee"
                        }
                        else if (randompull == "Albedo") {
                            item8 = star2 + star2 + star2 + star2 + star2 + "Albedo"
                        }
                        else if (randompull == "Ganyu") {
                            item8 = star2 + star2 + star2 + star2 + star2 + "Ganyu"
                        }
                        else if (randompull == "Xiao") {
                            item8 = star2 + star2 + star2 + star2 + star2 + "Xiao"
                        }
                        else if (randompull == "Hu Tao") {
                            item8 = star2 + star2 + star2 + star2 + star2 + "Hu Tao"
                        }
                        else if (randompull == "Zhongli") {
                            item8 = star2 + star2 + star2 + star2 + star2 + "Zhongli"
                        }
                        else if (randompull == "Eula") {
                            item8 = star2 + star2 + star2 + star2 + star2 + "Eula"
                        }
                        else if (randompull == "Kazuha") {
                            item8 = star2 + star2 + star2 + star2 + star2 + "Kaedehara Kazuha"
                        }
                        else if (randompull == "Ayaka") {
                            item8 = star2 + star2 + star2 + star2 + star2 + "Kamisato Ayaka"
                        }
                        else if (randompull == "Yoimiya") {
                            item8 = star2 + star2 + star2 + star2 + star2 + "Yoimiya"
                        }
                        else if (randompull == "Keqing") {
                            item8 = star2 + star2 + star2 + star2 + star2 + "Keqing"
                        }
                        else if (randompull == "Mona") {
                            item8 = star2 + star2 + star2 + star2 + star2 + "Mona"
                        }
                        else if (randompull == "Diluc") {
                            item8 = star2 + star2 + star2 + star2 + star2 + "Diluc"
                        }
                        else if (randompull == "Jean") {
                            item8 = star2 + star2 + star2 + star2 + star2 + "Jean"
                        }
                        else if (randompull == "Qiqi") {
                            item8 = star2 + star2 + star2 + star2 + star2 + "Qiqi"
                        }
                        else {
                            item8 = star2 + star2 + star2 + star2 + star2 + randompull
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    if (random9 < 3) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        if (randompull == "Venti") {
                            item9 = star2 + star2 + star2 + star2 + star2 + "Venti"
                        }
                        else if (randompull == "Tartaglia") {
                            item9 = star2 + star2 + star2 + star2 + star2 + "Tartaglia"
                        }
                        else if (randompull == "Klee") {
                            item9 = star2 + star2 + star2 + star2 + star2 + "Klee"
                        }
                        else if (randompull == "Albedo") {
                            item9 = star2 + star2 + star2 + star2 + star2 + "Albedo"
                        }
                        else if (randompull == "Ganyu") {
                            item9 = star2 + star2 + star2 + star2 + star2 + "Ganyu"
                        }
                        else if (randompull == "Xiao") {
                            item9 = star2 + star2 + star2 + star2 + star2 + "Xiao"
                        }
                        else if (randompull == "Hu Tao") {
                            item9 = star2 + star2 + star2 + star2 + star2 + "Hu Tao"
                        }
                        else if (randompull == "Zhongli") {
                            item9 = star2 + star2 + star2 + star2 + star2 + "Zhongli"
                        }
                        else if (randompull == "Eula") {
                            item9 = star2 + star2 + star2 + star2 + star2 + "Eula"
                        }
                        else if (randompull == "Kazuha") {
                            item9 = star2 + star2 + star2 + star2 + star2 + "Kaedehara Kazuha"
                        }
                        else if (randompull == "Ayaka") {
                            item9 = star2 + star2 + star2 + star2 + star2 + "Kamisato Ayaka"
                        }
                        else if (randompull == "Yoimiya") {
                            item9 = star2 + star2 + star2 + star2 + star2 + "Yoimiya"
                        }
                        else if (randompull == "Keqing") {
                            item9 = star2 + star2 + star2 + star2 + star2 + "Keqing"
                        }
                        else if (randompull == "Mona") {
                            item9 = star2 + star2 + star2 + star2 + star2 + "Mona"
                        }
                        else if (randompull == "Diluc") {
                            item9 = star2 + star2 + star2 + star2 + star2 + "Diluc"
                        }
                        else if (randompull == "Jean") {
                            item9 = star2 + star2 + star2 + star2 + star2 + "Jean"
                        }
                        else if (randompull == "Qiqi") {
                            item9 = star2 + star2 + star2 + star2 + star2 + "Qiqi"
                        }
                        else {
                            item9 = star2 + star2 + star2 + star2 + star2 + randompull
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    if (random10 < 3) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        if (randompull == "Venti") {
                            item10 = star2 + star2 + star2 + star2 + star2 + "Venti"
                        }
                        else if (randompull == "Tartaglia") {
                            item10 = star2 + star2 + star2 + star2 + star2 + "Tartaglia"
                        }
                        else if (randompull == "Klee") {
                            item10 = star2 + star2 + star2 + star2 + star2 + "Klee"
                        }
                        else if (randompull == "Albedo") {
                            item10 = star2 + star2 + star2 + star2 + star2 + "Albedo"
                        }
                        else if (randompull == "Ganyu") {
                            item10 = star2 + star2 + star2 + star2 + star2 + "Ganyu"
                        }
                        else if (randompull == "Xiao") {
                            item10 = star2 + star2 + star2 + star2 + star2 + "Xiao"
                        }
                        else if (randompull == "Hu Tao") {
                            item10 = star2 + star2 + star2 + star2 + star2 + "Hu Tao"
                        }
                        else if (randompull == "Zhongli") {
                            item10 = star2 + star2 + star2 + star2 + star2 + "Zhongli"
                        }
                        else if (randompull == "Eula") {
                            item10 = star2 + star2 + star2 + star2 + star2 + "Eula"
                        }
                        else if (randompull == "Kazuha") {
                            item10 = star2 + star2 + star2 + star2 + star2 + "Kaedehara Kazuha"
                        }
                        else if (randompull == "Ayaka") {
                            item10 = star2 + star2 + star2 + star2 + star2 + "Kamisato Ayaka"
                        }
                        else if (randompull == "Yoimiya") {
                            item10 = star2 + star2 + star2 + star2 + star2 + "Yoimiya"
                        }
                        else if (randompull == "Keqing") {
                            item10 = star2 + star2 + star2 + star2 + star2 + "Keqing"
                        }
                        else if (randompull == "Mona") {
                            item10 = star2 + star2 + star2 + star2 + star2 + "Mona"
                        }
                        else if (randompull == "Diluc") {
                            item10 = star2 + star2 + star2 + star2 + star2 + "Diluc"
                        }
                        else if (randompull == "Jean") {
                            item10 = star2 + star2 + star2 + star2 + star2 + "Jean"
                        }
                        else if (randompull == "Qiqi") {
                            item10 = star2 + star2 + star2 + star2 + star2 + "Qiqi"
                        }
                        else {
                            item10 = star2 + star2 + star2 + star2 + star2 + randompull
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (star5pity > 79) { // 5-star pity hits, automatic 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        if (randompull == "Venti") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Venti"
                            item2 = star2 + star2 + star2 + star2 + star2 + "Venti"
                            item3 = star2 + star2 + star2 + star2 + star2 + "Venti"
                            item4 = star2 + star2 + star2 + star2 + star2 + "Venti"
                            item5 = star2 + star2 + star2 + star2 + star2 + "Venti"
                            item6 = star2 + star2 + star2 + star2 + star2 + "Venti"
                            item7 = star2 + star2 + star2 + star2 + star2 + "Venti"
                            item8 = star2 + star2 + star2 + star2 + star2 + "Venti"
                            item9 = star2 + star2 + star2 + star2 + star2 + "Venti"
                            item10 = star2 + star2 + star2 + star2 + star2 + "Venti"
                        }
                        else if (randompull == "Tartaglia") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Tartaglia"
                            item2 = star2 + star2 + star2 + star2 + star2 + "Tartaglia"
                            item3 = star2 + star2 + star2 + star2 + star2 + "Tartaglia"
                            item4 = star2 + star2 + star2 + star2 + star2 + "Tartaglia"
                            item5 = star2 + star2 + star2 + star2 + star2 + "Tartaglia"
                            item6 = star2 + star2 + star2 + star2 + star2 + "Tartaglia"
                            item7 = star2 + star2 + star2 + star2 + star2 + "Tartaglia"
                            item8 = star2 + star2 + star2 + star2 + star2 + "Tartaglia"
                            item9 = star2 + star2 + star2 + star2 + star2 + "Tartaglia"
                            item10 = star2 + star2 + star2 + star2 + star2 + "Tartaglia"

                        }
                        else if (randompull == "Klee") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Klee"
                            item2 = star2 + star2 + star2 + star2 + star2 + "Klee"
                            item3 = star2 + star2 + star2 + star2 + star2 + "Klee"
                            item4 = star2 + star2 + star2 + star2 + star2 + "Klee"
                            item5 = star2 + star2 + star2 + star2 + star2 + "Klee"
                            item6 = star2 + star2 + star2 + star2 + star2 + "Klee"
                            item7 = star2 + star2 + star2 + star2 + star2 + "Klee"
                            item8 = star2 + star2 + star2 + star2 + star2 + "Klee"
                            item9 = star2 + star2 + star2 + star2 + star2 + "Klee"
                            item10 = star2 + star2 + star2 + star2 + star2 + "Klee"

                        }
                        else if (randompull == "Albedo") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Albedo"
                            item2 = star2 + star2 + star2 + star2 + star2 + "Albedo"
                            item3 = star2 + star2 + star2 + star2 + star2 + "Albedo"
                            item4 = star2 + star2 + star2 + star2 + star2 + "Albedo"
                            item5 = star2 + star2 + star2 + star2 + star2 + "Albedo"
                            item6 = star2 + star2 + star2 + star2 + star2 + "Albedo"
                            item7 = star2 + star2 + star2 + star2 + star2 + "Albedo"
                            item8 = star2 + star2 + star2 + star2 + star2 + "Albedo"
                            item9 = star2 + star2 + star2 + star2 + star2 + "Albedo"
                            item10 = star2 + star2 + star2 + star2 + star2 + "Albedo"
                        }
                        else if (randompull == "Ganyu") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Ganyu"
                            item2 = star2 + star2 + star2 + star2 + star2 + "Ganyu"
                            item3 = star2 + star2 + star2 + star2 + star2 + "Ganyu"
                            item4 = star2 + star2 + star2 + star2 + star2 + "Ganyu"
                            item5 = star2 + star2 + star2 + star2 + star2 + "Ganyu"
                            item6 = star2 + star2 + star2 + star2 + star2 + "Ganyu"
                            item7 = star2 + star2 + star2 + star2 + star2 + "Ganyu"
                            item8 = star2 + star2 + star2 + star2 + star2 + "Ganyu"
                            item9 = star2 + star2 + star2 + star2 + star2 + "Ganyu"
                            item10 = star2 + star2 + star2 + star2 + star2 + "Ganyu"
                        }
                        else if (randompull == "Xiao") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Xiao"
                            item2 = star2 + star2 + star2 + star2 + star2 + "Xiao"
                            item3 = star2 + star2 + star2 + star2 + star2 + "Xiao"
                            item4 = star2 + star2 + star2 + star2 + star2 + "Xiao"
                            item5 = star2 + star2 + star2 + star2 + star2 + "Xiao"
                            item6 = star2 + star2 + star2 + star2 + star2 + "Xiao"
                            item7 = star2 + star2 + star2 + star2 + star2 + "Xiao"
                            item8 = star2 + star2 + star2 + star2 + star2 + "Xiao"
                            item9 = star2 + star2 + star2 + star2 + star2 + "Xiao"
                            item10 = star2 + star2 + star2 + star2 + star2 + "Xiao"

                        }
                        else if (randompull == "Hu Tao") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Hu Tao"
                            item2 = star2 + star2 + star2 + star2 + star2 + "Hu Tao"
                            item3 = star2 + star2 + star2 + star2 + star2 + "Hu Tao"
                            item4 = star2 + star2 + star2 + star2 + star2 + "Hu Tao"
                            item5 = star2 + star2 + star2 + star2 + star2 + "Hu Tao"
                            item6 = star2 + star2 + star2 + star2 + star2 + "Hu Tao"
                            item7 = star2 + star2 + star2 + star2 + star2 + "Hu Tao"
                            item8 = star2 + star2 + star2 + star2 + star2 + "Hu Tao"
                            item9 = star2 + star2 + star2 + star2 + star2 + "Hu Tao"
                            item10 = star2 + star2 + star2 + star2 + star2 + "Hu Tao"

                        }
                        else if (randompull == "Zhongli") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Zhongli"
                            item2 = star2 + star2 + star2 + star2 + star2 + "Zhongli"
                            item3 = star2 + star2 + star2 + star2 + star2 + "Zhongli"
                            item4 = star2 + star2 + star2 + star2 + star2 + "Zhongli"
                            item5 = star2 + star2 + star2 + star2 + star2 + "Zhongli"
                            item6 = star2 + star2 + star2 + star2 + star2 + "Zhongli"
                            item7 = star2 + star2 + star2 + star2 + star2 + "Zhongli"
                            item8 = star2 + star2 + star2 + star2 + star2 + "Zhongli"
                            item9 = star2 + star2 + star2 + star2 + star2 + "Zhongli"
                            item10 = star2 + star2 + star2 + star2 + star2 + "Zhongli"
                        }
                        else if (randompull == "Eula") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Eula"
                            item2 = star2 + star2 + star2 + star2 + star2 + "Eula"
                            item3 = star2 + star2 + star2 + star2 + star2 + "Eula"
                            item4 = star2 + star2 + star2 + star2 + star2 + "Eula"
                            item5 = star2 + star2 + star2 + star2 + star2 + "Eula"
                            item6 = star2 + star2 + star2 + star2 + star2 + "Eula"
                            item7 = star2 + star2 + star2 + star2 + star2 + "Eula"
                            item8 = star2 + star2 + star2 + star2 + star2 + "Eula"
                            item9 = star2 + star2 + star2 + star2 + star2 + "Eula"
                            item10 = star2 + star2 + star2 + star2 + star2 + "Eula"
                        }
                        else if (randompull == "Kazuha") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Kaedehara Kazuha"
                            item2 = star2 + star2 + star2 + star2 + star2 + "Kaedehara Kazuha"
                            item3 = star2 + star2 + star2 + star2 + star2 + "Kaedehara Kazuha"
                            item4 = star2 + star2 + star2 + star2 + star2 + "Kaedehara Kazuha"
                            item5 = star2 + star2 + star2 + star2 + star2 + "Kaedehara Kazuha"
                            item6 = star2 + star2 + star2 + star2 + star2 + "Kaedehara Kazuha"
                            item7 = star2 + star2 + star2 + star2 + star2 + "Kaedehara Kazuha"
                            item8 = star2 + star2 + star2 + star2 + star2 + "Kaedehara Kazuha"
                            item9 = star2 + star2 + star2 + star2 + star2 + "Kaedehara Kazuha"
                            item10 = star2 + star2 + star2 + star2 + star2 + "Kaedehara Kazuha"

                        }
                        else if (randompull == "Ayaka") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Kamisato Ayaka"
                            item2 = star2 + star2 + star2 + star2 + star2 + "Kamisato Ayaka"
                            item3 = star2 + star2 + star2 + star2 + star2 + "Kamisato Ayaka"
                            item4 = star2 + star2 + star2 + star2 + star2 + "Kamisato Ayaka"
                            item5 = star2 + star2 + star2 + star2 + star2 + "Kamisato Ayaka"
                            item6 = star2 + star2 + star2 + star2 + star2 + "Kamisato Ayaka"
                            item7 = star2 + star2 + star2 + star2 + star2 + "Kamisato Ayaka"
                            item8 = star2 + star2 + star2 + star2 + star2 + "Kamisato Ayaka"
                            item9 = star2 + star2 + star2 + star2 + star2 + "Kamisato Ayaka"
                            item10 = star2 + star2 + star2 + star2 + star2 + "Kamisato Ayaka"

                        }
                        else if (randompull == "Yoimiya") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Yoimiya"
                            item2 = star2 + star2 + star2 + star2 + star2 + "Yoimiya"
                            item3 = star2 + star2 + star2 + star2 + star2 + "Yoimiya"
                            item4 = star2 + star2 + star2 + star2 + star2 + "Yoimiya"
                            item5 = star2 + star2 + star2 + star2 + star2 + "Yoimiya"
                            item6 = star2 + star2 + star2 + star2 + star2 + "Yoimiya"
                            item7 = star2 + star2 + star2 + star2 + star2 + "Yoimiya"
                            item8 = star2 + star2 + star2 + star2 + star2 + "Yoimiya"
                            item9 = star2 + star2 + star2 + star2 + star2 + "Yoimiya"
                            item10 = star2 + star2 + star2 + star2 + star2 + "Yoimiya"

                        }
                        else if (randompull == "Keqing") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Keqing"
                            item2 = star2 + star2 + star2 + star2 + star2 + "Keqing"
                            item3 = star2 + star2 + star2 + star2 + star2 + "Keqing"
                            item4 = star2 + star2 + star2 + star2 + star2 + "Keqing"
                            item5 = star2 + star2 + star2 + star2 + star2 + "Keqing"
                            item6 = star2 + star2 + star2 + star2 + star2 + "Keqing"
                            item7 = star2 + star2 + star2 + star2 + star2 + "Keqing"
                            item8 = star2 + star2 + star2 + star2 + star2 + "Keqing"
                            item9 = star2 + star2 + star2 + star2 + star2 + "Keqing"
                            item10 = star2 + star2 + star2 + star2 + star2 + "Keqing"

                        }
                        else if (randompull == "Mona") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Mona"
                            item2 = star2 + star2 + star2 + star2 + star2 + "Mona"
                            item3 = star2 + star2 + star2 + star2 + star2 + "Mona"
                            item4 = star2 + star2 + star2 + star2 + star2 + "Mona"
                            item5 = star2 + star2 + star2 + star2 + star2 + "Mona"
                            item6 = star2 + star2 + star2 + star2 + star2 + "Mona"
                            item7 = star2 + star2 + star2 + star2 + star2 + "Mona"
                            item8 = star2 + star2 + star2 + star2 + star2 + "Mona"
                            item9 = star2 + star2 + star2 + star2 + star2 + "Mona"
                            item10 = star2 + star2 + star2 + star2 + star2 + "Mona"

                        }
                        else if (randompull == "Diluc") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Diluc"
                            item2 = star2 + star2 + star2 + star2 + star2 + "Diluc"
                            item3 = star2 + star2 + star2 + star2 + star2 + "Diluc"
                            item4 = star2 + star2 + star2 + star2 + star2 + "Diluc"
                            item5 = star2 + star2 + star2 + star2 + star2 + "Diluc"
                            item6 = star2 + star2 + star2 + star2 + star2 + "Diluc"
                            item7 = star2 + star2 + star2 + star2 + star2 + "Diluc"
                            item8 = star2 + star2 + star2 + star2 + star2 + "Diluc"
                            item9 = star2 + star2 + star2 + star2 + star2 + "Diluc"
                            item10 = star2 + star2 + star2 + star2 + star2 + "Diluc"

                        }
                        else if (randompull == "Jean") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Jean"
                            item2 = star2 + star2 + star2 + star2 + star2 + "Jean"
                            item3 = star2 + star2 + star2 + star2 + star2 + "Jean"
                            item4 = star2 + star2 + star2 + star2 + star2 + "Jean"
                            item5 = star2 + star2 + star2 + star2 + star2 + "Jean"
                            item6 = star2 + star2 + star2 + star2 + star2 + "Jean"
                            item7 = star2 + star2 + star2 + star2 + star2 + "Jean"
                            item8 = star2 + star2 + star2 + star2 + star2 + "Jean"
                            item9 = star2 + star2 + star2 + star2 + star2 + "Jean"
                            item10 = star2 + star2 + star2 + star2 + star2 + "Jean"

                        }
                        else if (randompull == "Qiqi") {
                            item1 = star2 + star2 + star2 + star2 + star2 + "Qiqi"
                            item2 = star2 + star2 + star2 + star2 + star2 + "Qiqi"
                            item3 = star2 + star2 + star2 + star2 + star2 + "Qiqi"
                            item4 = star2 + star2 + star2 + star2 + star2 + "Qiqi"
                            item5 = star2 + star2 + star2 + star2 + star2 + "Qiqi"
                            item6 = star2 + star2 + star2 + star2 + star2 + "Qiqi"
                            item7 = star2 + star2 + star2 + star2 + star2 + "Qiqi"
                            item8 = star2 + star2 + star2 + star2 + star2 + "Qiqi"
                            item9 = star2 + star2 + star2 + star2 + star2 + "Qiqi"
                            item10 = star2 + star2 + star2 + star2 + star2 + "Qiqi"

                        }
                        else {
                            item1 = star2 + star2 + star2 + star2 + star2 + randompull
                            item2 = star2 + star2 + star2 + star2 + star2 + randompull
                            item3 = star2 + star2 + star2 + star2 + star2 + randompull
                            item4 = star2 + star2 + star2 + star2 + star2 + randompull
                            item5 = star2 + star2 + star2 + star2 + star2 + randompull
                            item6 = star2 + star2 + star2 + star2 + star2 + randompull
                            item7 = star2 + star2 + star2 + star2 + star2 + randompull
                            item8 = star2 + star2 + star2 + star2 + star2 + randompull
                            item9 = star2 + star2 + star2 + star2 + star2 + randompull
                            item10 = star2 + star2 + star2 + star2 + star2 + randompull

                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random1 > 70) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Sayu", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons
                        
                        item1 = star + star + star + star + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random2 > 70) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Sayu", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons
                        
                        item2 = star + star + star + star + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random3 > 70) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Sayu", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons
                        
                        item3 = star + star + star + star + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random4 > 70) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Sayu", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons

                        item4 = star + star + star + star + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random5 > 70) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Sayu", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons

                        item5 = star + star + star + star + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random6 > 70) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Sayu", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons

                        item6 = star + star + star + star + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random7 > 70) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Sayu", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons

                        item7 = star + star + star + star + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random8 > 70) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Sayu", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons

                        item8 = star + star + star + star + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random9 > 70) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Sayu", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons

                        item9 = star + star + star + star + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random10 > 70) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Sayu", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons

                        item10 = star + star + star + star + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (star4pity > 8) { // if 4-star pity hits, automatic 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Sayu", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons
                        item1 = star + star + star + star + random4star(star4)
                        item2 = star + star + star + star + random4star(star4)
                        item3 = star + star + star + star + random4star(star4)
                        item4 = star + star + star + star + random4star(star4)
                        item5 = star + star + star + star + random4star(star4)
                        item6 = star + star + star + star + random4star(star4)
                        item7 = star + star + star + star + random4star(star4)
                        item8 = star + star + star + star + random4star(star4)
                        item9 = star + star + star + star + random4star(star4)
                        item10 = star + star + star + star + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else { // 3-star items

                        star4pity += 1
                        star5pity += 10
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    const embed = new MessageEmbed()
                    .setTitle("10-pull:")
                    .setDescription(`${item1}
${item2}
${item3}
${item4}
${item5}
${item6}
${item7}
${item8}
${item9}
${item10}`)
                    receivedMessage.channel.send(embed)
                    console.log(star4pity)
                    console.log(star5pity)
                }
                else {
                    const random = Math.floor(Math.random() * 90) // generates a random number between 1-90
                    if (random < 2) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        if (randompull == "Venti") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/7/76/Character_Venti_Card.jpg')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Tartaglia") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Character_Tartaglia_Card.png')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Klee") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/7/78/Character_Klee_Card.jpg')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Albedo") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/f/f8/Character_Albedo_Card.png')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Ganyu") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Character_Ganyu_Card.png')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Xiao") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/8/88/Character_Xiao_Card.jpg')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Hu Tao") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/2/22/Character_Hu_Tao_Card.jpg')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Zhongli") {
                            // receivedMessage.channel.send(toad)
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/7/79/Character_Zhongli_Card.png')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Eula") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Character_Eula_Card.png')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Kazuha") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/b/b5/Character_Kazuha_Card.png')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Ayaka") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/b/ba/Character_Ayaka_Card.png')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Yoimiya") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Character_Yoimiya_Card.png')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Keqing") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Character_Keqing_Card.jpg')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Mona") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/6/69/Character_Mona_Card.jpg')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Diluc") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/4/45/Character_Diluc_Card.jpg')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Jean") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Character_Jean_Card.jpg')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Qiqi") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Character_Qiqi_Card.jpg')
                            receivedMessage.channel.send(embed)
                        }
                        else {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            receivedMessage.channel.send(embed)
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (star5pity > 79) { // 5-star pity hits, automatic 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        if (randompull == "Venti") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/7/76/Character_Venti_Card.jpg')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Tartaglia") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Character_Tartaglia_Card.png')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Klee") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/7/78/Character_Klee_Card.jpg')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Albedo") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/f/f8/Character_Albedo_Card.png')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Ganyu") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Character_Ganyu_Card.png')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Xiao") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/8/88/Character_Xiao_Card.jpg')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Hu Tao") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/2/22/Character_Hu_Tao_Card.jpg')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Zhongli") {
                            receivedMessage.channel.send(toad)
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/7/79/Character_Zhongli_Card.png')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Eula") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Character_Eula_Card.png')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Kazuha") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/b/b5/Character_Kazuha_Card.png')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Ayaka") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/b/ba/Character_Ayaka_Card.png')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Yoimiya") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Character_Yoimiya_Card.png')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Keqing") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Character_Keqing_Card.jpg')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Mona") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/6/69/Character_Mona_Card.jpg')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Diluc") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/4/45/Character_Diluc_Card.jpg')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Jean") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Character_Jean_Card.jpg')
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Qiqi") {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Character_Qiqi_Card.jpg')
                            receivedMessage.channel.send(embed)
                        }
                        else {
                            const embed = new MessageEmbed()
                            .setTitle(star + star + star + star + star)
                            .setDescription(randompull)
                            receivedMessage.channel.send(embed)
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random > 89) { // lol
                        receivedMessage.channel.send(pallad)
                        const embed = new MessageEmbed()
                        .setTitle(star)
                        .setDescription('Reckless Pallad')
                        receivedMessage.channel.send(embed)
                        star4pity += 1
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random > 78) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Sayu", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons
                        const embed = new MessageEmbed()
                        .setTitle(star + star + star + star)
                        .setDescription(random4star(star4))
                        receivedMessage.channel.send(embed)
                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (star4pity > 8) { // if 4-star pity hits, automatic 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Sayu", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons
                        const embed = new MessageEmbed()
                        .setTitle(star + star + star + star)
                        .setDescription(random4star(star4))
                        receivedMessage.channel.send(embed)
                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else { // 3-star items
                        console.log("Blue.")
                        var star3 = ["Slingshot", "Sharpshooter's Oath", "Raven Bow", "Emerald Orb", "Thrilling Tales of Dragon Slayers", "Magic Guide", "Black Tassel", "Debate Club", "Bloodstained Greatsword", "Ferrous Shadow", "Skyrider Sword", "Harbringer of Dawn", "Cool Steel"] // List of 3-star weapons
                        const embed = new MessageEmbed()
                        .setTitle(star + star + star)
                        .setDescription(random3star(star3))
                        receivedMessage.channel.send(embed)
                        star4pity += 1
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}