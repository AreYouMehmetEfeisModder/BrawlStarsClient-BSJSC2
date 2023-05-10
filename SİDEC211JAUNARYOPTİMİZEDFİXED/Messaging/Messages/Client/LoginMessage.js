var ByteStream = require("../../../DataStream/ByteStream");

module.exports = class {
    constructor() {
        this.ByteStream = new ByteStream();
    }
    encode() {
        this.ByteStream.writeInt(0); // high
        this.ByteStream.writeInt(0); // low
        this.ByteStream.writeString(); // token

        this.ByteStream.writeInt(47);
        this.ByteStream.writeInt(1);
        this.ByteStream.writeInt(227);
        this.ByteStream.writeString("6ebd39e6a3941f9f793fcda37eecc82a21749691");

        this.ByteStream.writeString();
        this.ByteStream.writeDataReference(1, 0);
        this.ByteStream.writeString("en-US");
        this.ByteStream.writeString();
        this.ByteStream.writeBoolean(false);
        this.ByteStream.writeString();
        this.ByteStream.writeString();
        this.ByteStream.writeBoolean(true);
        this.ByteStream.writeString();
        this.ByteStream.writeInt(1448);
        this.ByteStream.writeVInt(0);
        this.ByteStream.writeString();

        this.ByteStream.writeString();
        this.ByteStream.writeString();
        this.ByteStream.writeVInt(0);

        this.ByteStream.writeString();
        this.ByteStream.writeString();
        this.ByteStream.writeString();

        this.ByteStream.writeString();

        this.ByteStream.writeBoolean(false);
        this.ByteStream.writeString();
        this.ByteStream.writeString();
    }
}
