import { memo, useRef } from "react";

import useChat from "../../../hooks/useChat";

import MessageInputArea from "./MessageInputArea";
import MessageItem from "./MessageItem";

const ChatRoom = ({ socket }) => {
  const { messages, unsentMessages, msgInputRef, handleSendMessage } =
    useChat(socket);

  const messageDisplayRef = useRef();

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
      <MessageInputArea
        handleSendMessage={handleSendMessage}
        msgInputRef={msgInputRef}
      />
    </div>
  );
};

export default memo(ChatRoom);
