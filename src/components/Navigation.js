import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ userObj }) => (
  <nav>
    <ul
      style={{
        display: "flex",
      }}
    >
      <li>
        <Link to="/" style={{ marginRight: 10 }}>
          <FontAwesomeIcon icon={faClipboardList} color={"#04AAFF"} size="2x" />
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
