import { useState, useRef, useCallback } from "react";
import ErrorMessage from "./ErrorMessage";

const LoginForm = () => {
  const [isLogging, setIsLogging] = useState(false);
  const [error, setError] = useState();
  const emailRef = useRef();

  const handleLogin = useCallback(() => {
    const email = emailRef.current.value;
    console.log(`login with${email}`);
  }, []);

  return (
    <>
      {isLogging ? (
        "Loading . . ."
      ) : (
        <div className="loginForm">
          <h5>Input Your Email: </h5>
          <form onSubmit={handleLogin}>
            <input type="text" className="email" ref={emailRef} />
            <button type="submit">Login</button>
          </form>
          <ErrorMessage error={error} />
        </div>
      )}
    </>
  );
};

export default LoginForm;
