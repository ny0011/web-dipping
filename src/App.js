import { createGlobalStyle } from "styled-components";
import "./App.css";
import TodoCreate from "./components/TodoCreate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import { TodoTemplate } from "./components/TodoTemplate";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e9e9e9;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <TodoTemplate>
        <TodoHead></TodoHead>
        <TodoList></TodoList>
        <TodoCreate></TodoCreate>
      </TodoTemplate>
    </>
  );
}

export default App;
