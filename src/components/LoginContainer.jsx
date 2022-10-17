import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Login from "./Login";

function LoginContainer() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/profile");
    }
  }, []);

  const SubmitForm = () => {
    navigate("/profile");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const updateEmail = (e) => setEmail(e.target.value);

  const updatePassword = (e) => setPassword(e.target.value);

  const handleLogin = () => {
    axios
      .post(
        "https://jckwv5tur8.execute-api.eu-west-1.amazonaws.com/auth/login",
        {
          email: email,
          password: password,
        }
      )
      .then(function (response) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/profile");

        console.log(response);
      })
      .catch(function (error) {
        setError(error.response.data.message);
        console.log(error);
      });
  };

  return (
    <Login
      email={email}
      password={password}
      error={error}
      updateEmail={updateEmail}
      updatePassword={updatePassword}
      setError={setError}
      handleLogin={handleLogin}
      handleSignup={handleSignup}
      SubmitForm={SubmitForm}
    />
  );
}

export default LoginContainer;
