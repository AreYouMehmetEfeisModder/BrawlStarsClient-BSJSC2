try {
var token = "MTA1MjIyMDE0Mzc3OTk3MTE3NA.Gajp0a.vZ2kae27eVMchpfxho8TMfizcQ75ZOYyYDazwI" //write your bot token here

const {Client, GatewayIntentBits, Partials} = require('discord.js');
const { EmbedBuilder } = require('discord.js');

const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
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
    
    if (command == "b?help") {
    	const e = new EmbedBuilder()
	          .setColor(0x0099FF)
	          .setTitle("If You Read And Don't Understand This It Means You Are Stupid We Didn't Do This Command In Vain | Bunu Okuyup Anlamıyorsanız Aptalsınız Demektir Biz Bu Komutu Boşa Yapmadık ")
	          .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
	          .setDescription('All commands')
	          .addFields(
		          { name: 'b?friend', value: 'send friend request to player\nExp: b?friend #[tag] Count Botname.' },
		          { name: 'b?credit', value: 'Thank You S.B for Brawl Stars client https://github.com/HaccerCat/BrawlStars-Client This Bot Made by Mehmet Efe???_/F.R.I.D.A.Y/I.M#9758 and renogang1#9521 And Thanks to Cenk for the Discord Template  ' },
		          { name: 'b?spectate', value: 'Send Viewers To Player\nExp: b?spectate #tag number' },
                  { name: 'b?spectatetv', value: 'Send Viewers To Player BUT Brawl Tv\nExp: b?spectate #tag number' },
                  { name: 'b?club', value: 'Send Viewers To Player\nExp: b?club #tag number BotName leavespam/onlyspam [sendmessage] // You must write the sendmessage [in parentheses like this] '},
                  { name: 'b?megaspectate', value: 'Send Mega Viewers To Player BUT Brawl Tv\nExp: b?megaspectate #tag number  ***ONLY RENGOGANG AND MEHMET EFE AND İNVİTERS CAN USE THIS COMMAND *** 1 to 5001' },
                  { name: 'b?megaspectatetv', value: 'Send Brawl TV Viewers To Player BUT Brawl Tv\nExp: b?megaspectatetv #tag number ***ONLY RENGOGANG AND MEHMET EFE AND İNVİTERS CAN USE THIS COMMAND *** 1 to 5001' },
                  { name: 'showc2', value: 'Bu Komut Seni Hiç Alakadar Etmez ama eğer meraklıysan sunucu sayısını aktiflik durumunu belirlir' },
	           )
	           .setTimestamp();
	    return message.channel.send({ embeds: [e] });
	//{ name: '!spectate', value: 'send viewer in battle\nExp: !spectate #[tag] [viever count]' },
    }
    
    if (command == "b?credit") {
    	const e = new EmbedBuilder()
	          .setColor(0x0099FF)
	          .setTitle('Credits page')
	          .addFields(
		          { name: 'github.com/HaccerCat', value: 'Thank You S.B for Brawl Stars client https://github.com/HaccerCat/BrawlStars-Client This Bot Made by Mehmet Efe???_/F.R.I.D.A.Y/I.M#9758 and renogang1#9521 and Thanks to Cenk for the Discord Template' },
		          { name: 'renogang1#9521 And Mehmet Efe???_/F.R.I.D.A.Y/I.M#2062 ', value: 'Owner' },
	           )
	           .setTimestamp();
	    return message.channel.send({ embeds: [e] });
    }
    
	if (command == "b?friend") {
	  if(!message.member.roles.cache.has("1052238419369144340")) {
message.reply("This Command Use Only Mehmet Efe And Rengogang And İnviters Invite 2 People and Open Ticket / Bu Komutu Kullanın Sadece Mehmet Efe Ve Rengogang Ve Davetçiler 2 Kişi Davet Et ve Bilet Aç <#1053761628031680684>")
} else {
	if(!args[0]) return message.channel.send('wrong usage! \n example usage: b?friend #2PP Count Botname.');
	if(!args[0].startsWith("#")) return message.channel.send('Wrong tag! \n example usage: b?friend #2PP Count BotName.');
	if(args[1] >= 21) return message.channel.send('1 ==> 20 Between Friend Request');
    if(!args[1]) return message.channel.send('1 ==> 20 Between Friend Request');
	if(args[0].startsWith("#")){
		var tag = new GetID(args[0]);
	    var high = tag[0];
	    var low = tag[1];
	    wws = 1;
	    if(!args[2]){
	        var name = 'BSJS';
	    }
	    else var name = args[2];
	    if (args[1] <= 21) {
	    	for(var i = 0; i < args[1]; i++) {
	        	 new Start(message, high, low, wws, name);
	        }
	        console.log(args[1] + " Friend Requests Sended :)");
            console.log('Bot Name: '+ name)
	    }
    
            // message.channel.send("Friend requests are sended");
            // return message.channel.send('Tag: '+ args[0] +'\nHigh ID: '  + h +'\nLow ID: '+ l);
            const f = new EmbedBuilder()
	          .setColor(0x7DFFD8)
	          .setTitle('Friend Request')
              .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            //   .setThumbnail('https://versiya.info/uploads/posts/2017-11/1509554786_fin.jpg')
	          .addFields(
		          { name: 'Botnet answer:', value: "success!"},
                  { name: 'Tag:', value: ""+args[0]},
                  { name: 'Number of requests:', value: ""+args[1]},
                  { name: 'HighID:', value: ""+high},
                  { name: 'LowID:', value: ""+low},
                  {name: 'Offical Server', value: 'https://discord.gg/vkzdttkSqz'},
	           )
              .setTitle('Friend Request')
              .setURL('https://discord.gg/vkzdttkSqz')
               .setThumbnail("https://tenor.com/view/hffgf-gif-22453222")
               .setFooter({ text: '| Base by S.B | '})
               .setTimestamp();
	    return message.channel.send({ embeds: [f] });
		}
	}
}	
	if (command == "b?spectatetv") {
		if(!args[0]) return message.channel.send('wrong usage! \n example usage: b?spectate #[tag] [number].');
		if(!args[0].startsWith("#")) return message.channel.send('Wrong tag! \n example usage: b?spectate #[tag] [number].');
		if(!args[1]) return message.channel.send('You need the write viewer count');
		if(args[1] >= 1001) return message.channel.send('viewer count can be between 1 and 1001');
		if(args[0].startsWith("#")){
			var tag = new GetID(args[0]);
            var high = tag[0],
            low = tag[1];
            wws = 2;
            if (args[1] <= 1001) {
fetch("https://raw.githubusercontent.com/AreYouMehmetEfeisModder/bsjssay-degeri/main/x.txt")
.then(response => response.text())
.then(data => {
                args[1] = args[1] / Number(data) * 5;
            	for(var i = 0; i < args[1]; i++) {
                     new Start(message, high, low, wws, name);
                }
                console.log(args[1] + "Brawl TV Viewers Request Sended :)");
    })
            }
            const f = new EmbedBuilder()
	          .setColor(0x7DFFD8)
	          .setTitle('Brawl TV Viewers Request')
              .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            //   .setThumbnail('https://versiya.info/uploads/posts/2017-11/1509554786_fin.jpg')
	          .addFields(
		          { name: 'Botnet answer:', value: "success!"},
                  { name: 'Tag:', value: ""+args[0]},
                  { name: 'Number of requests:', value: ""+args[1]},
                  { name: 'HighID:', value: ""+high},
                  { name: 'LowID:', value: ""+low},
                  {name: 'Offical Server', value: 'https://discord.gg/vkzdttkSqz'},
	           )
            .setTitle('Brawl TV Viewers Request')

              .setURL('https://discord.gg/vkzdttkSqz')
               
               .setThumbnail("https://tenor.com/view/hffgf-gif-22453222")
               .setFooter({ text: '| Base by S.B | '})
               .setTimestamp();
	    return message.channel.send({ embeds: [f] });
	    }
	}
		
	
    
	if (command == "b?spectate") {
	if(!message.member.roles.cache.has("1052238419369144340")) {
message.reply("This Command Use Only Mehmet Efe And Rengogang And İnviters Invite 2 People and Open Ticket / Bu Komutu Kullanın Sadece Mehmet Efe Ve Rengogang Ve Davetçiler 2 Kişi Davet Et ve Bilet Aç <#1053761628031680684>")
} else {
		if(!args[0]) return message.channel.send('wrong usage! \n example usage: b?spectate #[tag] [number].');
		if(!args[0].startsWith("#")) return message.channel.send('Wrong tag! \n example usage: b?spectate #[tag] [number].');
		if(!args[1]) return message.channel.send('You need the write viewer count');
		if(args[1] >= 1001) return message.channel.send('viewer count can be between 1 and 1001');
		if(args[0].startsWith("#")){
			var tag = new GetID(args[0]);
            var high = tag[0],
            low = tag[1];
            wws = 3;
            if (args[1] <= 1001) {
                fetch("https://raw.githubusercontent.com/AreYouMehmetEfeisModder/bsjssay-degeri/main/x.txt")
.then(response => response.text())
.then(data => {
                args[1] = args[1] / Number(data) * 5;//server many 8 server only 1 main server and 7 side server if x server write here x number use brain                   
            	for(var i = 0; i < args[1]; i++) {
                     new Start(message, high, low, wws);
                    }
      })
                console.log(args[1] + "Viewers Request Sended :)");
            }
            const f = new EmbedBuilder()
	          .setColor(0x7DFFD8)
	          .setTitle('Viewers Request')
              .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            //   .setThumbnail('https://versiya.info/uploads/posts/2017-11/1509554786_fin.jpg')
	          .addFields(
		          { name: 'Botnet answer:', value: "success!"},
                  { name: 'Tag:', value: ""+args[0]},
                  { name: 'Number of requests:', value: ""+args[1]},
                  { name: 'HighID:', value: ""+high},
                  { name: 'LowID:', value: ""+low},
                  {name: 'Offical Server', value: 'https://discord.gg/vkzdttkSqz'},
	           )
            .setTitle('Viewers Request')

              .setURL('https://discord.gg/vkzdttkSqz')
               
               .setThumbnail("https://tenor.com/view/hffgf-gif-22453222")
               .setFooter({ text: '| Base by S.B | '})
               .setTimestamp();
	    return message.channel.send({ embeds: [f] });
		}
	}
}

    if (command == "b?friendghost") {
    if(!message.member.roles.cache.has("1052238419369144340")) {
message.reply("This Command Use Only Mehmet Efe And Rengogang And İnviters Invite 2 People and Open Ticket / Bu Komutu Kullanın Sadece Mehmet Efe Ve Rengogang Ve Davetçiler 2 Kişi Davet Et ve Bilet Aç <#1053761628031680684>")
} else {
		if(!args[0]) return message.channel.send('wrong usage! \n example usage: b?friend #2PP Botname.');
		if(!args[0].startsWith("#")) return message.channel.send('Wrong tag! \n example usage: b?friend #2PP BotName.');
		if(args[1] >= 21) return message.channel.send('1 ==> 20 Between Friend Request');
        if(!args[1]) return message.channel.send('1 ==> 20 Between Friend Request');
		if(args[0].startsWith("#")){
			var tag = new GetID(args[0]);
            var high = tag[0];
            var low = tag[1];
            wws = 4;
            if(!args[2]){
                var name = 'dudka';
            }
            else var name = args[2];
            if (wws == 1) {
            	for(var i = 0; i < args[1]; i++) {
                     new Start(message, high, low, wws, name);
                }
                console.log(args[1] + "Ghost Friend Requests Sended :)");
            }
            // message.channel.send("Friend requests are sended");
            // return message.channel.send('Tag: '+ args[0] +'\nHigh ID: '  + h +'\nLow ID: '+ l);
            const f = new EmbedBuilder()
	          .setColor(0x7DFFD8)
	          .setTitle('Ghost Friend Request')
              .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            //   .setThumbnail('https://versiya.info/uploads/posts/2017-11/1509554786_fin.jpg')
	          .addFields(
		          { name: 'Botnet answer:', value: "success!"},
                  { name: 'Tag:', value: ""+args[0]},
                  { name: 'Number of requests:', value: ""+args[1]},
                  { name: 'HighID:', value: ""+high},
                  { name: 'LowID:', value: ""+low},
                  {name: 'Offical Server', value: 'https://discord.gg/vkzdttkSqz'},
	           )
              .setTitle(' Ghost Friend Request')
              .setURL('https://discord.gg/vkzdttkSqz')
               .setThumbnail("https://tenor.com/view/hffgf-gif-22453222")
               .setFooter({ text: '| Base by S.B | '})
               .setTimestamp();
	    return message.channel.send({ embeds: [f] });
		}
	}
}
       if (command == "showc2") {
           fetch("https://raw.githubusercontent.com/AreYouMehmetEfeisModder/bsjssay-degeri/main/x.txt")
.then(response => response.text())
.then(data => {
		message.channel.send('Main Server Online... x='+ Number(data) + ' interaction Main!!! server online');
        })
      }
    
    if (command == "b?megaspectate") {
               if(!message.member.roles.cache.has("1052238419369144340")) {
message.reply("This Command Use Only Mehmet Efe And Rengogang And İnviters Invite 2 People and Open Ticket / Bu Komutu Kullanın Sadece Mehmet Efe Ve Rengogang Ve Davetçiler 2 Kişi Davet Et ve Bilet Aç <#1053761628031680684>")
} else {
		if(!args[0]) return message.channel.send('wrong usage! \n example usage: b?spectate #[tag] [number].');
		if(!args[0].startsWith("#")) return message.channel.send('Wrong tag! \n example usage: b?spectate #[tag] [number].');
		if(!args[1]) return message.channel.send('You need the write viewer count');
		if(args[1] >= 5001) return message.channel.send('viewer count can be between 1 and 5001');
		if(args[0].startsWith("#")){
			var tag = new GetID(args[0]);
            var high = tag[0],
            low = tag[1];
            wws = 3;
            if (args[1] <= 5001) {
                fetch("https://raw.githubusercontent.com/AreYouMehmetEfeisModder/bsjssay-degeri/main/x.txt")
.then(response => response.text())
.then(data => {
                args[1] = args[1] / Number(data) * 5;//server many 8 server only 1 main server and 7 side server if x server write here x number use brain                   
            	for(var i = 0; i < args[1]; i++) {
                     new Start(message, high, low, wws);
                    }
      })
                console.log(args[1] + "Viewers Request Sended :)");
            }
            const f = new EmbedBuilder()
	          .setColor(0x7DFFD8)
	          .setTitle('Mega Viewers Request')
              .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            //   .setThumbnail('https://versiya.info/uploads/posts/2017-11/1509554786_fin.jpg')
	          .addFields(
		          { name: 'Botnet answer:', value: "success!"},
                  { name: 'Tag:', value: ""+args[0]},
                  { name: 'Number of requests:', value: ""+args[1]},
                  { name: 'HighID:', value: ""+high},
                  { name: 'LowID:', value: ""+low},
                  {name: 'Offical Server', value: 'https://discord.gg/vkzdttkSqz'},
	           )
            .setTitle('Mega Viewers Request')

              .setURL('https://discord.gg/vkzdttkSqz')
               
               .setThumbnail("https://tenor.com/view/hffgf-gif-22453222")
               .setFooter({ text: '| Base by S.B | '})
               .setTimestamp();
	    return message.channel.send({ embeds: [f] });
		}
	}
}      
     
    if (command == "b?megaspectatetv") {
        if(!message.member.roles.cache.has("1052238419369144340")) {
message.reply("This Command Use Only Mehmet Efe And Rengogang And İnviters Invite 2 People and Open Ticket / Bu Komutu Kullanın Sadece Mehmet Efe Ve Rengogang Ve Davetçiler 2 Kişi Davet Et ve Bilet Aç <#1053761628031680684>")
} else {
		if(!args[0]) return message.channel.send('wrong usage! \n example usage: b?spectate #[tag] [number].');
		if(!args[0].startsWith("#")) return message.channel.send('Wrong tag! \n example usage: b?spectate #[tag] [number].');
		if(!args[1]) return message.channel.send('You need the write viewer count');
		if(args[1] >= 5001) return message.channel.send('viewer count can be between 1 and 5001');
		if(args[0].startsWith("#")){
			var tag = new GetID(args[0]);
            var high = tag[0],
            low = tag[1];
            wws = 2;
            if (args[1] <= 5001) {
fetch("https://raw.githubusercontent.com/AreYouMehmetEfeisModder/bsjssay-degeri/main/x.txt")
.then(response => response.text())
.then(data => {
                args[1] = args[1] / Number(data) * 5;
            	for(var i = 0; i < args[1]; i++) {
                     new Start(message, high, low, wws, name);
                }
                console.log(args[1] + "Mega Brawl TV Viewers Request Sended :)");
    })
            }
            const f = new EmbedBuilder()
	          .setColor(0x7DFFD8)
	          .setTitle('Mega Brawl TV Viewers Request')
              .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            //   .setThumbnail('https://versiya.info/uploads/posts/2017-11/1509554786_fin.jpg')
	          .addFields(
		          { name: 'Botnet answer:', value: "success!"},
                  { name: 'Tag:', value: ""+args[0]},
                  { name: 'Number of requests:', value: ""+args[1]},
                  { name: 'HighID:', value: ""+high},
                  { name: 'LowID:', value: ""+low},
                  {name: 'Offical Server', value: 'https://discord.gg/vkzdttkSqz'},
	           )
            .setTitle('Mega Brawl TV Viewers Request')

              .setURL('https://discord.gg/vkzdttkSqz')
               
               .setThumbnail("https://tenor.com/view/hffgf-gif-22453222")
               .setFooter({ text: '| Base by S.B | '})
               .setTimestamp();
	    return message.channel.send({ embeds: [f] });
    	}
   	}
}
	
        if (command == "b?club") {
               if(!message.member.roles.cache.has("1052238419369144340")) {
message.reply("This Command Use Only Mehmet Efe And Rengogang And İnviters Invite 2 People and Open Ticket / Bu Komutu Kullanın Sadece Mehmet Efe Ve Rengogang Ve Davetçiler 2 Kişi Davet Et ve Bilet Aç <#1053761628031680684>")
} else {
		if(!args[0]) return message.channel.send('wrong usage! \n example usage: b?club #[tag] [number] [BotName] [leavespam/onlyspam] [sendmessage].');
		if(!args[0].startsWith("#")) return message.channel.send('Wrong tag! \n example usage: b?club #[tag] [number] [BotName [leavespam/onlyspam] [sendmessage]].');
		if(!args[1]) return message.channel.send('You need the write club request count');
		if(!args[2]) return message.channel.send('You need the write club request BotName');
		if(!args[3]) return message.channel.send('You need the write club request sendmessage');	
		if(args[1] >= 31) return message.channel.send('Club Spam Request count can be between 1 and 31');
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
            const f = new EmbedBuilder()
	          .setColor(0x7DFFD8)
	          .setTitle('Club Spam Request')
              .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            //   .setThumbnail('https://versiya.info/uploads/posts/2017-11/1509554786_fin.jpg')
	          .addFields(
		          { name: 'Botnet answer:', value: "success!"},
                  { name: 'Tag:', value: ""+args[0]},
                  { name: 'Number of requests:', value: ""+args[1]},
                  { name: 'HighID:', value: ""+high},
                  { name: 'LowID:', value: ""+low},
                  {name: 'Offical Server', value: 'https://discord.gg/vkzdttkSqz'},
	           )
            .setTitle('Club Spam Request')

              .setURL('https://discord.gg/vkzdttkSqz')
               
               .setThumbnail("https://tenor.com/view/hffgf-gif-22453222")
               .setFooter({ text: '| Base by S.B | '})
               .setTimestamp();
	    return message.channel.send({ embeds: [f] });
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