import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="signup" element={<Signup />}></Route>
      <Route path="Login" element={<Login />}></Route>
      <Route path="profile" element={<Profile />}></Route>
    </Routes>
  );
}

export default App;
