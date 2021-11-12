import "App.css";
import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import LoginContext from "context/LoginContext";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "server/fbase";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // signed in
        const name = user.displayName === null ? "뉴비" : user.displayName;
        setUserObj({
          displayName: name,
          uid: user.uid,
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    const user = auth.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
    });
  };

  return (
    <>
      <LoginContext.Provider
        value={{
          refreshUser,
          userObj,
        }}
      >
        {init ? <AppRouter /> : "Initializing..."}
      </LoginContext.Provider>
    </>
  );
}

export default App;
