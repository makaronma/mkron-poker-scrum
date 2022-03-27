import { useState, useEffect, useCallback } from "react";

const usePoll = (socket) => {
  const [result, setResult] = useState(null);
  const [loadingPolls, setLoadingPolls] = useState(false);

  useEffect(() => {
    if (!socket) return;

    socket.on("POLL_RESULT", (args) => {
      setResult(args.result);
      setLoadingPolls(false);
    });
  }, [socket]);

  const handleChoosePoll = useCallback(
    (e, poll) => {
      e.preventDefault();
      // prevent select after submit
      setLoadingPolls(true);
      socket.emit("CHOOSE_POLL", { poll });
    },
    [socket]
  );

  // sort result by poll val

  return { handleChoosePoll, result, loadingPolls };
};

export default usePoll;
