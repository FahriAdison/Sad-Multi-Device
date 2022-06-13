import axios from "axios"

let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Teksnya', m)

	axios.get(`https://some-random-api.ml/binary?text=${text}`).then ((res) => {
	 	let hasil = `Teks : ${text}\nBinary : ${res.data.binary}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['binary'].map(v => v + ' <teks>')
handler.tags = ['tools']
handler.command = /^(binary)$/i


handler.fail = null


export default handler
