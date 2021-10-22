import { useContext } from "react";
import styled from "styled-components";
import TodoListContext from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  background: grey;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
`;

// context를 사용하는 consumer
// useContext로 context를 지정해두면 이 앱 밖에서 provider를 찾음
const TodoList = () => {
  const { data } = useContext(TodoListContext);
  return (
    <TodoListBlock>
      {data.map((item) => {
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
