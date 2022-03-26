import Card from "./Card";

const cards = [1, 2, 3, 8, 13, "no_idea", "resign"];

const PollingArea = ({ activeStory }) => {
  return (
    <div className="pollingArea">
      <h3>Current Active Story: {activeStory}</h3>
      <p>Select a card:</p>
      <div className="cardsContainer">
        {cards.map((val) => (
          <Card val={val} />
        ))}
      </div>
      <div className="confirmBtn">Confirm</div>
    </div>
  );
};

export default PollingArea;
