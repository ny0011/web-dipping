import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { useContext } from "react";
import TodoListContext from "../context/TodoContext";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8ca1a5;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;

  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #787a91;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;

  ${(props) =>
    props.done &&
    css`
      border: 1px solid #297f87;
      color: #297f87;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #787a91;
      text-decoration: line-through;
    `}
`;
const TodoItem = ({ id, done, text }) => {
  const { dispatch } = useContext(TodoListContext);

  const onRemoveClick = (e) => {
    dispatch({ type: "delete", payload: { id } });
  };
  const onCircleClick = (e) => {
    dispatch({ type: "done", payload: { id } });
  };
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onCircleClick}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemoveClick}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
};

export default TodoItem;
