import { useState, useEffect } from "react";

const useUsers = (socket) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!socket) return;

    // init
    socket.emit("ALL_USERS", null, (res) => {
      setUsers(res.users);
    });
  }, [socket]);

  useEffect(() => {
    if (!socket) return;

    // new comer
    socket.on("NEW_USERS", (args) => {
      setUsers((prevUsers) => [...prevUsers, args.user]);
    });

    // a user disconnect
    socket.on("REMOVE_USER", (args) => {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== args.id));
    });
  }, [socket]);

  return { users };
};

export default useUsers;
