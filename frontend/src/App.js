import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { TaskProvider } from "./TaskContext";
import Home from "./components/Home";
import Login from "./components/Login";

import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} onLogin={handleLogin} />
        <Route
          path="/user"
          element={
            <TaskProvider>
              <Home />
            </TaskProvider>
          }
          isLoggedIn={isLoggedIn}
        />
      </Routes>
    </>
  );
};

export default App;
