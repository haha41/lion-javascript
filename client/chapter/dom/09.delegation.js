/* ------------------------ */
/* Event delegation         */
/* ------------------------ */


/* 클래스를 사용한 위임 ---------------- */

// const buttonA = getNode('.a');
// const buttonB = getNode('.b');
// const buttonC = getNode('.c');
// const buttonD = getNode('.d');
// const buttons = getNodes('button');

// buttons.forEach((item)=>{
//   item.addEventListener('click',()=>{
//     console.log('hit');
//   })
// })



const container = getNode('.container');

function handleDelegation(e) {

  let target = e.target;

  let li = target.closest('li');


  // target에서 가장 인접한 li 조상을 찾아서 반환 시켜줘
  // console.log(target.closest('li'));
  if(!li) return; // li 없다면 아래 실행하지말고 함수 종료해
  
  // let className = target.getAttribute('class');
  // let className = attr(target, 'class');
  let className = attr(li, 'class');

  // console.log(target.dataset); // DOMStringMap
  // console.log(target.dataset.name); // A, B, C, D, undefined
  // let dataName = target.dataset.name;
  // let dataName = attr(target, 'data-name');
  let dataName = attr(li, 'data-name');

  console.log(className);

  // if(dataName === 'A'){
  //   console.log('A 버튼 클릭!');
  // }

  // if(dataName === 'B'){
  //   console.log('B 버튼 클릭!');
  // }

  // if(dataName === 'C'){
  //   console.log('C 버튼 클릭!');
  // }

  // if(dataName === 'D'){
  //   console.log('D 버튼 클릭!');
  // }

  // 클래스라는 속성을 조회해줘
  // console.log(target.getAttribute('class')); // a,b,c,d,container

  // if(className === 'a'){
  //   console.log('A 버튼 클릭!');
  // }

  // if(className === 'b'){
  //   console.log('B 버튼 클릭!');
  // }

  // if(className === 'c'){
  //   console.log('C 버튼 클릭!');
  // }

  // if(className === 'd'){
  //   console.log('D 버튼 클릭!');
  // }

  // console.log(this); // this는 container (일반함수이기 때문에 나를 호출한 대상)
  // console.log(e.currentTarget); // e.currentTarget도 container
  // console.log((this === e.currentTarget)); // true
  // console.log(e.target);
}

container.addEventListener('click',handleDelegation)



/* 속성을 사용한 위임 ------------------ */


/* 노드를 사용한 위임 ------------------ */