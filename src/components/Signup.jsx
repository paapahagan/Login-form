import React from "react";

function Signup() {
  return (
    <div>
      <h2>Sign Up</h2>
      <div>
        <label>Email :</label>
        <input placeholder="Enter your Email"></input>
      </div>
      <br />
      <div>
        <label>Password :</label>
        <input placeholder="Enter Passowrd"></input>
      </div>
      <br />
      <button>Sign Up</button>
      <p>Already Signed up ?</p>
      <button>Login</button>
    </div>
  );
}

export default Signup;
