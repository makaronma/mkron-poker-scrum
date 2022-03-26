const getUserRoom = (data, user) =>
  data.rooms.find((r) => r.id === user.roomID);

module.exports = { getUserRoom };
