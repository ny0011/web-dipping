import { auth } from "server/fbase";
import AuthForm from "components/AuthForm";
import React, { useState } from "react";
import styled from "styled-components";
import {
  fetchSignInMethodsForEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "@firebase/auth";

import { FcGoogle, FcIdea } from "react-icons/fc";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const AuthBtns = styled.div`
  display: flex;
  width: 100%;
  max-width: 320px;
  justify-content: center;
`;

const AuthBtn = styled.button`
  cursor: pointer;
  border-radius: 20px;
  border: none;
  padding: 10px 10px;
  font-size: 1.3rem;
  text-align: center;
  background: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  const [error, setError] = useState("");
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    }
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      if (error.code === "auth/account-exists-with-different-credential") {
        const {
          customData: { email },
        } = error;
        const methods = await fetchSignInMethodsForEmail(auth, email);
        setError(`${email} is already ${methods[0]} account`);
      }
    }
  };

  return (
    <LoginContainer>
      <Title>
        <FcIdea />
        <div>오늘 할 일을 기록해봐요</div>
      </Title>

      <AuthForm />
      <AuthBtns>
        {error && <span className="authError">{error}</span>}
        <AuthBtn onClick={onSocialClick} name="google">
          <div>구글로 로그인</div>
          <FcGoogle />
        </AuthBtn>
      </AuthBtns>
    </LoginContainer>
  );
};

export default Login;
