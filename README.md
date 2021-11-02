# 웹 찍먹반

## CSS

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

- transitionend : CSS transition이 완료되면 발생하는 이벤트

  - https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionend_event
  - 움직임이 끝나고 focus()를 실행하고 싶어서 사용한 이벤트

- custom scroll :

  - https://ishadeed.com/article/custom-scrollbars-css/
  - https://codingbroker.tistory.com/66
  - scroll bar 스타일 웹 표준은 없음
  - webkit 브라우저(크롬, 사파리, 오페라 등)에서는 가상 요소를 사용해 scroll style을 적용할 수 있음

## Package

- React Icons : https://react-icons.github.io/react-icons/

## React 기능

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

- useRef
  - https://ko.reactjs.org/docs/hooks-reference.html#useref
  ```
    const refContainer = useRef(initialValue);
  ```
  - 이렇게 할당하면 refContainer.current = initialValue 로 초기화 됨
  - refContainer는 ref 객체
  - ref 객체
    - `현재` property가 변경될 수 있고 어떤 값이든 보유할 수 있는 일반 컨테이너
    - class의 인스턴스 변수 같은 기능 (?)
  - 보통 DOM에 접근할 때 사용
    - https://ko.reactjs.org/docs/refs-and-the-dom.html
    - ref 사용 사례
      - focus, 미디어 재생 관리할 때
      - 애니메이션을 직접 실행할 때

## web 기능

- web storage API
  - https://developer.mozilla.org/ko/docs/Web/API/Web_Storage_API
  - https://www.daleseo.com/js-web-storage/
  - 브라우저에 키/값 쌍을 저장하는 방법
  - sessionStorage : 브라우저 or 탭을 닫을 때까지 데이터 저장
    - 하루마다 새로 todo 앱이 달라질테니 할 일이 끝났을 때 컴퓨터를 끈다는 가정으로 localStorage보다 sessionStorage로 사용
  - `오직 문자형(string) 데이터 타입만 지원`
    - Object, Array를 storage에 저장할 때 JSON 형태로 저장하기
    ```
    localStorage.setItem('json', JSON.stringify({a: 1, b: 2}))
    JSON.parse(localStorage.getItem('json'))
    ```

## 코드

- Array의 index를 찾을 때 없는 경우도 생각해서 코드 구성해야 함

  - Array.prototype.at()은 빈 list일 때 index를 찾지 못하면 undefined를 반환
  - undefined.id를 찾을 수 없으니 에러 발생
  - 배열이 비어있을 때 임의의 값(ex: 0)을 할당하는 코드 작성
