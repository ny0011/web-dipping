import TodoHead from "components/TodoHead";
import TodoList from "components/TodoList";
import { TodoTemplate } from "components/TodoTemplate";
import TodoListContext from "context/TodoContext";
import TodoCreate from "components/TodoCreate";
import { useContext, useEffect, useReducer, useRef } from "react";
import reducer from "context/TodoListReducer";

import LoginContext from "context/LoginContext";
import { getTodos, initialState } from "server/firestore";

const Home = () => {
  const { userObj } = useContext(LoginContext);
  const [data, dispatch] = useReducer(reducer, initialState(userObj.uid));
  let nextId = useRef(1);

  useEffect(() => {
    getTodos(dispatch, userObj, nextId);
  }, [userObj]);

  return (
    <>
      <TodoTemplate>
        <TodoListContext.Provider value={{ dispatch, data, nextId }}>
          <TodoHead></TodoHead>
          <TodoList></TodoList>
          <TodoCreate></TodoCreate>
        </TodoListContext.Provider>
      </TodoTemplate>
    </>
  );
};

export default Home;
