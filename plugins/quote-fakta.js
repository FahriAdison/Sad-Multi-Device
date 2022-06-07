/**
diremake oleh https://github.com/unknowkzr

**/

import fetch from 'node-fetch'


let handler  = async (m, { conn, command }) => {
            await fetch(`https://raw.githubusercontent.com/HasamiAini/Bot_Takagisan/main/faktanya.txt`)
            .then(res => res.text())
            .then(body => {
                let splitnix = body.split('\n')
                let randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
                conn.sendButton(m.chat, randomnix, wm,[['NEXT', `/${command}`]], m)
  })
} 
handler.help = ['fakta']
handler.tags = ['quotes']
handler.command = /^(fakta|faktaunik)$/i

handler.fail = null

export default handler 