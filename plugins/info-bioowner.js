let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Irfaan Official
*✉️ Nama RL* : Irfaan Official
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 10 Juni 2007
*🎨 Umur* : 15
*🧮 Kelas* : 9
*🧩 Hobby* : Nonton Hanime, Chatting, Recode script bot
*💬 Sifat* : Baik, Ramah, Kanjut, Prik, Pedofil
*🗺️ Tinggal* : Indonesia, Tasikmalaya, Singaparna, Mangkubumi
*❤️ Suka* : warnah kuning & biru, Hanime, waifu, loli, trap, furry, kucing
*💔 Benci* : autis, anak epep, seleb

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @Irfaanabdulhafiizh
*🇫  Facebook* : Irfaan Abdul Hafiizh
*🏮 Chanel Youtube* : HimHia Channel
*🐈 Github:* Alfarabotz567

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
