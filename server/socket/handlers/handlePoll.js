const { getUserRoom } = require("./utils");

const handlePoll = (socket, data, user, io) => {
  socket.on("CHOOSE_POLL", (args) => {
    if (!user.email || !user.roomID) return;

    console.log(
      `[USER_CHOOSE_POLL]: room-{${user.roomID}} {${args.poll}} (${user.id})`
    );

    const room = getUserRoom(data, user);

    // Choose the story for this room
    room.game.polls = [
      ...room.game.polls,
      {
        user: {
          email: user.email,
        },
        poll: args.poll,
      },
    ];

    // if all polled, send result
    if (room.game.players.length === room.game.polls.length) {
      console.log("all polled");
      console.log(`[POLL_FULLFILLED]: room-{${user.roomID}} (${user.id})`);
      io.to(room.id).emit("POLL_RESULT", {
        result: room.game.polls,
      });
    }
  });
};
module.exports = handlePoll;
