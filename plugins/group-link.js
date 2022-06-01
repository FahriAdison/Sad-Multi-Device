import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) throw 'Tidak ada Group Metadata.'
    if (!('participants' in groupMetadata)) throw 'Participants tidak terdaftar.'
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!me) throw 'Nomor bot tidak ada di group itu.'
    if (!me.admin) throw 'Nomor bot bukan admin di group itu.'
    m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
}
handler.help = ['linkgroup <jid>']
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i
handler.group = true


export default handler