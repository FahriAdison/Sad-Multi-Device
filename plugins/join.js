let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
import fs from 'fs'

let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
let frep = { contextInfo: { externalAdReply: {title: wm, body: 'Simple Bot Esm', sourceUrl: sgc, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let imgr = flaaa.getRandom()

    let [_, code, expired] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let res = await conn.groupAcceptInvite(code)
    if (!res) throw res.toString()
    let name = await conn.getName(res).catch(_ => null)
    expired = Math.floor(Math.min(5, Math.max(999, isOwner ? expired && expired.isNumber() ? parseInt(expired) : 0 : 3)))
    let caption = `*Berhasil join grup* ${name || res} ${expired ? `selama *${expired}* hari` : ''}\n*Jangan lupa baca rules ngap!*`
    await conn.sendButton(m.chat, caption, wm, imgr, [
                ['Rules', `${usedPrefix}rules`]
            ], m, frep)
            
    let chats = global.db.data.chats[res]
    if (!chats) chats = global.db.data.chats[res] = {}
    if (expired) chats.expired = +new Date() + expired * 1000 * 60 * 60 * 24
}
handler.command = /^join$/i
handler.premium = false
export default handler
