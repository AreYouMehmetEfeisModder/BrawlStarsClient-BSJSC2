var LogicLaserMessageFactory = require("./LogicLaserMessageFactory");
var StartSpectateMessage = require("./Messages/Client/StartSpectateMessage");
var ClientHelloMessage = require("./Messages/Client/ClientHelloMessage");
var LoginMessage = require("./Messages/Client/LoginMessage");
var Friend = require("./Messages/Client/Friend");
var FriendGhost = require("./Messages/Client/FriendGhost");
var SetName = require("./Messages/Client/SetName");
var Spectate = require("./Messages/Client/Spectate");
var Club = require("./Messages/Client/Club");
var ClubChatSendMessage = require("./Messages/Client/ClubChatSendMessage");
var PepperCrypto = require("../Crypto/PepperCrypto");
var LeaveClubMessage = require("./Messages/Client/LeaveClubMessage");

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
    constructor(socket, queue, high, low, wws, name, chatmessage) {
        this._queue = queue;
        this._socket = socket;
        this.crypto = new PepperCrypto();
        this.high = high;
        this.low = low;
        this.wws = wws;
        this.name = name;
        this.chatmessage = chatmessage;
    }
    
    pendingJob() {
        if (this._queue.size() < 7) return false;
        return this._queue.get().readUIntBE(2, 3) <= this._queue.size() - 7;
    }
    update() {
        var buffer = this._queue.get();
        var length = buffer.readUIntBE(2, 3);
        var type = buffer.readUInt16BE(0);
        var version = buffer.readUInt16BE(5);
        this._queue.release(length+7);
        var payload = this.crypto.decrypt(type, buffer.slice(7, length+7));
        if (payload == null) {
            console.log(`failed to decrypt ${type}`)
        }
        var message = LogicLaserMessageFactory.createMessageByType(type, this.wws, this.name);
        if (message) {
        	console.log(`received message of type: ${type}, length: ${length}, version: ${version}`);
            message.ByteStream.set(payload);
            message.decode();
            message.process(this);
        } else {
            console.log(`ignoring unsupported message (${type})`);
        }
        
    }
    
    sendPepperAuthentication() {
        var message = new ClientHelloMessage();
        message.ByteStream.set(100);
        message.encode();
        this.encryptAndWriteToSocket(10100, 0, message.ByteStream.getBytes());
    }
    
    sendPepperLogin() {
        var message = new LoginMessage();
        message.ByteStream.set(250);
        message.encode();
        this.encryptAndWriteToSocket(10101, 0, message.ByteStream.getBytes());
    }
    
    sendFriend() {
        var message = new Friend();
        message.ByteStream.set(100);
        message.encode(this.high,this.low);
        this.encryptAndWriteToSocket(10502, 0, message.ByteStream.getBytes());
    }
    
    sendFriendGhost() {
        var message = new FriendGhost();
        message.ByteStream.set(100);
        message.encode(this.high,this.low);
        this.encryptAndWriteToSocket(10502, 0, message.ByteStream.getBytes());
    }
    
    sendSetName() {
        var message = new SetName();
        message.ByteStream.set(100);
        message.encode(this.name);
        this.encryptAndWriteToSocket(10212, 0, message.ByteStream.getBytes());
    }
    sendSpectate() {
        var message = new Spectate();
        message.ByteStream.set(100);
        message.encode(this.high,this.low);
        this.encryptAndWriteToSocket(14104, 0, message.ByteStream.getBytes());
    }
    
    sendStartSpectateMessage() {
       var message = new StartSpectateMessage();
        message.ByteStream.set(100);
        message.encode(this.high,this.low);
        this.encryptAndWriteToSocket(14104, 0, message.ByteStream.getBytes());
    }
    sendClub() {
       var message = new Club();
        message.ByteStream.set(100);
        message.encode(this.high,this.low);
        this.encryptAndWriteToSocket(14305, 0, message.ByteStream.getBytes());
    }
    
     sendClubChatSendMessage(chatmessage) {
     var message = new ClubChatSendMessage();
     message.ByteStream.set(100);
     message.encode(this.chatmessage);
     this.encryptAndWriteToSocket(14315, 0, message.ByteStream.getBytes());
 }
    sendLeaveClubMessage() {
        var message = new LeaveClubMessage();
        message.ByteStream.set(100);
        message.encode(this.high,this.low);
        this.encryptAndWriteToSocket(14308, 0, message.ByteStream.getBytes());
 }       
    
    encryptAndWriteToSocket(type, version, buffer) {
        var header = Buffer.alloc(7);
        header.writeUInt16BE(type, 0);
        buffer = this.crypto.encrypt(type, buffer);
        header.writeUIntBE(buffer.length, 2, 3);
        header.writeUInt16BE(version, 5);
        this._socket.write(header);
        this._socket.write(buffer);
        console.log(`sent message of type: ${type}, length: ${buffer.length}`);
    }
}

module.exports = {
    Messaging,
    Queue
}
