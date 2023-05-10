var Messages = {
    20100: require("./Messages/Server/ServerHelloMessage"),
    20104: require("./Messages/Server/LoginOkMessage"),
    24101: require("./Messages/Server/OwnHomeDataMessage")
}

function createMessageByType(type, wws) {
    if (Messages[type]) {
    	if (type == 20104) {
    	      return new Messages[type](wws);
    	} else {
              return new Messages[type]();
        }
    }
}

module.exports = {
    createMessageByType
}
