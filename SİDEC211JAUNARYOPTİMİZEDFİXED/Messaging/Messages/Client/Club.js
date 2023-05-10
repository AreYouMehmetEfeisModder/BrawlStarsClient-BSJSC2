var ByteStream = require("../../../DataStream/ByteStream");

module.exports = class {
    constructor() {
        this.ByteStream = new ByteStream();
    }
    encode(high,low) {
        this.ByteStream.writeInt(high);
        this.ByteStream.writeInt(low);
        this.ByteStream.writeByte(1);
        
    }
}
