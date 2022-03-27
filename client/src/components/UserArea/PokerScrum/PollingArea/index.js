import { useState } from "react";
import Card from "./Card";

const cards = [1, 2, 3, 8, 13, "no_idea", "resign"];

const PollingArea = ({
  stories,
  activeStoryIndex,
  handleChoosePoll,
  result,
}) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="pollingArea">
      <h3>Current Active Story: {stories[activeStoryIndex]}</h3>

      {result ? (
        <>
          <h4>Result: </h4>
          <table className="resultBoard">
            <thead>
              <tr className="row">
                <th>User</th>
                <th>Poll</th>
              </tr>
            </thead>
            <tbody>
              {result.map((r, index) => (
                <tr key={`poll-result-row-${index}`}>
                  <td>{r.user.email}</td>
                  <td>{r.poll}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
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
              />
            ))}
          </div>
          <div
            className="confirmBtn"
            onClick={(e) => handleChoosePoll(e, selected)}
          >
            Confirm
          </div>
        </>
      )}
    </div>
  );
};

export default PollingArea;
