const getUserRoom = (data, user) =>
  data.rooms.find((r) => r.id === user.roomID);

const createEmptyRoom = (id) => {
  return {
    id,
    users: [],
    messages: [],
    game: {
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
    },
  };
};

module.exports = { getUserRoom, createEmptyRoom };
