var ByteStream = require("../../../DataStream/ByteStream");

module.exports = class {
    constructor(low) {
        this.ByteStream = new ByteStream();
    }
    decode() {}
    process(messaging) {
    messaging.sendSetName();
    }
}

module.exports.getMessageType = () => 24101;
