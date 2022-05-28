import { youtubeSearch } from '@bochilteam/scraper'

let handler = async (m, { text }) => {
  if (!text) throw 'Input Query'
  const { video, channel } = await youtubeSearch(text)
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': return `
${v.title} (${v.url})
Duration: ${v.durationH}
Uploaded ${v.publishedTime}
${v.view} views
`.trim()
      case 'channel': return `
${v.channelName} (${v.url})
${v.subscriberH} (${v.subscriber}) Subscriber
${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n\n')
  m.reply(teks)
}
handler.help = ['ytsearch']
handler.tags = ['tools']
handler.alias = ['yts', 'ytsearch']
handler.command = /^yts(earch)?$/i

export default handler