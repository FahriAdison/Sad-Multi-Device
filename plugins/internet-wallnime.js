import hmtai from "hmtai"
let handler = async (m, { conn }) => {
await m.reply('Wait...')
let img = hmtai.mobileWallpaper();
var capt = `🐦`
conn.sendButton(m.chat, capt, wm, img, [['Wallnime', `.wallnime`]], m)
}

handler.help = ['wallnime']
handler.tags = ['internet']

handler.command = /^(wallnime|wallhp)$/i

handler.group = true

export default handler