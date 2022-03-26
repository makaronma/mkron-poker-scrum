const { v4: uuidv4 } = require("uuid");

// Handle:
// Connect
// Disconnect
// Connect Error

const handleConnection = (socket, data, user) => {
  // On Connect
  // Update this user
  const id = uuidv4();
  user.id = id;
  console.log(`[USER_CONNECTED]: (${user.id})`);

  socket.on("disconnect", () => {
    if (user.roomID) {
      // Remove this user from the room
      const userRoom = getUserRoom(data, user);
      userRoom.users = userRoom.users.filter((u) => u.id !== user.id);

      // Tell users in the same room to remove this user
      socket.to(user.roomID).emit("REMOVE_USER", { id });
    }
    
    console.log(`[USER_DISCONNECTED]: (${user.id})`);
  });

  socket.on("connect_error", (e) => {
    console.log(`[CONNECT_ERROR]: due to ${e.message}`);
  });
};

module.exports = handleConnection;
