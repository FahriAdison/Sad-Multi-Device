import fs from 'fs'
 let handler  = async (m, { conn, usedPrefix: _p }) => {
const {
    MessageType,
    Mimetype
} = (await import("@adiwajshing/baileys")).default;
const anu = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    locationMessage: {
                    name: 'Ｓａｙ Ｕｗｕ',
                    jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
                          }
                        }
                      }
conn.sendMessage(m.chat,{ text: wm}, {quoted: anu})
}


handler.help = ['loc']

handler.tags = ['ᴘᴇɴᴅɪɴɢ sᴛᴜғғ']

handler.command = /^loc$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true

export default handler
