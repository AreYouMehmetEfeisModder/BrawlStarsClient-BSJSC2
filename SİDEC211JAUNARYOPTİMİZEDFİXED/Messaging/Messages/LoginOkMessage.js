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
            setTimeout(function(name = this.name) {messaging.sendSetName(name)}, 500)
        } else if (this.wws == 2) {
            messaging.sendSpectate();    
        } else if (this.wws == 3) {
            messaging.StartSpectateMessage();
        }
    }
}

module.exports.getMessageType = () => 20104;
