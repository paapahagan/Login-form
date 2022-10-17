import React from "react";

// on mount check if a token exists
// if yes, navigate to profile
// else do nothing

function Login(props) {
  return (
    <form onSubmit={props.handleLogin}>
      <h2>Login Page</h2>
      <div>
        <label>Email :</label>
        <input
          placeholder="Enter your Email"
          type="email"
          value={props.email}
          onChange={props.updateEmail}
          required
        />
      </div>
      <br />
      <div>
        <label>Password :</label>
        <input
          placeholder="Enter Passowrd"
          type="password"
          value={props.password}
          onChange={props.updatePassword}
          onSubmit={props.handleLogin}
          required
        />
      </div>
      <p></p>
      <br />
      <button type="submit">Login</button>

      <p>Don't have an account ? </p>
      <button onClick={props.handleSignup}>Sign Up</button>
    </form>
  );
}

export default Login;
