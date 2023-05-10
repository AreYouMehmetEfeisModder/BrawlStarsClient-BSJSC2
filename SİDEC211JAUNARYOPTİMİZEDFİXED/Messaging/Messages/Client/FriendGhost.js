var ByteStream = require("../../../DataStream/ByteStream");

module.exports = class {
    constructor() {
        this.ByteStream = new ByteStream();
    }
    encode(high,low) {
        this.ByteStream.writeInt(high); // high
        this.ByteStream.writeInt(low); // low
        this.ByteStream.writeInt(5);
        this.ByteStream.writeInt(69);
        
    }
}
