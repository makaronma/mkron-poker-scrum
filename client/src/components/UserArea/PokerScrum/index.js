import { useState } from "react";
import useStory from "../../../hooks/useStory";
import ChooseStoryArea from "./ChooseStoryArea";
import PollingArea from "./PollingArea";

const stories = [
  "Build a store Build a store Build a store Build a store ",
  "build a web",
  "eat",
];

const PokerScrum = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const abc = useStory();

  return (
    <div className="pokerScrum">
      <ChooseStoryArea stories={stories} />
      {/* <PollingArea activeStory={stories[activeIndex]} /> */}
    </div>
  );
};

export default PokerScrum;
