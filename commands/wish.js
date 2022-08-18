var star5pity = 0
var star4pity = 0

module.exports = {
    checkWish: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')


        const primogem = 'https://th.bing.com/th/id/R.7384eddb3aa0b07801ada263123ec336?rik=Gr7ZaVnIfXjK%2bQ&pid=ImgRaw&r=0'

        const venticard = 'https://static.wikia.nocookie.net/gensin-impact/images/7/76/Character_Venti_Card.jpg'
        const childecard = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Character_Tartaglia_Card.png'
        const kleecard = 'https://static.wikia.nocookie.net/gensin-impact/images/d/dd/Character_Klee_Card.png'
        const albedocard = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f8/Character_Albedo_Card.png'
        const ganyucard = 'https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Character_Ganyu_Card.png'
        const xiaocard = 'https://static.wikia.nocookie.net/gensin-impact/images/8/8e/Character_Xiao_Card.png'
        const hutaocard = 'https://static.wikia.nocookie.net/gensin-impact/images/2/22/Character_Hu_Tao_Card.jpg'
        const zhonglicard = 'https://static.wikia.nocookie.net/gensin-impact/images/7/79/Character_Zhongli_Card.png'
        const eulacard = 'https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Character_Eula_Card.png'
        const kazuhacard = 'https://static.wikia.nocookie.net/gensin-impact/images/2/2d/Character_Kaedehara_Kazuha_Card.png'
        const ayakacard = 'https://static.wikia.nocookie.net/gensin-impact/images/3/34/Character_Kamisato_Ayaka_Card.png'
        const yoimiyacard = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Character_Yoimiya_Card.png'
        const keqingcard = 'https://static.wikia.nocookie.net/gensin-impact/images/b/bd/Character_Keqing_Card.png'
        const monacard = 'https://static.wikia.nocookie.net/gensin-impact/images/6/69/Character_Mona_Card.jpg'
        const diluccard = 'https://static.wikia.nocookie.net/gensin-impact/images/4/45/Character_Diluc_Card.jpg'
        const jeancard = 'https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Character_Jean_Card.jpg'
        const qiqicard = 'https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Character_Qiqi_Card.jpg'
        const eicard = 'https://static.wikia.nocookie.net/gensin-impact/images/9/97/Character_Raiden_Shogun_Card.png'
        const kokomicard = 'https://static.wikia.nocookie.net/gensin-impact/images/8/8c/Character_Sangonomiya_Kokomi_Card.png'
        const ittocard = 'https://static.wikia.nocookie.net/gensin-impact/images/3/37/Character_Arataki_Itto_Card.png'
        const shenhecard = 'https://static.wikia.nocookie.net/gensin-impact/images/8/83/Character_Shenhe_Card.png'
        const yaecard = 'https://static.wikia.nocookie.net/gensin-impact/images/2/2a/Character_Yae_Miko_Card.png'
        const ayatocard = 'https://static.wikia.nocookie.net/gensin-impact/images/2/22/Character_Kamisato_Ayato_Card.png'
        const yelancard = 'https://static.wikia.nocookie.net/gensin-impact/images/9/98/Character_Yelan_Card.png'
        const tighnaricard = 'https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Character_Tighnari_Card.png'

        var color = '#191a36'
        const anemo = '#4cc285'
        const geo = '#ecc60d'
        const pyro = '#da5d31'
        const hydro = '#569cd0'
        const cryo = '#b4dcde'
        const electro = '#965daa'
        const dendro = '#9bc800'

        const venti = ['Venti', venticard, anemo]
        const childe = ['Tartaglia', childecard, hydro]
        const klee = ['Klee', kleecard, pyro]
        const albedo = ['Albedo', albedocard, geo]
        const ganyu = ['Ganyu', ganyucard, cryo]
        const xiao = ['Xiao', xiaocard, anemo]
        const hutao = ['Hu Tao', hutaocard, pyro]
        const zhongli = ['Zhongli', zhonglicard, geo]
        const eula = ['Eula', eulacard, cryo]
        const kazuha = ['Kaedehara Kazuha', kazuhacard, anemo]
        const ayaka = ['Kamisato Ayaka', ayakacard, cryo]
        const yoimiya = ['Yoimiya', yoimiyacard, pyro]
        const keqing = ['Keqing', keqingcard, electro]
        const mona = ['Mona', monacard, hydro]
        const diluc = ['Diluc', diluccard, pyro]
        const jean = ['Jean', jeancard, anemo]
        const qiqi = ['Qiqi', qiqicard, cryo]
        const ei = ['Raiden Shogun', eicard, electro]
        const kokomi = ['Sangonomiya Kokomi', kokomicard, hydro]
        const itto = ['Arataki Itto', ittocard, geo]
        const shenhe = ['Shenhe', shenhecard, cryo]
        const yae = ['Yae Miko', yaecard, electro]
        const ayato = ['Kamisato Ayato', ayatocard, hydro]
        const yelan = ['Yelan', yelancard, hydro]
        const tighnari = ['Tighnari', tighnaricard, dendro]

        const star5 = [venti, childe, klee, albedo, ganyu, xiao, hutao, zhongli,
            eula, kazuha, ayaka, yoimiya, keqing, mona, qiqi, diluc,
            jean, ei, kokomi, itto, shenhe, yae,
            ayato, yelan, tighnari, // 5-star characters
            'Amos\' Bow', 'Skyward Harp', 'Lost Prayer to the Sacred Winds', 'Skyward Atlas', 
            'Kamisato Ayato', 'Primoridal Jade Winged-Spear', 'Skyward Spine', 'Wolf\'s Gravestone', 
            'Skyward Pride', 'Skyward Blade', 'Aquila Favonia', 'Polar Star', 'Thundering Pulse',
            'Elegy for the End', 'Memory of Dust', 'Everlasting Moonglow', 'Kagura\'s Verity', 
            'The Unforged', 'Song of Broken Pines', 'Redhorn Stonethresher', 'Engulfing Lightning', 
            'Calamity Queller', 'Staff of Homa', 'Vortex Vanquisher', 'Mistsplitter Reforged', 
            'Summit Shaper', 'Freedom-Sworn', 'Primordial Jade Cutter', 'Haran Geppaku Futsu', 
            'Aqua Simulacra'] // 5-star weapons

        const star4 = ['Yanfei', 'Rosaria', 'Xinyan', 'Sucrose', 'Diona', 'Chongyun', 'Noelle', 
            'Bennett', 'Fischl', 'Ningguang', 'Xingqiu', 'Beidou', 'Xiangling', 'Amber', 'Razor', 
            'Kaeya', 'Barbara', 'Lisa', 'Sayu', 'Kujou Sara', 'Thoma', 'Gorou', 'Yun Jin', 'Kuki Shinobu', 
            'Collei', 'Dori', // 4-star characters
            'Rust', 'Sacrificial Bow', 'The Stringless', 'Favonius Warbow', 'Eye of Perception', 
            'Sacrificial Fragments', 'The Widsith', 'Favonius Codex', 'Favonius Lance', 'Dragon\'s Bane', 
            'Rainslasher', 'Sacrificial Greatsword', 'The Bell', 'Favonius Greatsword', 'Lion\'s Roar', 
            'Sacrificial Sword', 'The Flute', 'Favonius Sword', 'Alley Hunter', 'The Viridescent Hunt', 
            'Royal Bow', 'Predator', 'Mouun\'s Moon', 'Mitternachts Waltz', 'Hamayumi', 
            'Prototype Crescent', 'Compound Bow', 'Blackcliff Warbow', 'Windblume Ode', 'Wine and Song', 
            'Solar Pearl', 'Royal Grimore', 'Oathsworn Eye', 'Mappa Mare', 'Hakushin Ring', 'Frostbearer',
            'Dodoco Tales', 'Akuoumaru', 'Royal Greatsword', 'Whiteblind', 'Snow Tombed Starsilver', 
            'Katsuragikiri Nagamasa', 'Serpent Spine', 'Blackcliff Slasher', 'Prototype Archaic',
            'Luxurious Sea-Lord', 'Lithic Blade', 'Prototype Starglitter', 'Lithic Spear', 
            'Kitain Cross Spear', '"The Catch"', 'Dragonspine Spear', 'Deathmatch', 'Crescent Pike', 
            'Blackcliff Pole', 'Wavebreaker\'s Fin', 'Royal Spear', 'The Black Sword', 'The Alley Flash',
            'Sword of Descension', 'Royal Longsword', 'Prototype Rancour', 'Amenoma Kageuchi', 
            'Iron Sting', 'Festering Desire', 'Cinnebar Spindle', 'Blackcliff Sword'] // 4-star weapons

        const star3 = ['Slingshot', 'Sharpshooter\'s Oath', 'Raven Bow', 'Emerald Orb', 
            'Thrilling Tales of Dragon Slayers', 'Magic Guide', 'Black Tassel', 'Debate Club', 
            'Bloodstained Greatsword', 'Ferrous Shadow', 'Skyrider Sword', 'Harbringer of Dawn', 
            'Cool Steel'] // List of 3-star weapons

        const footer = 'Official art from Genshin Fandom Wiki'

        function random3star(star3) {
            return star3[Math.floor(Math.random() * star3.length)]
        }
        function random4star(star4) {
            return star4[Math.floor(Math.random() * star4.length)]
        }
        function random5star(star5) {
            return star5[Math.floor(Math.random() * star5.length)]
        }

        function single5starinfo(char) {
            if(typeof(char) == 'string') {
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(random5star(star5))
                .setImage('https://media.tenor.com/images/34c6064f32fbe1b5ace18ac243546fac/tenor.gif')
                .setColor(color)
                .setThumbnail(primogem)
                .setTimestamp()
                .setFooter({ text: footer})
                receivedMessage.reply({ embeds: [embed]})
            }
            else {
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(char[0])
                .setImage(char[1])
                .setColor(char[2])
                .setThumbnail(primogem)
                .setTimestamp()
                .setFooter({ text: footer})
                receivedMessage.reply({ embeds: [embed]})
            }
        }
        function single5star() {
            single5starinfo(random5star(star5))

            star5pity = 0
            star4pity += 1
        }

        function single4star() {
            const embed = new MessageEmbed()
            .setTitle(purplestar)
            .setDescription(random4star(star4))
            .setColor('#800080')
            .setThumbnail(primogem)
            .setTimestamp()
            receivedMessage.reply({ embeds: [embed]})
            star4pity = 0
            star5pity += 1
        }
        function ten5star() {
            char = random5star(star5)
            charimage = 'https://media.tenor.com/images/3e2ccd3ef1a57a27d5b17629071c00f3/tenor.gif'
            if (typeof(char) == 'string') {
                item = goldstar + char
            }
            else {
                item = `${goldstar} ${char[0]}`
                charimage = char[1]
                color = char[2]
            }
            star5pity = 0
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

        var items = [] // Init

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
                                    // tenWishHistory(randompull)
                                    star5pity = 0
                                    star4pity++
                                    wishCount++
                                }
                                else {
                                    ten5star()
                                    items[wishCount] = item
                                    // tenWishHistory(randompull)
                                    star5pity = 0
                                    star4pity++
                                    wishCount++
                                }
                            }
                            else {
                                ten5star()
                                items[wishCount] = item
                                // tenWishHistory(randompull)
                                star5pity = 0
                                star4pity++
                                wishCount++
                            }
                        }
                        else if (star5pity > 88) {
                            ten5star()
                            items[wishCount] = item
                            // tenWishHistory(randompull)
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
                    .setFooter({ text: footer})
                    receivedMessage.reply({ embeds: [embed]})
                }
                // else if (arguments == 'history') {
                //     fs.readFile(`./wishhistory/wishhistory${parseInt(receivedMessage.author.id).toString()}.txt`, 'utf8', function(error, data) { // read the value in the pog count file
                //         if (error) { // if file does not exist
                //             const embed = new MessageEmbed()
                //             .setTitle(`${receivedMessage.author.username}'s 5-star Wish History`)
                //             .setDescription('This user has no wish history.')
                //             .setThumbnail('https://c.tenor.com/v6uW6qb-ukcAAAAi/qiqi-fallen.gif')
                //             .setColor(color)
                //             .setTimestamp()
                //             receivedMessage.reply({ embeds: [embed]})
                //         }
                //         else { // send file
                //             const embed = new MessageEmbed()
                //             .setTitle(`${receivedMessage.author.username}'s 5-star Wish History`)
                //             .setDescription('See attached wish history file with your Discord user ID (it may delay sending)')
                //             .setThumbnail(primogem)
                //             .setColor(color)
                //             .attachFiles(`./wishhistory/wishhistory${parseInt(receivedMessage.author.id).toString()}.txt`)
                //             .setTimestamp()
                //             receivedMessage.reply({ embeds: [embed]})
                //         }
                //     })
                // }
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
                        .setFooter('lmao noob')
                        receivedMessage.reply({ embeds: [embed]})
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
                        receivedMessage.reply({ embeds: [embed]})
                        star4pity += 1
                        star5pity += 1
                    }
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}