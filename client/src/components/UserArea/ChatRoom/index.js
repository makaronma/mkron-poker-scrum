import { useState, useRef, memo } from "react";
import MessageInputArea from "./MessageInputArea";
import MessageItem from "./MessageItem";


const ChatRoom = () => {
  const [messages, setMessages] = useState([
    {
      isSelf: true,
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      user: {
        email: "asd@lkn.com",
      },
      message: "HELLOHELLOHELLO HELLO HELLOHELLO HELLO HELLO   HELLO",
    },
    {
      user: {
        email: "asd@lkn.com",
      },
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      user: {
        email: "asd@lkn.com",
      },
      message: "HELLOHELLOHELLO HELLOHELLO HELLO HELLO HELLO   HELLO",
    },
    {
      user: {
        email: "asd@lkn.com",
      },
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      isSelf: true,
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      isSelf: true,
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      user: {
        email: "asd@lkn.com",
      },
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      user: {
        email: "asd@lkn.com",
      },
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      user: {
        email: "asd@lkn.com",
      },
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      user: {
        email: "asd@lkn.com",
      },
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      isSelf: true,
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      isSelf: true,
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      user: {
        email: "asd@lkn.com",
      },
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      user: {
        email: "asd@lkn.com",
      },
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      user: {
        email: "asd@lkn.com",
      },
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      user: {
        email: "asd@lkn.com",
      },
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      isSelf: true,
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      isSelf: true,
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      user: {
        email: "asd@lkn.com",
      },
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      user: {
        email: "asd@lkn.com",
      },
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      user: {
        email: "asd@lkn.com",
      },
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      user: {
        email: "asd@lkn.com",
      },
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      isSelf: true,
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      isSelf: true,
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      user: {
        email: "asd@lkn.com",
      },
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      user: {
        email: "asd@lkn.com",
      },
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      user: {
        email: "asd@lkn.com",
      },
      message:
        "HELLOHELLOHELLO HELLO HEHELLO HELLO HELLOHELLO HELLO HELLOLLO   HELLO",
    },
    {
      user: {
        email: "asd@lkn.com",
      },
      message:
        "HELLOHELLOHELLO HELLHELLO HELLO HELLOHELLO HELLO HELLOHELLO HELLO HELLOHELLO HELLO HELLOHELLO HELLO HELLOO HELLO   HELLO",
    },
    {
      isSelf: true,
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      isSelf: true,
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      user: {
        email: "asd@lkn.com",
      },
      message:
        "HELLOHELLOHELHELLO HELLO HELLOHELLO HELLO HELLOLO HELLO HELLO   HELLO",
    },
    {
      user: {
        email: "asd@lkn.com",
      },
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      user: {
        email: "asd@lkn.com",
      },
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
    {
      user: {
        email: "asd@lkn.com",
      },
      message:
        "HELLOHELLOHELHELLO HELLO HELLOHELLO HELLO HELLOHELLO HELLO HELLOLO HELLO HELLO   HELLO",
    },
    {
      isSelf: true,
      message: "HELLOHELLOHELLO HELLO HELLO   HELLO",
    },
  ]);
  const [unsentMessages, setUnsentMessages] = useState([]);
  const messageDisplayRef = useRef();

  const msgRef = useRef();
  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log("send message");
  };

  return (
    <div className="chatRoom">
      <div className="chatRoomHead">CHAT ROOM</div>
      <div className="messageDisplay" ref={messageDisplayRef}>
        {messages.map((message, index) => (
          <MessageItem message={message} key={`message-${index}`} />
        ))}
        {unsentMessages.map((message, index) => (
          <MessageItem message={message} key={`unSentMessage-${index}`} />
        ))}
      </div>
      <MessageInputArea handleSendMessage={handleSendMessage} msgRef={msgRef} />
    </div>
  );
};

export default memo(ChatRoom);
