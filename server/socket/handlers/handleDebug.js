const handleDebug = (socket, data, user) => {
  socket.on("DEBUG", (arg, cb) => {
    console.log(`[DEBUG]`);

    cb(data);
  });
};

module.exports = handleDebug;
