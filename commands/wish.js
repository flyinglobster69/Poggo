var star5pity = 0
var star4pity = 0

module.exports = {
    checkWish: function(receivedMessage) {

    const {MessageAttachment, MessageEmbed} = require('discord.js')
    const venti = new MessageAttachment('./character5star/venti.jpg') // connect 5-star character profiles
    const tartaglia = new MessageAttachment('./character5star/tartaglia.jpg')
    const klee = new MessageAttachment('./character5star/klee.jpg')
    const albedo = new MessageAttachment('./character5star/albedo.jpg')
    const ganyu = new MessageAttachment('./character5star/ganyu.jpg')
    const xiao = new MessageAttachment('./character5star/xiao.jpg')
    const hutao = new MessageAttachment('./character5star/hutao.jpg')
    const eula = new MessageAttachment('./character5star/eula.jpg')
    const zhongli = new MessageAttachment('./character5star/zhongli.jpg')
    const keqing = new MessageAttachment('./character5star/keqing.jpg')
    const mona = new MessageAttachment('./character5star/mona.jpg')
    const diluc = new MessageAttachment('./character5star/diluc.jpg')
    const jean = new MessageAttachment('./character5star/jean.jpg')
    const qiqi = new MessageAttachment('./character5star/qiqi.jpg')
    const kazuha = new MessageAttachment('./character5star/kazuha.jpg')
    const ayaka = new MessageAttachment('./character5star/ayaka.jpg')
    const yoimiya = new MessageAttachment('./character5star/yoimiya.jpg')
    const pallad = new MessageAttachment('./character5star/ricrol.gif')

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
                const random = Math.floor(Math.random() * 90) // generates a random number between 1-90
                if (random < 2) { // if random number < 6, random 5-star
                    console.log("Gold!")
                    var star5 = ["Venti", "Tartaglia", "Klee", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Zhongli", "Eula", "Kazuha", "Ayaka", "Yoimiya", "Keqing", "Mona", "Qiqi", "Diluc", "Jean", "Amos' Bow", "Skyward Harp", "Lost Prayer to the Sacred Winds", "Skyward Atlas", "Primoridal Jade Winged-Spear", "Skyward Spine", "Wolf's Gravestone", "Skyward Pride", "Skyward Blade", "Aquila Favonia"] // List of 5-star characters and weapons
                    randompull = random5star(star5)
                    if (randompull == "Venti") {
                        receivedMessage.channel.send(venti)
                    }
                    else if (randompull == "Tartaglia") {
                        receivedMessage.channel.send(tartaglia)
                    }
                    else if (randompull == "Klee") {
                        receivedMessage.channel.send(klee)
                    }
                    else if (randompull == "Albedo") {
                        receivedMessage.channel.send(albedo)
                    }
                    else if (randompull == "Ganyu") {
                        receivedMessage.channel.send(ganyu)
                    }
                    else if (randompull == "Xiao") {
                        receivedMessage.channel.send(xiao)
                    }
                    else if (randompull == "Hu Tao") {
                        receivedMessage.channel.send(hutao)
                    }
                    else if (randompull == "Zhongli") {
                        receivedMessage.channel.send(zhongli)
                    }
                    else if (randompull == "Eula") {
                        receivedMessage.channel.send(eula)
                    }
                    else if (randompull == "Kazuha") {
                        receivedMessage.channel.send(kazuha)
                    }
                    else if (randompull == "Ayaka") {
                        receivedMessage.channel.send(ayaka)
                    }
                    else if (randompull == "Yoimiya") {
                        receivedMessage.channel.send(yoimiya)
                    }
                    else if (randompull == "Keqing") {
                        receivedMessage.channel.send(keqing)
                    }
                    else if (randompull == "Mona") {
                        receivedMessage.channel.send(mona)
                    }
                    else if (randompull == "Diluc") {
                        receivedMessage.channel.send(diluc)
                    }
                    else if (randompull == "Jean") {
                        receivedMessage.channel.send(jean)
                    }
                    else if (randompull == "Qiqi") {
                        receivedMessage.channel.send(qiqi)
                    }
                    const embed = new MessageEmbed()
                    .setTitle(star + star + star + star + star)
                    .setDescription(randompull)
                    receivedMessage.channel.send(embed)
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
                        receivedMessage.channel.send(venti)
                    }
                    else if (randompull == "Tartaglia") {
                        receivedMessage.channel.send(tartaglia)
                    }
                    else if (randompull == "Klee") {
                        receivedMessage.channel.send(klee)
                    }
                    else if (randompull == "Albedo") {
                        receivedMessage.channel.send(albedo)
                    }
                    else if (randompull == "Ganyu") {
                        receivedMessage.channel.send(ganyu)
                    }
                    else if (randompull == "Xiao") {
                        receivedMessage.channel.send(xiao)
                    }
                    else if (randompull == "Hu Tao") {
                        receivedMessage.channel.send(hutao)
                    }
                    else if (randompull == "Zhongli") {
                        receivedMessage.channel.send(zhongli)
                    }
                    else if (randompull == "Eula") {
                        receivedMessage.channel.send(eula)
                    }
                    else if (randompull == "Kazuha") {
                        receivedMessage.channel.send(kazuha)
                    }
                    else if (randompull == "Ayaka") {
                        receivedMessage.channel.send(ayaka)
                    }
                    else if (randompull == "Yoimiya") {
                        receivedMessage.channel.send(yoimiya)
                    }
                    else if (randompull == "Keqing") {
                        receivedMessage.channel.send(keqing)
                    }
                    else if (randompull == "Mona") {
                        receivedMessage.channel.send(mona)
                    }
                    else if (randompull == "Diluc") {
                        receivedMessage.channel.send(diluc)
                    }
                    else if (randompull == "Jean") {
                        receivedMessage.channel.send(jean)
                    }
                    else if (randompull == "Qiqi") {
                        receivedMessage.channel.send(qiqi)
                    }
                    const embed = new MessageEmbed()
                    .setTitle(star + star + star + star + star)
                    .setDescription(randompull)
                    // .setImage(character)
                    receivedMessage.channel.send(embed)
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
                else if (random > 78) { // if random number > 77, random 4-star
                    console.log("Purple!")
                    var star4 = ["Yanfei", "Rosaria", "Xinyan", "Sucrose", "Diona", "Chongyun", "Noelle", "Bennett", "Fischl", "Ningguang", "Xingqiu", "Beidou", "Xiangling", "Amber", "Razor", "Kaeya", "Barbara", "Lisa", "Rust", "Sacrificial Bow", "The Stringless", "Favonius Warbow", "Eye of Perception", "Sacrificial Fragments", "The Widsith", "Favonius Codex", "Favonius Lance", "Dragon's Bane", "Rainslasher", "Sacrificial Greatsword", "The Bell", "Favonius Greatsword", "Lion's Roar", "Sacrificial Sword", "The Flute", "Favonius Sword"] // List of 4-star characters and weapons
                    receivedMessage.channel.send(star + star + star + star + " " + random4star(star4))
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
        // value of 'found' will be returned in bot.js
        return found
    }
}