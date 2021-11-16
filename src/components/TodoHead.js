import { useContext } from "react";
import styled from "styled-components";
import TodoListContext from "../context/TodoContext";
import { MdSave } from "react-icons/md";
import { IconContext } from "react-icons";
import { saveTodo } from "server/firestore";
import LoginContext from "context/LoginContext";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 20px;

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
    margin-top: 3px;
    font-weight: bold;
  }

  .task {
    display: flex;
    margin-top: 40px;
    justify-content: space-between;
    align-items: center;
  }

  .upload{
    display: flex;
    align-items: center;
  }
  .upload-text{
    color: #7c83fd;
    font-size: 18px;
    margin-top:3px;
  }
  .upload-button{
    cursor: pointer
  }
`;



function TodoHead() {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" })

  const { data } = useContext(TodoListContext)
  const { userObj } = useContext(LoginContext)
  const undoneTodos = data.filter((item) => item.done === false)

  const onSaveFirestore = () => {
    console.log(data, userObj)
    saveTodo(data, userObj)
  }

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="task">
        <div className="task-left">{undoneTodos.length}개 남음</div>
        <div className="upload">
          <div className="upload-text">서버에 저장</div>
          <div className="upload-button">
            <IconContext.Provider value={{
              color: "#142F43", size: "2rem"
            }} >
              <MdSave onClick={onSaveFirestore} />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
