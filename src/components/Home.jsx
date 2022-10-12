import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/Signup");
  };
  const handleLogin = () => {
    navigate("/Login");
  };

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <div>
        <button onClick={handleSignUp}>Sign Up</button>
        <button onClick={handleLogin}>Log In</button>
      </div>
    </div>
  );
}

export default Home;
