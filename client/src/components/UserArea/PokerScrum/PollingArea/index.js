import { useState } from "react";
import Card from "./Card";
import ResultBoard from "./ResultBoard";

const cards = [1, 2, 3, 8, 13, "no_idea", "resign"];

const PollingArea = ({
  stories,
  activeStoryIndex,
  handleChoosePoll,
  result,
  loadingPolls,
  handleRetart,
}) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="pollingArea">
      <h3>Current Active Story: {stories[activeStoryIndex]}</h3>
      {result ? (
        <ResultBoard result={result} handleRetart={handleRetart} />
      ) : (
        <>
          <p>Select a card:</p>
          <div className="cardsContainer">
            {cards.map((val, index) => (
              <Card
                val={val}
                key={`card-${index}`}
                index={index}
                setSelected={setSelected}
                isSelected={selected === index}
                loadingPolls={loadingPolls}
              />
            ))}
          </div>

          {loadingPolls ? (
            <p>Waiting for others polls</p>
          ) : (
            <div
              className="confirmBtn"
              onClick={(e) => handleChoosePoll(e, cards[selected])}
            >
              Confirm
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PollingArea;
