let handler = async (m, { command, text }) => m.reply(`*💥❯══⊹⊱≼ مرحبا بك ≽⊰⊹══❮💥*
*❮ حط رمز قبل قسم حاجه من 👈  ( / . )❮*

*❮ اذا عندك طلب او اي شي تريد تقوله للمطور اكتب (.تقرير وحط طلبك)❮*

*❆❯══⊹⊱≼ ❄️ ≽⊰⊹══❮❆*
*『 ️📜 』⇦ قسم الاستمارات ╿↶*
*❆❯══⊹⊱≼ ❄️ ≽⊰⊹══❮❆*

*⚠️ قبل استخدام اي امر من هذا القسم تأكد من اسم النقابه التي توجد فيها*
*❆❯══⊹⊱≼ ❄️ ≽⊰⊹══❮❆*

*📜┣.دياموند*
❍↜بيجيب لك استماره لنقابه دياموند (DIAMOND)

*📜┣.وانو*
❍↜بيجيب لك استماره لنقابه وانو (WANO)

*📜┣.سكايبيا*
❍↜بيجيب لك استماره لنقابه سكايبيا (SKIBYA)

*📜┣.ستار*
❍↜بيجيب لك استماره لنقابه ستار فريز (STAR FREEZE)

*📜┣.اكارا*
❍↜بيجيب لك استماره لنقابه اكارا (AKARA)

*📜┣.استمارة*
❍↜بيجيب لك استماره لنقابه اسبادا (ESPADA)

*📜┣.سكارليت*
❍↜بيجيب لك استماره نقابه سكارليت (SKARLET)

*📜┣.بلاك*
❍↜بيجيب لك استماره لنقابه (𝐁𝐋𝐀𝐂𝐊 𝐊𝐎𝐍𝐎𝐇𝟑)

*📜┣.استماره*
❍↜بيجيب لك استماره لنقابه دراغون بول سوبر (DRAGON BALL SUPER)

*📜┣.شيبويا*
❍↜بيجيب لك استماره لنقابه شيبويا (SHIBUYA)`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(قسم الاسترات|قسم-الاستمات)$/i

export default handler
