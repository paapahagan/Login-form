import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import Signup from "./Signup";

function SignupContainer() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const updateEmail = (e) => setEmail(e.target.value);

  const updatePassword = (e) => setPassword(e.target.value);

  const updateName = (e) => setName(e.target.value);

  //submit details
  const handleSignUp = () => {
    axios
      .post(
        "https://jckwv5tur8.execute-api.eu-west-1.amazonaws.com/auth/signup",
        {
          name: name,
          email: email,
          password: password,
        }
      )
      .then(function (response) {
        navigate("/login");
        console.log(response);
      })
      .catch(function (error) {
        setError(error.response.data.message);
        console.log(error);
      });
  };
  return (
    <Signup
      name={name}
      email={email}
      password={password}
      updateName={updateName}
      updateEmail={updateEmail}
      updatePassword={updatePassword}
      handleLogin={handleLogin}
      handleSignUp={handleSignUp}
      error={error}
    />
  );
}

export default SignupContainer;
