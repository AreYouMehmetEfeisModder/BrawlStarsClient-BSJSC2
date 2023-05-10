var ByteStream = require("../../../DataStream/ByteStream");

module.exports = class {
    constructor(wws, name) {
        this.ByteStream = new ByteStream();
        this.wws = wws;
        this.name = name;
    }
    decode() {}
    process(messaging) {
        if (this.wws == 1) {
            messaging.sendFriend();
          } else if (this.wws == 2) {
            messaging.sendSpectate();    
          } else if (this.wws == 3) {
           messaging.sendStartSpectateMessage();
          } else if (this.wws == 4) {
            messaging.sendFriendGhost(); 
          } else if (this.wws == 5) {
            messaging.sendClub();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
          } else if (this.wws == 6) {
            messaging.sendClub();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendClubChatSendMessage();
            messaging.sendLeaveClubMessage();       
        } 
    }
}
module.exports.getMessageType = () => 20104;
