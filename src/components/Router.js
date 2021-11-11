import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "routes/Home";
import Navigation from "./Navigation";

const AppRouter = ({ userObj }) => {
  return (
    <Router>
      <Navigation userObj={userObj} />
      <Routes>
        <Route exact path="/" element={<Home userObj={userObj} />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
