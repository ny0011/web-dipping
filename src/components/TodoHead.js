import { useContext } from "react";
import styled from "styled-components";
import TodoListContext from "../context/TodoContext";
import { MdAdd } from "react-icons/md";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;

  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  .task-left {
    color: #7c83fd;
    font-size: 18px;
    
    font-weight: bold;
  }

  .task {
    display: flex;
    margin-top: 40px;
    justify-content: space-between;
  }
`;

const CircleButton = styled.button`

transform: rotate(45deg);
background: #ff6b6b;
width: 30px;
height: 30px;
border-radius: 50%;

display: flex;
align-items: center;
justify-content: center;
font-size: 50px;

cursor: pointer;
border: none;
`


function TodoHead() {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" })

  const { data, dispatch, nextId } = useContext(TodoListContext)
  const undoneTodos = data.filter((item) => item.done === false)

  const onResetStorage = () => {
    dispatch({ type: "CLEAR" })
    nextId.current = 1
  }


  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="task">
        <div className="task-left">{undoneTodos.length}개 남음</div>
        <CircleButton onClick={onResetStorage} > <MdAdd /></CircleButton>
      </div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
