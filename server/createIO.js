const createIO = (app) => {
  const http = require("http");
  const server = http.createServer(app);
  const io = require("socket.io")(server, { cors: { origin: "*" } });
  const PORT = process.env.PORT || 5000;

  server.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
  });

  return io;
};

module.exports = createIO;
