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
        var star5pity = 0
        var star4pity = 0

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

                    if (random1 < 2) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        if (randompull == "Venti") {
                            item1 = star + star + star + star + star + "Venti"
                        }
                        else if (randompull == "Tartaglia") {
                            item1 = star + star + star + star + star + "Tartaglia"
                        }
                        else if (randompull == "Klee") {
                            item1 = star + star + star + star + star + "Klee"
                        }
                        else if (randompull == "Albedo") {
                            item1 = star + star + star + star + star + "Albedo"
                        }
                        else if (randompull == "Ganyu") {
                            item1 = star + star + star + star + star + "Ganyu"
                        }
                        else if (randompull == "Xiao") {
                            item1 = star + star + star + star + star + "Xiao"
                        }
                        else if (randompull == "Hu Tao") {
                            item1 = star + star + star + star + star + "Hu Tao"
                        }
                        else if (randompull == "Zhongli") {
                            item1 = star + star + star + star + star + "Zhongli"
                        }
                        else if (randompull == "Eula") {
                            item1 = star + star + star + star + star + "Eula"
                        }
                        else if (randompull == "Kazuha") {
                            item1 = star + star + star + star + star + "Kaedehara Kazuha"
                        }
                        else if (randompull == "Ayaka") {
                            item1 = star + star + star + star + star + "Kamisato Ayaka"
                        }
                        else if (randompull == "Yoimiya") {
                            item1 = star + star + star + star + star + "Yoimiya"
                        }
                        else if (randompull == "Keqing") {
                            item1 = star + star + star + star + star + "Keqing"
                        }
                        else if (randompull == "Mona") {
                            item1 = star + star + star + star + star + "Mona"
                        }
                        else if (randompull == "Diluc") {
                            item1 = star + star + star + star + star + "Diluc"
                        }
                        else if (randompull == "Jean") {
                            item1 = star + star + star + star + star + "Jean"
                        }
                        else if (randompull == "Qiqi") {
                            item1 = star + star + star + star + star + "Qiqi"
                        }
                        else {
                            item1 = star + star + star + star + star + randompull
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    if (random2 < 2) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        if (randompull == "Venti") {
                            item2 = star + star + star + star + star + "Venti"
                        }
                        else if (randompull == "Tartaglia") {
                            item2 = star + star + star + star + star + "Tartaglia"
                        }
                        else if (randompull == "Klee") {
                            item2 = star + star + star + star + star + "Klee"
                        }
                        else if (randompull == "Albedo") {
                            item2 = star + star + star + star + star + "Albedo"
                        }
                        else if (randompull == "Ganyu") {
                            item2 = star + star + star + star + star + "Ganyu"
                        }
                        else if (randompull == "Xiao") {
                            item2 = star + star + star + star + star + "Xiao"
                        }
                        else if (randompull == "Hu Tao") {
                            item2 = star + star + star + star + star + "Hu Tao"
                        }
                        else if (randompull == "Zhongli") {
                            item2 = star + star + star + star + star + "Zhongli"
                        }
                        else if (randompull == "Eula") {
                            item2 = star + star + star + star + star + "Eula"
                        }
                        else if (randompull == "Kazuha") {
                            item2 = star + star + star + star + star + "Kaedehara Kazuha"

                        }
                        else if (randompull == "Ayaka") {
                            item2 = star + star + star + star + star + "Kamisato Ayaka"
                        }
                        else if (randompull == "Yoimiya") {
                            item2 = star + star + star + star + star + "Yoimiya"
                        }
                        else if (randompull == "Keqing") {
                            item2 = star + star + star + star + star + "Keqing"
                        }
                        else if (randompull == "Mona") {
                            item2 = star + star + star + star + star + "Mona"
                        }
                        else if (randompull == "Diluc") {
                            item2 = star + star + star + star + star + "Diluc"
                        }
                        else if (randompull == "Jean") {
                            item2 = star + star + star + star + star + "Jean"
                        }
                        else if (randompull == "Qiqi") {
                            item2 = star + star + star + star + star + "Qiqi"
                        }
                        else {
                            item2 = star + star + star + star + star + randompull
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    if (random3 < 2) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        if (randompull == "Venti") {
                            item3 = star + star + star + star + star + "Venti"
                        }
                        else if (randompull == "Tartaglia") {
                            item3 = star + star + star + star + star + "Tartaglia"
                        }
                        else if (randompull == "Klee") {
                            item3 = star + star + star + star + star + "Klee"
                        }
                        else if (randompull == "Albedo") {
                            item3 = star + star + star + star + star + "Albedo"
                        }
                        else if (randompull == "Ganyu") {
                            item3 = star + star + star + star + star + "Ganyu"
                        }
                        else if (randompull == "Xiao") {
                            item3 = star + star + star + star + star + "Xiao"
                        }
                        else if (randompull == "Hu Tao") {
                            item3 = star + star + star + star + star + "Hu Tao"
                        }
                        else if (randompull == "Zhongli") {
                            item3 = star + star + star + star + star + "Zhongli"
                        }
                        else if (randompull == "Eula") {
                            item3 = star + star + star + star + star + "Eula"
                        }
                        else if (randompull == "Kazuha") {
                            item3 = star + star + star + star + star + "Kaedehara Kazuha"
                        }
                        else if (randompull == "Ayaka") {
                            item3 = star + star + star + star + star + "Kamisato Ayaka"
                        }
                        else if (randompull == "Yoimiya") {
                            item3 = star + star + star + star + star + "Yoimiya"
                        }
                        else if (randompull == "Keqing") {
                            item3 = star + star + star + star + star + "Keqing"
                        }
                        else if (randompull == "Mona") {
                            item3 = star + star + star + star + star + "Mona"
                        }
                        else if (randompull == "Diluc") {
                            item3 = star + star + star + star + star + "Diluc"
                        }
                        else if (randompull == "Jean") {
                            item3 = star + star + star + star + star + "Jean"
                        }
                        else if (randompull == "Qiqi") {
                            item3 = star + star + star + star + star + "Qiqi"
                        }
                        else {
                            item3 = star + star + star + star + star + randompull
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    if (random4 < 2) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        if (randompull == "Venti") {
                            item4 = star + star + star + star + star + "Venti"
                        }
                        else if (randompull == "Tartaglia") {
                            item4 = star + star + star + star + star + "Tartaglia"
                        }
                        else if (randompull == "Klee") {
                            item4 = star + star + star + star + star + "Klee"
                        }
                        else if (randompull == "Albedo") {
                            item4 = star + star + star + star + star + "Albedo"
                        }
                        else if (randompull == "Ganyu") {
                            item4 = star + star + star + star + star + "Ganyu"
                        }
                        else if (randompull == "Xiao") {
                            item4 = star + star + star + star + star + "Xiao"
                        }
                        else if (randompull == "Hu Tao") {
                            item4 = star + star + star + star + star + "Hu Tao"
                        }
                        else if (randompull == "Zhongli") {
                            item4 = star + star + star + star + star + "Zhongli"
                        }
                        else if (randompull == "Eula") {
                            item4 = star + star + star + star + star + "Eula"
                        }
                        else if (randompull == "Kazuha") {
                            item4 = star + star + star + star + star + "Kaedehara Kazuha"
                        }
                        else if (randompull == "Ayaka") {
                            item4 = star + star + star + star + star + "Kamisato Ayaka"
                        }
                        else if (randompull == "Yoimiya") {
                            item4 = star + star + star + star + star + "Yoimiya"
                        }
                        else if (randompull == "Keqing") {
                            item4 = star + star + star + star + star + "Keqing"
                        }
                        else if (randompull == "Mona") {
                            item4 = star + star + star + star + star + "Mona"
                        }
                        else if (randompull == "Diluc") {
                            item4 = star + star + star + star + star + "Diluc"
                        }
                        else if (randompull == "Jean") {
                            item4 = star + star + star + star + star + "Jean"
                        }
                        else if (randompull == "Qiqi") {
                            item4 = star + star + star + star + star + "Qiqi"
                        }
                        else {
                            item4 = star + star + star + star + star + randompull
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    if (random5 < 2) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        if (randompull == "Venti") {
                            item5 = star + star + star + star + star + "Venti"
                        }
                        else if (randompull == "Tartaglia") {
                            item5 = star + star + star + star + star + "Tartaglia"
                        }
                        else if (randompull == "Klee") {
                            item5 = star + star + star + star + star + "Klee"
                        }
                        else if (randompull == "Albedo") {
                            item5 = star + star + star + star + star + "Albedo"
                        }
                        else if (randompull == "Ganyu") {
                            item5 = star + star + star + star + star + "Ganyu"
                        }
                        else if (randompull == "Xiao") {
                            item5 = star + star + star + star + star + "Xiao"
                        }
                        else if (randompull == "Hu Tao") {
                            item5 = star + star + star + star + star + "Hu Tao"
                        }
                        else if (randompull == "Zhongli") {
                            item5 = star + star + star + star + star + "Zhongli"
                        }
                        else if (randompull == "Eula") {
                            item5 = star + star + star + star + star + "Eula"
                        }
                        else if (randompull == "Kazuha") {
                            item5 = star + star + star + star + star + "Kaedehara Kazuha"
                        }
                        else if (randompull == "Ayaka") {
                            item5 = star + star + star + star + star + "Kamisato Ayaka"
                        }
                        else if (randompull == "Yoimiya") {
                            item5 = star + star + star + star + star + "Yoimiya"
                        }
                        else if (randompull == "Keqing") {
                            item5 = star + star + star + star + star + "Keqing"
                        }
                        else if (randompull == "Mona") {
                            item5 = star + star + star + star + star + "Mona"
                        }
                        else if (randompull == "Diluc") {
                            item5 = star + star + star + star + star + "Diluc"
                        }
                        else if (randompull == "Jean") {
                            item5 = star + star + star + star + star + "Jean"
                        }
                        else if (randompull == "Qiqi") {
                            item5 = star + star + star + star + star + "Qiqi"
                        }
                        else {
                            item5 = star + star + star + star + star + randompull
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    if (random6 < 2) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        if (randompull == "Venti") {
                            item6 = star + star + star + star + star + "Venti"
                        }
                        else if (randompull == "Tartaglia") {
                            item6 = star + star + star + star + star + "Tartaglia"
                        }
                        else if (randompull == "Klee") {
                            item6 = star + star + star + star + star + "Klee"
                        }
                        else if (randompull == "Albedo") {
                            item6 = star + star + star + star + star + "Albedo"
                        }
                        else if (randompull == "Ganyu") {
                            item6 = star + star + star + star + star + "Ganyu"
                        }
                        else if (randompull == "Xiao") {
                            item6 = star + star + star + star + star + "Xiao"
                        }
                        else if (randompull == "Hu Tao") {
                            item6 = star + star + star + star + star + "Hu Tao"
                        }
                        else if (randompull == "Zhongli") {
                            item6 = star + star + star + star + star + "Zhongli"
                        }
                        else if (randompull == "Eula") {
                            item6 = star + star + star + star + star + "Eula"
                        }
                        else if (randompull == "Kazuha") {
                            item6 = star + star + star + star + star + "Kaedehara Kazuha"
                        }
                        else if (randompull == "Ayaka") {
                            item6 = star + star + star + star + star + "Kamisato Ayaka"
                        }
                        else if (randompull == "Yoimiya") {
                            item6 = star + star + star + star + star + "Yoimiya"
                        }
                        else if (randompull == "Keqing") {
                            item6 = star + star + star + star + star + "Keqing"
                        }
                        else if (randompull == "Mona") {
                            item6 = star + star + star + star + star + "Mona"
                        }
                        else if (randompull == "Diluc") {
                            item6 = star + star + star + star + star + "Diluc"
                        }
                        else if (randompull == "Jean") {
                            item6 = star + star + star + star + star + "Jean"
                        }
                        else if (randompull == "Qiqi") {
                            item6 = star + star + star + star + star + "Qiqi"
                        }
                        else {
                            item6 = star + star + star + star + star + randompull
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    if (random7 < 2) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        if (randompull == "Venti") {
                            item7 = star + star + star + star + star + "Venti"
                        }
                        else if (randompull == "Tartaglia") {
                            item7 = star + star + star + star + star + "Tartaglia"
                        }
                        else if (randompull == "Klee") {
                            item7 = star + star + star + star + star + "Klee"
                        }
                        else if (randompull == "Albedo") {
                            item7 = star + star + star + star + star + "Albedo"
                        }
                        else if (randompull == "Ganyu") {
                            item7 = star + star + star + star + star + "Ganyu"
                        }
                        else if (randompull == "Xiao") {
                            item7 = star + star + star + star + star + "Xiao"
                        }
                        else if (randompull == "Hu Tao") {
                            item7 = star + star + star + star + star + "Hu Tao"
                        }
                        else if (randompull == "Zhongli") {
                            item7 = star + star + star + star + star + "Zhongli"
                        }
                        else if (randompull == "Eula") {
                            item7 = star + star + star + star + star + "Eula"
                        }
                        else if (randompull == "Kazuha") {
                            item7 = star + star + star + star + star + "Kaedehara Kazuha"
                        }
                        else if (randompull == "Ayaka") {
                            item7 = star + star + star + star + star + "Kamisato Ayaka"
                        }
                        else if (randompull == "Yoimiya") {
                            item7 = star + star + star + star + star + "Yoimiya"
                        }
                        else if (randompull == "Keqing") {
                            item7 = star + star + star + star + star + "Keqing"
                        }
                        else if (randompull == "Mona") {
                            item7 = star + star + star + star + star + "Mona"
                        }
                        else if (randompull == "Diluc") {
                            item7 = star + star + star + star + star + "Diluc"
                        }
                        else if (randompull == "Jean") {
                            item7 = star + star + star + star + star + "Jean"
                        }
                        else if (randompull == "Qiqi") {
                            item7 = star + star + star + star + star + "Qiqi"
                        }
                        else {
                            item7 = star + star + star + star + star + randompull
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    if (random8 < 2) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        if (randompull == "Venti") {
                            item8 = star + star + star + star + star + "Venti"
                        }
                        else if (randompull == "Tartaglia") {
                            item8 = star + star + star + star + star + "Tartaglia"
                        }
                        else if (randompull == "Klee") {
                            item8 = star + star + star + star + star + "Klee"
                        }
                        else if (randompull == "Albedo") {
                            item8 = star + star + star + star + star + "Albedo"
                        }
                        else if (randompull == "Ganyu") {
                            item8 = star + star + star + star + star + "Ganyu"
                        }
                        else if (randompull == "Xiao") {
                            item8 = star + star + star + star + star + "Xiao"
                        }
                        else if (randompull == "Hu Tao") {
                            item8 = star + star + star + star + star + "Hu Tao"
                        }
                        else if (randompull == "Zhongli") {
                            item8 = star + star + star + star + star + "Zhongli"
                        }
                        else if (randompull == "Eula") {
                            item8 = star + star + star + star + star + "Eula"
                        }
                        else if (randompull == "Kazuha") {
                            item8 = star + star + star + star + star + "Kaedehara Kazuha"
                        }
                        else if (randompull == "Ayaka") {
                            item8 = star + star + star + star + star + "Kamisato Ayaka"
                        }
                        else if (randompull == "Yoimiya") {
                            item8 = star + star + star + star + star + "Yoimiya"
                        }
                        else if (randompull == "Keqing") {
                            item8 = star + star + star + star + star + "Keqing"
                        }
                        else if (randompull == "Mona") {
                            item8 = star + star + star + star + star + "Mona"
                        }
                        else if (randompull == "Diluc") {
                            item8 = star + star + star + star + star + "Diluc"
                        }
                        else if (randompull == "Jean") {
                            item8 = star + star + star + star + star + "Jean"
                        }
                        else if (randompull == "Qiqi") {
                            item8 = star + star + star + star + star + "Qiqi"
                        }
                        else {
                            item8 = star + star + star + star + star + randompull
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    if (random9 < 2) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        if (randompull == "Venti") {
                            item9 = star + star + star + star + star + "Venti"
                        }
                        else if (randompull == "Tartaglia") {
                            item9 = star + star + star + star + star + "Tartaglia"
                        }
                        else if (randompull == "Klee") {
                            item9 = star + star + star + star + star + "Klee"
                        }
                        else if (randompull == "Albedo") {
                            item9 = star + star + star + star + star + "Albedo"
                        }
                        else if (randompull == "Ganyu") {
                            item9 = star + star + star + star + star + "Ganyu"
                        }
                        else if (randompull == "Xiao") {
                            item9 = star + star + star + star + star + "Xiao"
                        }
                        else if (randompull == "Hu Tao") {
                            item9 = star + star + star + star + star + "Hu Tao"
                        }
                        else if (randompull == "Zhongli") {
                            item9 = star + star + star + star + star + "Zhongli"
                        }
                        else if (randompull == "Eula") {
                            item9 = star + star + star + star + star + "Eula"
                        }
                        else if (randompull == "Kazuha") {
                            item9 = star + star + star + star + star + "Kaedehara Kazuha"
                        }
                        else if (randompull == "Ayaka") {
                            item9 = star + star + star + star + star + "Kamisato Ayaka"
                        }
                        else if (randompull == "Yoimiya") {
                            item9 = star + star + star + star + star + "Yoimiya"
                        }
                        else if (randompull == "Keqing") {
                            item9 = star + star + star + star + star + "Keqing"
                        }
                        else if (randompull == "Mona") {
                            item9 = star + star + star + star + star + "Mona"
                        }
                        else if (randompull == "Diluc") {
                            item9 = star + star + star + star + star + "Diluc"
                        }
                        else if (randompull == "Jean") {
                            item9 = star + star + star + star + star + "Jean"
                        }
                        else if (randompull == "Qiqi") {
                            item9 = star + star + star + star + star + "Qiqi"
                        }
                        else {
                            item9 = star + star + star + star + star + randompull
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    if (random10 < 2) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        if (randompull == "Venti") {
                            item10 = star + star + star + star + star + "Venti"
                        }
                        else if (randompull == "Tartaglia") {
                            item10 = star + star + star + star + star + "Tartaglia"
                        }
                        else if (randompull == "Klee") {
                            item10 = star + star + star + star + star + "Klee"
                        }
                        else if (randompull == "Albedo") {
                            item10 = star + star + star + star + star + "Albedo"
                        }
                        else if (randompull == "Ganyu") {
                            item10 = star + star + star + star + star + "Ganyu"
                        }
                        else if (randompull == "Xiao") {
                            item10 = star + star + star + star + star + "Xiao"
                        }
                        else if (randompull == "Hu Tao") {
                            item10 = star + star + star + star + star + "Hu Tao"
                        }
                        else if (randompull == "Zhongli") {
                            item10 = star + star + star + star + star + "Zhongli"
                        }
                        else if (randompull == "Eula") {
                            item10 = star + star + star + star + star + "Eula"
                        }
                        else if (randompull == "Kazuha") {
                            item10 = star + star + star + star + star + "Kaedehara Kazuha"
                        }
                        else if (randompull == "Ayaka") {
                            item10 = star + star + star + star + star + "Kamisato Ayaka"
                        }
                        else if (randompull == "Yoimiya") {
                            item10 = star + star + star + star + star + "Yoimiya"
                        }
                        else if (randompull == "Keqing") {
                            item10 = star + star + star + star + star + "Keqing"
                        }
                        else if (randompull == "Mona") {
                            item10 = star + star + star + star + star + "Mona"
                        }
                        else if (randompull == "Diluc") {
                            item10 = star + star + star + star + star + "Diluc"
                        }
                        else if (randompull == "Jean") {
                            item10 = star + star + star + star + star + "Jean"
                        }
                        else if (randompull == "Qiqi") {
                            item10 = star + star + star + star + star + "Qiqi"
                        }
                        else {
                            item10 = star + star + star + star + star + randompull
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
                            item1 = star + star + star + star + star + "Venti"
                            item2 = star + star + star + star + star + "Venti"
                            item3 = star + star + star + star + star + "Venti"
                            item4 = star + star + star + star + star + "Venti"
                            item5 = star + star + star + star + star + "Venti"
                            item6 = star + star + star + star + star + "Venti"
                            item7 = star + star + star + star + star + "Venti"
                            item8 = star + star + star + star + star + "Venti"
                            item9 = star + star + star + star + star + "Venti"
                            item10 = star + star + star + star + star + "Venti"
                        }
                        else if (randompull == "Tartaglia") {
                            item1 = star + star + star + star + star + "Tartaglia"
                            item2 = star + star + star + star + star + "Tartaglia"
                            item3 = star + star + star + star + star + "Tartaglia"
                            item4 = star + star + star + star + star + "Tartaglia"
                            item5 = star + star + star + star + star + "Tartaglia"
                            item6 = star + star + star + star + star + "Tartaglia"
                            item7 = star + star + star + star + star + "Tartaglia"
                            item8 = star + star + star + star + star + "Tartaglia"
                            item9 = star + star + star + star + star + "Tartaglia"
                            item10 = star + star + star + star + star + "Tartaglia"

                        }
                        else if (randompull == "Klee") {
                            item1 = star + star + star + star + star + "Klee"
                            item2 = star + star + star + star + star + "Klee"
                            item3 = star + star + star + star + star + "Klee"
                            item4 = star + star + star + star + star + "Klee"
                            item5 = star + star + star + star + star + "Klee"
                            item6 = star + star + star + star + star + "Klee"
                            item7 = star + star + star + star + star + "Klee"
                            item8 = star + star + star + star + star + "Klee"
                            item9 = star + star + star + star + star + "Klee"
                            item10 = star + star + star + star + star + "Klee"

                        }
                        else if (randompull == "Albedo") {
                            item1 = star + star + star + star + star + "Albedo"
                            item2 = star + star + star + star + star + "Albedo"
                            item3 = star + star + star + star + star + "Albedo"
                            item4 = star + star + star + star + star + "Albedo"
                            item5 = star + star + star + star + star + "Albedo"
                            item6 = star + star + star + star + star + "Albedo"
                            item7 = star + star + star + star + star + "Albedo"
                            item8 = star + star + star + star + star + "Albedo"
                            item9 = star + star + star + star + star + "Albedo"
                            item10 = star + star + star + star + star + "Albedo"
                        }
                        else if (randompull == "Ganyu") {
                            item1 = star + star + star + star + star + "Ganyu"
                            item2 = star + star + star + star + star + "Ganyu"
                            item3 = star + star + star + star + star + "Ganyu"
                            item4 = star + star + star + star + star + "Ganyu"
                            item5 = star + star + star + star + star + "Ganyu"
                            item6 = star + star + star + star + star + "Ganyu"
                            item7 = star + star + star + star + star + "Ganyu"
                            item8 = star + star + star + star + star + "Ganyu"
                            item9 = star + star + star + star + star + "Ganyu"
                            item10 = star + star + star + star + star + "Ganyu"
                        }
                        else if (randompull == "Xiao") {
                            item1 = star + star + star + star + star + "Xiao"
                            item2 = star + star + star + star + star + "Xiao"
                            item3 = star + star + star + star + star + "Xiao"
                            item4 = star + star + star + star + star + "Xiao"
                            item5 = star + star + star + star + star + "Xiao"
                            item6 = star + star + star + star + star + "Xiao"
                            item7 = star + star + star + star + star + "Xiao"
                            item8 = star + star + star + star + star + "Xiao"
                            item9 = star + star + star + star + star + "Xiao"
                            item10 = star + star + star + star + star + "Xiao"

                        }
                        else if (randompull == "Hu Tao") {
                            item1 = star + star + star + star + star + "Hu Tao"
                            item2 = star + star + star + star + star + "Hu Tao"
                            item3 = star + star + star + star + star + "Hu Tao"
                            item4 = star + star + star + star + star + "Hu Tao"
                            item5 = star + star + star + star + star + "Hu Tao"
                            item6 = star + star + star + star + star + "Hu Tao"
                            item7 = star + star + star + star + star + "Hu Tao"
                            item8 = star + star + star + star + star + "Hu Tao"
                            item9 = star + star + star + star + star + "Hu Tao"
                            item10 = star + star + star + star + star + "Hu Tao"

                        }
                        else if (randompull == "Zhongli") {
                            item1 = star + star + star + star + star + "Zhongli"
                            item2 = star + star + star + star + star + "Zhongli"
                            item3 = star + star + star + star + star + "Zhongli"
                            item4 = star + star + star + star + star + "Zhongli"
                            item5 = star + star + star + star + star + "Zhongli"
                            item6 = star + star + star + star + star + "Zhongli"
                            item7 = star + star + star + star + star + "Zhongli"
                            item8 = star + star + star + star + star + "Zhongli"
                            item9 = star + star + star + star + star + "Zhongli"
                            item10 = star + star + star + star + star + "Zhongli"
                        }
                        else if (randompull == "Eula") {
                            item1 = star + star + star + star + star + "Eula"
                            item2 = star + star + star + star + star + "Eula"
                            item3 = star + star + star + star + star + "Eula"
                            item4 = star + star + star + star + star + "Eula"
                            item5 = star + star + star + star + star + "Eula"
                            item6 = star + star + star + star + star + "Eula"
                            item7 = star + star + star + star + star + "Eula"
                            item8 = star + star + star + star + star + "Eula"
                            item9 = star + star + star + star + star + "Eula"
                            item10 = star + star + star + star + star + "Eula"
                        }
                        else if (randompull == "Kazuha") {
                            item1 = star + star + star + star + star + "Kaedehara Kazuha"
                            item2 = star + star + star + star + star + "Kaedehara Kazuha"
                            item3 = star + star + star + star + star + "Kaedehara Kazuha"
                            item4 = star + star + star + star + star + "Kaedehara Kazuha"
                            item5 = star + star + star + star + star + "Kaedehara Kazuha"
                            item6 = star + star + star + star + star + "Kaedehara Kazuha"
                            item7 = star + star + star + star + star + "Kaedehara Kazuha"
                            item8 = star + star + star + star + star + "Kaedehara Kazuha"
                            item9 = star + star + star + star + star + "Kaedehara Kazuha"
                            item10 = star + star + star + star + star + "Kaedehara Kazuha"

                        }
                        else if (randompull == "Ayaka") {
                            item1 = star + star + star + star + star + "Kamisato Ayaka"
                            item2 = star + star + star + star + star + "Kamisato Ayaka"
                            item3 = star + star + star + star + star + "Kamisato Ayaka"
                            item4 = star + star + star + star + star + "Kamisato Ayaka"
                            item5 = star + star + star + star + star + "Kamisato Ayaka"
                            item6 = star + star + star + star + star + "Kamisato Ayaka"
                            item7 = star + star + star + star + star + "Kamisato Ayaka"
                            item8 = star + star + star + star + star + "Kamisato Ayaka"
                            item9 = star + star + star + star + star + "Kamisato Ayaka"
                            item10 = star + star + star + star + star + "Kamisato Ayaka"

                        }
                        else if (randompull == "Yoimiya") {
                            item1 = star + star + star + star + star + "Yoimiya"
                            item2 = star + star + star + star + star + "Yoimiya"
                            item3 = star + star + star + star + star + "Yoimiya"
                            item4 = star + star + star + star + star + "Yoimiya"
                            item5 = star + star + star + star + star + "Yoimiya"
                            item6 = star + star + star + star + star + "Yoimiya"
                            item7 = star + star + star + star + star + "Yoimiya"
                            item8 = star + star + star + star + star + "Yoimiya"
                            item9 = star + star + star + star + star + "Yoimiya"
                            item10 = star + star + star + star + star + "Yoimiya"

                        }
                        else if (randompull == "Keqing") {
                            item1 = star + star + star + star + star + "Keqing"
                            item2 = star + star + star + star + star + "Keqing"
                            item3 = star + star + star + star + star + "Keqing"
                            item4 = star + star + star + star + star + "Keqing"
                            item5 = star + star + star + star + star + "Keqing"
                            item6 = star + star + star + star + star + "Keqing"
                            item7 = star + star + star + star + star + "Keqing"
                            item8 = star + star + star + star + star + "Keqing"
                            item9 = star + star + star + star + star + "Keqing"
                            item10 = star + star + star + star + star + "Keqing"

                        }
                        else if (randompull == "Mona") {
                            item1 = star + star + star + star + star + "Mona"
                            item2 = star + star + star + star + star + "Mona"
                            item3 = star + star + star + star + star + "Mona"
                            item4 = star + star + star + star + star + "Mona"
                            item5 = star + star + star + star + star + "Mona"
                            item6 = star + star + star + star + star + "Mona"
                            item7 = star + star + star + star + star + "Mona"
                            item8 = star + star + star + star + star + "Mona"
                            item9 = star + star + star + star + star + "Mona"
                            item10 = star + star + star + star + star + "Mona"

                        }
                        else if (randompull == "Diluc") {
                            item1 = star + star + star + star + star + "Diluc"
                            item2 = star + star + star + star + star + "Diluc"
                            item3 = star + star + star + star + star + "Diluc"
                            item4 = star + star + star + star + star + "Diluc"
                            item5 = star + star + star + star + star + "Diluc"
                            item6 = star + star + star + star + star + "Diluc"
                            item7 = star + star + star + star + star + "Diluc"
                            item8 = star + star + star + star + star + "Diluc"
                            item9 = star + star + star + star + star + "Diluc"
                            item10 = star + star + star + star + star + "Diluc"

                        }
                        else if (randompull == "Jean") {
                            item1 = star + star + star + star + star + "Jean"
                            item2 = star + star + star + star + star + "Jean"
                            item3 = star + star + star + star + star + "Jean"
                            item4 = star + star + star + star + star + "Jean"
                            item5 = star + star + star + star + star + "Jean"
                            item6 = star + star + star + star + star + "Jean"
                            item7 = star + star + star + star + star + "Jean"
                            item8 = star + star + star + star + star + "Jean"
                            item9 = star + star + star + star + star + "Jean"
                            item10 = star + star + star + star + star + "Jean"

                        }
                        else if (randompull == "Qiqi") {
                            item1 = star + star + star + star + star + "Qiqi"
                            item2 = star + star + star + star + star + "Qiqi"
                            item3 = star + star + star + star + star + "Qiqi"
                            item4 = star + star + star + star + star + "Qiqi"
                            item5 = star + star + star + star + star + "Qiqi"
                            item6 = star + star + star + star + star + "Qiqi"
                            item7 = star + star + star + star + star + "Qiqi"
                            item8 = star + star + star + star + star + "Qiqi"
                            item9 = star + star + star + star + star + "Qiqi"
                            item10 = star + star + star + star + star + "Qiqi"

                        }
                        else {
                            item1 = star + star + star + star + star + randompull
                            item2 = star + star + star + star + star + randompull
                            item3 = star + star + star + star + star + randompull
                            item4 = star + star + star + star + star + randompull
                            item5 = star + star + star + star + star + randompull
                            item6 = star + star + star + star + star + randompull
                            item7 = star + star + star + star + star + randompull
                            item8 = star + star + star + star + star + randompull
                            item9 = star + star + star + star + star + randompull
                            item10 = star + star + star + star + star + randompull

                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random1 > 78) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons
                        
                        item1 = star + star + star + star + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random2 > 78) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons
                        
                        item2 = star + star + star + star + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random3 > 78) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons
                        
                        item3 = star + star + star + star + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random4 > 78) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons

                        item4 = star + star + star + star + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random5 > 78) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons

                        item5 = star + star + star + star + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random6 > 78) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons

                        item6 = star + star + star + star + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random7 > 78) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons

                        item7 = star + star + star + star + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random8 > 78) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons

                        item8 = star + star + star + star + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random9 > 78) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons

                        item9 = star + star + star + star + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random10 > 78) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons

                        item10 = star + star + star + star + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (star4pity > 8) { // if 4-star pity hits, automatic 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons
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
                        star5pity += 1
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
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons
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
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons
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