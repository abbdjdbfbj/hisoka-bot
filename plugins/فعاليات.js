import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
let res = (await axios.get(`https://raw.githubusercontent.com/socona12/TheMystic-Bot-MD/master/src/JSON/Anime-F3alya.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]    
conn.sendFile(m.chat, haha, 'error.jpg', `
〄━━━━━⌬〔JOHAN〕⌬━━━━━〄

*⌬🕹️┋السوأل » احزر الشخصية*

*⌬⏳┋الواقت » 60 ث*

*⌬🏆┋الجائزه » 20k*

*⌬━━──⧉⊰🎴⊱⧉──━━⌬*
~⌬ تـوقيع المطور
🤖┋«JOHAN»┋🤖
*╰━━━━━━━━━━━━⬣*, m)`
}
handler.comm = handler.help = ['فعالة','فعا']
handler.tags = ['game']
handler.command = /^(فعالية)$/i
handler.admin = true
export default handler
