import LoginContext from "context/LoginContext";
import React, { useContext } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "routes/Home";
import List from "routes/List";
import Login from "routes/Login";
import User from "routes/User";
import Navigation from "./Navigation";

const AppRouter = () => {
  const { userObj } = useContext(LoginContext);
  const isLoggedIn = Boolean(userObj);

  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/list" element={<List />}></Route>
            <Route exact path="/user" element={<User />}></Route>
          </>
        ) : (
          <Route exact path="/" element={<Login />}></Route>
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
