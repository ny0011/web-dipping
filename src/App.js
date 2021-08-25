import { createGlobalStyle } from "styled-components"
import './App.css';
import { TodoTemplate } from './components/TodoTemplate'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e9e9e9;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <TodoTemplate>First Todo Template</TodoTemplate>
    </>
  );
}

export default App;
