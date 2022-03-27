const { getUserRoom } = require("./utils");

const handleStory = (socket, data, user, io) => {
  socket.on("CHOOSE_STORY", (args) => {
    if (!user.email || !user.roomID) return;

    console.log(
      `[USER_CHOOSE_STORIES]: room-{${user.roomID}} {${args.storyIndex}} (${user.id})`
    );

    const room = getUserRoom(data, user);
    
    // Reject other choice from other request
    if (room.game.isStarted) return;
    
    // Choose the story for this room
    room.game.activeStoryIndex = args.storyIndex;
    io.to(room.id).emit("CHOOSE_STORY", {
      activeStoryIndex: args.storyIndex,
    });

    // Set the players for the game
    room.game.isStarted = true;
    room.game.players = room.users;
  });

  socket.on("ALL_STORIES", (args, cb) => {
    if (!user.email || !user.roomID) return;

    console.log(`[REQUEST_ALL_STORIES]: room-{${user.roomID}} (${user.id})`);

    // Send All Stories of this room
    const room = getUserRoom(data, user);
    cb({ stories: room.game.stories });
  });

  socket.on("ACTIVE_STORY_INDEX", (args, cb) => {
    if (!user.email || !user.roomID) return;

    console.log(
      `[REQUEST_ACTIVE_STORY_INDEX]: room-{${user.roomID}} (${user.id})`
    );

    // Send All Stories of this room
    const room = getUserRoom(data, user);
    cb({ storyIndex: room.game.activeStoryIndex });
  });
};
module.exports = handleStory;
