import ErrorMessage from "./ErrorMessage";

const LoginForm = ({ emailRef, handleLogin, isLogging, error }) => {
  return (
    <>
      <div className="loginForm">
        <h5>Input Your Email: </h5>
        <form onSubmit={handleLogin}>
          <input type="text" className="email" ref={emailRef} />
          <button type="submit">Login</button>
        </form>
        <ErrorMessage error={error} />
        {isLogging && <div>Logging. . . </div>}
      </div>
    </>
  );
};

export default LoginForm;
