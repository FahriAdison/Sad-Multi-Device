import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, {text, usedPrefix, command, conn}) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: 'Simple Bot Esm', sourceUrl: sgc, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}}
  if (!text) throw `Contoh penggunaan ${usedPrefix}${command} Minecraft`
  
  if (command == 'apkdone') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkdone?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
        let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*\n`
        for (let x of jsons.result) {
        caption += `
🤠 *Name* : *${x.apps_name}*
Link : ${x.apps_linkdl}
Version : ${x.apps_version}
Rate : ${x.apps_rate}
Tag : ${x.apps_tag}
`}
        await conn.reply(m.chat, caption, m, frep)
}

if (command == 'apkgoogle') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkgoogle?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
        let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*\n`
        for (let x of jsons.result) {
        caption += `
🤠 *Name* : *${x.apps_name}*
Link : ${x.apps_linkdl}
Tag : ${x.apps_tag}
`}
        await conn.reply(m.chat, caption, m, frep)
}

if (command == 'apkmody') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkmody?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
        let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*\n`
        for (let x of jsons.result) {
        caption += `
🤠 *Name* : *${x.apps_name}*
Link : ${x.apps_linkdl}
Desc : ${x.desc}
`}
        await conn.reply(m.chat, caption, m, frep)
}

if (command == 'apkshub') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkshub?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
        let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*\n`
        for (let x of jsons.result) {
        caption += `
🤠 *Name* : *${x.apps_name}*
Link : ${x.apps_linkdl}
View : ${x.apps_views}
`}
        await conn.reply(m.chat, caption, m, frep)
}

if (command == 'happymod') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/happymod?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
        let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*\n`
        for (let x of jsons.result) {
        caption += `
🤠 *Name* : *${x.apps_name}*
Link : ${x.apps_linkdl}
Rate : ${x.apps_rate}
`}
        await conn.reply(m.chat, caption, m, frep)
}

if (command == 'hostapk') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/hostapk?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
        let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*\n`
        for (let x of jsons.result) {
        caption += `
🤠 *Name* : *${x.apps_name}*
Link : ${x.apps_linkdl}
Rilis : ${x.apps_released}
Athor : ${x.apps_author}
Desc : ${x.apps_desc}
`}
        await conn.reply(m.chat, caption, m, frep)
}

if (command == 'revdl') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/revdl?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
        let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*\n`
        for (let x of jsons.result) {
        caption += `
🤠 *Name* : *${x.apps_name}*
Link : ${x.apps_linkdl}
`}
        await conn.reply(m.chat, caption, m, frep)
}

if (command == 'toraccino') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/toraccino?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
        let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*\n`
        for (let x of jsons.result) {
        caption += `
🤠 *Name* : *${x.apps_name}*
Link : ${x.apps_linkdl}
Tag : ${x.apps_tag}
Rilis : ${x.apps_upload}
Athor : ${x.apps_author}
Desc : ${x.apps_desc}
`}
        await conn.reply(m.chat, caption, m, frep)
}

if (command == 'uapkpro') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/uapkpro?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
        let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*\n`
        for (let x of jsons.result) {
        caption += `
🤠 *Name* : *${x.apps_name}*
Link : ${x.apps_linkdl}
`}
        await conn.reply(m.chat, frep, caption, m)
}

}
handler.command = handler.help = ['apkdone', 'apkgoogle', 'apkmody', 'apkshub', 'happymod', 'hostapk', 'revdl', 'toraccino', 'uapkpro']
handler.tags = ['internet']

export default handler
