import React from "react";
import { Link } from "react-router-dom";
import { MdViewList, MdHome, MdPerson } from "react-icons/md";
import { IconContext } from "react-icons";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 15px;
  align-self: center;
`;

const Li = styled.li`
  width: 512px;
  display: flex;
  justify-content: space-around;
`;

const Navigation = () => (
  <Nav>
    <ul>
      <IconContext.Provider value={{ color: "#FF9B6A", size: "2em" }}>
        <Li>
          <Link to="/list">
            <MdViewList />
          </Link>
          <Link to="/">
            <MdHome />
          </Link>
          <Link to="/user">
            <MdPerson />
          </Link>
        </Li>
      </IconContext.Provider>
    </ul>
  </Nav>
);

export default Navigation;
