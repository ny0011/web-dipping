import { useContext } from "react";
import styled from "styled-components";
import TodoListContext from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  background: #b5deff;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  &::-webkit-scrollbar {
    width: 15px;
    background-color: darkgrey;
    border-bottom-right-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #7c83fd;
    border: 3px solid transparent;
    background-clip: content-box;
    border-bottom-right-radius: 10px;
  }
`;

// context를 사용하는 consumer
// useContext로 context를 지정해두면 이 앱 밖에서 provider를 찾음
const TodoList = () => {
  const { data } = useContext(TodoListContext);
  return (
    <TodoListBlock>
      {data.todos.map((item) => {
        return (
          <TodoItem
            text={item.text}
            done={item.done}
            id={item.id}
            key={item.id}
          ></TodoItem>
        );
      })}
    </TodoListBlock>
  );
};

export default TodoList;
