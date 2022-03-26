import { useState, useRef, useCallback } from "react";

import ErrorMessage from "./ErrorMessage";
const RoomForm = () => {
  const [roomID, setRoomID] = useState();
  const [isJoined, setIsJoined] = useState(false);
  const roomRef = useRef();
  const handleChooseRoom = useCallback(() => {}, []);
  const [error, setError] = useState();

  return (
    <>
      {!roomID ? (
        <div className="roomForm">
          <h5>Join/Create a room with its ID: </h5>
          <form onSubmit={handleChooseRoom}>
            <input type="text" className="email" ref={roomRef} />
            <button type="submit">Join</button>
          </form>
          <ErrorMessage error={error} />
        </div>
      ) : !isJoined ? (
        "Joining . . ."
      ) : null}
    </>
  );
};

export default RoomForm;
