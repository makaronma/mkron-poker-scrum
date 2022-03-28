import { useState, useEffect, useCallback } from "react";

const useStory = (socket) => {
  const [stories, setStories] = useState([]);

  const [activeStoryIndex, setActiveStoryIndex] = useState(null);
  const [started, setStarted] = useState(false);

  const [loading, setLoading] = useState(true);

  const resetStory = useCallback(() => {
    setStarted(false);
    setActiveStoryIndex(null);
  }, []);

  useEffect(() => {
    if (!socket) return;
    // init
    socket.emit("ALL_STORIES", null, (res) => {
      setStories(res.stories);
    });

    socket.emit("ACTIVE_STORY_INDEX", null, (res) => {
      if (res.storyIndex !== null && res.storyIndex >= 0) {
        setStarted(true);
      }
      setLoading(false);
    });

    socket.on("RESTART_GAME", () => {
      console.log("restart game from server");
      resetStory();
    });
  }, [socket, resetStory]);

  useEffect(() => {
    if (!socket) return;

    // chosen story
    socket.on("CHOOSE_STORY", (args) => {
      setActiveStoryIndex(args.activeStoryIndex);
    });
  }, [socket]);

  const handleChooseStory = useCallback(
    (e, selected) => {
      e.preventDefault();
      socket.emit("CHOOSE_STORY", { storyIndex: selected });
    },
    [socket]
  );

  return {
    stories,
    activeStoryIndex,
    handleChooseStory,
    started,
    loading,
  };
};

export default useStory;
