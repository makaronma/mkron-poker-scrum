import { memo } from "react";

const StoryItem = ({ story, index, setSelected, isSelected }) => {
  return (
    <div
      className={`storyItem${isSelected ? " selected" : ""}`}
      onClick={() => setSelected(index)}
    >
      {story}
    </div>
  );
};

export default memo(StoryItem);
