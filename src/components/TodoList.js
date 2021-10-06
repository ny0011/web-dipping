import styled from "styled-components";
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

const TodoList = () => {
  return (
    <TodoListBlock>
      <TodoItem text="스터디 준비하기" done={true} id={1}></TodoItem>
      <TodoItem text="잠자기" done={true} id={2}></TodoItem>
      <TodoItem text="출근 준비하기" done={true} id={3}></TodoItem>
    </TodoListBlock>
  );
};

export default TodoList;
