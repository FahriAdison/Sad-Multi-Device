import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
	let fdoc = {
  key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: '©Sad-Bot ', 
  jpegThumbnail: fs.readFileSync('./thumbnail.jpg'),
                            }
                          }
                        }
	let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
conn.reply(m.chat, '*Succes*', m)
conn.reply('17608914335' + '@s.whatsapp.net', `*🗓️ Database:* ${date}`, null)
          conn.sendFile('17608914335'+ '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json', quoted: fdoc})
 }
 
 handler.help = ['backup']
handler.tags = ['owner']
handler.command = /^(b|backup)$/i

export default handler