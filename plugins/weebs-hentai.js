import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
	let res = await fetch(`https://api.waifu.pics/nsfw/${command}`)
	if (!res.ok) throw await res.text()
	let json = await res.json()
	conn.sendButton(m.chat, `Random Image ${command.capitalize()}`, json.url, json.url, [['Next', usedPrefix + command]], m)
}
handler.help = handler.alias = ['blowjob', 'trap']
handler.tags = ['weebs']
handler.command = /^(blowjob|trap)$/i

export default handler
