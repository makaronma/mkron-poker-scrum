const {
  handleConnection,
  handleUser,
  handleRoom,
  handleChat,
  handleDebug,
  handleStory,
  handlePoll,
} = require("./handlers");

const data = {
  rooms: [],
};

const socket = (io) => {
  io.on("connection", (socket) => {
    socket.emit("SERVER_RESTART", null);
    const user = { id: null, email: null };

    handleConnection(socket, data, user);

    handleUser(socket, data, user, io);
    handleRoom(socket, data, user);
    handleChat(socket, data, user);
    handleStory(socket, data, user, io);
    handlePoll(socket, data, user, io);

    handleDebug(socket, data, user);
  });
};

module.exports = socket;
