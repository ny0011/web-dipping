import { useContext, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { MdAdd } from "react-icons/md";
import TodoListContext from "../context/TodoContext";

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #63e6be;
  }
  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const boxUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const boxDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(20px);
    opacity: 0;
  }
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  animation: ${(props) => (props.open ? boxUp : boxDown)} 0.4s linear;
  transition: visibility 0.4s ease-in;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 10px;

  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  color: #343a40;
`;

const TodoCreate = () => {
  const [open, setOpen] = useState(true);
  const onToggle = () => {
    setOpen(!open);
  };
  const [text, setText] = useState("");
  const { dispatch, nextId } = useContext(TodoListContext);

  const inputRef = useRef(null);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      dispatch({
        type: "ADD",
        payload: { text: text, done: false, id: nextId.current },
      });

      nextId.current++;
      setOpen(false);
      setText("");
    }
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setText(value);
  };

  const onTransitionEnd = () => {
    inputRef.current && inputRef.current.focus();
  };

  return (
    <>
      <InsertFormPositioner open={open} onTransitionEnd={onTransitionEnd}>
        <InsertForm>
          <Input
            autoFocus
            placeholder="오늘은 뭐하지"
            onKeyPress={handleKeyPress}
            value={text}
            onChange={onChange}
            tabIndex="0"
            ref={inputRef}
          ></Input>
        </InsertForm>
      </InsertFormPositioner>

      <CircleButton onClick={onToggle} tabIndex="0" open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
};

export default TodoCreate;
