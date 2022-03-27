const handleRoom = (socket, data, user) => {
  socket.on("JOIN_ROOM", ({ roomID }, cb) => {
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
      const newRoom = {
        id: roomID,
        users: [user],
        messages: [],
        choices: [],
        stories: [
          "implement chat feature",
          "add KYC UI to back office",
          "create FX market stop order",
        ],
      };
      // Add user to room
      data.rooms = [...data.rooms, newRoom];
    }

    cb({
      isJoined: true,
    });
  });
};

module.exports = handleRoom;
