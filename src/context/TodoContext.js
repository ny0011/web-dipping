import { createContext } from "react"

// 초기 데이터
// 상위 provider가 없는데 하위 컴포넌트가 이걸 읽으려고 할 때 
// 앱 크래시를 막는 방어 데이터
const initialTodoList = []

// 초기값이 []인 컨텍스트 생성
const TodoListContext = createContext(initialTodoList)

export default TodoListContext