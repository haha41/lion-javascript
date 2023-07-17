/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

// Document Object Model 

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName

// const message = document.getElementById('message');
// console.log(message); // <span class="first" id="message">hello</span>

// message.textContent = 'aa' // 이렇게 id에 바로 할당하지 말기 (나중에 message라는 변수 쓸 수 있으므로)

// el, els (야무쌤 강의에서...)

/* getNode.js 파일로 옮김
function getNode(node){
  if(typeof node !== 'string'){
    throw new Error ('getNode 함수의 인수는 문자 타입이어야 합니다.')
  }
  return document.querySelector(node);
} */

getNode('.first') // <span class='first'></span>

const first = getNode('.first');
const span = getNodes('span');

console.log(span); // NodeList(2) [span#message.first, span.second]



// const first = document.querySelector('.first');
// console.log(first); // <span class="first" id="message">hello</span>

// const list = document.querySelectorAll('span');
// console.log(list); // NodeList(2)[span#message.first, span.second] cf. nodelist는 유사배열이다. 배열이 아님!

// const [firstSpan, secondSpan] = document.querySelectorAll('span');
// console.log(firstSpan);
// console.log(secondSpan);

// - querySelector
// - querySelectorAll
// - closest

console.log(first.closest('h1')); // event delegation(이벤트 위임), first에서 가장 인접한 h1을 찾아서 반환

/* 문서 대상 확인 */
// - matches

// 선택자 안에 class | id 를 가지고 있는 대상이 있어?
// console.log(first.matches('.first')); // first라는 클래스 갖고 있어? -> 응 (true)
console.log(first.matches('#message')); // message라는 아이디 갖고 있어? -> 응 (true)

// - contains

// 선택자의 자식들 중에 해당 element가 있어?
// console.log(first.contains(secondSpan)); // first의 태그 안에 secondSpan 있어?

// 클래스를 포함하고 있어?
// node.classList.contatins()