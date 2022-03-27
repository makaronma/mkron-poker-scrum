import { memo } from "react";

const OnlineUsersDisplay = ({ users }) => {
  return (
    <div className="onlineUsersDisplay">
      <h3>Online Users: </h3>
      <div className="userList">
        {users.map((user, index) =>
          user.email ? <span key={`userlist-${index}`}>{user.email}</span> : ""
        )}
      </div>
    </div>
  );
};

export default memo(OnlineUsersDisplay);
