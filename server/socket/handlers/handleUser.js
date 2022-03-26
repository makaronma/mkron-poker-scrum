const handleUser = (socket, data, user) => {
  socket.on("LOGIN", ({ email }, cb) => {
    console.log(`[USER_LOGIN]: ${email} (${user.id})`);

    // Update users
    user.email = email;
    cb({
      isLogged: true,
    });
  });
  
  socket.on("JOIN_ROOM", ({ roomID }, cb) => {
    console.log(`[USER_JOIN_ROOM]: ${roomID} (${user.id})`);
    
    // Add this user to all users in the room
    socket.to(roomID).emit("NEW_USERS", { user });
  });
  
  socket.on("ALL_USERS", (arg, cb) => {
    console.log(`[REQUEST_ALL_USERS]: room-{${user.roomID}} (${user.id})`);

    // Send All Users of this room
    const room = getUserRoom(data, user);
    cb({ users: room.users });
  });
};

module.exports = handleUser;
