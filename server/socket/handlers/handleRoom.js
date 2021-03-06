const { createEmptyRoom } = require("./utils");

const handleRoom = (socket, data, user) => {
  socket.on("JOIN_ROOM", ({ roomID }, cb) => {
    if (!user.email) return;

    console.log(`[USER_JOIN_ROOM]: room-{${roomID}} (${user.id})`);

    // Update room of this user
    socket.join(roomID);
    user.roomID = roomID;

    const existRoom = data.rooms.find((r) => r.id === roomID);
    if (existRoom) {
      // Add user to room
      existRoom.users = [...existRoom.users, user];
    } else {
      // Create a new room
      const newRoom = createEmptyRoom(roomID);
      newRoom.users = [...newRoom.users, user];
      // Add user to room 
      data.rooms = [...data.rooms, newRoom];
    }

    cb({
      isJoined: true,
    });
  });
};

module.exports = handleRoom;
