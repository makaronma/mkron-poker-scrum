const {
  handleConnection,
  handleUser,
  handleChat,
  handleRoom,
} = require("./handlers");

const data = {
  rooms: [
    {
      id: "DDD",
      users: [],
      choices: [],
      messages: [],
    },
  ],
};

const socket = (io) => {
  io.on("connection", (socket) => {
    const user = { id: null, email: null };

    handleConnection(socket, data, user);
    handleUser(socket, data, user);
  });
};

module.exports = socket;
