import ChatRoom from "./ChatRoom";
import OnlineUsersDisplay from "./OnlineUsersDisplay";
import PokerScrum from "./PokerScrum";

const index = () => {
  return (
    <div className="userArea">
      <div className="left">
        <PokerScrum />
        <OnlineUsersDisplay />
      </div>
      <div className="right">
        <ChatRoom />
      </div>
    </div>
  );
};

export default index;
