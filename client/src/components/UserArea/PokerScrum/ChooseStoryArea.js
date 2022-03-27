import StoryItem from "./StoryItem";
const ChooseStoryArea = ({ stories }) => {
  return (
    <div className="chooseStoryArea">
      <h3>Choose a story</h3>
      <div className="storiesContainer">
        {stories.map((story, index) => (
          <StoryItem story={story} key={`story-${index}`} />
        ))}
      </div>

      <div className="confirmBtn">Activate</div>
    </div>
  );
};

export default ChooseStoryArea;
