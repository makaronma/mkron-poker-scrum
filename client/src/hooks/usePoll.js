import { useState, useEffect, useCallback } from "react";

const usePoll = (socket) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (!socket) return;

    socket.on("POLL_RESULT", (args) => {
      setResult(args.result);
    });
  }, [socket]);

  const handleChoosePoll = useCallback(
    (e, selected) => {
      e.preventDefault();
      socket.emit("CHOOSE_POLL", { poll: "1" });
    },
    [socket]
  );

  // sort result by poll val

  return { handleChoosePoll, result };
};

export default usePoll;
