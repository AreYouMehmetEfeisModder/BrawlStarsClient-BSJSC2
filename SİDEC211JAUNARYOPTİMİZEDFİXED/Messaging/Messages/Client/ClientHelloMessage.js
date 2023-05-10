var ByteStream = require("../../../DataStream/ByteStream");

module.exports = class {
    constructor() {
        this.ByteStream = new ByteStream();
    }
    encode() {
        this.ByteStream.writeInt(2); // protocol version
        this.ByteStream.writeInt(35); // crypto version
        this.ByteStream.writeInt(47); // major version
        this.ByteStream.writeInt(1); // build version
        this.ByteStream.writeInt(227); // minor version
        this.ByteStream.writeString("6ebd39e6a3941f9f793fcda37eecc82a21749691"); // master hash
        this.ByteStream.writeInt(0);
        this.ByteStream.writeInt(0);
    }
}
