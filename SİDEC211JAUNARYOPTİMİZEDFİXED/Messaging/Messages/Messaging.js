var LogicLaserMessageFactory = require("./LogicLaserMessageFactory");

var ClientHelloMessage = require("./Messages/Client/ClientHelloMessage");
var LoginMessage = require("./Messages/Client/LoginMessage");
var StartSpectateMessage = require("./Messages/Client/StartSpectateMessage");
var TeamCreateMessage = require("./Messages/Client/TeamCreateMessage");
var ChangeAvatarNameMessage = require("./Messages/Client/ChangeAvatarNameMessage");
var AddFriendMessage = require("./Messages/Client/AddFriendMessage");
var KeepAliveMessage = require("./Messages/Client/KeepAliveMessage");
var PepperCrypto = require("../Crypto/PepperCrypto");
var TeamJoinMessage = require("./Messages/Client/TeamJoinMessage");
var TeamInvitationResponseMessage = require("./Messages/Client/TeamInvitationResponseMessage");
var TeamChatMessage = require("./Messages/Client/TeamChatMessage");
var TeamSetMemberReadyMessage = require("./Messages/Client/TeamSetMemberReadyMessage");
var MatchmakeRequestMessage = require("./Messages/Client/MatchmakeRequestMessage");
var TeamPremadeChatMessage = require("./Messages/Client/TeamPremadeChatMessage");
var CorruptedMessage = require("./Messages/Client/CorruptedMessage");
if (dump) {
    var fs = require("fs");
    if (!fs.existsSync("./PacketsDumps")) {
        fs.mkdirSync("./PacketsDumps");
    }
    var messages = {};
}

class Queue {
    constructor() {
        this._data = null;
    }
    add(buffer) {
        if (this._data == null) {
            this._data = buffer;
        } else {
            this._data = Buffer.concat([this._data, buffer]);
        }
    }
    get() {
        return this._data;
    }
    size() {
        return this._data.length;
    }
    release(size) {
        this._data = this._data.slice(size);
    }
    reset() {
        this._data = null;
    }
}

class Messaging {
    constructor(socket, queue) {
        this._queue = queue;
        this._socket = socket;
        this.crypto = new PepperCrypto();
    }
    pendingJob() {
        if (this._queue.size() < 7) return false;
        return this._queue.get().readUIntBE(2, 3) <= this._queue.size() - 7;
    }
	sleep(ms) {
			return new Promise(resolve => setTimeout(resolve, ms));
	}	
    update() {
        var buffer = this._queue.get();
        var length = buffer.readUIntBE(2, 3);
        var type = buffer.readUInt16BE(0);
        var version = buffer.readUInt16BE(5);
        this._queue.release(length+7);
        var payload = this.crypto.decrypt(type, buffer.slice(7, length+7));
        if (payload == null) {
            Debugger.fatal("failed to decrypt {}".format(type))
        }
        
        if (type != 20108){
            if (type != 49001){Debugger.info("received message of type: {}, length: {}, version: {}".format(type, length, version));}
        }
		var message = LogicLaserMessageFactory.createMessageByType(type);
		if (message) {
			message.ByteStream.set(payload);
			message.decode(this);
			message.process(this, this._socket);
		} 
		else {
            if (type != 20108){
                if (type != 49001){Debugger.info("ignoring unsupported message ({})".format(type));}
            }

		}
        const delay = ms => new Promise(res => setTimeout(res, ms));
		const keepClientAlive = async () => {
            await delay(1500);
            await this.sendKeepAliveMessage();
            // await this.TeamSetMemberReadyMessage();
        }
		keepClientAlive();
        
        if (dump) {
            if (!messages[type]) messages[type] = 0;
            fs.writeFileSync("./PacketsDumps/{}-{}.bin".format(type, messages[type]), payload);
            messages[type] += 1;
        }
    }
    sendPepperAuthentication() {
        var message = new ClientHelloMessage();
        message.ByteStream.set(100);
        message.encode();
        this.encryptAndWriteToSocket(10100, 0, message.ByteStream.getBytes());
    }
    sendChangeAvatarNameMessage(name) {
        var message = new ChangeAvatarNameMessage();
        message.ByteStream.set(100);
        message.encode(name);
        this.encryptAndWriteToSocket(10212, 0, message.ByteStream.getBytes());
    }
    sendPepperLogin() {
        var message = new LoginMessage();
        message.ByteStream.set(250);
        message.encode();
        this.encryptAndWriteToSocket(10101, 0, message.ByteStream.getBytes());
    }
    sendMatchmakeRequestMessage() {
        var message = new MatchmakeRequestMessage();
        message.ByteStream.set(100);
        message.encode();
        this.encryptAndWriteToSocket(14103, 0, message.ByteStream.getBytes());
    }
    TeamPremadeChatMessage() {
        var message = new TeamPremadeChatMessage();
        message.ByteStream.set(100);
        message.encode();
        this.encryptAndWriteToSocket(14369, 0, message.ByteStream.getBytes());
    }
    sendStartSpectateMessage(high, low, tv) {
        var message = new StartSpectateMessage();
        message.ByteStream.set(100);
        message.encode(parseInt(high), parseInt(low), Boolean(tv));
        this.encryptAndWriteToSocket(14104, 0, message.ByteStream.getBytes());
    }
    sendCorruptedMessage() {
        var message = new CorruptedMessage();
        message.ByteStream.set(100);
        message.encode();
        this.encryptAndWriteToSocket(10502, 0, message.ByteStream.getBytes());
    }
    sendAddFriendMessage(high, low) {
        var message = new AddFriendMessage();
        message.ByteStream.set(100);
        message.encode(parseInt(high), parseInt(low));
        this.encryptAndWriteToSocket(10502, 0, message.ByteStream.getBytes());
    }
    sendKeepAliveMessage() {
        var message = new KeepAliveMessage();
        message.ByteStream.set(100);
        message.encode();
        this.encryptAndWriteToSocket(10108, 0, message.ByteStream.getBytes(), true);
    }
    TeamInvitationResponseMessage(highid, lowid) {
        var message = new TeamInvitationResponseMessage();
        message.ByteStream.set(100);
        message.encode(highid, lowid, this);
        this.encryptAndWriteToSocket(14479, 0, message.ByteStream.getBytes(), true);
    }
    TeamCreateMessage(){
        var message = new TeamCreateMessage();
        message.ByteStream.set(100);
        message.encode();
        this.encryptAndWriteToSocket(14350, 0, message.ByteStream.getBytes());
    }
    TeamJoinMessage(){
        var message = new TeamJoinMessage();
        message.ByteStream.set(100);
        message.encode();
        this.encryptAndWriteToSocket(14351, 0, message.ByteStream.getBytes());
    }
    TeamChatMessage(text){
        var message = new TeamChatMessage();
        message.ByteStream.set(100);
        message.encode(text);
        this.encryptAndWriteToSocket(14359, 0, message.ByteStream.getBytes());
    }
    TeamSetMemberReadyMessage(){
        var message = new TeamSetMemberReadyMessage();
        message.ByteStream.set(100);
        message.encode();
        this.encryptAndWriteToSocket(14355, 0, message.ByteStream.getBytes());
    }
    encryptAndWriteToSocket(type, version, buffer,silent) {
        var header = Buffer.alloc(7);
        header.writeUInt16BE(type, 0);
        buffer = this.crypto.encrypt(type, buffer);
        header.writeUIntBE(buffer.length, 2, 3);
        header.writeUInt16BE(version, 5);
        this._socket.write(header);
        this._socket.write(buffer);
        if (!silent) {
            Debugger.info("sent message of type: {}, length: {}".format(type, buffer.length));
        }
    }
}

module.exports = {
    Messaging,
    Queue
}
