const dir = [
  'https://storage.caliph71.xyz/asupan/tiktok/1.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/10.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/100.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/101.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/102.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/103.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/104.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/106.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/107.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/108.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/109.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/11.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/111.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/112.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/113.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/114.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/115.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/116.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/117.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/118.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/119.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/12.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/121.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/122.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/123.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/124.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/125.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/126.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/127.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/128.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/129.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/13.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/131.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/132.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/133.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/134.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/135.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/136.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/137.mp4',
  'https://storage.caliph71.xyz/asupan/tiktok/138.mp4'
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'asupan.mp4', '', m)
}
handler.help = ['asupanj']
handler.tags = ['asupan']
handler.premium = true
handler.register = true
handler.limit = 5
handler.command = /^asupanj$/i

module.exports = handler
