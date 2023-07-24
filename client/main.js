import { jujeobData } from './data/data.js';
import { 
  addClass, 
  getNode, 
  clearContents, 
  getRandom, 
  insertLast, 
  isNumericString, 
  removeClass,
  showAlert,
  shake,
  copy,
} from './lib/index.js'

// [phase-1]
// 1. 주접 떨기 버튼을 클릭할 수 있는 핸들러를 연결해 주세요.
// 2. nameField에 있는 값을 가져와 주세요.
// 3. jujeob 데이터 가져오기
// 4. jujeobData에서 랜덤한 주접 한 개를 가져오기.
// 5. pick 항목을 result에 렌더링 해주세요.

// [phase-2]
// 1. 아무 값도 입력 받지 못했을 때 예외처리
// 2. 공백 문자를 받았을 때 예외처리 replace => regEXP
// 3. 숫자형 문자를 받았을 때 (e.g 123(fail), 기안84(pass))


// [phase-3]
// 1. 잘못된 정보를 입력 받으면 사용자에게 알려주세요.
// 2. 재사용 가능한 함수 (showAlert)
// 3. gsap shake 기능 구현
// 4. animation 모듈화

// [phase-4]
// 1. result 클릭 이벤트 바인딩
// 2. 
// 3.

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const resultArea = getNode('.result');


function handleSubmit(e) {
  e.preventDefault(); // submit 기능 차단

  let name = nameField.value;
  const list = jujeobData(name);
  const pick = list[getRandom(list.length)];

  if(!name || name.replace(/\s*/g, '') === ''){ // replace : 처음 넣은 값을 2번째 넣은 값으로 바꿔줌(a->b)
    showAlert('.alert-error', '이름을 입력해주세요!!', 2000);

    shake.restart();

    return;
  }

  if(!isNumericString(name)){
    showAlert('.alert-error', '제대로 된 이름을 입력해주세요!!', 2000);
    return;
  }
  
  // console.log(isNaN(Number(name)));

  // resultArea?.textContent = ''
  clearContents(resultArea)
  insertLast(resultArea, pick)
  
  // console.log(jujeobData(name)[0]); // 배열의 0번째 아이템, 대한민국 정소희 보유국
  // console.log(pick);
}

// 과제
// 이름을 제대로 입력 했을 때 클립보드에 복사가 될 수 있도록.
// let state = false;

// state = true;

// if(state){ ...logic }

function handleCopy(e) {
  const text = resultArea.textContent;
  // navigator.clipboard.writeText(text).then(()=>{
  //   showAlert('.alert-success', '클립보드 복사 완료!'); // alert-sucess에 '클립보드 복사 완료!' 내용 추가, 1초(기본값) 뒤에 사라짐
  copy(text).then(()=> {
    showAlert('.alret-success', '클립보드 복사 완료!');

  })

}

submit.addEventListener('click',handleSubmit)
resultArea.addEventListener('click', handleCopy)