import React from "react";
import { Route, Routes } from "react-router-dom";
import Church from "./components/Church";
import ChurchContainer from "./components/ChurchContainer";
import Home from "./components/Home";
import Login from "./components/Login";
import LoginContainer from "./components/LoginContainer";
import Profile from "./components/Profile";
import ProfileContainer from "./components/ProfileContainer";
import Signup from "./components/Signup";
import SignupContainer from "./components/SignupContainer";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="signup" element={<SignupContainer />}></Route>
      <Route path="Login" element={<LoginContainer />}></Route>
      <Route path="profile" element={<ProfileContainer />}></Route>
      <Route path="church" element={<ChurchContainer />}></Route>
    </Routes>
  );
}

export default App;
