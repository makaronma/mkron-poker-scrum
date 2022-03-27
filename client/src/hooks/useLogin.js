import { useCallback, useRef, useState, useEffect } from "react";
import { containSpace, isEmailValid } from "../utils";

const useLogin = (socket, serverRestarted, setServerRestarted) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isLogging, setIsLogging] = useState(false);
  const [error, setError] = useState(null);
  const emailRef = useRef();

  const handleLogin = useCallback(
    (e) => {
      e.preventDefault();
      const email = emailRef.current.value;

      // if contain spaces
      if (containSpace(email)) {
        setError("Cannot contains spaces.");
        return;
      }
      if (!isEmailValid(email)) {
        setError("Email format incorrect.");
        return;
      }

      setIsLogging(true);
      socket.emit("LOGIN", { email }, (res) => {
        setIsLogged(res.isLogged);
        setIsLogging(false);
      });
    },
    [socket]
  );

  useEffect(() => {
    if (!serverRestarted) return;
    console.log("reseting login");
    setError(null);
    setIsLogging(false);
    setIsLogged(false);
    setServerRestarted(false);
  }, [serverRestarted, setServerRestarted]);

  return { emailRef, handleLogin, isLogged, isLogging, error };
};

export default useLogin;
