import { wikipedia } from '@bochilteam/scraper'
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Contoh penggunaan ${usedPrefix}${command} Minecraft`
  let json = await wikipedia(text)
  m.reply(`
${l}🔎${r} Ressult from: *${text}*

${l}🖼️${r} Image: ${json.img}

${l}📖${r} Articles: 

${json.articles}
`.trim())
}
handler.help = ['wikipedia'].map(v => v + ' <apa>')
handler.tags = ['internet']
handler.command = /^(wiki|wikipedia)$/i

export default handler
