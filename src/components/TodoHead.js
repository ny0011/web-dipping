import styled from "styled-components";

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
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const getDate = (props) => {
  const today = new Date();

  if (props === "date") {
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    return `${year}년 ${month}월 ${date}일`;
  }
  const dayList = ["일", "월", "화", "수", "목", "금", "토"];
  const day = dayList[today.getDay()];
  return `${day}요일`;
};

function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1>{getDate("date")}</h1>
      <div className="day">{getDate("day")}</div>
      <div className="task-left">이것만 하자</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
