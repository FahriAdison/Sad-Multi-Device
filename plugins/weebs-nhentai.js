import { NHentai } from '@shineiichijo/nhentai-ts'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `*Example Usage* : ${usedPrefix + command} 147476`
  const nhentai = new NHentai()
  const { images, title } = await nhentai.getDoujin(args[0]).catch(() => { throw "Invalid doujin ID" })
  await conn.sendFile(m.chat, await images.PDF(), title + ".pdf", title, m, null, {
    mimetype: "application/pdf",
    asDocument: true,
  })
}
handler.help = handler.alias = ['nhentai']
handler.tags = ['weebs']
handler.command = /^(nhentai)$/i

export default handler
