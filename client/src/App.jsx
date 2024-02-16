import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetStarted from "./components/GetStarted";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import FacebookLogin from "./components/FacebookLoginPage";
import AgentPage from "./components/AgentPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/messages" element={<AgentPage />} />
        <Route path="/facebook" element={<FacebookLogin />} />
      </Routes>
    </>
  );
}

export default App;
