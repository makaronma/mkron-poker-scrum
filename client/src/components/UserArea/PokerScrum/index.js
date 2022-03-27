import useStory from "../../../hooks/useStory";
import usePoll from "../../../hooks/usePoll";
import ChooseStoryArea from "./ChooseStoryArea";
import PollingArea from "./PollingArea";

const PokerScrum = ({ socket }) => {
  const { stories, activeStoryIndex, handleChooseStory, started, loading } =
    useStory(socket);

  const { handleChoosePoll, result } = usePoll(socket);

  return (
    <div className="pokerScrum">
      {loading ? (
        <p>Loading . . .</p>
      ) : started ? (
        <p>Started. Please wait the polling finish</p>
      ) : activeStoryIndex !== null && activeStoryIndex >= 0 ? (
        <PollingArea
          stories={stories}
          activeStoryIndex={activeStoryIndex}
          handleChoosePoll={handleChoosePoll}
          result={result}
        />
      ) : (
        <ChooseStoryArea
          stories={stories}
          handleChooseStory={handleChooseStory}
        />
      )}
    </div>
  );
};

export default PokerScrum;
