const { getUserRoom, createEmptyRoom, createEmptyGame } = require("./utils");

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
      console.log(`[POLL_FULLFILLED]: room-{${user.roomID}} (${user.id})`);
      io.to(room.id).emit("POLL_RESULT", {
        result: room.game.polls.sort((a, b) => a.poll - b.poll),
      });
    }
  });

  socket.on("RESTART_GAME", (args) => {
    if (!user.email || !user.roomID) return;

    console.log(`[RESTART_GAME]: room-{${user.roomID}} (${user.id})`);

    const room = getUserRoom(data, user);

    // Choose the story for this room
    room.game = createEmptyGame();

    io.to(user.roomID).emit("RESTART_GAME");
  });
};
module.exports = handlePoll;
