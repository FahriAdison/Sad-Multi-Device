let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw "tag someone"
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'demote')
m.reply(`@${users.split("@")[0]} is now member`)
}
handler.help = ['demote', '↓'].map(v => v + ' @user')
handler.tags = ['group']
handler.command = /^(demote|↓)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler