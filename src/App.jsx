import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import LoginContainer from "./components/LoginContainer";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import SignupContainer from "./components/SignupContainer";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="signup" element={<SignupContainer />}></Route>
      <Route path="Login" element={<LoginContainer />}></Route>
      <Route path="profile" element={<Profile />}></Route>
    </Routes>
  );
}

export default App;
