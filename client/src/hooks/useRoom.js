import { useState, useRef, useCallback } from "react";
import { containSpace } from "../utils";

const useRoom = (socket) => {
  const [roomID, setRoomID] = useState("");
  const [error, setError] = useState(null);

  const roomRef = useRef();
  const [isJoined, setIsJoined] = useState(false);

  const handleChooseRoom = useCallback(
    (e) => {
      e.preventDefault();
      const roomID = roomRef.current.value;

      if (!roomID) {
        setError("Please Input a room ID.");
        return;
      }

      // if only contain spaces
      if (containSpace(roomID)) {
        setError("Cannot contains spaces.");
        return;
      }

      setRoomID(roomID);

      socket.emit("JOIN_ROOM", { roomID }, (res) => {
        if (res.isJoined) {
          setIsJoined(res.isJoined);
        }
      });
    },
    [setRoomID, socket]
  );

  return { roomRef, handleChooseRoom, roomID, isJoined, error };
};

export default useRoom;
