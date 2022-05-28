import * as scraper from '@bochilteam/scraper'

let handler = async (m, { args }) => {
    if (!args[0]) throw 'Input URL'
    let res = await scraper.instagramdl(args[0])
        .catch(async _ => await scraper.instagramdlv2(args[0]))
        .catch(async _ => await scraper.instagramdlv3(args[0]))
        .catch(async _ => await scraper.instagramdlv4(args[0]))
    if (!res) throw 'Can\'t download the post'
    await m.reply('_In progress, please wait..._')
    for (let { url } of res) await m.conn.sendFile(m.chat, url, '', '', m)
}
handler.help = ['instagram']
handler.tags = ['downloader']
handler.alias = ['ig', 'igdl', 'instagram', 'instagramdl']
handler.command = /^(ig(dl)?|instagram(dl)?)$/i

export default handler
