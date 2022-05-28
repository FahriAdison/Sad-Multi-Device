const require = global.__require(import.meta.url)
const axios = require('axios')

let handler = async (m, { args }) => {
	if (!args[0]) throw '....'
	let res = await axios(args[0])
	m.reply(Object.keys(res.headers).map((v) => `• ${v}: ${res.headers[v]}`).join('\n'))
}
handler.command = /^headers$/i

export default handler

