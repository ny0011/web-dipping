import LoginContext from "context/LoginContext";
import React, { useContext } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "routes/Home";
import Login from "routes/Login";
import Navigation from "./Navigation";

const AppRouter = () => {
  const { userObj } = useContext(LoginContext);
  const isLoggedIn = Boolean(userObj);

  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Routes>
        {isLoggedIn ? (
          <Route exact path="/" element={<Home />}></Route>
        ) : (
          <Route exact path="/" element={<Login />}></Route>
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
