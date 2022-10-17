import React from "react";

// on mount check if a token exists
// if yes, navigate to profile
// else do nothing

function Login(props) {
  console.log(props);
  return (
    <div>
      <h2>Login Page</h2>
      <div>
        <label>Email :</label>
        <input
          placeholder="Enter your Email"
          type="email"
          value={props.email}
          onChange={props.updateEmail}
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
        />
      </div>
      <p></p>
      <br />
      <button onClick={props.handleLogin}>Login</button>
      <p>Don't have an account ? </p>
      <button onClick={props.handleSignup}>Sign Up</button>
    </div>
  );
}

export default Login;
