import { circle } from "canvacord"

let handler = async (m, { conn, args, usedPrefix, command }) => {

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact.png')

circle(pp).then((p) => conn.sendFile(m.chat, p, 'pp.jpg', 'done\n Made with canvas', m)
}
handler.help = ['circle'].map(v => v + ' <tag>')
handler.tags = ['maker']

handler.command = /^(cir(cle)?(le)?(cele)?(kel)?)$/i
export default handler