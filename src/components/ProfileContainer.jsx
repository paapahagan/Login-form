import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";

function ProfileContainer() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleChurches = () => {
    navigate("/Church");
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    const token = localStorage.removeItem("token");
    navigate("/login");
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    const token = localStorage.getItem("token");
    axios
      .get("https://jckwv5tur8.execute-api.eu-west-1.amazonaws.com/auth/user", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        setEmail(response.data.email);
        setName(response.data.name);
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  return (
    <Profile
      name={name}
      email={email}
      handleLogout={handleLogout}
      handleChurches={handleChurches}
    />
  );
}

export default ProfileContainer;
