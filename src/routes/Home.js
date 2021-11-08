import { createGlobalStyle } from "styled-components";
import "App.css";
import TodoHead from "components/TodoHead";
import TodoList from "components/TodoList";
import { TodoTemplate } from "components/TodoTemplate";
import TodoListContext from "context/TodoContext";
import TodoCreate from "components/TodoCreate";
import { useReducer, useRef } from "react";
import reducer, { initialState } from "context/TodoListReducer";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e9e9e9;
  }
`;

const Home = () => {
  //const mockdata = [{ id: 0, text: "놀기", done: true }];
  const defaultData =
    JSON.parse(sessionStorage.getItem("data")) || initialState;
  const [data, dispatch] = useReducer(reducer, defaultData);
  let nextId = useRef(1);

  return (
    <>
      <GlobalStyle></GlobalStyle>
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
