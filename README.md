# 웹 찍먹반

- 일급 함수 : https://velog.io/@mgm-dev/%EC%9D%BC%EA%B8%89%ED%95%A8%EC%88%98%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80
- less/scss

  - & : 상위 선택자 참조 https://sso-feeling.tistory.com/232

- display: initial : https://stackoverflow.com/questions/18534561/what-is-use-of-initial-value-in-css

  - display 초기값으로 바꾸기

  ```
  ex)
  const Remove = styled.div`
      display: flex;
      display: none;
      `;
  이렇게 되어 있을 때 display: initial로 하면 display: none이 사라지고 display:flex가 적용되는듯
  ```

- React Icons : https://react-icons.github.io/react-icons/

- context : 여러 컴포넌트가 하나의 데이터를 공유/구독 할 수 있게 하는 기능

  - 데이터 : 할 일 목록
  - 일에 포함된 데이터 : 완료 유무 / 내용
  - https://ko.reactjs.org/docs/context.html
    - 전역 데이터를 공유할 때 보통 사용
    - depth가 깊은 컴포턴트가 있고 중간 컴포넌트들은 이 데이터를 사용하지 않을 때 유용

- useReducer
  - https://ko.reactjs.org/docs/hooks-reference.html#usereducer
  - (state, action) => newState
  ```
    const [state, dispatch] = useReducer(reducer, initialArg, init);
  ```
  - state, action을 받아서 현재 state를 반환
  - useReducer에 변수를 등록하고, 사용할 때 dispatch() 안에 동작하기 원하는 type을 부름
  - 다음 state가 이전 state에 의존적일 때 useState보다 useReducer가 편함
