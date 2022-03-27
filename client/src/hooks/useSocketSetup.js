import { useState, useEffect } from "react";
import io from "socket.io-client";

const useSocketSetup = () => {
  const [socket, setSocket] = useState(null);
  const [serverRestarted, setServerRestarted] = useState(false);

  useEffect(() => {
    setSocket(io("/"));
  }, []);

  useEffect(() => {
    if (!socket) return;
    socket.on("SERVER_RESTART", () => {
      console.log("server restart");
      setServerRestarted(true);
      setServerRestarted(false)
      console.log('reset done');
    });
  }, [socket]);

  return { socket, serverRestarted, setServerRestarted };
};

export default useSocketSetup;
