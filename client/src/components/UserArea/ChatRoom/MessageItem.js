import { memo } from "react";
const MessageItem = ({ message }) => {
  return (
    <div className={`messageItem${message.isSelf ? " right" : ""}`}>
      <div className="messageBox">
        {message.user ? (
          <div className="userEmail">{message.user.email}</div>
        ) : (
          ""
        )}
        <div className="message">{message.message}</div>
      </div>
    </div>
  );
};

export default memo(MessageItem);
