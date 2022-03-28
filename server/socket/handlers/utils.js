const getUserRoom = (data, user) =>
  data.rooms.find((r) => r.id === user.roomID);

const createEmptyGame = () => {
  return {
    isStarted: false,
    players: [],
    stories: [
      "implement chat feature",
      "add KYC UI to back office",
      "create FX market stop order",
      "build the backend",
      "build the frontend",
      "have a lunch",
    ],
    activeStoryIndex: null,
    polls: [],
  };
};

const createEmptyRoom = (id) => {
  return {
    id,
    users: [],
    messages: [],
    game: createEmptyGame(),
  };
};

module.exports = { getUserRoom, createEmptyGame, createEmptyRoom };
