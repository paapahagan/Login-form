import React from "react";

function Signup(props) {
  return (
    <div>
      <h2>Sign Up</h2>
      <div>
        <label>Name :</label>
        <input
          placeholder="Enter your Name"
          type="text"
          value={props.name}
          onChange={props.updateName}
        />
      </div>
      <br />
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
      <p>{props.error}</p>
      <br />
      <button onClick={props.handleSignUp}>Sign Up</button>
      <p>Already Signed up ?</p>
      <button onClick={props.handleLogin}>Login</button>
    </div>
  );
}

export default Signup;
