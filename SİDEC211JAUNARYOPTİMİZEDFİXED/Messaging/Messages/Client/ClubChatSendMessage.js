var ByteStream = require("../../../DataStream/ByteStream");

module.exports = class {
    constructor() {
        this.ByteStream = new ByteStream();
    }
    encode(chatmessage) {
    this.ByteStream.writeString(chatmessage);
    }
}