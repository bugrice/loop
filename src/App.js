// 분기와 반복
// 1. 컴포넌트는 JSX를 반환하는 "함수"입니다.
// 2. 함수 내에서 JSX를 처리하는 과정에서 분기와 반복을 사용할 수 있습니다.
// 3. JSX 내에서 if와 for와 같은 문법 사용이 어렵기 때문에 편의를 위해서
//     표현식인 삼항연산자와 map, filter 등을 사용합니다.
import { useState } from "react";
import Board from "./components/Board";

function App(){
  const [visible, setVisible] = useState(false);

  const articles = [{
    id: 1,
    title: '안녕하세요 프롱이 여러문 :)',
    author: '정현식'
  },{
    id: 2,
    title: '프로젝트를 성공시키는 법',
    author: '정현식'
  },{
    id: 3,
    title: 'React 꿀팁 공유',
    author: '정현식'
  },{
    id: 4,
    title: '7월만에 React 마스터하기',
    author: '정현식'
  },]

  return (
  <div>
    <button onClick={() => setVisible(!visible)}>Toggle</button>
    {visible && (
      <h1>논리곱 연산자를 통해 쉽게 JSX 랜더링 여부를 결정할 수 있습니다.</h1>
    )}

    {visible ? (
      <Board articles={articles} />
    ) : (
      <p>게시판을 보려면 Toggle 버튼을 클릭해주세요.</p>
    )}
  </div>
  );
}

export default App;