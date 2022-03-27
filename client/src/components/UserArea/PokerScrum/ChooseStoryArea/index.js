import { useState } from "react";
import StoryItem from "./StoryItem";

const ChooseStoryArea = ({ stories, handleChooseStory }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="chooseStoryArea">
      <h3>Choose a story</h3>
      <div className="storiesContainer">
        {stories.map((story, index) => (
          <StoryItem
            story={story}
            key={`story-${index}`}
            index={index}
            setSelected={setSelected}
            isSelected={selected === index}
          />
        ))}
      </div>

      <div
        className="confirmBtn"
        onClick={(e) => handleChooseStory(e, selected)}
      >
        Start
      </div>
    </div>
  );
};

export default ChooseStoryArea;
