import { useCallback } from "react";

// Custom Hooks
import useSocketSetup from "./hooks/useSocketSetup";
import useLogin from "./hooks/useLogin";
import useRoom from "./hooks/useRoom";

// Components
import LoginForm from "./components/common/LoginForm";
import RoomForm from "./components/common/RoomForm";
import UserArea from "./components/UserArea";

function App() {
  const { socket, serverRestarted, setServerRestarted } = useSocketSetup();
  const {
    emailRef,
    handleLogin,
    isLogged,
    isLogging,
    error: loginError,
  } = useLogin(socket, serverRestarted, setServerRestarted);

  const {
    roomRef,
    handleChooseRoom,
    roomID,
    isJoined,
    error: roomError,
  } = useRoom(socket, serverRestarted, setServerRestarted);

  const handleDebug = useCallback(() => {
    socket.emit("DEBUG", null, (res) => {
      console.log(res);
    });
  }, [socket]);

  return (
    <div className="App">
      <div className="header">
        <h1>POKER SCRUM</h1>
        {isJoined && <h3 className="roomID">Room ID: {roomID}</h3>}
        <button onClick={handleDebug}>Debug</button>
      </div>
      <div className="main">
        {!isLogged ? (
          <LoginForm
            emailRef={emailRef}
            handleLogin={handleLogin}
            isLogging={isLogging}
            error={loginError}
          />
        ) : !isJoined ? (
          <RoomForm
            roomRef={roomRef}
            handleChooseRoom={handleChooseRoom}
            roomID={roomID}
            isJoined={isJoined}
            error={roomError}
          />
        ) : (
          <UserArea socket={socket} />
        )}
      </div>
    </div>
  );
}

export default App;
