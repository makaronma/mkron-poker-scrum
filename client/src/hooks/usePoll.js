import { useState, useEffect, useCallback } from "react";

const usePoll = (socket) => {
  const [result, setResult] = useState(null);
  const [loadingPolls, setLoadingPolls] = useState(false);

  const resetPoll = useCallback(() => {
    setResult(null);
    setLoadingPolls(false);
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("POLL_RESULT", (args) => {
      setResult(args.result);
      setLoadingPolls(false);
    });

    socket.on("RESTART_GAME", () => {
      console.log("restart game from server");
      resetPoll();
    });
  }, [socket, resetPoll]);

  const handleChoosePoll = useCallback(
    (e, poll) => {
      e.preventDefault();
      // prevent select after submit
      setLoadingPolls(true);
      socket.emit("CHOOSE_POLL", { poll });
    },
    [socket]
  );

  const handleRetart = useCallback(
    (e) => {
      e.preventDefault();
      console.log("restart");
      socket.emit("RESTART_GAME");
    },
    [socket]
  );

  return { handleChoosePoll, result, loadingPolls, handleRetart };
};

export default usePoll;
