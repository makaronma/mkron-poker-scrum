const MessageInputArea = ({ handleSendMessage, msgRef }) => {
  return (
    <div className="messageInputArea">
      <form onSubmit={handleSendMessage}>
        <input type="text" className="message" ref={msgRef} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default MessageInputArea;
