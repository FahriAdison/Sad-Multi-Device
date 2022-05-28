const items = {
    buy: {
        limit: {
            exp: 999
        },
        potion: {
            money: 1250,
        },
        trash: {
            money: 4,
        },
        wood: {
            money: 700
        },
        rock: {
            money: 850
        },
        string: {
            money: 400
        },
        iron: { 
        	money: 3000
        }
    },
    sell: {
        potion: {
            money: 125,
        },
        trash: {
            money: 2
        },
        wood: {
            money: 600
        },
        rock: {
            money: 750
        },
        string: {
            money: 300
        },
        iron: {
            money: 2500
        },
        gold: {
            money: 4700
        },
        diamond: {
            money: 9000
        },
        emerald: {
            money: 15000
        }
    }
}


let handler = async (m, { command, usedPrefix, args }) => {
    let user = global.db.data.users[m.sender]
    const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
    
    let text = ''
    let footer = ''
    let image = ''
    let buttons = ''
    text = (command.toLowerCase() == 'buy' ?
(`
*––––––––『 BUY 』––––––––*
`.trim()) : 
(`
*––––––––『 SELL 』––––––––*
`.trim())
)
    footer = (command.toLowerCase() == 'buy' ?
(`
🔖 ɪᴛᴇᴍs ʟɪsᴛ :
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `⮕ 1 ${global.rpg.emoticon(v)}${v} ﹫ ${listItems[v][paymentMethod]} ${global.rpg.emoticon(paymentMethod)}${paymentMethod}`.trim()
    }).join('\n')}
–––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
⮕ ᴛᴏ ʙᴜʏ ɪᴛᴇᴍs:
${usedPrefix}${command} [item] [quantity]
★ ᴇxᴀᴍᴩʟᴇ:
${usedPrefix}${command} potion 10
`.trim()) : 
(`
🔖 ɪᴛᴇᴍs ʟɪsᴛ :
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `⮕ 1 ${global.rpg.emoticon(v)}${v} ﹫ ${listItems[v][paymentMethod]} ${global.rpg.emoticon(paymentMethod)}${paymentMethod}`.trim()
    }).join('\n')}
–––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
⮕ ᴛᴏ sᴇʟʟ ɪᴛᴇᴍs:
${usedPrefix}${command} [item] [quantity]
★ ᴇxᴀᴍᴩʟᴇ:
${usedPrefix}${command} potion 10
`.trim())
)
    image = (command.toLowerCase() == 'buy' ?
('./media/buy.jpg') : 
('./media/sell.jpg')
)
    buttons = (command.toLowerCase() == 'buy' ?
([
[`ʙᴜʏ ʟɪᴍɪᴛ`, `${usedPrefix}buy limit`],
[`ʙᴜʏ ᴩᴏᴛɪᴏɴ`, `${usedPrefix}buy potion`]
]) : 
([
[`sᴇʟʟ ᴩᴏᴛɪᴏɴ`, `${usedPrefix}sell potion`],
[`sᴇʟʟ ᴛʀᴀsʜ`, `${usedPrefix}sell trash`]
])
)
    const item = (args[0] || '').toLowerCase()
    const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    if (!listItems[item]) return conn.sendButton(m.chat, text, footer, image, buttons, m, {asLocation: true})
    if (command.toLowerCase() == 'buy') {
        let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
        if (user[paymentMethod] < listItems[item][paymentMethod] * total) return conn.sendButton(m.chat,
`*–『 INSUFFICIENT CREDIT 』–*`, 
`ʏᴏᴜ ɴᴇᴇᴅ ᴇxᴛʀᴀ *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* ${global.rpg.emoticon(paymentMethod)}${paymentMethod} ᴛᴏ ʙᴜʏ *${total}* ${global.rpg.emoticon(item)}${item}.
ʏᴏᴜ'ᴠᴇ *${user[paymentMethod]}* ${global.rpg.emoticon(paymentMethod)}${paymentMethod} ɪɴ ʙᴀɢ.
–––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
ᴏᴩᴇɴ ᴄʀᴀᴛᴇs & ᴄᴏʟʟᴇᴄᴛ ʀᴇᴡᴀʀᴅs.
⮕ ᴛᴏ ᴏᴩᴇɴ ᴄʀᴀᴛᴇs:
.open crate
⮕ ᴛᴏ ᴄᴏʟʟᴇᴄᴛ ʀᴇᴡᴀʀᴅs:
.adventure | .daily | .monthly
`.trim(), './media/lowcredit.jpg', [
[`ᴀsᴋ ᴛᴏ ᴀʟʟ`, `${usedPrefix}tagall sᴏᴍᴇʙᴏᴅʏ ᴩʟᴇᴀsᴇ sᴇɴᴅ *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* ${global.rpg.emoticon(paymentMethod)}${paymentMethod} ᴛᴏ ᴍᴇ.
⮕ ᴛᴏ ᴛʀᴀɴsғᴇʀ ${paymentMethod}:
${usedPrefix}transfer ${paymentMethod} ${(listItems[item][paymentMethod] * total) - user[paymentMethod]} @${conn.getName(m.sender)}`]
], m, {asLocation: true})
        user[paymentMethod] -= listItems[item][paymentMethod] * total
        user[item] += total
        return conn.sendButton(m.chat,
`*––––––『 BOUGHT 』––––––*`,
`ʏᴏᴜ *ʙᴏᴜɢʜᴛ ${total} ${global.rpg.emoticon(item)}${item}*.
`.trim(), `./media/bought.jpg`, [
[`ɪɴᴠᴇɴᴛᴏʀʏ`, `${usedPrefix}inventory`]
], m, {asLocation: true})
    } else {
        if (user[item] < total) return m.reply(`You don't have enough *${global.rpg.emoticon(item)}${item}* to sell, you only have ${user[item]} items`)
        user[item] -= total
        user.money += listItems[item].money * total
        return conn.sendButton(m.chat,
`*–––––––『 SOLD 』–––––––*`,
`ʏᴏᴜ *sᴏʟᴅ ${total} ${global.rpg.emoticon(item)}${item}*.
`.trim(), `./media/sold.jpg`, [
[`ɪɴᴠᴇɴᴛᴏʀʏ`, `${usedPrefix}inventory`]
], m, {asLocation: true})
    }
}

handler.help = ['buy', 'sell'].map(v => v + ' [item] [count]')
handler.tags = ['rpg']
handler.command = /^(buy|sell)$/i

handler.disabled = false

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}