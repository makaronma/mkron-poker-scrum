const handleDebug = (socket, data, user) => {
  socket.on("DEBUG", (args, cb) => {
    console.log(`[DEBUG]`);

    cb(data);
  });
};

module.exports = handleDebug;
