var ByteStream = require("../../../DataStream/ByteStream");

module.exports = class {
    constructor() {
        this.ByteStream = new ByteStream();
    }
    encode(name){
        this.ByteStream.writeString(name);
        this.ByteStream.writeBoolean(false);
    }
}