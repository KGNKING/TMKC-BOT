module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.imgur.com/eDbdlvd.jpg"];
var callback = () => api.sendMessage({body:` ╾━╤デ╦︻(▀̿Ĺ̯▀̿ ̿)🇮🇳 𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 🇮🇳 
(⌐▀͡ ̯ʖ▀)︻̷┻̿═━一-

☄️Bot Name︎︎︎☄️  ${global.config.BOTNAME}

🔥Bot Admin🔥☞︎︎︎☜︎︎︎✰ 𝗗𝗝 𝗩𝗜𝗟𝗔𝗡 𝗧𝗔𝗕𝗛𝗔𝗜💔🥀

🙈bot andmin owner facebook id link🙈➪  https://www.facebook.com/profile.php?id=61576972205294💞🕊️

👋For Any Kind Of Help Contact On Telegram  Username 👉 @😇

✧══════•❁❀❁•══════✧

🌸Bot Prefix🌸☞︎︎︎☜︎︎︎✰ ${global.config.PREFIX}

♥️Bot Owner♥️ ☞︎︎︎☜︎︎︎✰ 𝐃𝐉 𝐕𝐈𝐋𝐀𝐍 𝐓𝐀𝐁𝐇𝐀𝐈

🥳UPTIME🥳

🌪️Today is🌪️ ☞︎︎︎☜︎︎︎✰ ${juswa} 

⚡Bot is running⚡ ${hours}:${minutes}:${seconds}.

✅Thanks for using ${global.config.BOTNAME} Bot🖤
 ‎★━━━━━━━━━━━━━━━━━‎━━━━━━━━━━━━━★☈︎🍒💞🥰दिल चाहे कितना भी तकलीफ में हो 🥺तकलीफ़ देने वाला दिल में ही रहता है…!=-==-=-𝐈 𝐌𝐈𝐒𝐒 𝐔 𝐉𝐀𝐀𝐍 🎀❤️‍🩹🐧⏎‎★━━━━━━━━━━━━‎━━━━‎━━━━━━━━━━━━━★ 
✧═══════════════•❁❀❁•═══════════════✧चेहरे पर हँसी और दिल में गम 🙂कुछ इस तरह से जी रहे हैं हम…!>>>®❤️शाम की उदासी में यादों का मेला है 😭भीड़ तो बहोत है पर मन अकेला है…!🥺😏🫰★━━━━━━━━━━━━━★ ★━━━━━━━━━━━━★
==================
𝗺𝗲 𝗮𝘂𝗴𝗮 𝘁𝗵𝗮𝗿𝗮 𝗰𝗵𝗮𝗿𝗮 𝗱𝗵𝗸𝗻𝗮 
𝗮𝗸 𝗯𝗮𝗮𝗿 𝗷𝗮𝗿𝘂𝗿 𝗺𝗮𝗴𝗿 𝗵𝗮𝗺 
𝗰𝗵𝗮𝗸𝗿 𝗯𝗵𝗶 𝗺𝗶𝗹𝗻𝗮 𝘀𝗸𝗮𝘁𝗮 𝗵𝗮𝗶
=======
==========
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
