var star5pity = 0
var star4pity = 0

module.exports = {
    checkWish: function(receivedMessage) {

    const fs = require('fs') // connect fs module
    const {MessageEmbed} = require('discord.js')
        const primogem = 'https://th.bing.com/th/id/R.7384eddb3aa0b07801ada263123ec336?rik=Gr7ZaVnIfXjK%2bQ&pid=ImgRaw&r=0'
        const star5 = ['Venti', 'Tartaglia', 'Klee', 'Albedo', 'Ganyu', 'Xiao', 'Hu Tao', 'Zhongli',
            'Eula', 'Kaedehara Kazuha', 'Kamisato Ayaka', 'Yoimiya', 'Keqing', 'Mona', 'Qiqi', 'Diluc',
            'Jean', 'Raiden Shogun', 'Sangonomiya Kokomi', 'Arataki Itto', 'Shenhe', 'Yae Miko', 
            'Amos\' Bow', 'Skyward Harp', 'Lost Prayer to the Sacred Winds', 'Skyward Atlas', 
            'Primoridal Jade Winged-Spear', 'Skyward Spine', 'Wolf\'s Gravestone', 'Skyward Pride', 
            'Skyward Blade', 'Aquila Favonia'] // List of 5-star characters and weapons

        const star4 = ['Yanfei', 'Rosaria', 'Xinyan', 'Sucrose', 'Diona', 'Chongyun', 'Noelle', 
            'Bennett', 'Fischl', 'Ningguang', 'Xingqiu', 'Beidou', 'Xiangling', 'Amber', 'Razor', 
            'Kaeya', 'Barbara', 'Lisa', 'Sayu', 'Kujou Sara', 'Thoma', 'Gorou', 'Yun Jin', 
            'Rust', 'Sacrificial Bow', 'The Stringless', 'Favonius Warbow', 'Eye of Perception', 
            'Sacrificial Fragments', 'The Widsith', 'Favonius Codex', 'Favonius Lance', 'Dragon\'s Bane', 
            'Rainslasher', 'Sacrificial Greatsword', 'The Bell', 'Favonius Greatsword', 'Lion\'s Roar', 
            'Sacrificial Sword', 'The Flute', 'Favonius Sword'] // List of 4-star characters and weapons

        const star3 = ['Slingshot', 'Sharpshooter\'s Oath', 'Raven Bow', 'Emerald Orb', 
            'Thrilling Tales of Dragon Slayers', 'Magic Guide', 'Black Tassel', 'Debate Club', 
            'Bloodstained Greatsword', 'Ferrous Shadow', 'Skyrider Sword', 'Harbringer of Dawn', 
            'Cool Steel'] // List of 3-star weapons

        const venticard = 'https://static.wikia.nocookie.net/gensin-impact/images/7/76/Character_Venti_Card.jpg'
        const childecard = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Character_Tartaglia_Card.png'
        const kleecard = 'https://static.wikia.nocookie.net/gensin-impact/images/7/78/Character_Klee_Card.jpg'
        const albedocard = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f8/Character_Albedo_Card.png'
        const ganyucard = 'https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Character_Ganyu_Card.png'
        const xiaocard = 'https://static.wikia.nocookie.net/gensin-impact/images/8/88/Character_Xiao_Card.jpg'
        const hutaocard = 'https://static.wikia.nocookie.net/gensin-impact/images/2/22/Character_Hu_Tao_Card.jpg'
        const zhonglicard = 'https://static.wikia.nocookie.net/gensin-impact/images/7/79/Character_Zhongli_Card.png'
        const eulacard = 'https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Character_Eula_Card.png'
        const kazuhacard = 'https://static.wikia.nocookie.net/gensin-impact/images/2/2d/Character_Kaedehara_Kazuha_Card.png'
        const ayakacard = 'https://static.wikia.nocookie.net/gensin-impact/images/3/34/Character_Kamisato_Ayaka_Card.png'
        const yoimiyacard = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Character_Yoimiya_Card.png'
        const keqingcard = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Character_Keqing_Card.jpg'
        const monacard = 'https://static.wikia.nocookie.net/gensin-impact/images/6/69/Character_Mona_Card.jpg'
        const diluccard = 'https://static.wikia.nocookie.net/gensin-impact/images/4/45/Character_Diluc_Card.jpg'
        const jeancard = 'https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Character_Jean_Card.jpg'
        const qiqicard = 'https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Character_Qiqi_Card.jpg'
        const eicard = 'https://static.wikia.nocookie.net/gensin-impact/images/a/a4/Character_Raiden_Shogun_Card.jpg'
        const kokomicard = 'https://static.wikia.nocookie.net/gensin-impact/images/3/32/Character_Sangonomiya_Kokomi_Card.jpg'
        const ittocard = 'https://static.wikia.nocookie.net/gensin-impact/images/c/cf/Character_Arataki_Itto_Card.jpg'
        const shenhecard = 'https://static.wikia.nocookie.net/gensin-impact/images/0/05/Character_Shenhe_Card.jpg'
        const yaecard = 'https://static.wikia.nocookie.net/gensin-impact/images/2/2a/Character_Yae_Miko_Card.png'

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
        function wishHistory() {
            var uid = 'wishhistory' + parseInt(receivedMessage.author.id).toString() + '.txt' // takes the message author uid and puts it into the file name
                fs.open('./wishhistory/' + uid, 'a+', function(error, fd) { // opens the user's wish history file
                    if (error) { // if user has no wish history file, create one
                        fs.writeFile('./wishhistory/' + uid, randompull, 'utf8', function(error, data) { // start user with 1 pog
                            null
                        })
                    }
                    else { // if user has a wish history file
                        fs.readFile('./wishhistory/' + uid, 'utf8', function(error, data) { // read the value in the pog count file
                            if (error) { // if file does not exist, create one (this is unlikely to be needed)
                                fs.writeFile('./wishhistory/' + uid, randompull, 'utf8', function(error, data) { // start user with wish history
                                    null
                                })
                            }
                            else { // log wishes
                                fs.write(fd, `\n${randompull}`, 0, 'utf8', function(error, writtenbytes) { // appends new wish to the line below the last
                                })
                            }
                        })
                    }
                })
        }
        function tenWishHistory(item) {
            var uid = 'wishhistory' + parseInt(receivedMessage.author.id).toString() + '.txt' // takes the message author uid and puts it into the file name
                fs.open('./wishhistory/' + uid, 'a+', function(error, fd) { // opens the user's wish history file
                    if (error) { // if user has no wish history file, create one
                        fs.writeFile('./wishhistory/' + uid, item, 'utf8', function(error, data) { // start user with 1 pog
                            null
                        })
                    }
                    else { // if user has a wish history file
                        fs.readFile('./wishhistory/' + uid, 'utf8', function(error, data) { // read the value in the pog count file
                            if (error) { // if file does not exist, create one (this is unlikely to be needed)
                                fs.writeFile('./wishhistory/' + uid, item, 'utf8', function(error, data) { // start user with wish history
                                    null
                                })
                            }
                            else { // log wishes
                                fs.write(fd, `\n${item}`, 0, 'utf8', function(error, writtenbytes) { // appends new wish to the line below the last
                                })
                            }
                        })
                    }
                })
        }
        function single5star() {
            // console.log('Gold!')
            randompull = random5star(star5)
            if (randompull == 'Venti') {
                wishHistory()
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage(venticard)
                .setColor(anemo)
                .setThumbnail(primogem)
                .setTimestamp()
                receivedMessage.channel.send({ embeds: [embed]})
            }
            else if (randompull == 'Tartaglia') {
                wishHistory()
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage(childecard)
                .setColor(geo)
                .setThumbnail(primogem)
                .setTimestamp()
                receivedMessage.channel.send({ embeds: [embed]})
            }
            else if (randompull == 'Klee') {
                wishHistory()
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage(kleecard)
                .setColor(pyro)
                .setThumbnail(primogem)
                .setTimestamp()
                receivedMessage.channel.send({ embeds: [embed]})
            }
            else if (randompull == 'Albedo') {
                wishHistory()
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage(albedocard)
                .setColor(geo)
                .setThumbnail(primogem)
                .setTimestamp()
                receivedMessage.channel.send({ embeds: [embed]})
            }
            else if (randompull == 'Ganyu') {
                wishHistory()
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage(ganyucard)
                .setColor(cryo)
                .setThumbnail(primogem)
                .setTimestamp()
                receivedMessage.channel.send({ embeds: [embed]})
            }
            else if (randompull == 'Xiao') {
                wishHistory()
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage(xiaocard)
                .setColor(anemo)
                .setThumbnail(primogem)
                .setTimestamp()
                receivedMessage.channel.send({ embeds: [embed]})
            }
            else if (randompull == 'Hu Tao') {
                wishHistory()
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage(hutaocard)
                .setColor(pyro)
                .setThumbnail(primogem)
                .setTimestamp()
                receivedMessage.channel.send({ embeds: [embed]})
            }
            else if (randompull == 'Zhongli') {
                wishHistory()
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage(zhonglicard)
                .setColor(geo)
                .setThumbnail('https://th.bing.com/th/id/OIP.oJNFbpLvfgNG0-L3_qJSygAAAA?pid=ImgDet&rs=1')
                .setTimestamp()
                receivedMessage.channel.send({ embeds: [embed]})
            }
            else if (randompull == 'Eula') {
                wishHistory()
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage(eulacard)
                .setColor(cryo)
                .setThumbnail(primogem)
                .setTimestamp()
                receivedMessage.channel.send({ embeds: [embed]})
            }
            else if (randompull == 'Kaedehara Kazuha') {
                wishHistory()
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage(kazuhacard)
                .setColor(anemo)
                .setThumbnail(primogem)
                .setTimestamp()
                receivedMessage.channel.send({ embeds: [embed]})
            }
            else if (randompull == 'Kamisato Ayaka') {
                wishHistory()
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage(ayakacard)
                .setColor(cryo)
                .setThumbnail(primogem)
                .setTimestamp()
                receivedMessage.channel.send({ embeds: [embed]})
            }
            else if (randompull == 'Yoimiya') {
                wishHistory()
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage(yoimiyacard)
                .setColor(pyro)
                .setThumbnail(primogem)
                .setTimestamp()
                receivedMessage.channel.send({ embeds: [embed]})
            }
            else if (randompull == 'Keqing') {
                wishHistory()
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage(keqingcard)
                .setColor(electro)
                .setThumbnail(primogem)
                .setTimestamp()
                receivedMessage.channel.send({ embeds: [embed]})
            }
            else if (randompull == 'Mona') {
                wishHistory()
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage(monacard)
                .setColor(hydro)
                .setThumbnail(primogem)
                .setTimestamp()
                receivedMessage.channel.send({ embeds: [embed]})
            }
            else if (randompull == 'Diluc') {
                wishHistory()
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage(diluccard)
                .setColor(pyro)
                .setThumbnail(primogem)
                .setTimestamp()
                receivedMessage.channel.send({ embeds: [embed]})
            }
            else if (randompull == 'Jean') {
                wishHistory()
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage(jeancard)
                .setColor(anemo)
                .setThumbnail(primogem)
                .setTimestamp()
                receivedMessage.channel.send({ embeds: [embed]})
            }
            else if (randompull == 'Qiqi') {
                wishHistory()
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage(qiqicard)
                .setColor(cryo)
                .setThumbnail(primogem)
                .setTimestamp()
                receivedMessage.channel.send({ embeds: [embed]})
            }
            else if (randompull == 'Raiden Shogun') {
                wishHistory()
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage(eicard)
                .setColor(electro)
                .setThumbnail(primogem)
                .setTimestamp()
                receivedMessage.channel.send({ embeds: [embed]})
            }
            else if (randompull == 'Sangonomiya Kokomi') {
                wishHistory()
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage(kokomicard)
                .setColor(hydro)
                .setThumbnail(primogem)
                .setTimestamp()
                receivedMessage.channel.send({ embeds: [embed]})
            }
            else if (randompull == 'Arataki Itto') {
                wishHistory()
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage(ittocard)
                .setColor(geo)
                .setThumbnail(primogem)
                .setTimestamp()
                receivedMessage.channel.send({ embeds: [embed]})
            }
            else if (randompull == 'Shenhe') {
                wishHistory()
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage(shenhecard)
                .setColor(cryo)
                .setThumbnail(primogem)
                .setTimestamp()
                receivedMessage.channel.send({ embeds: [embed]})
            }
            else if (randompull == 'Yae Miko') {
                wishHistory()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setImage(yaecard)
                .setColor(electro)
                .setThumbnail(primogem)
                .setTimestamp()
                receivedMessage.channel.send({ embeds: [embed]})
            }
            else {
                wishHistory()
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(randompull)
                .setColor('#ffff00')
                .setThumbnail(primogem)
                .setTimestamp()
                receivedMessage.channel.send({ embeds: [embed]})
            }
            star5pity = 0
            star4pity += 1
            // console.log(star4pity)
            // console.log(star5pity)
        }
        function single4star() {
            // console.log('Purple!')
            const embed = new MessageEmbed()
            .setTitle(purplestar)
            .setDescription(random4star(star4))
            .setColor('#800080')
            .setThumbnail(primogem)
            .setTimestamp()
            receivedMessage.channel.send({ embeds: [embed]})
            star4pity = 0
            star5pity += 1
            // console.log(star4pity)
            // console.log(star5pity)
        }
        function ten5star() {
            // console.log('Gold!')
            randompull = random5star(star5)
            // wishHistory()
            charimage = 'https://media.tenor.com/images/3e2ccd3ef1a57a27d5b17629071c00f3/tenor.gif'
            if (randompull == 'Venti') {
                const nameList = ['Venti', 'Barbatos', 'Windborne Bard', 'Tone-Deaf Bard']
                item = goldstar + nameGen(nameList)
                charimage = 'https://media1.tenor.com/images/43cb917c658c0cc22dbf96f2e8858269/tenor.gif'
                color = anemo
            }
            else if (randompull == 'Tartaglia') {
                const nameList = ['Tartaglia', 'Childe']
                item = goldstar + nameGen(nameList)
                charimage = childecard
                color = hydro
            }
            else if (randompull == 'Klee') {
                item = goldstar + randompull
                charimage = kleecard
                color = pyro
            }
            else if (randompull == 'Albedo') {
                item = goldstar + randompull
                charimage = albedocard
                color = geo
            }
            else if (randompull == 'Ganyu') {
                item = goldstar + randompull
                charimage = ganyucard
                color = cryo
            }
            else if (randompull == 'Xiao') {
                item = goldstar + randompull
                charimage = xiaocard
                color = anemo
            }
            else if (randompull == 'Hu Tao') {
                item = goldstar + randompull
                charimage = hutaocard
                color = pyro
            }
            else if (randompull == 'Zhongli') {
                const nameList = ['Zhongli', 'Rex Lapis', 'Morax', 'God of Contracts']
                item = goldstar + nameGen(nameList)
                charimage = 'https://media.tenor.com/images/0061cccac5300206283e08bac71b98b7/tenor.gif'
                color = geo
            }
            else if (randompull == 'Eula') {
                item = goldstar + randompull
                charimage = eulacard
                color = cryo
            }
            else if (randompull == 'Kaedehara Kazuha') {
                item = goldstar + randompull
                charimage = kazuhacard
                color = anemo
            }
            else if (randompull == 'Kamisato Ayaka') {
                const nameList = ['Kamisato Ayaka', 'Kamisato Ayaya']
                item = goldstar + nameGen(nameList)
                charimage = ayakacard
                color = cryo
            }
            else if (randompull == 'Yoimiya') {
                item = goldstar + randompull
                charimage = yoimiyacard
                color = pyro
            }
            else if (randompull == 'Keqing') {
                item = goldstar + randompull
                charimage = keqingcard
                color = electro
            }
            else if (randompull == 'Mona') {
                item = goldstar + randompull
                charimage = monacard
                color = hydro
            }
            else if (randompull == 'Diluc') {
                item = goldstar + randompull
                charimage = diluccard
                color = pyro
            }
            else if (randompull == 'Jean') {
                item = goldstar + randompull
                charimage = jeancard
                color = anemo
            }
            else if (randompull == 'Qiqi') {
                item = goldstar + randompull
                charimage = qiqicard
                color = cryo
            }
            else if (randompull == 'Raiden Shogun') {
                const nameList = ['Raiden Shogun', 'Ei', 'Baal', '雷電 ']
                item = goldstar + nameGen(nameList)
                charimage = 'https://media1.tenor.com/images/4f804b253e28794392652859c7b8f1c3/tenor.gif'
                color = electro
            }
            else if (randompull == 'Sangonomiya Kokomi') {
                item = goldstar + randompull
                charimage = kokomicard
                color = hydro
            }
            else if (randompull == 'Arataki Itto') {
                item = goldstar + randompull
                charimage = ittocard
                color = geo
            }
            else if (randompull == 'Shenhe') {
                item = goldstar + randompull
                charimage = shenhecard
                color = cryo
            }
            else if (randompull == 'Yae Miko') {
                item = goldstar + randompull
                charimage = yaecard
                color = electro
            }
            else {
                item = goldstar + randompull
                charimage = 'https://media.tenor.com/images/34c6064f32fbe1b5ace18ac243546fac/tenor.gif'
            }
        }

        function ten4star() {                   
            item = purplestar + random4star(star4)
        }

        function ten3star() {
            item = normiestar + random3star(star3)
        }

        const star = '<:star:858047215952068628>'
        const star2 = '<:star2:861084656060334100>'
        const goldstar = star2 + star2 + star2 + star2 + star2
        const purplestar = star + star + star + star
        const normiestar = star + star + star

        var color = '#191a36'
        const anemo = '#4cc285'
        const geo = '#ecc60d'
        const pyro = '#da5d31'
        const hydro = '#569cd0'
        const cryo = '#b4dcde'
        const electro = '#965daa'

        var items = []

        var charimage = 'https://media1.tenor.com/images/17f64ce3809e2d329599e1c38f488703/tenor.gif?itemid=18856455'

    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    found = false

        switch(primaryCommand) { // called when messages says 'pog wish'
            case 'wish' :
                if (arguments == '10') {
                    wishCount = 0
                    for (randomCount = 0; randomCount < 10; randomCount++) {
                        const random = Math.floor(Math.random() * 90)
                        if (random < 3) { // if random number < 3
                            if (star5pity > 75) {
                                if (random < 25) {
                                    ten5star()
                                    items[wishCount] = item
                                    tenWishHistory(randompull)
                                    star5pity = 0
                                    star4pity++
                                    wishCount++
                                    // console.log(`${wishCount} ${star5pity} ${star4pity}`)
                                }
                                else {
                                    ten5star()
                                    items[wishCount] = item
                                    tenWishHistory(randompull)
                                    star5pity = 0
                                    star4pity++
                                    wishCount++
                                }
                            }
                            else {
                                ten5star()
                                items[wishCount] = item
                                tenWishHistory(randompull)
                                star5pity = 0
                                star4pity++
                                wishCount++
                            }
                        }
                        else if (star5pity > 88) {
                            ten5star()
                            items[wishCount] = item
                            tenWishHistory(randompull)
                            star5pity = 0
                            star4pity++
                            wishCount++
                        }
                        else if (random > 75) {
                            ten4star()
                            items[wishCount] = item
                            star5pity++
                            star4pity = 0
                            wishCount++
                        }
                        else if (star4pity > 8) {
                            ten4star()
                            items[wishCount] = item
                            star5pity++
                            star4pity = 0
                            wishCount++
                        }
                        else {
                            ten3star()
                            items[wishCount] = item
                            star5pity++
                            star4pity++
                            wishCount++
                        }
                    }

                    const embed = new MessageEmbed()
                    .setTitle(`10-pull:`)
                    .setDescription(`<@!${receivedMessage.author.id}> got:
${items[0]}
${items[1]}
${items[2]}
${items[3]}
${items[4]}
${items[5]}
${items[6]}
${items[7]}
${items[8]}
${items[9]}`)
                    .setImage(charimage)
                    .setThumbnail(primogem)
                    .setColor(color)
                    .setTimestamp()
                    receivedMessage.channel.send({ embeds: [embed]})
                }
                else if (arguments == 'history') {
                    fs.readFile(`./wishhistory/wishhistory${parseInt(receivedMessage.author.id).toString()}.txt`, 'utf8', function(error, data) { // read the value in the pog count file
                        if (error) { // if file does not exist
                            const embed = new MessageEmbed()
                            .setTitle(`${receivedMessage.author.username}'s 5-star Wish History`)
                            .setDescription('This user has no wish history.')
                            .setThumbnail('https://c.tenor.com/v6uW6qb-ukcAAAAi/qiqi-fallen.gif')
                            .setColor(color)
                            .setTimestamp()
                            receivedMessage.channel.send({ embeds: [embed]})
                        }
                        else { // send file
                            const embed = new MessageEmbed()
                            .setTitle(`${receivedMessage.author.username}'s 5-star Wish History`)
                            .setDescription('See attached wish history file with your Discord user ID (it may delay sending)')
                            .setThumbnail(primogem)
                            .setColor(color)
                            .attachFiles(`./wishhistory/wishhistory${parseInt(receivedMessage.author.id).toString()}.txt`)
                            .setTimestamp()
                            receivedMessage.channel.send({ embeds: [embed]})
                        }
                    })
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
                        .setTimestamp()
                        receivedMessage.channel.send({ embeds: [embed]})
                        star4pity += 1
                        star5pity += 1
                    }
                    else if (random > 78) { // if random number > 78, random 4-star
                        single4star()
                    }
                    else if (star4pity > 8) { // if 4-star pity hits, automatic 4-star
                        single4star()
                    }
                    else { // 3-star items
                        const embed = new MessageEmbed()
                        .setTitle(star + star + star)
                        .setDescription(random3star(star3))
                        .setColor(color)
                        .setTimestamp()
                        receivedMessage.channel.send({ embeds: [embed]})
                        star4pity += 1
                        star5pity += 1
                    }
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}