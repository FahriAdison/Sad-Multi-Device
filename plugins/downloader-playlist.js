/* Created by https://github.com/BrunoSobrino */
       /* Diseño by Yameko-Bot V1*/

import yts from "yt-search"
import fs from 'fs'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!text) throw `NAMA LAGU HILANG, SILAHKAN MASUKKAN COMMAND+NAMA/JUDUL LAGU
*\n\n*—◉ CONTOH:*\n*${usedPrefix + command} Begin you`    
try {
let imagen1 = fs.readFileSync('./thumbnail.jpg') 
let search = await yts(args.join(" "))
let listSerch = []
let teskd = `MUSIK TERKAIT DENGAN: ${args.join(" ")}`
const sections = [{
title: `ⓡⓔⓢⓤⓛⓣ`,
rows: listSerch }]
const listMessage = {
text: teskd,
footer: 'PILIH SALAH SATU DI BAWAH INI LALU KIRIM',
title: " 『 MUSIK TERKAIT 』",
buttonText: "[♦ HASIL ♦]",
sections}
const fake = { quoted: {
key : {
remoteJid: '17608914335-1614953337@g.us',
participant : '0@s.whatsapp.net'},
message: {
orderMessage: {
itemCount: 9999999,
status: 1,
surface: 1,
message: 'Sad-Bot', 
orderTitle: `Papah-Chan`,
thumbnailUrl: 'https://i.waifu.pics/KcrOIYV.jpg', 
sellerJid: '0@s.whatsapp.net'}}}}
if (command == 'playlist') {
for (let i of search.all) {
listSerch.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp3 ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, fake)}
if (command == 'playlist2') {
for (let i of search.all) {
listSerch.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp4 ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, fake)} 
} catch (e) {
m.reply(`ERROR, SILAKAN COBA LAGI DENGAN NAMA LAGU LAIN`)
console.log(e)
}}
handler.help = ['playlist','playlist2']
handler.tags = ['downloader']
handler.command = /^playlist|playlist2$/i
export default handler
