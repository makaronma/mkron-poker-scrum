const { v4: uuidv4 } = require("uuid");
const { getUserRoom } = require("./utils");

const handleChat = (socket, data, user) => {
  socket.on("NEW_MESSAGE", (arg, cb) => {
    console.log(`[USER_ADD_NEW_MESSAGE]: room-{${user.roomID}} (${user.id})`);

    const newMessage = {
      message: arg.newMessage,
      user: {
        id: user.id,
        email: user.email,
      },
    };

    // Add new message to the room
    const room = getUserRoom(data, user);
    room.messages = [...room.messages, newMessage];
    cb({ isSent: true });

    // PUSH new message to all users
    socket.to(user.roomID).emit("NEW_MESSAGE", { newMessage });
  });

  socket.on("ALL_MESSAGES", (arg, cb) => {
    console.log(
      `[USER_REQUEST_ALL_MESSAGE]: room-{${user.roomID}} (${user.id})`
    );

    // Send All Users of this room
    const room = getUserRoom(data, user);
    cb({ messages: room.messages });
  });
};

module.exports = handleChat;
