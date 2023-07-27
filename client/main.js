/* global gsap */


import { 
  tiger,
  delayP,
  insertLast, 
  getNode as $, 
  renderUserCard, 
  changeColor,
  renderSpinner,
  renderEmptyCard,
  attr,
  clearContents,
} from "./lib/index.js";

// [phase-1]
// 1. tiger 함수를 사용해서 user를 가져와 주세요
// 2. 함수 안으로 넣기
// 3. 유저 데이터 렌더링
//    - html template을 만든다.
//    - 유저 data를 넘겨주기
//    - insertLast 사용하기
// 4. 함수 분리 하기

// [phase-2]
// 1. 에러가 발생 했을 때
// 2. empty svg를 생성하고 렌더링 해주세요
// 3. 함수 분리

// [phase-3]
// json-server 구성
// data 설계
// get, delete 통신 localhost
// delete => 리랜더링(clear,render)

const userCardInner = $('.user-card-inner'); // getNode as $

async function renderUserList(){

  renderSpinner(userCardInner)

  try{
    // await delayP({timeout:2000}) // 약간의 delay 텀을 줘서 늦게 랜더링 되게 함

    gsap.to('.loadingSpinner', {
      opacity:0, // 눈에 안보일뿐, 계속 돌고 있음..remove 해주기!!
      onComplete(){
        $('.loadingSpinner').remove();
      }
    })

    const response = await tiger.get('http://localhost:3000/users')  
    const userData = response.data;
  
    // userData는 배열, forEach를 통해 그 안의 객체들을 열거
    userData.forEach((item)=>renderUserCard(userCardInner,item))
  
    changeColor('.user-card');
  
    gsap.to('.user-card', {
      x:0, // x좌표를 원래 위치로
      opacity:1, // 화면에 보이게 함 (투명도 밝게)
      stagger:0.2 // 순차적으로 나타나게 함 
    })
  }
  catch(err){
    console.log(err);
    renderEmptyCard(userCardInner)
  }

  
  // 어디에 렌더링 할껀데? 어떤 데이터를 렌더링 할껀데?
}

renderUserList()



// [phase-3]
// 버튼을 클릭 했을 때 해당 article의 id 값을 가져옴.
// - 이벤트 위임
// - button 선택하기 -> 클릭한 대상의 가장 가까운 method
// - attr(), dataset

function handleDelete(e) {
  const button = e.target.closest('button'); // 가장 근접한 button 을 찾겠다, 나머지는 null 나옴
  const article = e.target.closest('article')

  // console.log(article); // null 나오는 곳도 있고, 카드를 눌렀을 때 삭제 버튼과 동일하게 출력되어서 문제가 됨
  if(!article || !button) return; // button이 없으면 함수 실행하지마, 버튼 눌렀을 때만 반응함
  // console.log(article); // 삭제 버튼 눌렀을 때만 출력됨

  // DELETE는 통째로 지울 수 없음. id 값이 필요함
  // console.log(article.dataset); // DOMStringMap{index: 'user-1'}
  // console.log(article.dataset.index); // user1
  // console.log(attr(article, 'data-index')); // user1
  const id = attr(article, 'data-index').slice(5); // 5번째까지 날려버림
  // console.log(id); //1

  tiger.delete(`http://localhost:5500/${id}`) // 유저 목록 중에 n번째 아이디 제거해줘
  .then(()=>{
    // 컨텐츠 영역 전체 지우기
    clearContents(userCardInner);
    renderUserList(); // 지운 것 다시 전체 생성
  })







}

userCardInner.addEventListener('click',handleDelete); // userCard?Inner가 가장 큰 영역임