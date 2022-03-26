require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

// For Deployment
if (!process.env.IS_DEV) {
  console.log("Production");
  app.use(express.static(path.resolve(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
}

// Socket
const createIO = require("./createIO");
const socket = require("./socket");
const io = createIO(app);
socket(io);
