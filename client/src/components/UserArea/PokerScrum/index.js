import { useState } from "react";
import ChooseStoryArea from "./ChooseStoryArea";
import PollingArea from "./PollingArea";

const stories = ["Build a store Build a store Build a store Build a store ", "build a web", "build a web", "build a web", "build a web", "build a web", "build a web", "build a web", "build a web", "build a web", "build a web", "cook", "eat"];

const PokerScrum = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="pokerScrum">
      <ChooseStoryArea stories={stories} />
      {/* <PollingArea activeStory={stories[activeIndex]} /> */}
    </div>
  );
};

export default PokerScrum;
