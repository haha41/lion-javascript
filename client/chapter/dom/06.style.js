/* -------------------- */
/* DOM Styling          */
/* -------------------- */


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');
// console.log(first.className = 'box second'); // setter
console.log(first.className); // getter
// console.log(first.className = 'second'); // setter


// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// add
// remove
// toggle
// contains

first.classList.add('hello'); // hello 클래스 추가
first.classList.remove('hello');
// first.className = ''; // class 제거1
// attr(first, 'class', ' '); // class 제거2
first.classList.toggle('is-active'); // 없으면 넣어주고, 있으면 빼줌, boolean값 반환, 추가 시 true, 지워지면 false
// console.log(first.classList.contains('hello')); // 값을 반환하기 때문에 콘솔에 찍어야 함. hello 클래스 없으면 false
console.log(first.classList.contains('is-active')); // 있으면 true


/* css.js 파일로 이동 
  function addClass (node, className) {
  if(typeof node === 'string') node = getNode(node);

  if(typeof className !== 'string'){
    throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입이어야 합니다.');
  }

  node.classList.add(className); // class를 추가하는 셋팅만 필요하므로 return이 필요없음!
} */

addClass('.first','hello');

// attr(first,'class',' ');

/* 스타일 변경 방법 --------------------------------------------------------- */

first.style.backgroundColor = 'orange'; //setter
console.log(first.style.backgroundColor); //getter, 자바스크립트의 프로퍼티를 통해서 배경색을 할당했기 때문에 orange라고 뜸. css로 설정된거면 값을 가져오지 못함 -> computed
// console.log(first.style.fontSize); // 빈문자 나옴

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장


/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

console.log(getComputedStyle(first).fontSize); // 32px
console.log(getComputedStyle(first).getPropertyValue('font-size')); // 32px

// 객체의 속성에 접근할 때 .표기법은 사용할 수 없다!!!
// computed property [ ] 사용하기



// 콘솔에 document.body.style 찍어서 나오는 것들만 속성으로 쓸 수 있음
// 객체 안에 키 값이 있는지 확인하는 방법 (in문)
// 'color' key in documnet.boby.style // 있으면 true
// 'hello' key in documnet.boby.style // 없으면 false



// setCss('.first', 'color', '#fff');
// console.log(getCss('.first', 'color')); // rgb(255, 255, 255)

console.log(css('.first', 'font-size'));