import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
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

const Navigation = ({ userObj }) => (
  <Nav>
    <ul>
      <Li>
        <Link to="/list">
          <FontAwesomeIcon icon={faClipboardList} color={"#04AAFF"} size="2x" />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faClipboardList} color={"#04AAFF"} size="2x" />
        </Link>
        <Link to="/user">
          <FontAwesomeIcon icon={faClipboardList} color={"#04AAFF"} size="2x" />
        </Link>
      </Li>
    </ul>
  </Nav>
);

export default Navigation;
