import useUsers from "../../hooks/useUsers";

import ChatRoom from "./ChatRoom";
import OnlineUsersDisplay from "./OnlineUsersDisplay";
import PokerScrum from "./PokerScrum";

const UserArea = ({ socket }) => {
  const { users } = useUsers(socket);

  return (
    <div className="userArea">
      <div className="left">
        <PokerScrum socket={socket} />
        <OnlineUsersDisplay users={users} />
      </div>
      <div className="right">
        <ChatRoom socket={socket} />
      </div>
    </div>
  );
};

export default UserArea;
