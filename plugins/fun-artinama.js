import { artinama } from '@bochilteam/scraper'
//let jimp = require('jimp')
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    //let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!text) throw `Use example ${usedPrefix}${command} Masukan Nama Mu`
    const result = await artinama(text)
    
await conn.sendButton(m.chat, result, wm, [['Donasi', '.donasi']], m)
}

handler.help = ['artinama'].map(v => v + ' <Apa>')
handler.tags = ['fun']
handler.command = /^(artinama)$/i

export default handler
