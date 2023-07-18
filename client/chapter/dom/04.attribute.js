/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */



/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고, 
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우, 
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.

class aa {

}

const first = getNode('.first');
// console.log(first); // 
// console.dir(first); // 객체
// console.dir(first.id); // message
// console.dir(first.class); // undefined, class가 따로 있기 때문에 className으로 써야됨
// console.dir(first.className);
console.log(first.size); // undefined, html 표준 속성이 아님


/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.


/* DOM 프로퍼티 검토 ------------------------------------------------------- */

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
// - elementNode.getAttribute(name) – 속성값을 가져옴
// - elementNode.setAttribute(name, value) – 속성값을 변경함
// - elementNode.removeAttribute(name) – 속성값을 지움
// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함

// console.log(first.hasAttribute('class')); // first에 class라는 속성이 있어? -> 있으면 true
// console.log(first.hasAttribute('size')); // 비표준이어도 true
// console.log(first.hasAttribute('title'));

// // console.log(first.getAttribute('class')); // first 
// // console.log(first.getAttribute('id')); // message
// console.log(first.getAttribute('size')); // 10

first.setAttribute('title', '메세지');
// first.setAttribute('class','')
first.removeAttribute('title'); 
// // first.setAttribute('title', ''); // 이렇게도 제거되나 깔끔한건 removeAttribue

console.log(first.attributes); // 모든 속성과 값을 객체로 반환

first.getAttribute('id') // message

// for(let value of first.attributes) {
//   console.log(value);
// }



console.log(getAttr(first, 'id')); // message, 위에서 first를 정의해서 가능
console.log(getAttr('.first', 'data-size')); // 10
console.log(getAttr('.second', 'data-size')); // null
console.log(getAttr('.second', 'class')); // second

// console.log(setAttr('.first', 'title', '인사멘트'));

// setAttr('.first', 'data-value', '인사멘트') // 에러남. value만 입력하면 data-value가 됨
// setAttr('.first', 'class', '인사멘트')



/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

console.log(first.dataset); 
console.log(first.dataset.size); // 10
console.log(first.dataset.tabIndex); // 1 getter 
console.log(first.dataset.animation = 'paused'); // setter

const value = attr('.first','class') // getter

console.log( value );



// attr('.first','class','second') // setter