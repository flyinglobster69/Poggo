var star5pity = 0
var star4pity = 0

module.exports = {
    checkWish: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')

        const primogem = 'https://static.wikia.nocookie.net/gensin-impact/images/d/d4/Item_Primogem.png'

        const venticard = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Venti_Card.png'
        const childecard = 'https://static.wikia.nocookie.net/gensin-impact/images/3/3c/Tartaglia_Card.png'
        const kleecard = 'https://static.wikia.nocookie.net/gensin-impact/images/d/d2/Klee_Card.png'
        const albedocard = 'https://static.wikia.nocookie.net/gensin-impact/images/0/01/Albedo_Card.png'
        const ganyucard = 'https://static.wikia.nocookie.net/gensin-impact/images/2/24/Ganyu_Card.png'
        const xiaocard = 'https://static.wikia.nocookie.net/gensin-impact/images/7/7f/Xiao_Card.png'
        const hutaocard = 'https://static.wikia.nocookie.net/gensin-impact/images/8/88/Hu_Tao_Card.png'
        const zhonglicard = 'https://static.wikia.nocookie.net/gensin-impact/images/7/7b/Zhongli_Card.png'
        const eulacard = 'https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Eula_Card.png'
        const kazuhacard = 'https://static.wikia.nocookie.net/gensin-impact/images/8/81/Kaedehara_Kazuha_Card.png'
        const ayakacard = 'https://static.wikia.nocookie.net/gensin-impact/images/0/01/Kamisato_Ayaka_Card.png'
        const yoimiyacard = 'https://static.wikia.nocookie.net/gensin-impact/images/3/36/Yoimiya_Card.png'
        const keqingcard = 'https://static.wikia.nocookie.net/gensin-impact/images/6/64/Keqing_Card.png'
        const monacard = 'https://static.wikia.nocookie.net/gensin-impact/images/9/9f/Mona_Card.png'
        const diluccard = 'https://static.wikia.nocookie.net/gensin-impact/images/e/e7/Diluc_Card.png'
        const jeancard = 'https://static.wikia.nocookie.net/gensin-impact/images/a/a8/Jean_Card.png'
        const qiqicard = 'https://static.wikia.nocookie.net/gensin-impact/images/0/03/Qiqi_Card.png'
        const eicard = 'https://static.wikia.nocookie.net/gensin-impact/images/6/60/Raiden_Shogun_Card.png'
        const kokomicard = 'https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Sangonomiya_Kokomi_Card.png'
        const ittocard = 'https://static.wikia.nocookie.net/gensin-impact/images/9/9d/Arataki_Itto_Card.png'
        const shenhecard = 'https://static.wikia.nocookie.net/gensin-impact/images/7/7f/Shenhe_Card.png'
        const yaecard = 'https://static.wikia.nocookie.net/gensin-impact/images/8/89/Yae_Miko_Card.png'
        const ayatocard = 'https://static.wikia.nocookie.net/gensin-impact/images/1/12/Kamisato_Ayato_Card.png'
        const yelancard = 'https://static.wikia.nocookie.net/gensin-impact/images/f/fd/Yelan_Card.png'
        const tighnaricard = 'https://static.wikia.nocookie.net/gensin-impact/images/5/5c/Tighnari_Card.png'
        const cynocard = 'https://static.wikia.nocookie.net/gensin-impact/images/2/27/Cyno_Card.png'
        const niloucard = 'https://static.wikia.nocookie.net/gensin-impact/images/6/67/Nilou_Card.png'
        const nahidacard = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Nahida_Card.png'
        const scaramouchecard = 'https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Wanderer_Card.png'
        const alhaithamcard = 'https://static.wikia.nocookie.net/gensin-impact/images/7/70/Alhaitham_Card.png'
        const dehyacard = 'https://static.wikia.nocookie.net/gensin-impact/images/d/de/Dehya_Card.png'
        const baizhucard = 'https://static.wikia.nocookie.net/gensin-impact/images/a/ae/Baizhu_Card.png'

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
        const cyno = ['Cyno', cynocard, electro]
        const nilou = ['Nilou', niloucard, hydro]
        const nahida = ['Nahida', nahidacard, dendro]
        const scaramouche = ['The Wanderer', scaramouchecard, anemo]
        const alhaitham = ['Alhaitham', alhaithamcard, dendro]
        const dehya = ['Dehya', dehyacard, pyro]
        const baizhu = ['Baizhu', baizhucard, dendro]


        const star5 = [venti, childe, klee, albedo, ganyu, xiao, hutao, zhongli,
            eula, kazuha, ayaka, yoimiya, keqing, mona, qiqi, diluc, jean, ei, 
            kokomi, itto, shenhe, yae, ayato, yelan, tighnari, cyno, nilou, nahida, 
            scaramouche, alhaitham, dehya, baizhu, // 5-star characters
            'Amos\' Bow', 'Skyward Harp', 'Lost Prayer to the Sacred Winds', 'Skyward Atlas', 
            'Kamisato Ayato', 'Primoridal Jade Winged-Spear', 'Skyward Spine', 'Wolf\'s Gravestone', 
            'Skyward Pride', 'Skyward Blade', 'Aquila Favonia', 'Polar Star', 'Thundering Pulse',
            'Elegy for the End', 'Memory of Dust', 'Everlasting Moonglow', 'Kagura\'s Verity', 
            'The Unforged', 'Song of Broken Pines', 'Redhorn Stonethresher', 'Engulfing Lightning', 
            'Calamity Queller', 'Staff of Homa', 'Vortex Vanquisher', 'Mistsplitter Reforged', 
            'Summit Shaper', 'Freedom-Sworn', 'Primordial Jade Cutter', 'Haran Geppaku Futsu', 
            'Aqua Simulacra', 'The Hunter\'s Path', 'Staff of the Scarlet Sands', 'Key of Khaj-Nisut',
            'A Thousand Floating Dreams', 'Alaya', 'Light of Foliar Incision', 'Beacon of the Reed Sea', 
            'Jadefall\'s Splendor'] // 5-star weapons

        const star4 = ['Yanfei', 'Rosaria', 'Xinyan', 'Sucrose', 'Diona', 'Chongyun', 'Noelle', 
            'Bennett', 'Fischl', 'Ningguang', 'Xingqiu', 'Beidou', 'Xiangling', 'Amber', 'Razor', 
            'Kaeya', 'Barbara', 'Lisa', 'Sayu', 'Kujou Sara', 'Thoma', 'Gorou', 'Yun Jin', 'Kuki Shinobu', 
            'Collei', 'Dori', 'Layla', 'Faruzan', 'Kaveh', 'Candace', 'Kirara', // 4-star characters
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