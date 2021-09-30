var star5pity = 0
var star4pity = 0

module.exports = {
    checkWish: function(receivedMessage) {

    const {MessageEmbed} = require('discord.js')
        const primogem = 'https://th.bing.com/th/id/R.7384eddb3aa0b07801ada263123ec336?rik=Gr7ZaVnIfXjK%2bQ&pid=ImgRaw&r=0'
        function random3star(star3) {
            return star3[Math.floor(Math.random() * star3.length)]
        }
        function random4star(star4) {
            return star4[Math.floor(Math.random() * star4.length)]
        }
        function random5star(star5) {
            return star5[Math.floor(Math.random() * star5.length)]
        }
        function nameGen(nameList) {
            return nameList[Math.floor(Math.random() * nameList.length)]
        }
        function single5star() {
            // console.log("Gold!")
            var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kaedehara Kazuha", "Kamisato Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Raiden Shogun", "Sangonomiya Kokomi", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
            randompull = random5star(star5)
            if (randompull == "Venti") {
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage('https://media1.tenor.com/images/43cb917c658c0cc22dbf96f2e8858269/tenor.gif')
                .setColor(anemo)
                .setThumbnail(primogem)
                receivedMessage.channel.send(embed)
            }
            else if (randompull == "Tartaglia") {
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage('https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Character_Tartaglia_Card.png')
                .setColor(geo)
                .setThumbnail(primogem)
                receivedMessage.channel.send(embed)
            }
            else if (randompull == "Klee") {
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage('https://static.wikia.nocookie.net/gensin-impact/images/7/78/Character_Klee_Card.jpg')
                .setColor(pyro)
                .setThumbnail(primogem)
                receivedMessage.channel.send(embed)
            }
            else if (randompull == "Albedo") {
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage('https://static.wikia.nocookie.net/gensin-impact/images/f/f8/Character_Albedo_Card.png')
                .setColor(geo)
                .setThumbnail(primogem)
                receivedMessage.channel.send(embed)
            }
            else if (randompull == "Ganyu") {
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage('https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Character_Ganyu_Card.png')
                .setColor(cryo)
                .setThumbnail(primogem)
                receivedMessage.channel.send(embed)
            }
            else if (randompull == "Xiao") {
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage('https://static.wikia.nocookie.net/gensin-impact/images/8/88/Character_Xiao_Card.jpg')
                .setColor(anemo)
                .setThumbnail(primogem)
                receivedMessage.channel.send(embed)
            }
            else if (randompull == "Hu Tao") {
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage('https://static.wikia.nocookie.net/gensin-impact/images/2/22/Character_Hu_Tao_Card.jpg')
                .setColor(pyro)
                .setThumbnail(primogem)
                receivedMessage.channel.send(embed)
            }
            else if (randompull == "Zhongli") {
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage('https://static.wikia.nocookie.net/gensin-impact/images/7/79/Character_Zhongli_Card.png')
                .setColor(geo)
                .setThumbnail('https://th.bing.com/th/id/OIP.oJNFbpLvfgNG0-L3_qJSygAAAA?pid=ImgDet&rs=1')
                receivedMessage.channel.send(embed)
            }
            else if (randompull == "Eula") {
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage('https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Character_Eula_Card.png')
                .setColor(cryo)
                .setThumbnail(primogem)
                receivedMessage.channel.send(embed)
            }
            else if (randompull == "Kazuha") {
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage('https://static.wikia.nocookie.net/gensin-impact/images/2/2d/Character_Kaedehara_Kazuha_Card.png')
                .setColor(anemo)
                .setThumbnail(primogem)
                receivedMessage.channel.send(embed)
            }
            else if (randompull == "Ayaka") {
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage('https://static.wikia.nocookie.net/gensin-impact/images/3/34/Character_Kamisato_Ayaka_Card.png')
                .setColor(cryo)
                .setThumbnail(primogem)
                receivedMessage.channel.send(embed)
            }
            else if (randompull == "Yoimiya") {
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage('https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Character_Yoimiya_Card.png')
                .setColor(pyro)
                .setThumbnail(primogem)
                receivedMessage.channel.send(embed)
            }
            else if (randompull == "Keqing") {
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage('https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Character_Keqing_Card.jpg')
                .setColor(electro)
                .setThumbnail(primogem)
                receivedMessage.channel.send(embed)
            }
            else if (randompull == "Mona") {
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage('https://static.wikia.nocookie.net/gensin-impact/images/6/69/Character_Mona_Card.jpg')
                .setColor(hydro)
                .setThumbnail(primogem)
                receivedMessage.channel.send(embed)
            }
            else if (randompull == "Diluc") {
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage('https://static.wikia.nocookie.net/gensin-impact/images/4/45/Character_Diluc_Card.jpg')
                .setColor(pyro)
                .setThumbnail(primogem)
                receivedMessage.channel.send(embed)
            }
            else if (randompull == "Jean") {
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage('https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Character_Jean_Card.jpg')
                .setColor(anemo)
                .setThumbnail(primogem)
                receivedMessage.channel.send(embed)
            }
            else if (randompull == "Qiqi") {
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage('https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Character_Qiqi_Card.jpg')
                .setColor(cryo)
                .setThumbnail(primogem)
                receivedMessage.channel.send(embed)
            }
            else if (randompull == "Raiden Shogun") {
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage('https://static.wikia.nocookie.net/gensin-impact/images/9/97/Character_Raiden_Shogun_Card.png')
                .setColor(electro)
                .setThumbnail(primogem)
                receivedMessage.channel.send(embed)
            }
            else if (randompull = "Sangonomiya Kokomi") {
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage('https://static.wikia.nocookie.net/gensin-impact/images/3/32/Character_Sangonomiya_Kokomi_Card.jpg')
                .setColor(hydro)
                .setThumbnail(primogem)
                receivedMessage.channel.send(embed)
            }
            else {
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setColor("#ffff00")
                .setThumbnail(primogem)
                receivedMessage.channel.send(embed)
            }
            star5pity = 0
            star4pity += 1
            // console.log(star4pity)
            // console.log(star5pity)
        }
        function single4star() {
            // console.log("Purple!")
            var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Sayu", "Kujou Sara", "Thoma", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons
            const embed = new MessageEmbed()
            .setTitle(purplestar)
            .setDescription(random4star(star4))
            .setColor("#800080")
            .setThumbnail(primogem)
            receivedMessage.channel.send(embed)
            star4pity = 0
            star5pity += 1
            // console.log(star4pity)
            // console.log(star5pity)
        }
        function ten5star() {
            // console.log("Gold!")
            var star5 = ["drunk bard", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Geo Daddy", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "BOOBA SWORD", "Sangonomiya Kokomi", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
            randompull = random5star(star5)
            charimage = 'https://media.tenor.com/images/3e2ccd3ef1a57a27d5b17629071c00f3/tenor.gif'
            if (randompull == "drunk bard") {
                var nameList = ["Venti", "Barbatos", "Windborne Bard", "Tone-Deaf Bard"]
                item = goldstar + nameGen(nameList)
                charimage = 'https://media1.tenor.com/images/43cb917c658c0cc22dbf96f2e8858269/tenor.gif'
                color = anemo
            }
            else if (randompull == "Tartaglia") {
                item = goldstar + "Tartaglia"
                charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Character_Tartaglia_Card.png'
                color = hydro
            }
            else if (randompull == "Klee") {
                item = goldstar + "Klee"
                charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/7/78/Character_Klee_Card.jpg'
                color = pyro
            }
            else if (randompull == "Albedo") {
                item = goldstar + "Albedo"
                charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f8/Character_Albedo_Card.png'
                color = geo
            }
            else if (randompull == "Ganyu") {
                item = goldstar + "Ganyu"
                charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Character_Ganyu_Card.png'
                color = cryo
            }
            else if (randompull == "Xiao") {
                item = goldstar + "Xiao"
                charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/8/88/Character_Xiao_Card.jpg'
                color = anemo
            }
            else if (randompull == "Hu Tao") {
                item = goldstar + "Hu Tao"
                charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/2/22/Character_Hu_Tao_Card.jpg'
                color = pyro
            }
            else if (randompull == "Geo Daddy") {
                var nameList = ["Zhongli", "Rex Lapis", "Morax", "God of Contracts"]
                item = goldstar + nameGen(nameList)
                charimage = 'https://media.tenor.com/images/0061cccac5300206283e08bac71b98b7/tenor.gif'
                color = geo
            }
            else if (randompull == "Eula") {
                item = goldstar + "Eula"
                charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Character_Eula_Card.png'
                color = cryo
            }
            else if (randompull == "Kazuha") {
                item = goldstar + "Kaedehara Kazuha"
                charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/2/2d/Character_Kaedehara_Kazuha_Card.png'
                color = anemo
            }
            else if (randompull == "Ayaka") {
                var nameList = ["Kamisato Ayaka", "Kamisato Ayaya"]
                item = goldstar + nameGen(nameList)
                charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/3/34/Character_Kamisato_Ayaka_Card.png'
                color = cryo
            }
            else if (randompull == "Yoimiya") {
                item = goldstar + "Yoimiya"
                charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Character_Yoimiya_Card.png'
                color = pyro
            }
            else if (randompull == "Keqing") {
                item = goldstar + "Keqing"
                charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Character_Keqing_Card.jpg'
                color = electro
            }
            else if (randompull == "Mona") {
                item = goldstar + "Mona"
                charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/6/69/Character_Mona_Card.jpg'
                color = hydro
            }
            else if (randompull == "Diluc") {
                item = goldstar + "Diluc"
                charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/4/45/Character_Diluc_Card.jpg'
                color = pyro
            }
            else if (randompull == "Jean") {
                item = goldstar + "Jean"
                charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Character_Jean_Card.jpg'
                color = anemo
            }
            else if (randompull == "Qiqi") {
                item = goldstar + "Qiqi"
                charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Character_Qiqi_Card.jpg'
                color = cryo
            }
            else if (randompull == "BOOBA SWORD") {
                var nameList = ["Raiden Shogun", "Ei", "Baal", "雷 らい 電 でん 将 しょう 軍 ぐん"]
                item = goldstar + nameGen(nameList)
                charimage = 'https://media1.tenor.com/images/4f804b253e28794392652859c7b8f1c3/tenor.gif'
                color = electro
            }
            else if (randompull == "Sangonomiya Kokomi") {
                item = goldstar + "Sangonomiya Kokomi"
                charimage = 'https://static.wikia.nocookie.net/gensin-impact/images/3/32/Character_Sangonomiya_Kokomi_Card.jpg'
                color = hydro
            }
            else {
                item = goldstar + randompull
                charimage = 'https://media.tenor.com/images/34c6064f32fbe1b5ace18ac243546fac/tenor.gif'
            }
            star5pity = 0
            star4pity += 1
            // console.log(star4pity)
            // console.log(star5pity)
        }
        function ten4star() {
            // console.log("Purple!")
            var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Sayu", "Kujou Sara", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons
                        
            item = purplestar + random4star(star4)

            star4pity = 0
            star5pity += 1
            // console.log(star4pity)
            // console.log(star5pity)
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
                        item1 = ten5star()
                        item1 = item
                    }
                    if (random2 < 3) { // if random number < 6, random 5-star
                        item2 = ten5star()
                        item2 = item
                    }
                    if (random3 < 3) { // if random number < 6, random 5-star
                        item3 = ten5star()
                        item3 = item
                    }
                    if (random4 < 3) { // if random number < 6, random 5-star
                        item4 = ten5star()
                        item4 = item
                    }
                    if (random5 < 3) { // if random number < 6, random 5-star
                        item5 = ten5star()
                        item5 = item
                    }
                    if (random6 < 3) { // if random number < 6, random 5-star
                        item6 = ten5star()
                        item6 = item
                    }
                    if (random7 < 3) { // if random number < 6, random 5-star
                        item7 = ten5star()
                        item7 = item
                    }
                    if (random8 < 3) { // if random number < 6, random 5-star
                        item8 = ten5star()
                        item8 = item
                    }
                    if (random9 < 3) { // if random number < 6, random 5-star
                        item9 = ten5star()
                        item9 = item
                    }
                    if (random10 < 3) { // if random number < 6, random 5-star
                        item10 = ten5star()
                        item10 = item
                    }
                    else if (star5pity > 79) { // 5-star pity hits, automatic 5-star
                        item1 = ten5star()
                        item1 = item

                        item2 = ten5star()
                        item2 = item

                        item3 = ten5star()
                        item3 = item

                        item4 = ten5star()
                        item4 = item

                        item5 = ten5star()
                        item5 = item

                        item6 = ten5star()
                        item6 = item

                        item7 = ten5star()
                        item7 = item

                        item8 = ten5star()
                        item8 = item

                        item9 = ten5star()
                        item9 = item

                        item10 = ten5star()
                        item10 = item
                    }
                    else if (random1 > 50) { // if random number > 78, random 4-star
                        item1 = ten4star()
                        item1 = item
                    }
                    else if (random2 > 50) { // if random number > 78, random 4-star
                        item2 = ten4star()
                        item2 = item
                    }
                    else if (random3 > 50) { // if random number > 78, random 4-star
                        item3 = ten4star()
                        item3 = item
                    }
                    else if (random4 > 50) { // if random number > 78, random 4-star
                        item4 = ten4star()
                        item4 = item
                    }
                    else if (random5 > 50) { // if random number > 78, random 4-star
                        item5 = ten4star()
                        item5 = item
                    }
                    else if (random6 > 50) { // if random number > 78, random 4-star
                        item6 = ten4star()
                        item6 = item
                    }
                    else if (random7 > 50) { // if random number > 78, random 4-star
                        item7 = ten4star()
                        item7 = item
                    }
                    else if (random8 > 50) { // if random number > 78, random 4-star
                        item8 = ten4star()
                        item8 = item
                    }
                    else if (random9 > 50) { // if random number > 78, random 4-star
                        item9 = ten4star()
                        item9 = item
                    }
                    else if (random10 > 50) { // if random number > 78, random 4-star
                        item10 = ten4star()
                        item10 = item
                    }
                    else if (star4pity > 8) { // if 4-star pity hits, automatic 4-star
                        item1 = ten4star()
                        item1 = item

                        item2 = ten4star()
                        item2 = item

                        item3 = ten4star()
                        item3 = item

                        item4 = ten4star()
                        item4 = item

                        item5 = ten4star()
                        item5 = item
                        
                        item6 = ten4star()
                        item6 = item

                        item7 = ten4star()
                        item7 = item

                        item8 = ten4star()
                        item8 = item

                        item9 = ten4star()
                        item9 = item

                        item10 = ten4star()
                        item10 = item
                    }
                    else { // 3-star items

                        star4pity += 1
                        star5pity += 10
                        // console.log(star4pity)
                        // console.log(star5pity)
                    }
                    const embed = new MessageEmbed()
                    .setTitle(`10-pull:`)
                    .setDescription(`<@!${receivedMessage.author.id}> got:
${item1}
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
                    .setThumbnail(primogem)
                    .setColor(color)
                    receivedMessage.channel.send(embed)
                    // console.log(star4pity)
                    // console.log(star5pity)
                }
                else {
                    const random = Math.floor(Math.random() * 90) // generates a random number between 1-90
                    if (random < 2) { // if random number < 6, random 5-star
                        single5star()
                    }
                    else if (star5pity > 79) { // 5-star pity hits, automatic 5-star
                        single5star()
                    }
                    else if (random > 89) { // lol
                        const embed = new MessageEmbed()
                        .setTitle(star)
                        .setDescription('Reckless Pallad')
                        .setImage('https://media.tenor.com/images/d6aa26740d030a83fb8025010b10acb6/tenor.gif')
                        .setColor(color)
                        .setThumbnail('https://th.bing.com/th/id/OIP.leQ4vnoL-ZyYJwY5IlEpxAHaGA?pid=ImgDet&rs=1')
                        receivedMessage.channel.send(embed)
                        star4pity += 1
                        star5pity += 1
                        // console.log(star4pity)
                        // console.log(star5pity)
                    }
                    else if (random > 78) { // if random number > 78, random 4-star
                        single4star()
                    }
                    else if (star4pity > 8) { // if 4-star pity hits, automatic 4-star
                        // console.log("Purple!")
                        single4star()
                    }
                    else { // 3-star items
                        // console.log("Blue.")
                        var star3 = ["Slingshot", "Sharpshooter's Oath", "Raven Bow", "Emerald Orb", "Thrilling Tales of Dragon Slayers", "Magic Guide", "Black Tassel", "Debate Club", "Bloodstained Greatsword", "Ferrous Shadow", "Skyrider Sword", "Harbringer of Dawn", "Cool Steel"] // List of 3-star weapons
                        const embed = new MessageEmbed()
                        .setTitle(star + star + star)
                        .setDescription(random3star(star3))
                        .setColor(color)
                        receivedMessage.channel.send(embed)
                        star4pity += 1
                        star5pity += 1
                        // console.log(star4pity)
                        // console.log(star5pity)
                    }
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}