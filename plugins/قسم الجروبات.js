let handler = async (m, { command, text }) => m.reply(`*💥❯══⊹⊱≼ مرحبا بك ≽⊰⊹══❮💥*
*❮ حط رمز قبل قسم حاجه من 👈  ( / . )❮*

*❮ اذا عندك طلب او اي شي تريد تقوله للمطور اكتب (.تقرير وحط طلبك)❮*

*❆❯══⊹⊱≼ 👥 ≽⊰⊹══❮❆*
*『 ️👥 』⇦ قسم الجروبات ╿↶*
*❆❯══⊹⊱≼ 👥 ≽⊰⊹══❮❆*

*👾┣.انذار*
❍↜بيعمل انذار للاعضاء

*👾┣.الغاء-الانذار*
❍↜بيشيل الانذارات

*👾┣.دعوة*
❍↜يدعياك شخص على الجروب 

*👾┣.تغيرالترحيبت*
❍↜بيغير الترحيب البوت

*👾┣.تغيرالمغادره*
❍↜بيغير المغادره البوت

*👾┣.القروب*
❍↜بيبعت معلومات الجروب

*👾┣.جروب*
❍↜بيفتح و بيقفل الجروب

*👾┣.خلفيه*
❍↜بيغير خلفيه الجروب

*👾┣.تغييرالاسم*
❍↜بيغير اسم الجروب

*👾┣.تصويت*
❍↜بيعمل استطلاع رأي

*👾┣.لينك*
❍↜بيبعت لينك الجروب

*👾┣.رفع*
❍↜بيخلي عضو يبقي ادمن

*👾┣.تنزيل*
❍↜يخلي ادمن عضو

*👾┣.تدمير*
❍↜بيطرد الاعضاء برمز دوله معين

*👾┣.حساب*
❍↜بيبعت معلومات الشخص اللي تمنشن له

*👾┣.المشرفين*
❍↜منشن للمشرفين

*👾┣.مخفي*
❍↜بيعمل منشن وهمي للجميع

*👾┣.الاشباح*
❍↜منشن ل الناس اللي مش بتتفاعل 

*👾┣.توب*
❍↜منشن عشوائيه ل10 أعضاء

*👾┣.رستر*
❍↜يجدد لينك الجروب 

*👾┣.منشني*
❍↜يخلي البوت يمنشنلك

*👾┣.منشن*
❍↜يعمل منشن للجروب كله

*👾┣.طرد*
❍↜طرد عضو من الجروب`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(قسم الجروب|قسم-الجروب)$/i

export default handler
