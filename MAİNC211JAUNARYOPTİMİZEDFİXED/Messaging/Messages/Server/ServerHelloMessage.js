var ByteStream = require("../../../DataStream/ByteStream");

module.exports = class {
    constructor(name) {
        this.ByteStream = new ByteStream();
    }
    decode() {}
    process(messaging) {
        messaging.sendPepperLogin();
    }
}

module.exports.getMessageType = () => 20100;
