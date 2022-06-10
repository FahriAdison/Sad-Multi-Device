export async function all(m) {

  const stc = ['https://a.uguu.se/AinzEawY.webp',
              'https://a.uguu.se/aNqaxmfZ.webp',
              'https://a.uguu.se/yJELqBgJ.webp',
              'https://a.uguu.se/vfVKiAGe.webp',
              'https://a.uguu.se/uybRbuue.webp',
              'https://a.uguu.se/CDGifugk.webp']
  var stcs = stc[Math.floor(Math.random() * (stc.length))]
if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return

    // when tagged send sticker 
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.sendFile(m.chat, stcs, 'tag.webp', '', m, false, {sendEphemeral: true})
        }
    } catch (e) {
        return
    }
}
