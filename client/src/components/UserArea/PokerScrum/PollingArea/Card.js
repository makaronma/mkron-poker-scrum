import { memo } from "react";

const Card = ({ val, index, setSelected, isSelected }) => {
  return (
    <div
      className={`card${isSelected ? " selected" : ""}`}
      onClick={() => setSelected(index)}
    >
      {val}
    </div>
  );
};

export default memo(Card);
