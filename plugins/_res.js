import fetch from "node-fetch"
import { readFileSync } from "fs"



export async function all(m) {

  //Kalo mau menggokil pake ini
  let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')

  let stc = readFileSync('./ress.webp')

if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return

    // ketika ditag 
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.sendMessage(m.chat, { sticker : stc, thumbnail: await( await fetch(pp)).buffer() , contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/17608914335',
title: '「 ❔ 」',
body: wm,
sourceUrl: 'http://github.com/FahriAdison', thumbnail: await( await fetch(pp)).buffer()
 //Kalo mau ada pp dari sender/pengirimnya
 //Kalo mau ringan pake global.thumb                                                                                                              
                                                                                                               
          //thumbnail: await( await fetch(pp)).buffer()
  }
 }}, { quoted: m })
          
        }
    } catch (e) {
        return
    }

                                
}
