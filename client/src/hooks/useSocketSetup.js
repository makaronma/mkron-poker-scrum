import { useState, useEffect } from "react";
import io from "socket.io-client";

const useSocketSetup = () => {
  const [socket, setSocket] = useState(null);
  
  useEffect(() => {
    setSocket(io("/"));
  }, []);

  return { socket };
};

export default useSocketSetup;
