const MessageInputArea = ({ handleSendMessage, msgInputRef }) => {
  return (
    <div className="messageInputArea">
      <form onSubmit={handleSendMessage}>
        <input type="text" className="message" ref={msgInputRef} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default MessageInputArea;
