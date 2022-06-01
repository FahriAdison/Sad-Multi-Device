export async function all(m) {
if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup || db.data.settings[this.user.jid].group) return
   let user = global.db.data.users[m.sender]
    const cooldown = 86400000
    if (new Date - user.pc < cooldown) return // setiap 24 jam sekali
    await this.sendButton(m.chat, `
Hai ${conn.getName(m.sender)}, ${user.banned ? 'kamu dibanned' : `Ada yang bisa ${this.user.name} bantu?\nKetik */menu* untuk melihat list fitur bot`}
`.trim(), author, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '.owner' : '/menu']], m)
    user.pc = new Date * 1
}