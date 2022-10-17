import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

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
  // Make a request for a user with a given ID

  return (
    <div>
      <h2>Profile</h2>
      name: {name}
      <br />
      email: {email}
      <br />
      <button onClick={handleLogout}>log Out</button>
    </div>
  );
}

export default Profile;
