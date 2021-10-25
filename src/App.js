import { createGlobalStyle } from "styled-components";
import "./App.css";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import { TodoTemplate } from "./components/TodoTemplate";
import TodoListContext from "./context/TodoContext";
import TodoCreate from "./components/TodoCreate";
import { useReducer } from "react";
import reducer from "./context/TodoListReducer";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e9e9e9;
  }
`;

function App() {
  //const mockdata = [{ id: 0, text: "놀기", done: true }];
  const defaultData = JSON.parse(sessionStorage.getItem("data")) || [];
  const [data, dispatch] = useReducer(reducer, defaultData);

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <TodoTemplate>
        <TodoListContext.Provider value={{ dispatch, data }}>
          <TodoHead></TodoHead>
          <TodoList></TodoList>
          <TodoCreate></TodoCreate>
        </TodoListContext.Provider>
      </TodoTemplate>
    </>
  );
}

export default App;
