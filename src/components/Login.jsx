import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div>
      <h2>Login Page</h2>
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
      <button>Login</button>
      <p>Don't have an account ? </p>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default Login;
