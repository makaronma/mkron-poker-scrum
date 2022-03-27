import { memo } from "react";

const Card = ({ val, index, setSelected, isSelected, loadingPolls }) => {
  return (
    <div
      className={`card${isSelected ? " selected" : ""}`}
      onClick={loadingPolls ? null : () => setSelected(index)}
    >
      {val}
    </div>
  );
};

export default memo(Card);
