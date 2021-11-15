import { useNavigate } from "react-router-dom";
import LoginContext from "context/LoginContext";
import { useContext } from "react";
import { auth } from "server/fbase";
import styled from "styled-components";

const UserTemplate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const User = () => {
  const history = useNavigate();
  //const { userObj, refreshUser } = useContext(LoginContext);
  const onLogOutClick = () => {
    auth.signOut();
    history("/");
  };
  return (
    <UserTemplate>
      <h2 className="title">User</h2>
      <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
        Log Out
      </span>
    </UserTemplate>
  );
};

export default User;
