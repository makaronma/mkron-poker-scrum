const {
  handleConnection,
  handleUser,
  handleRoom,
  handleChat,
  handleDebug,
} = require("./handlers");

const data = {
  rooms: [],
};

const socket = (io) => {
  io.on("connection", (socket) => {
    const user = { id: null, email: null };

    handleConnection(socket, data, user);
    handleUser(socket, data, user);
    handleRoom(socket, data, user);
    handleChat(socket, data, user);

    handleDebug(socket, data, user);
  });
};

module.exports = socket;
