// 🐰 MADE BY KORONEOFC (JANGAN DIHAPUS !!!)

import obs from 'obfuscator'

let handler = async (m, { conn, text }) => {
	if (!text) throw 'Mana text nya?'
	let enc = await obs.utils.hex(text)
	m.reply(enc)
}
handler.help = ['enc', 'encrypt'].map(v => v + ' <text>')
handler.tags = ['tools']
handler.command = /^(enc(rypt)?)$/i

export default handler
