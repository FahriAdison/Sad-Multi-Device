let handler = async (m, { conn, args }) => {
    if (!args || !args[0]) throw 'Yang mau di Unban siapa?'
    let mention = m.mentionedJid[0] || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
    if (!mention) throw 'Tag salah satu lah'
    if (!(mention in global.db.data.users)) throw 'User tidak terdaftar dalam DATABASE!!'
    let user = global.db.data.users[mention]
    if (!user.banned) throw 'User tidak Terbanned!!'
    user.banned = false
    user.BannedReason = ''
    user.warn = 0
    await m.reply('Berhasil unbanned!!')
    m.reply('Kamu telah di Unbanned!!', mention)
}
handler.help = ['unban']
handler.tags = ['owner']
handler.command = /^unban(user)?$/i
handler.owner = true
export default handler