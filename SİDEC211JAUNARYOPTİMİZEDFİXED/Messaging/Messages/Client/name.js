var ByteStream = require("../../../DataStream/ByteStream");

module.exports = class {
    constructor() {
        this.ByteStream = new ByteStream();
    }
    encode(name) {
        this.ByteStream.writeString(name); //ğ
        this.ByteStream.writeVInt(1);
        
    }
}
