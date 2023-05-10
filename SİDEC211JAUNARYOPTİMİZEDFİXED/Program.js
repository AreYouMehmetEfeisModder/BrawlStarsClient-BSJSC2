try {
var token = "MTA1MjIyMDE0Mzc3OTk3MTE3NA.Gajp0a.vZ2kae27eVMchpfxho8TMfizcQ75ZOYyYDazwI" //your bot token here

const {Client, GatewayIntentBits, Partials} = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const fetch = require("node-fetch");

const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel],
});


bot.on('ready', () => {
  	console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('messageCreate', (message) => {
	let msgArray = message.content.split(" ");
	let command = msgArray[0]; // Gets the first element of msgArray and removes the prefix
    let args = msgArray.slice(1); // Remove the first element of msgArray/command and this basically returns the arguments
    var wws = 0;
    
    
	if (command == "b?spectatetv") {
		if(!args[0]) return console.log('wrong usage! \n example usage: b?spectate #[tag] [number].');
		if(!args[0].startsWith("#")) return console.log('Wrong tag! \n example usage: b?spectate #[tag] [number].');
		if(!args[1]) return console.log('You need the write viewer count');
		if(args[1] >= 1001) return console.log('viewer count can be between 1 and 1001');
		if(args[0].startsWith("#")){
			var tag = new GetID(args[0]);
            var high = tag[0],
            low = tag[1];
            wws = 2;
            if (args[1] <= 1001) {
fetch("https://raw.githubusercontent.com/AreYouMehmetEfeisModder/bsjssay-degeri/main/x.txt")
.then(response => response.text())
.then(data => {
                const mainreqcount = args[1] / Number(data) * 5; //main sunucuların request sayısı 500 felan
                const sidecount = Number(data) - 1; // side server sayısını belirler mainden çıkarırlar
                const sidereqcount = args[1] - mainreqcount; // side sunucunun toplam req sayısını belirler
                const realsidereqcount = sidereqcount / sidecount; // belirlenniş side toplam req sayısın belirlenmiş side sunucu sayısına böler
                       
            	for(var i = 0; i < realsidereqcount; i++) {
                     new Start(message, high, low, wws, name);
                }
                console.log(args[1] + "Brawl TV Viewers Request Sended :)");
    })
            }
	    }
	}
		
	
    
	if (command == "b?spectate") {
	if(!message.member.roles.cache.has("1052238419369144340")) {
console.log("This Command Use Only Mehmet Efe And Rengogang And İnviters Invite 2 People and Open Ticket / Bu Komutu Kullanın Sadece Mehmet Efe Ve Rengogang Ve Davetçiler 2 Kişi Davet Et ve Bilet Aç <#1053761628031680684>")
} else {
		if(!args[0]) return console.log('wrong usage! \n example usage: b?spectate #[tag] [number].');
		if(!args[0].startsWith("#")) return console.log('Wrong tag! \n example usage: b?spectate #[tag] [number].');
		if(!args[1]) return console.log('You need the write viewer count');
		if(args[1] >= 1001) return console.log('viewer count can be between 1 and 1001');
		if(args[0].startsWith("#")){
			var tag = new GetID(args[0]);
            var high = tag[0],
            low = tag[1];
            wws = 3;
            if (args[1] <= 1001) {
                fetch("https://raw.githubusercontent.com/AreYouMehmetEfeisModder/bsjssay-degeri/main/x.txt")
.then(response => response.text())
.then(data => {
                const mainreqcount = args[1] / Number(data) * 5; //main sunucuların request sayısı 500 felan
                const sidecount = Number(data) - 1; // side server sayısını belirler mainden çıkarırlar
                const sidereqcount = args[1] - mainreqcount; // side sunucunun toplam req sayısını belirler
                const realsidereqcount = sidereqcount / sidecount; // belirlenniş side toplam req sayısın belirlenmiş side sunucu sayısına böler
                       
            	for(var i = 0; i < realsidereqcount; i++) {
                     new Start(message, high, low, wws);
                    }
      })
                console.log(args[1] + "Viewers Request Sended :)");
            }
		}
	}
}
       if (command == "showc2") {
           fetch("https://raw.githubusercontent.com/AreYouMehmetEfeisModder/bsjssay-degeri/main/x.txt")
.then(response => response.text())
.then(data => {
                args[1] = args[1] / Number(data);
		message.channel.send('Side Server Online... x='+ Number(data) + ' interaction Main!!! server online');
        })
      }
    
    if (command == "b?megaspectate") {
               if(!message.member.roles.cache.has("1052238419369144340")) {
console.log("This Command Use Only Mehmet Efe And Rengogang And İnviters Invite 2 People and Open Ticket / Bu Komutu Kullanın Sadece Mehmet Efe Ve Rengogang Ve Davetçiler 2 Kişi Davet Et ve Bilet Aç <#1053761628031680684>")
} else {
		if(!args[0]) return console.log('wrong usage! \n example usage: b?spectate #[tag] [number].');
		if(!args[0].startsWith("#")) return console.log('Wrong tag! \n example usage: b?spectate #[tag] [number].');
		if(!args[1]) return console.log('You need the write viewer count');
		if(args[1] >= 5001) return console.log('viewer count can be between 1 and 5001');
		if(args[0].startsWith("#")){
			var tag = new GetID(args[0]);
            var high = tag[0],
            low = tag[1];
            wws = 3;
            if (args[1] <= 5001) {
                fetch("https://raw.githubusercontent.com/AreYouMehmetEfeisModder/bsjssay-degeri/main/x.txt")
.then(response => response.text())
.then(data => {
                const mainreqcount = args[1] / Number(data) * 5; //main sunucuların request sayısı 500 felan
                const sidecount = Number(data) - 1; // side server sayısını belirler mainden çıkarırlar
                const sidereqcount = args[1] - mainreqcount; // side sunucunun toplam req sayısını belirler
                const realsidereqcount = sidereqcount / sidecount; // belirlenniş side toplam req sayısın belirlenmiş side sunucu sayısına böler
                       
            	for(var i = 0; i < realsidereqcount; i++) {
                     new Start(message, high, low, wws);
                    }
      })
                console.log(args[1] + "Viewers Request Sended :)");
            }
		}
 	}
}      
     
    if (command == "b?megaspectatetv") {
        if(!message.member.roles.cache.has("1052238419369144340")) {
console.log("This Command Use Only Mehmet Efe And Rengogang And İnviters Invite 2 People and Open Ticket / Bu Komutu Kullanın Sadece Mehmet Efe Ve Rengogang Ve Davetçiler 2 Kişi Davet Et ve Bilet Aç <#1053761628031680684>")
} else {
		if(!args[0]) return console.log('wrong usage! \n example usage: b?spectate #[tag] [number].');
		if(!args[0].startsWith("#")) return console.log('Wrong tag! \n example usage: b?spectate #[tag] [number].');
		if(!args[1]) return console.log('You need the write viewer count');
		if(args[1] >= 5001) return console.log('viewer count can be between 1 and 5001');
		if(args[0].startsWith("#")){
			var tag = new GetID(args[0]);
            var high = tag[0],
            low = tag[1];
            wws = 2;
            if (args[1] <= 5001) {
fetch("https://raw.githubusercontent.com/AreYouMehmetEfeisModder/bsjssay-degeri/main/x.txt")
.then(response => response.text())
.then(data => {
                const mainreqcount = args[1] / Number(data) * 5; //main sunucuların request sayısı 500 felan
                const sidecount = Number(data) - 1; // side server sayısını belirler mainden çıkarırlar
                const sidereqcount = args[1] - mainreqcount; // side sunucunun toplam req sayısını belirler
                const realsidereqcount = sidereqcount / sidecount; // belirlenniş side toplam req sayısın belirlenmiş side sunucu sayısına böler
                       
            	for(var i = 0; i < realsidereqcount; i++) {
                     new Start(message, high, low, wws, name);
                }
                console.log(args[1] + "Mega Brawl TV Viewers Request Sended :)");
    })
            }
    	}
   	}
}
	
        if (command == "b?club") {
               if(!message.member.roles.cache.has("1052238419369144340")) {
console.log("This Command Use Only Mehmet Efe And Rengogang And İnviters Invite 2 People and Open Ticket / Bu Komutu Kullanın Sadece Mehmet Efe Ve Rengogang Ve Davetçiler 2 Kişi Davet Et ve Bilet Aç <#1053761628031680684>")
} else {
		if(!args[0]) return console.log('wrong usage! \n example usage: b?club #[tag] [number] [BotName] [leavespam/onlyspam] [sendmessage].');
		if(!args[0].startsWith("#")) return console.log('Wrong tag! \n example usage: b?club #[tag] [number] [BotName [leavespam/onlyspam] [sendmessage]].');
		if(!args[1]) return console.log('You need the write club request count');
		if(!args[2]) return console.log('You need the write club request BotName');
		if(!args[3]) return console.log('You need the write club request sendmessage');	
		if(args[1] >= 31) return console.log('Club Spam Request count can be between 1 and 31');
		if(args[0].startsWith("#")){
			var tag = new GetID(args[0]);
            var high = tag[0],
            low = tag[1];
            
           if(args[3] == "onlyspam") {
            wws = 5;
            } else if (args[3] == "leavespam") {
            wws = 6;
            }
            
	    if(!args[2]){
	        var name = 'BSJS';
	    }
	    else var name = args[2];
	    
	    // `[` karakterinin index'ini al
        var msgStartIndex = message.content.indexOf("[");
        // `]` karakterinin index'ini al
        var msgEndIndex = message.content.indexOf("]");
        // aradaki metni al
        var chatmessage = message.content.substring(msgStartIndex + 1, msgEndIndex);

	        
                  if (args[1] <= 31) {
            	for(var i = 0; i < args[1]; i++) {
                     new Start(message, high, low, wws, name,chatmessage);
                    }
                console.log(args[1] + "Club Spam Request Sended :)");
                      }
                }
	   }
   }
});

bot.login(token);

var net = require("net");
var {
    Queue,
    Messaging,
} = require("./Messaging/Messaging");
class Start {
	constructor(msg, high, low, wws, name,chatmessage) {
		var client = new net.Socket();

        var host = "game.brawlstarsgame.com";
        var port = 9339

        client.connect(parseInt(port), host, () => {
            //   console.log(`Connected the server: ${host}:${port}`);
              var queue = new Queue();
              var messaging = new Messaging(client, queue, high, low, wws, name, chatmessage);
    
              messaging.sendPepperAuthentication();
                   
              client.on("data", data => {
                  queue.add(data);
                  while (messaging.pendingJob()) {
                        messaging.update();
                  }
              });
             client.on("close",
             () => {
                    console.log("connection closed");
                 });
          });

        client.on("error", error => {
              console.log(error);
        });
	}
}

const Long = require('long');
const { Console } = require('console');
class GetID {
	constructor(tag) {
		var tagChars = '0289PYLQGRJCUV'
		tag = tag.slice(1);
		if (tag === undefined || typeof tag !== 'string') return false
        
        let id = 0
        let tagArray = tag.split('')
        for (let a = 0; a < tagArray.length; a++) {
           let i = tagChars.indexOf(tagArray[a])
           id *= tagChars.length
           id += i
        }
        let high = id % 256
        let low = Long.fromNumber((id - high)).shiftRight(8).low

		var HighLow = [];
		HighLow.push(high);
		HighLow.push(low);
		
		return HighLow;
		}
	}
} catch (error) {
  // Hata meydana geldiğinde çalışacak kodlar buraya yazılır
  console.log("Bir hata oluştu: " + error.message);
}
