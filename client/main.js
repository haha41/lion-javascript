
import { attr, memo, clearContents, diceAnimation, endScroll, getNode, getNodes, insertLast } from "./lib/index.js";

// [phase-1] 주사위 굴리기
// 1. dice animation 불러오기
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation 실행 될 수 있도록
//    - 주사위 굴리기 버튼을 가져온다.
//    - 이벤트 핸들러를 연결한다.
//    - 애니메이션 코드를 작성한다.
// 3. 애니메이션 토글 제어
// 4. 클로저 + IIFE 를 사용한 변수 보호

// [phase-2] 레코드 리스트 control / view
// 1. 주사위가 멈추면 기록/초기화 버튼 활성화
// 2. hidden 속성 제어하기
//    - 기록 버튼 이벤트 바인딩
//    - hidden 속성 false 만들기
//    - 초기화 버튼 이벤트 바인딩
//    - hidden 속성 true 만들기
// 3. 주사위 값을 가져와서 렌더링
// 4. 스크롤 위치 내리기
// 5. 함수 분리

// [phase-3] 초기화 시키기
// 1. 아이템 지우기



// const button = getNode('.buttonGroup > button:nth-child(1)');
// 배열 구조 분해 할당
const [startButton,recordButton,resetButton] = getNodes('.buttonGroup > button'); // 모든 버튼을 배열로 가져옴
const recordListWrapper = getNode('.recordListWrapper');
memo('@tbody', ()=>getNode('.recordList tbody')) // setter, 실제 태그랑 구분 짓기 위해 @ 붙임
// const tbody = getNode('.recordList tbody')
// console.log(tbody);

memo('@tbody') // getter



// 진짜 진짜 쉬운 과제
// disableElement(node)
// enableElment(node)
// isDisableState(node)   => true / false (현재 disable인지 아닌지)

// visibleElement(node)
// invisibleElement(node)
// isVisibleState(node)   => true / false

let count = 0;
let total = 0;

function createItem(value){
    // 뿌려줄 템플릿 만들기
    return /* html */ `
    <tr>
      <td>${++count}</td>
      <td>${value}</td>
      <td>${total += value}</td>
    </tr>
  `
}

function renderRecordItem(){
  // 큐브의 data-dice 값 가져오기
  const diceValue = +attr('#cube', 'data-dice');
  
  // insertLast('.recordList tbody', template); // recordList안에 있는 tbody에 뿌려야 함
  insertLast(memo('@tbody'),createItem(diceValue));

  endScroll(recordListWrapper);
}

// console.log(diceValue);

const handleRollingDice = ((e) => {
  // let target = e.target; // target은 버튼임

  // setInterval(() => {
  //   diceAnimation()
  // }, 100);

  let isClicked = false;
  let stopAnimation;
  
  return ()=> {
    if(!isClicked){ // 주사위 play
      // console.log('첫 번째 클릭');
      stopAnimation = setInterval(diceAnimation, 100); // setInterval 함수를 실행할 때마다 diceAnimaion 함수를 0.1초씩 계속 실행 (diceAnmiation이 콜백함수임)
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else { // 주사위 stop
      // console.log('두 번째 클릭');
      clearInterval(stopAnimation); // id 값이 와야 함
      recordButton.disabled = false;
      resetButton.disabled = false;
    }
  
    isClicked = !isClicked; // 없으면 '첫 번째 클릭'만 계속 출력됨.
  }
})()

// 회차 늘어날 수 있도록
// diceValue 들어갈 수 있도록
// total 값이 나올 수 있도록



function handleRecord() {
  recordListWrapper.hidden = false;
  renderRecordItem()
}

function handleReset() {
  recordListWrapper.hidden = true;
  recordButton.disabled = true; // 기록, 초기화 버튼 누르지 못하도록, 다시 주사위 굴려야 누를 수 있음
  resetButton.disabled = true; // 기록, 초기화 버튼 누르지 못하도록, 다시 주사위 굴려야 누를 수 있음

  clearContents(memo('@tbody'));
  count = 0;
  total = 0;
}

startButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click',handleRecord);
resetButton.addEventListener('click', handleReset);