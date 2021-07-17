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
        const goldstar = star2 + star2 + star2 + star2 + star2
        const purplestar = star + star + star + star
        const normiestar = star + star + star
        var color = "#191a36"
        const anemo = "#4cc285"
        const geo = "#ecc60d"
        const pyro = "#da5d31"
        const hydro = "#569cd0"
        const cryo = "#b4dcde"
        const electro = "#965daa"

        var star3 = ["Slingshot", "Sharpshooter's Oath", "Raven Bow", "Emerald Orb", "Thrilling Tales of Dragon Slayers", "Magic Guide", "Black Tassel", "Debate Club", "Bloodstained Greatsword", "Ferrous Shadow", "Skyrider Sword", "Harbringer of Dawn", "Cool Steel"] // List of 3-star weapons
        var item1 = normiestar + random3star(star3)
        var item2 = normiestar + random3star(star3)
        var item3 = normiestar + random3star(star3)
        var item4 = normiestar + random3star(star3)
        var item5 = normiestar + random3star(star3)
        var item6 = normiestar + random3star(star3)
        var item7 = normiestar + random3star(star3)
        var item8 = normiestar + random3star(star3)
        var item9 = normiestar + random3star(star3)
        var item10 = normiestar + random3star(star3)

        var charimage = 'https://media1.tenor.com/images/17f64ce3809e2d329599e1c38f488703/tenor.gif?itemid=18856455'

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
                    var color = '#191a36'

                    if (random1 < 3) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Baal", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        charimage = 'https://media.tenor.com/images/3e2ccd3ef1a57a27d5b17629071c00f3/tenor.gif'
                        if (randompull == "Venti") {
                            item1 = goldstar + "Venti"
                            charimage = 'https://media1.tenor.com/images/43cb917c658c0cc22dbf96f2e8858269/tenor.gif'
                            color = anemo
                        }
                        else if (randompull == "Tartaglia") {
                            item1 = goldstar + "Tartaglia"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Character_Tartaglia_Card.png'
                            color = hydro
                        }
                        else if (randompull == "Klee") {
                            item1 = goldstar + "Klee"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/7/78/Character_Klee_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Albedo") {
                            item1 = goldstar + "Albedo"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f8/Character_Albedo_Card.png'
                            color = geo
                        }
                        else if (randompull == "Ganyu") {
                            item1 = goldstar + "Ganyu"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Character_Ganyu_Card.png'
                            color = cryo
                        }
                        else if (randompull == "Xiao") {
                            item1 = goldstar + "Xiao"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/8/88/Character_Xiao_Card.jpg'
                            color = anemo
                        }
                        else if (randompull == "Hu Tao") {
                            item1 = goldstar + "Hu Tao"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/2/22/Character_Hu_Tao_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Zhongli") {
                            item1 = goldstar + "Zhongli"
                            charimage = 'https://media.tenor.com/images/0061cccac5300206283e08bac71b98b7/tenor.gif'
                            color = geo
                        }
                        else if (randompull == "Eula") {
                            item1 = goldstar + "Eula"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Character_Eula_Card.png'
                            color = cryo
                        }
                        else if (randompull = "Kazuha") {
                            item1 = goldstar + "Kaedehara Kazuha"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/2/2d/Character_Kaedehara_Kazuha_Card.png'
                            color = anemo
                        }
                        else if (randompull == "Ayaka") {
                            item1 = goldstar + "Kamisato Ayaka"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/3/34/Character_Kamisato_Ayaka_Card.png'
                            color = cryo
                        }
                        else if (randompull == "Yoimiya") {
                            item1 = goldstar + "Yoimiya"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Character_Yoimiya_Card.png'
                            color = pyro
                        }
                        else if (randompull == "Keqing") {
                            item1 = goldstar + "Keqing"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Character_Keqing_Card.jpg'
                            color = electro
                        }
                        else if (randompull == "Mona") {
                            item1 = goldstar + "Mona"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/6/69/Character_Mona_Card.jpg'
                            color = hydro
                        }
                        else if (randompull == "Diluc") {
                            item1 = goldstar + "Diluc"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/45/Character_Diluc_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Jean") {
                            item1 = goldstar + "Jean"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Character_Jean_Card.jpg'
                            color = anemo
                        }
                        else if (randompull == "Qiqi") {
                            item1 = goldstar + "Qiqi"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Character_Qiqi_Card.jpg'
                            color = cryo
                        }
                        else if (randompull == "Baal") {
                            item1 = goldstar + "Baal"
                            charimage = 'https://media1.tenor.com/images/4f804b253e28794392652859c7b8f1c3/tenor.gif'
                            color = electro
                        }
                        else {
                            item1 = goldstar + randompull
                            charimage = 'https://media.tenor.com/images/34c6064f32fbe1b5ace18ac243546fac/tenor.gif'
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    if (random2 < 3) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Baal", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        charimage = 'https://media.tenor.com/images/3e2ccd3ef1a57a27d5b17629071c00f3/tenor.gif'
                        if (randompull == "Venti") {
                            item2 = goldstar + "Venti"
                            charimage = 'https://media1.tenor.com/images/43cb917c658c0cc22dbf96f2e8858269/tenor.gif'
                            color = anemo
                        }
                        else if (randompull == "Tartaglia") {
                            item2 = goldstar + "Tartaglia"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Character_Tartaglia_Card.png'
                            color = hydro
                        }
                        else if (randompull == "Klee") {
                            item2 = goldstar + "Klee"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/7/78/Character_Klee_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Albedo") {
                            item2 = goldstar + "Albedo"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f8/Character_Albedo_Card.png'
                            color = geo
                        }
                        else if (randompull == "Ganyu") {
                            item2 = goldstar + "Ganyu"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Character_Ganyu_Card.png'
                            color = cryo
                        }
                        else if (randompull == "Xiao") {
                            item2 = goldstar + "Xiao"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/8/88/Character_Xiao_Card.jpg'
                            color = anemo
                        }
                        else if (randompull == "Hu Tao") {
                            item2 = goldstar + "Hu Tao"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/2/22/Character_Hu_Tao_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Zhongli") {
                            item2 = goldstar + "Zhongli"
                            charimage = 'https://media.tenor.com/images/0061cccac5300206283e08bac71b98b7/tenor.gif'
                            color = geo
                        }
                        else if (randompull == "Eula") {
                            item2 = goldstar + "Eula"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Character_Eula_Card.png'
                            color = cryo
                        }
                        else if (randompull = "Kazuha") {
                            item2 = goldstar + "Kaedehara Kazuha"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/2/2d/Character_Kaedehara_Kazuha_Card.png'
                            color = anemo
                        }
                        else if (randompull == "Ayaka") {
                            item2 = goldstar + "Kamisato Ayaka"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/3/34/Character_Kamisato_Ayaka_Card.png'
                            color = cryo
                        }
                        else if (randompull == "Yoimiya") {
                            item2 = goldstar + "Yoimiya"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Character_Yoimiya_Card.png'
                            color = pyro
                        }
                        else if (randompull == "Keqing") {
                            item2 = goldstar + "Keqing"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Character_Keqing_Card.jpg'
                            color = electro
                        }
                        else if (randompull == "Mona") {
                            item2 = goldstar + "Mona"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/6/69/Character_Mona_Card.jpg'
                            color = hydro
                        }
                        else if (randompull == "Diluc") {
                            item2 = goldstar + "Diluc"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/45/Character_Diluc_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Jean") {
                            item2 = goldstar + "Jean"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Character_Jean_Card.jpg'
                            color = anemo
                        }
                        else if (randompull == "Qiqi") {
                            item2 = goldstar + "Qiqi"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Character_Qiqi_Card.jpg'
                            color = cryo
                        }
                        else if (randompull == "Baal") {
                            item2 = goldstar + "Baal"
                            charimage = 'https://media1.tenor.com/images/4f804b253e28794392652859c7b8f1c3/tenor.gif'
                            color = electro
                        }
                        else {
                            item2 = goldstar + randompull
                            charimage = 'https://media.tenor.com/images/34c6064f32fbe1b5ace18ac243546fac/tenor.gif'
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    if (random3 < 3) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Baal", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        charimage = 'https://media.tenor.com/images/3e2ccd3ef1a57a27d5b17629071c00f3/tenor.gif'
                        if (randompull == "Venti") {
                            item3 = goldstar + "Venti"
                            charimage = 'https://media1.tenor.com/images/43cb917c658c0cc22dbf96f2e8858269/tenor.gif'
                            color = anemo
                        }
                        else if (randompull == "Tartaglia") {
                            item3 = goldstar + "Tartaglia"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Character_Tartaglia_Card.png'
                            color = hydro
                        }
                        else if (randompull == "Klee") {
                            item3 = goldstar + "Klee"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/7/78/Character_Klee_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Albedo") {
                            item3 = goldstar + "Albedo"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f8/Character_Albedo_Card.png'
                            color = geo
                        }
                        else if (randompull == "Ganyu") {
                            item3 = goldstar + "Ganyu"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Character_Ganyu_Card.png'
                            color = cryo
                        }
                        else if (randompull == "Xiao") {
                            item3 = goldstar + "Xiao"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/8/88/Character_Xiao_Card.jpg'
                            color = anemo
                        }
                        else if (randompull == "Hu Tao") {
                            item3 = goldstar + "Hu Tao"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/2/22/Character_Hu_Tao_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Zhongli") {
                            item3 = goldstar + "Zhongli"
                            charimage = 'https://media.tenor.com/images/0061cccac5300206283e08bac71b98b7/tenor.gif'
                            color = geo
                        }
                        else if (randompull == "Eula") {
                            item3 = goldstar + "Eula"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Character_Eula_Card.png'
                            color = cryo
                        }
                        else if (randompull = "Kazuha") {
                            item3 = goldstar + "Kaedehara Kazuha"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/2/2d/Character_Kaedehara_Kazuha_Card.png'
                            color = anemo
                        }
                        else if (randompull == "Ayaka") {
                            item3 = goldstar + "Kamisato Ayaka"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/3/34/Character_Kamisato_Ayaka_Card.png'
                            color = cryo
                        }
                        else if (randompull == "Yoimiya") {
                            item3 = goldstar + "Yoimiya"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Character_Yoimiya_Card.png'
                            color = pyro
                        }
                        else if (randompull == "Keqing") {
                            item3 = goldstar + "Keqing"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Character_Keqing_Card.jpg'
                            color = electro
                        }
                        else if (randompull == "Mona") {
                            item3 = goldstar + "Mona"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/6/69/Character_Mona_Card.jpg'
                            color = hydro
                        }
                        else if (randompull == "Diluc") {
                            item3 = goldstar + "Diluc"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/45/Character_Diluc_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Jean") {
                            item3 = goldstar + "Jean"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Character_Jean_Card.jpg'
                            color = anemo
                        }
                        else if (randompull == "Qiqi") {
                            item3 = goldstar + "Qiqi"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Character_Qiqi_Card.jpg'
                            color = cryo
                        }
                        else if (randompull == "Baal") {
                            item3 = goldstar + "Baal"
                            charimage = 'https://media1.tenor.com/images/4f804b253e28794392652859c7b8f1c3/tenor.gif'
                            color = electro
                        }
                        else {
                            item3 = goldstar + randompull
                            charimage = 'https://media.tenor.com/images/34c6064f32fbe1b5ace18ac243546fac/tenor.gif'
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    if (random4 < 3) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Baal", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        charimage = 'https://media.tenor.com/images/3e2ccd3ef1a57a27d5b17629071c00f3/tenor.gif'
                        if (randompull == "Venti") {
                            item4 = goldstar + "Venti"
                            charimage = 'https://media1.tenor.com/images/43cb917c658c0cc22dbf96f2e8858269/tenor.gif'
                            color = anemo
                        }
                        else if (randompull == "Tartaglia") {
                            item4 = goldstar + "Tartaglia"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Character_Tartaglia_Card.png'
                            color = hydro
                        }
                        else if (randompull == "Klee") {
                            item4 = goldstar + "Klee"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/7/78/Character_Klee_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Albedo") {
                            item4 = goldstar + "Albedo"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f8/Character_Albedo_Card.png'
                            color = geo
                        }
                        else if (randompull == "Ganyu") {
                            item4 = goldstar + "Ganyu"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Character_Ganyu_Card.png'
                            color = cryo
                        }
                        else if (randompull == "Xiao") {
                            item4 = goldstar + "Xiao"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/8/88/Character_Xiao_Card.jpg'
                            color = anemo
                        }
                        else if (randompull == "Hu Tao") {
                            item4 = goldstar + "Hu Tao"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/2/22/Character_Hu_Tao_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Zhongli") {
                            item4 = goldstar + "Zhongli"
                            charimage = 'https://media.tenor.com/images/0061cccac5300206283e08bac71b98b7/tenor.gif'
                            color = geo
                        }
                        else if (randompull == "Eula") {
                            item4 = goldstar + "Eula"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Character_Eula_Card.png'
                            color = cryo
                        }
                        else if (randompull = "Kazuha") {
                            item4 = goldstar + "Kaedehara Kazuha"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/2/2d/Character_Kaedehara_Kazuha_Card.png'
                            color = anemo
                        }
                        else if (randompull == "Ayaka") {
                            item4 = goldstar + "Kamisato Ayaka"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/3/34/Character_Kamisato_Ayaka_Card.png'
                            color = cryo
                        }
                        else if (randompull == "Yoimiya") {
                            item4 = goldstar + "Yoimiya"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Character_Yoimiya_Card.png'
                            color = pyro
                        }
                        else if (randompull == "Keqing") {
                            item4 = goldstar + "Keqing"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Character_Keqing_Card.jpg'
                            color = electro
                        }
                        else if (randompull == "Mona") {
                            item4 = goldstar + "Mona"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/6/69/Character_Mona_Card.jpg'
                            color = hydro
                        }
                        else if (randompull == "Diluc") {
                            item4 = goldstar + "Diluc"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/45/Character_Diluc_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Jean") {
                            item4 = goldstar + "Jean"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Character_Jean_Card.jpg'
                            color = anemo
                        }
                        else if (randompull == "Qiqi") {
                            item4 = goldstar + "Qiqi"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Character_Qiqi_Card.jpg'
                            color = cryo
                        }
                        else if (randompull == "Baal") {
                            item4 = goldstar + "Baal"
                            charimage = 'https://media1.tenor.com/images/4f804b253e28794392652859c7b8f1c3/tenor.gif'
                            color = electro
                        }
                        else {
                            item4 = goldstar + randompull
                            charimage = 'https://media.tenor.com/images/34c6064f32fbe1b5ace18ac243546fac/tenor.gif'
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    if (random5 < 3) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Baal", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        charimage = 'https://media.tenor.com/images/3e2ccd3ef1a57a27d5b17629071c00f3/tenor.gif'
                        if (randompull == "Venti") {
                            item5 = goldstar + "Venti"
                            charimage = 'https://media1.tenor.com/images/43cb917c658c0cc22dbf96f2e8858269/tenor.gif'
                            color = anemo
                        }
                        else if (randompull == "Tartaglia") {
                            item5 = goldstar + "Tartaglia"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Character_Tartaglia_Card.png'
                            color = hydro
                        }
                        else if (randompull == "Klee") {
                            item5 = goldstar + "Klee"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/7/78/Character_Klee_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Albedo") {
                            item5 = goldstar + "Albedo"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f8/Character_Albedo_Card.png'
                            color = geo
                        }
                        else if (randompull == "Ganyu") {
                            item5 = goldstar + "Ganyu"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Character_Ganyu_Card.png'
                            color = cryo
                        }
                        else if (randompull == "Xiao") {
                            item5 = goldstar + "Xiao"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/8/88/Character_Xiao_Card.jpg'
                            color = anemo
                        }
                        else if (randompull == "Hu Tao") {
                            item5 = goldstar + "Hu Tao"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/2/22/Character_Hu_Tao_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Zhongli") {
                            item5 = goldstar + "Zhongli"
                            charimage = 'https://media.tenor.com/images/0061cccac5300206283e08bac71b98b7/tenor.gif'
                            color = geo
                        }
                        else if (randompull == "Eula") {
                            item5 = goldstar + "Eula"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Character_Eula_Card.png'
                            color = cryo
                        }
                        else if (randompull = "Kazuha") {
                            item5 = goldstar + "Kaedehara Kazuha"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/2/2d/Character_Kaedehara_Kazuha_Card.png'
                            color = anemo
                        }
                        else if (randompull == "Ayaka") {
                            item5 = goldstar + "Kamisato Ayaka"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/3/34/Character_Kamisato_Ayaka_Card.png'
                            color = cryo
                        }
                        else if (randompull == "Yoimiya") {
                            item5 = goldstar + "Yoimiya"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Character_Yoimiya_Card.png'
                            color = pyro
                        }
                        else if (randompull == "Keqing") {
                            item5 = goldstar + "Keqing"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Character_Keqing_Card.jpg'
                            color = electro
                        }
                        else if (randompull == "Mona") {
                            item5 = goldstar + "Mona"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/6/69/Character_Mona_Card.jpg'
                            color = hydro
                        }
                        else if (randompull == "Diluc") {
                            item5 = goldstar + "Diluc"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/45/Character_Diluc_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Jean") {
                            item5 = goldstar + "Jean"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Character_Jean_Card.jpg'
                            color = anemo
                        }
                        else if (randompull == "Qiqi") {
                            item5 = goldstar + "Qiqi"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Character_Qiqi_Card.jpg'
                            color = cryo
                        }
                        else if (randompull == "Baal") {
                            item5 = goldstar + "Baal"
                            charimage = 'https://media1.tenor.com/images/4f804b253e28794392652859c7b8f1c3/tenor.gif'
                            color = electro
                        }
                        else {
                            item5 = goldstar + randompull
                            charimage = 'https://media.tenor.com/images/34c6064f32fbe1b5ace18ac243546fac/tenor.gif'
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    if (random6 < 3) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Baal", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        charimage = 'https://media.tenor.com/images/3e2ccd3ef1a57a27d5b17629071c00f3/tenor.gif'
                        if (randompull == "Venti") {
                            item6 = goldstar + "Venti"
                            charimage = 'https://media1.tenor.com/images/43cb917c658c0cc22dbf96f2e8858269/tenor.gif'
                            color = anemo
                        }
                        else if (randompull == "Tartaglia") {
                            item6 = goldstar + "Tartaglia"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Character_Tartaglia_Card.png'
                            color = hydro
                        }
                        else if (randompull == "Klee") {
                            item6 = goldstar + "Klee"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/7/78/Character_Klee_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Albedo") {
                            item6 = goldstar + "Albedo"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f8/Character_Albedo_Card.png'
                            color = geo
                        }
                        else if (randompull == "Ganyu") {
                            item6 = goldstar + "Ganyu"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Character_Ganyu_Card.png'
                            color = cryo
                        }
                        else if (randompull == "Xiao") {
                            item6 = goldstar + "Xiao"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/8/88/Character_Xiao_Card.jpg'
                            color = anemo
                        }
                        else if (randompull == "Hu Tao") {
                            item6 = goldstar + "Hu Tao"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/2/22/Character_Hu_Tao_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Zhongli") {
                            item6 = goldstar + "Zhongli"
                            charimage = 'https://media.tenor.com/images/0061cccac5300206283e08bac71b98b7/tenor.gif'
                            color = geo
                        }
                        else if (randompull == "Eula") {
                            item6 = goldstar + "Eula"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Character_Eula_Card.png'
                            color = cryo
                        }
                        else if (randompull = "Kazuha") {
                            item6 = goldstar + "Kaedehara Kazuha"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/2/2d/Character_Kaedehara_Kazuha_Card.png'
                            color = anemo
                        }
                        else if (randompull == "Ayaka") {
                            item6 = goldstar + "Kamisato Ayaka"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/3/34/Character_Kamisato_Ayaka_Card.png'
                            color = cryo
                        }
                        else if (randompull == "Yoimiya") {
                            item6 = goldstar + "Yoimiya"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Character_Yoimiya_Card.png'
                            color = pyro
                        }
                        else if (randompull == "Keqing") {
                            item6 = goldstar + "Keqing"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Character_Keqing_Card.jpg'
                            color = electro
                        }
                        else if (randompull == "Mona") {
                            item6 = goldstar + "Mona"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/6/69/Character_Mona_Card.jpg'
                            color = hydro
                        }
                        else if (randompull == "Diluc") {
                            item6 = goldstar + "Diluc"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/45/Character_Diluc_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Jean") {
                            item6 = goldstar + "Jean"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Character_Jean_Card.jpg'
                            color = anemo
                        }
                        else if (randompull == "Qiqi") {
                            item6 = goldstar + "Qiqi"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Character_Qiqi_Card.jpg'
                            color = cryo
                        }
                        else if (randompull == "Baal") {
                            item6 = goldstar + "Baal"
                            charimage = 'https://media1.tenor.com/images/4f804b253e28794392652859c7b8f1c3/tenor.gif'
                            color = electro
                        }
                        else {
                            item6 = goldstar + randompull
                            charimage = 'https://media.tenor.com/images/34c6064f32fbe1b5ace18ac243546fac/tenor.gif'
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    if (random7 < 3) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Baal", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        charimage = 'https://media.tenor.com/images/3e2ccd3ef1a57a27d5b17629071c00f3/tenor.gif'
                        if (randompull == "Venti") {
                            item7 = goldstar + "Venti"
                            charimage = 'https://media1.tenor.com/images/43cb917c658c0cc22dbf96f2e8858269/tenor.gif'
                            color = anemo
                        }
                        else if (randompull == "Tartaglia") {
                            item7 = goldstar + "Tartaglia"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Character_Tartaglia_Card.png'
                            color = hydro
                        }
                        else if (randompull == "Klee") {
                            item7 = goldstar + "Klee"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/7/78/Character_Klee_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Albedo") {
                            item7 = goldstar + "Albedo"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f8/Character_Albedo_Card.png'
                            color = geo
                        }
                        else if (randompull == "Ganyu") {
                            item7 = goldstar + "Ganyu"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Character_Ganyu_Card.png'
                            color = cryo
                        }
                        else if (randompull == "Xiao") {
                            item7 = goldstar + "Xiao"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/8/88/Character_Xiao_Card.jpg'
                            color = anemo
                        }
                        else if (randompull == "Hu Tao") {
                            item7 = goldstar + "Hu Tao"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/2/22/Character_Hu_Tao_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Zhongli") {
                            item7 = goldstar + "Zhongli"
                            charimage = 'https://media.tenor.com/images/0061cccac5300206283e08bac71b98b7/tenor.gif'
                            color = geo
                        }
                        else if (randompull == "Eula") {
                            item7 = goldstar + "Eula"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Character_Eula_Card.png'
                            color = cryo
                        }
                        else if (randompull = "Kazuha") {
                            item7 = goldstar + "Kaedehara Kazuha"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/2/2d/Character_Kaedehara_Kazuha_Card.png'
                            color = anemo
                        }
                        else if (randompull == "Ayaka") {
                            item7 = goldstar + "Kamisato Ayaka"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/3/34/Character_Kamisato_Ayaka_Card.png'
                            color = cryo
                        }
                        else if (randompull == "Yoimiya") {
                            item7 = goldstar + "Yoimiya"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Character_Yoimiya_Card.png'
                            color = pyro
                        }
                        else if (randompull == "Keqing") {
                            item7 = goldstar + "Keqing"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Character_Keqing_Card.jpg'
                            color = electro
                        }
                        else if (randompull == "Mona") {
                            item7 = goldstar + "Mona"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/6/69/Character_Mona_Card.jpg'
                            color = hydro
                        }
                        else if (randompull == "Diluc") {
                            item7 = goldstar + "Diluc"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/45/Character_Diluc_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Jean") {
                            item7 = goldstar + "Jean"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Character_Jean_Card.jpg'
                            color = anemo
                        }
                        else if (randompull == "Qiqi") {
                            item7 = goldstar + "Qiqi"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Character_Qiqi_Card.jpg'
                            color = cryo
                        }
                        else if (randompull == "Baal") {
                            item7 = goldstar + "Baal"
                            charimage = 'https://media1.tenor.com/images/4f804b253e28794392652859c7b8f1c3/tenor.gif'
                            color = electro
                        }
                        else {
                            item7 = goldstar + randompull
                            charimage = 'https://media.tenor.com/images/34c6064f32fbe1b5ace18ac243546fac/tenor.gif'
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    if (random8 < 3) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Baal", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        charimage = 'https://media.tenor.com/images/3e2ccd3ef1a57a27d5b17629071c00f3/tenor.gif'
                        if (randompull == "Venti") {
                            item8 = goldstar + "Venti"
                            charimage = 'https://media1.tenor.com/images/43cb917c658c0cc22dbf96f2e8858269/tenor.gif'
                            color = anemo
                        }
                        else if (randompull == "Tartaglia") {
                            item8 = goldstar + "Tartaglia"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Character_Tartaglia_Card.png'
                            color = hydro
                        }
                        else if (randompull == "Klee") {
                            item8 = goldstar + "Klee"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/7/78/Character_Klee_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Albedo") {
                            item8 = goldstar + "Albedo"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f8/Character_Albedo_Card.png'
                            color = geo
                        }
                        else if (randompull == "Ganyu") {
                            item8 = goldstar + "Ganyu"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Character_Ganyu_Card.png'
                            color = cryo
                        }
                        else if (randompull == "Xiao") {
                            item8 = goldstar + "Xiao"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/8/88/Character_Xiao_Card.jpg'
                            color = anemo
                        }
                        else if (randompull == "Hu Tao") {
                            item8 = goldstar + "Hu Tao"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/2/22/Character_Hu_Tao_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Zhongli") {
                            item8 = goldstar + "Zhongli"
                            charimage = 'https://media.tenor.com/images/0061cccac5300206283e08bac71b98b7/tenor.gif'
                            color = geo
                        }
                        else if (randompull == "Eula") {
                            item8 = goldstar + "Eula"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Character_Eula_Card.png'
                            color = cryo
                        }
                        else if (randompull = "Kazuha") {
                            item8 = goldstar + "Kaedehara Kazuha"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/2/2d/Character_Kaedehara_Kazuha_Card.png'
                            color = anemo
                        }
                        else if (randompull == "Ayaka") {
                            item8 = goldstar + "Kamisato Ayaka"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/3/34/Character_Kamisato_Ayaka_Card.png'
                            color = cryo
                        }
                        else if (randompull == "Yoimiya") {
                            item8 = goldstar + "Yoimiya"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Character_Yoimiya_Card.png'
                            color = pyro
                        }
                        else if (randompull == "Keqing") {
                            item8 = goldstar + "Keqing"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Character_Keqing_Card.jpg'
                            color = electro
                        }
                        else if (randompull == "Mona") {
                            item8 = goldstar + "Mona"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/6/69/Character_Mona_Card.jpg'
                            color = hydro
                        }
                        else if (randompull == "Diluc") {
                            item8 = goldstar + "Diluc"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/45/Character_Diluc_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Jean") {
                            item8 = goldstar + "Jean"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Character_Jean_Card.jpg'
                            color = anemo
                        }
                        else if (randompull == "Qiqi") {
                            item8 = goldstar + "Qiqi"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Character_Qiqi_Card.jpg'
                            color = cryo
                        }
                        else if (randompull == "Baal") {
                            item8 = goldstar + "Baal"
                            charimage = 'https://media1.tenor.com/images/4f804b253e28794392652859c7b8f1c3/tenor.gif'
                            color = electro
                        }
                        else {
                            item8 = goldstar + randompull
                            charimage = 'https://media.tenor.com/images/34c6064f32fbe1b5ace18ac243546fac/tenor.gif'
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    if (random9 < 3) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Baal", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        charimage = 'https://media.tenor.com/images/3e2ccd3ef1a57a27d5b17629071c00f3/tenor.gif'
                        if (randompull == "Venti") {
                            item9 = goldstar + "Venti"
                            charimage = 'https://media1.tenor.com/images/43cb917c658c0cc22dbf96f2e8858269/tenor.gif'
                            color = anemo
                        }
                        else if (randompull == "Tartaglia") {
                            item9 = goldstar + "Tartaglia"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Character_Tartaglia_Card.png'
                            color = hydro
                        }
                        else if (randompull == "Klee") {
                            item9 = goldstar + "Klee"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/7/78/Character_Klee_Card.jpg'
                             color = pyro
                        }
                        else if (randompull == "Albedo") {
                            item9 = goldstar + "Albedo"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f8/Character_Albedo_Card.png'
                            color = geo
                        }
                        else if (randompull == "Ganyu") {
                            item9 = goldstar + "Ganyu"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Character_Ganyu_Card.png'
                            color = cryo
                        }
                        else if (randompull == "Xiao") {
                            item9 = goldstar + "Xiao"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/8/88/Character_Xiao_Card.jpg'
                            color = anemo
                        }
                        else if (randompull == "Hu Tao") {
                            item9 = goldstar + "Hu Tao"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/2/22/Character_Hu_Tao_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Zhongli") {
                            item9 = goldstar + "Zhongli"
                            charimage = 'https://media.tenor.com/images/0061cccac5300206283e08bac71b98b7/tenor.gif'
                            color = geo
                        }
                        else if (randompull == "Eula") {
                            item9 = goldstar + "Eula"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Character_Eula_Card.png'
                            color = cryo
                        }
                        else if (randompull = "Kazuha") {
                            item9 = goldstar + "Kaedehara Kazuha"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/2/2d/Character_Kaedehara_Kazuha_Card.png'
                            color = anemo
                        }
                        else if (randompull == "Ayaka") {
                            item9 = goldstar + "Kamisato Ayaka"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/3/34/Character_Kamisato_Ayaka_Card.png'
                            color = cryo
                        }
                        else if (randompull == "Yoimiya") {
                            item9 = goldstar + "Yoimiya"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Character_Yoimiya_Card.png'
                            color = pyro
                        }
                        else if (randompull == "Keqing") {
                            item9 = goldstar + "Keqing"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Character_Keqing_Card.jpg'
                            color = electro
                        }
                        else if (randompull == "Mona") {
                            item9 = goldstar + "Mona"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/6/69/Character_Mona_Card.jpg'
                            color = hydro
                        }
                        else if (randompull == "Diluc") {
                            item9 = goldstar + "Diluc"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/45/Character_Diluc_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Jean") {
                            item9 = goldstar + "Jean"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Character_Jean_Card.jpg'
                            color = anemo
                        }
                        else if (randompull == "Qiqi") {
                            item9 = goldstar + "Qiqi"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Character_Qiqi_Card.jpg'
                            color = cryo
                        }
                        else if (randompull == "Baal") {
                            item9 = goldstar + "Baal"
                            charimage = 'https://media1.tenor.com/images/4f804b253e28794392652859c7b8f1c3/tenor.gif'
                            color = electro
                        }
                        else {
                            item9 = goldstar + randompull
                            charimage = 'https://media.tenor.com/images/34c6064f32fbe1b5ace18ac243546fac/tenor.gif'
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    if (random10 < 3) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Baal", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        charimage = 'https://media.tenor.com/images/3e2ccd3ef1a57a27d5b17629071c00f3/tenor.gif'
                        if (randompull == "Venti") {
                            item10 = goldstar + "Venti"
                            charimage = 'https://media1.tenor.com/images/43cb917c658c0cc22dbf96f2e8858269/tenor.gif'
                            color = anemo
                        }
                        else if (randompull == "Tartaglia") {
                            item10 = goldstar + "Tartaglia"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Character_Tartaglia_Card.png'
                            color = hydro
                        }
                        else if (randompull == "Klee") {
                            item10 = goldstar + "Klee"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/7/78/Character_Klee_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Albedo") {
                            item10 = goldstar + "Albedo"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f8/Character_Albedo_Card.png'
                            color = geo
                        }
                        else if (randompull == "Ganyu") {
                            item10 = goldstar + "Ganyu"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Character_Ganyu_Card.png'
                            color = cryo
                        }
                        else if (randompull == "Xiao") {
                            item10 = goldstar + "Xiao"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/8/88/Character_Xiao_Card.jpg'
                            color = anemo
                        }
                        else if (randompull == "Hu Tao") {
                            item10 = goldstar + "Hu Tao"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/2/22/Character_Hu_Tao_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Zhongli") {
                            item10 = goldstar + "Zhongli"
                            charimage = 'https://media.tenor.com/images/0061cccac5300206283e08bac71b98b7/tenor.gif'
                            color = geo
                        }
                        else if (randompull == "Eula") {
                            item10 = goldstar + "Eula"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Character_Eula_Card.png'
                            color = cryo
                        }
                        else if (randompull == "Kazuha") {
                            item10 = goldstar + "Kaedehara Kazuha"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/2/2d/Character_Kaedehara_Kazuha_Card.png'
                            color = anemo
                        }
                        else if (randompull == "Ayaka") {
                            item10 = goldstar + "Kamisato Ayaka"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/3/34/Character_Kamisato_Ayaka_Card.png'
                            color = cryo
                        }
                        else if (randompull == "Yoimiya") {
                            item10 = goldstar + "Yoimiya"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Character_Yoimiya_Card.png'
                            color = pyro
                        }
                        else if (randompull == "Keqing") {
                            item10 = goldstar + "Keqing"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Character_Keqing_Card.jpg'
                            color = electro
                        }
                        else if (randompull == "Mona") {
                            item10 = goldstar + "Mona"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/6/69/Character_Mona_Card.jpg'
                            color = hydro
                        }
                        else if (randompull == "Diluc") {
                            item10 = goldstar + "Diluc"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/45/Character_Diluc_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Jean") {
                            item10 = goldstar + "Jean"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Character_Jean_Card.jpg'
                            color = anemo
                        }
                        else if (randompull == "Qiqi") {
                            item10 = goldstar + "Qiqi"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Character_Qiqi_Card.jpg'
                            color = cryo
                        }
                        else if (randompull == "Baal") {
                            item10 = goldstar + "Baal"
                            charimage = 'https://media1.tenor.com/images/4f804b253e28794392652859c7b8f1c3/tenor.gif'
                            color = electro
                        }
                        else {
                            item10 = goldstar + randompull
                            charimage = 'https://media.tenor.com/images/34c6064f32fbe1b5ace18ac243546fac/tenor.gif'
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (star5pity > 79) { // 5-star pity hits, automatic 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Baal", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        charimage = 'https://media.tenor.com/images/3e2ccd3ef1a57a27d5b17629071c00f3/tenor.gif'
                        if (randompull == "Venti") {
                            item1 = goldstar + "Venti"
                            item2 = goldstar + "Venti"
                            item3 = goldstar + "Venti"
                            item4 = goldstar + "Venti"
                            item5 = goldstar + "Venti"
                            item6 = goldstar + "Venti"
                            item7 = goldstar + "Venti"
                            item8 = goldstar + "Venti"
                            item9 = goldstar + "Venti"
                            item10 = goldstar + "Venti"
                            charimage = 'https://media1.tenor.com/images/43cb917c658c0cc22dbf96f2e8858269/tenor.gif'
                            color = anemo
                        }
                        else if (randompull == "Tartaglia") {
                            item1 = goldstar + "Tartaglia"
                            item2 = goldstar + "Tartaglia"
                            item3 = goldstar + "Tartaglia"
                            item4 = goldstar + "Tartaglia"
                            item5 = goldstar + "Tartaglia"
                            item6 = goldstar + "Tartaglia"
                            item7 = goldstar + "Tartaglia"
                            item8 = goldstar + "Tartaglia"
                            item9 = goldstar + "Tartaglia"
                            item10 = goldstar + "Tartaglia"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Character_Tartaglia_Card.png'
                            color = hydro
                        }
                        else if (randompull == "Klee") {
                            item1 = goldstar + "Klee"
                            item2 = goldstar + "Klee"
                            item3 = goldstar + "Klee"
                            item4 = goldstar + "Klee"
                            item5 = goldstar + "Klee"
                            item6 = goldstar + "Klee"
                            item7 = goldstar + "Klee"
                            item8 = goldstar + "Klee"
                            item9 = goldstar + "Klee"
                            item10 = goldstar + "Klee"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/7/78/Character_Klee_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Albedo") {
                            item1 = goldstar + "Albedo"
                            item2 = goldstar + "Albedo"
                            item3 = goldstar + "Albedo"
                            item4 = goldstar + "Albedo"
                            item5 = goldstar + "Albedo"
                            item6 = goldstar + "Albedo"
                            item7 = goldstar + "Albedo"
                            item8 = goldstar + "Albedo"
                            item9 = goldstar + "Albedo"
                            item10 = goldstar + "Albedo"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f8/Character_Albedo_Card.png'
                            color = geo
                        }
                        else if (randompull == "Ganyu") {
                            item1 = goldstar + "Ganyu"
                            item2 = goldstar + "Ganyu"
                            item3 = goldstar + "Ganyu"
                            item4 = goldstar + "Ganyu"
                            item5 = goldstar + "Ganyu"
                            item6 = goldstar + "Ganyu"
                            item7 = goldstar + "Ganyu"
                            item8 = goldstar + "Ganyu"
                            item9 = goldstar + "Ganyu"
                            item10 = goldstar + "Ganyu"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Character_Ganyu_Card.png'
                            color = cryo
                        }
                        else if (randompull == "Xiao") {
                            item1 = goldstar + "Xiao"
                            item2 = goldstar + "Xiao"
                            item3 = goldstar + "Xiao"
                            item4 = goldstar + "Xiao"
                            item5 = goldstar + "Xiao"
                            item6 = goldstar + "Xiao"
                            item7 = goldstar + "Xiao"
                            item8 = goldstar + "Xiao"
                            item9 = goldstar + "Xiao"
                            item10 = goldstar + "Xiao"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/8/88/Character_Xiao_Card.jpg'
                            color = anemo
                        }
                        else if (randompull == "Hu Tao") {
                            item1 = goldstar + "Hu Tao"
                            item2 = goldstar + "Hu Tao"
                            item3 = goldstar + "Hu Tao"
                            item4 = goldstar + "Hu Tao"
                            item5 = goldstar + "Hu Tao"
                            item6 = goldstar + "Hu Tao"
                            item7 = goldstar + "Hu Tao"
                            item8 = goldstar + "Hu Tao"
                            item9 = goldstar + "Hu Tao"
                            item10 = goldstar + "Hu Tao"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/2/22/Character_Hu_Tao_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Zhongli") {
                            item1 = goldstar + "Zhongli"
                            item2 = goldstar + "Zhongli"
                            item3 = goldstar + "Zhongli"
                            item4 = goldstar + "Zhongli"
                            item5 = goldstar + "Zhongli"
                            item6 = goldstar + "Zhongli"
                            item7 = goldstar + "Zhongli"
                            item8 = goldstar + "Zhongli"
                            item9 = goldstar + "Zhongli"
                            item10 = goldstar + "Zhongli"
                            charimage = 'https://media.tenor.com/images/0061cccac5300206283e08bac71b98b7/tenor.gif'
                            color = geo
                        }
                        else if (randompull == "Eula") {
                            item1 = goldstar + "Eula"
                            item2 = goldstar + "Eula"
                            item3 = goldstar + "Eula"
                            item4 = goldstar + "Eula"
                            item5 = goldstar + "Eula"
                            item6 = goldstar + "Eula"
                            item7 = goldstar + "Eula"
                            item8 = goldstar + "Eula"
                            item9 = goldstar + "Eula"
                            item10 = goldstar + "Eula"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Character_Eula_Card.png'
                            color = cryo
                        }
                        else if (randompull == "Kazuha") {
                            item1 = goldstar + "Kaedehara Kazuha"
                            item2 = goldstar + "Kaedehara Kazuha"
                            item3 = goldstar + "Kaedehara Kazuha"
                            item4 = goldstar + "Kaedehara Kazuha"
                            item5 = goldstar + "Kaedehara Kazuha"
                            item6 = goldstar + "Kaedehara Kazuha"
                            item7 = goldstar + "Kaedehara Kazuha"
                            item8 = goldstar + "Kaedehara Kazuha"
                            item9 = goldstar + "Kaedehara Kazuha"
                            item10 = goldstar + "Kaedehara Kazuha"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/2/2d/Character_Kaedehara_Kazuha_Card.png'
                            color = anemo
                        }
                        else if (randompull == "Ayaka") {
                            item1 = goldstar + "Kamisato Ayaka"
                            item2 = goldstar + "Kamisato Ayaka"
                            item3 = goldstar + "Kamisato Ayaka"
                            item4 = goldstar + "Kamisato Ayaka"
                            item5 = goldstar + "Kamisato Ayaka"
                            item6 = goldstar + "Kamisato Ayaka"
                            item7 = goldstar + "Kamisato Ayaka"
                            item8 = goldstar + "Kamisato Ayaka"
                            item9 = goldstar + "Kamisato Ayaka"
                            item10 = goldstar + "Kamisato Ayaka"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/3/34/Character_Kamisato_Ayaka_Card.png'
                            color = cryo
                        }
                        else if (randompull == "Yoimiya") {
                            item1 = goldstar + "Yoimiya"
                            item2 = goldstar + "Yoimiya"
                            item3 = goldstar + "Yoimiya"
                            item4 = goldstar + "Yoimiya"
                            item5 = goldstar + "Yoimiya"
                            item6 = goldstar + "Yoimiya"
                            item7 = goldstar + "Yoimiya"
                            item8 = goldstar + "Yoimiya"
                            item9 = goldstar + "Yoimiya"
                            item10 = goldstar + "Yoimiya"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Character_Yoimiya_Card.png'
                            color = pyro
                        }
                        else if (randompull == "Keqing") {
                            item1 = goldstar + "Keqing"
                            item2 = goldstar + "Keqing"
                            item3 = goldstar + "Keqing"
                            item4 = goldstar + "Keqing"
                            item5 = goldstar + "Keqing"
                            item6 = goldstar + "Keqing"
                            item7 = goldstar + "Keqing"
                            item8 = goldstar + "Keqing"
                            item9 = goldstar + "Keqing"
                            item10 = goldstar + "Keqing"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Character_Keqing_Card.jpg'
                            color = electro
                        }
                        else if (randompull == "Mona") {
                            item1 = goldstar + "Mona"
                            item2 = goldstar + "Mona"
                            item3 = goldstar + "Mona"
                            item4 = goldstar + "Mona"
                            item5 = goldstar + "Mona"
                            item6 = goldstar + "Mona"
                            item7 = goldstar + "Mona"
                            item8 = goldstar + "Mona"
                            item9 = goldstar + "Mona"
                            item10 = goldstar + "Mona"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/6/69/Character_Mona_Card.jpg'
                            color = hydro
                        }
                        else if (randompull == "Diluc") {
                            item1 = goldstar + "Diluc"
                            item2 = goldstar + "Diluc"
                            item3 = goldstar + "Diluc"
                            item4 = goldstar + "Diluc"
                            item5 = goldstar + "Diluc"
                            item6 = goldstar + "Diluc"
                            item7 = goldstar + "Diluc"
                            item8 = goldstar + "Diluc"
                            item9 = goldstar + "Diluc"
                            item10 = goldstar + "Diluc"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/45/Character_Diluc_Card.jpg'
                            color = pyro
                        }
                        else if (randompull == "Jean") {
                            item1 = goldstar + "Jean"
                            item2 = goldstar + "Jean"
                            item3 = goldstar + "Jean"
                            item4 = goldstar + "Jean"
                            item5 = goldstar + "Jean"
                            item6 = goldstar + "Jean"
                            item7 = goldstar + "Jean"
                            item8 = goldstar + "Jean"
                            item9 = goldstar + "Jean"
                            item10 = goldstar + "Jean"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Character_Jean_Card.jpg'
                            color = anemo
                        }
                        else if (randompull == "Qiqi") {
                            item1 = goldstar + "Qiqi"
                            item2 = goldstar + "Qiqi"
                            item3 = goldstar + "Qiqi"
                            item4 = goldstar + "Qiqi"
                            item5 = goldstar + "Qiqi"
                            item6 = goldstar + "Qiqi"
                            item7 = goldstar + "Qiqi"
                            item8 = goldstar + "Qiqi"
                            item9 = goldstar + "Qiqi"
                            item10 = goldstar + "Qiqi"
                            charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Character_Qiqi_Card.jpg'
                            color = cryo
                        }
                        else if (randompull = "Baal") {
                            item1 = goldstar + "Baal"
                            item2 = goldstar + "Baal"
                            item3 = goldstar + "Baal"
                            item4 = goldstar + "Baal"
                            item5 = goldstar + "Baal"
                            item6 = goldstar + "Baal"
                            item7 = goldstar + "Baal"
                            item8 = goldstar + "Baal"
                            item9 = goldstar + "Baal"
                            item10 = goldstar + "Baal"
                            charimage = 'https://media1.tenor.com/images/4f804b253e28794392652859c7b8f1c3/tenor.gif'
                            color = electro
                        }
                        else {
                            item1 = goldstar + randompull
                            item2 = goldstar + randompull
                            item3 = goldstar + randompull
                            item4 = goldstar + randompull
                            item5 = goldstar + randompull
                            item6 = goldstar + randompull
                            item7 = goldstar + randompull
                            item8 = goldstar + randompull
                            item9 = goldstar + randompull
                            item10 = goldstar + randompull
                            charimage = 'https://media.tenor.com/images/34c6064f32fbe1b5ace18ac243546fac/tenor.gif'
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random1 > 50) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Sayu", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons
                        
                        item1 = purplestar + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random2 > 50) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Sayu", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons
                        
                        item2 = purplestar + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random3 > 50) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Sayu", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons
                        
                        item3 = purplestar + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random4 > 50) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Sayu", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons

                        item4 = purplestar + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random5 > 50) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Sayu", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons

                        item5 = purplestar + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random6 > 50) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Sayu", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons

                        item6 = purplestar + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random7 > 50) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Sayu", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons

                        item7 = purplestar + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random8 > 50) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Sayu", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons

                        item8 = purplestar + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random9 > 50) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Sayu", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons

                        item9 = purplestar + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random10 > 50) { // if random number > 78, random 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Sayu", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons

                        item10 = purplestar + random4star(star4)

                        star4pity = 0
                        star5pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (star4pity > 8) { // if 4-star pity hits, automatic 4-star
                        console.log("Purple!")
                        var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Sayu", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons
                        item1 = purplestar + random4star(star4)
                        item2 = purplestar + random4star(star4)
                        item3 = purplestar + random4star(star4)
                        item4 = purplestar + random4star(star4)
                        item5 = purplestar + random4star(star4)
                        item6 = purplestar + random4star(star4)
                        item7 = purplestar + random4star(star4)
                        item8 = purplestar + random4star(star4)
                        item9 = purplestar + random4star(star4)
                        item10 = purplestar + random4star(star4)

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
                    .setImage(charimage)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                    console.log(star4pity)
                    console.log(star5pity)
                }
                else {
                    const random = Math.floor(Math.random() * 90) // generates a random number between 1-90
                    if (random < 2) { // if random number < 6, random 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kaedehara Kazuha", "Kamisato Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Baal", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        if (randompull == "Venti") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://media1.tenor.com/images/43cb917c658c0cc22dbf96f2e8858269/tenor.gif')
                            .setColor(anemo)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Tartaglia") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Character_Tartaglia_Card.png')
                            .setColor(geo)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Klee") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/7/78/Character_Klee_Card.jpg')
                            .setColor(pyro)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Albedo") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/f/f8/Character_Albedo_Card.png')
                            .setColor(geo)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Ganyu") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Character_Ganyu_Card.png')
                            .setColor(cryo)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Xiao") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/8/88/Character_Xiao_Card.jpg')
                            .setColor(anemo)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Hu Tao") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/2/22/Character_Hu_Tao_Card.jpg')
                            .setColor(pyro)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Zhongli") {
                            // receivedMessage.channel.send(toad)
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/7/79/Character_Zhongli_Card.png')
                            .setColor(geo)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Eula") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Character_Eula_Card.png')
                            .setColor(cryo)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Kazuha") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/2/2d/Character_Kaedehara_Kazuha_Card.png')
                            .setColor(anemo)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Ayaka") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/3/34/Character_Kamisato_Ayaka_Card.png')
                            .setColor(cryo)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Yoimiya") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Character_Yoimiya_Card.png')
                            .setColor(pyro)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Keqing") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Character_Keqing_Card.jpg')
                            .setColor(electro)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Mona") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/6/69/Character_Mona_Card.jpg')
                            .setColor(hydro)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Diluc") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/4/45/Character_Diluc_Card.jpg')
                            .setColor(pyro)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Jean") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Character_Jean_Card.jpg')
                            .setColor(anemo)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Qiqi") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Character_Qiqi_Card.jpg')
                            .setColor(cryo)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Baal") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://media1.tenor.com/images/4f804b253e28794392652859c7b8f1c3/tenor.gif')
                            .setColor(electro)
                            receivedMessage.channel.send(embed)
                        }
                        else {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setColor(color)
                            receivedMessage.channel.send(embed)
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (star5pity > 79) { // 5-star pity hits, automatic 5-star
                        console.log("Gold!")
                        var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kaedehara Kazuha", "Kamisato Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Baal", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                        randompull = random5star(star5)
                        if (randompull == "Venti") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://media1.tenor.com/images/43cb917c658c0cc22dbf96f2e8858269/tenor.gif')
                            .setColor(anemo)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Tartaglia") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Character_Tartaglia_Card.png')
                            .setColor(geo)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Klee") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/7/78/Character_Klee_Card.jpg')
                            .setColor(pyro)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Albedo") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/f/f8/Character_Albedo_Card.png')
                            .setColor(geo)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Ganyu") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Character_Ganyu_Card.png')
                            .setColor(cryo)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Xiao") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/8/88/Character_Xiao_Card.jpg')
                            .setColor(anemo)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Hu Tao") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/2/22/Character_Hu_Tao_Card.jpg')
                            .setColor(pyro)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Zhongli") {
                            // receivedMessage.channel.send(toad)
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/7/79/Character_Zhongli_Card.png')
                            .setColor(geo)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Eula") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Character_Eula_Card.png')
                            .setColor(cryo)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Kazuha") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/2/2d/Character_Kaedehara_Kazuha_Card.png')
                            .setColor(anemo)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Ayaka") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/3/34/Character_Kamisato_Ayaka_Card.png')
                            .setColor(cryo)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Yoimiya") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Character_Yoimiya_Card.png')
                            .setColor(pyro)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Keqing") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Character_Keqing_Card.jpg')
                            .setColor(electro)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Mona") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/6/69/Character_Mona_Card.jpg')
                            .setColor(hydro)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Diluc") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/4/45/Character_Diluc_Card.jpg')
                            .setColor(pyro)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Jean") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Character_Jean_Card.jpg')
                            .setColor(anemo)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Qiqi") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Character_Qiqi_Card.jpg')
                            .setColor(cryo)
                            receivedMessage.channel.send(embed)
                        }
                        else if (randompull == "Baal") {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setImage('https://media1.tenor.com/images/4f804b253e28794392652859c7b8f1c3/tenor.gif')
                            .setColor(electro)
                            receivedMessage.channel.send(embed)
                        }
                        else {
                            const embed = new MessageEmbed()
                            .setTitle(goldstar)
                            .setDescription(randompull)
                            .setColor(color)
                            receivedMessage.channel.send(embed)
                        }
                        star5pity = 0
                        star4pity += 1
                        console.log(star4pity)
                        console.log(star5pity)
                    }
                    else if (random > 89) { // lol
                        const embed = new MessageEmbed()
                        .setTitle(star)
                        .setDescription('Reckless Pallad')
                        .setImage('https://media.tenor.com/images/d6aa26740d030a83fb8025010b10acb6/tenor.gif')
                        .setColor(color)
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
                        .setTitle(purplestar)
                        .setDescription(random4star(star4))
                        .setColor(color)
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
                        .setTitle(purplestar)
                        .setDescription(random4star(star4))
                        .setColor(color)
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
                        .setColor(color)
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