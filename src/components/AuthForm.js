import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { auth } from "server/fbase";
import React, { useState } from "react";
import styled from "styled-components";

const AuthContainer = styled.form`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AuthInput = styled.input`
  max-width: 320px;
  width: 100%;
  padding: 10px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 1);
  margin-bottom: 10px;
  font-size: 14px;
  color: black;
  box-sizing: content-box;
`;

const AuthSubmit = styled.input`
  max-width: 320px;
  width: 100%;
  padding: 10px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 1);
  margin-bottom: 10px;
  font-size: 14px;
  color: black;
  box-sizing: content-box;
  text-align: center;
  background: #ffab4c;
  color: white;
  margin-top: 10px;
  box-sizing: content-box;
  cursor: pointer;
`;

const AuthSwitch = styled.span`
  color: #ffab4c;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 50px;
  display: block;
  font-size: 14px;
  text-decoration: underline;
`;

const AuthError = styled.span`
  color: tomato;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
`;

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    let data;
    try {
      if (newAccount) {
        // create account
        data = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        // log in
        data = await signInWithEmailAndPassword(auth, email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  };

  return (
    <>
      <AuthContainer onSubmit={onSubmit}>
        <AuthInput
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <AuthInput
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <AuthSubmit
          type="submit"
          value={newAccount ? "Create Account" : "Sign In"}
        />
        {error && <AuthError>{error}</AuthError>}
      </AuthContainer>
      <AuthSwitch onClick={toggleAccount}>
        {newAccount ? "Sign In" : "Create Account"}
      </AuthSwitch>
    </>
  );
};

export default AuthForm;
