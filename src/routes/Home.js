import TodoHead from "components/TodoHead";
import TodoList from "components/TodoList";
import { TodoTemplate } from "components/TodoTemplate";
import TodoListContext from "context/TodoContext";
import TodoCreate from "components/TodoCreate";
import { useReducer, useRef } from "react";
import reducer, { getTodos, initialState } from "context/TodoListReducer";

const Home = () => {
  const [data, dispatch] = useReducer(reducer, initialState);
  let nextId = useRef(data.length === 0 ? 1 : data.at(-1).id + 1);
  console.log(getTodos());

  return (
    <>
      <TodoTemplate>
        <TodoListContext.Provider value={{ dispatch, data, nextId }}>
          <TodoHead></TodoHead>
          <TodoList></TodoList>
          <TodoCreate></TodoCreate>
        </TodoListContext.Provider>
      </TodoTemplate>
    </>
  );
};

export default Home;
