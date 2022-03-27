import { useState, useEffect, useRef, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

const useChat = (socket, serverRestarted) => {
  const [messages, setMessages] = useState([]);
  const [unsentMessages, setUnsentMessages] = useState([]);
  const msgInputRef = useRef();

  useEffect(() => {
    // Init
    socket.emit("ALL_MESSAGES", null, (res) => {
      setMessages(res.messages);
    });

    // Update new msg
    socket.on("NEW_MESSAGE", (args) => {
      setMessages((pMessages) => [...pMessages, args.newMessage]);
    });
  }, [socket]);

  const handleSendMessage = useCallback(
    (e) => {
      e.preventDefault();
      const messageTxt = msgInputRef.current.value;

      // if only contain spaces
      if (/^\s*$/.test(messageTxt)) return;

      msgInputRef.current.value = null;

      const id = uuidv4();
      const message = { id, message: messageTxt, isSelf: true };

      // Add Unsent Msg
      setUnsentMessages((p) => [...p, message]);

      // Recieve isSent notification
      socket.emit("NEW_MESSAGE", { newMessage: messageTxt }, (res) => {
        if (!res.isSent) return;

        // Remove Unsent Msg
        setUnsentMessages((p) => p.filter((m) => m.id !== id));

        // Add to Msg
        setMessages((pMessages) => [...pMessages, message]);
      });
    },
    [socket]
  );

  useEffect(() => {
    if (!serverRestarted) return;
    console.log("reseting chat");
    setMessages([]);
    setUnsentMessages([]);
  }, [serverRestarted]);

  return { messages, unsentMessages, msgInputRef, handleSendMessage };
};

export default useChat;
