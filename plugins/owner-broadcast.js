let handler = async (m, { conn, text }) => {
	let wm = global.wm
	let groups = Object.entries(await conn.groupFetchAllParticipating()).filter(([jid, chat]) => !chat?.announce).map(v => v[0]),
		cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m,
		teks = text ? text : cc.text
	await m.reply(`_Mengirim pesan broadcast ke ${groups.length} group_`)
	for (let id of groups) 
	await conn.sendButton(id,'*—「 Broadcast 」—*\n' + teks, wm, [['⋮☰ Menu', '.menu'], ['Owner', '.owner']], m)
	m.reply('Selesai Broadcast All Group')
}
handler.help = ['broadcastgroup']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.tags = ['owner']
handler.owner = true

export default handler

function readMore() {
	return (String.fromCharCode(8206)).repeat(4001)
}
