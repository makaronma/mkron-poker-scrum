import { memo, useState } from "react";

const OnlineUsersDisplay = ({ socket, isLogged, roomID }) => {
  const [users, setUsers] = useState([
    { email: "asd@knaf.com" },
    { email: "xa@asd.com" },
    { email: "asd@knaf.com" },
    { email: "xa@asd.com" },
    { email: "asd@knaf.com" },
    { email: "xa@asd.com" },
    { email: "asd@knaf.com" },
    { email: "xa@asd.com" },
    { email: "asd@knaf.com" },
    { email: "xa@asd.com" },
    { email: "asd@knaf.com" },
    { email: "xa@asd.com" },
    { email: "asd@knaf.com" },
    { email: "xa@asd.com" },
    { email: "asd@knaf.com" },
    { email: "xa@asd.com" },
    { email: "asd@knaf.com" },
    { email: "xa@asd.com" },
    { email: "asd@knaf.com" },
    { email: "xa@asd.com" },
    { email: "asd@knaf.com" },
    { email: "xa@asd.com" },
    { email: "asd@knaf.com" },
    { email: "xa@asd.com" },
    { email: "asd@knaf.com" },
    { email: "xa@asd.com" },
    { email: "asd@knaf.com" },
    { email: "xa@asd.com" },
    { email: "asd@knaf.com" },
    { email: "xa@asd.com" },
    { email: "asd@knaf.com" },
    { email: "xa@asd.com" },
  ]);

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
