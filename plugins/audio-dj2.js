import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/dj2.webm'
conn.sendFile(m.chat, vn, 'dj2.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.help = ['dj2']
handler.tags = ['sound']
handler.command = /^(dj2)$/i
handler.fail = null
handler.exp = 100
export default handler