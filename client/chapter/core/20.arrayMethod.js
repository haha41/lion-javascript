/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const isArray = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array';

function nomalIsArray(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array';
}


const isNull = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null';

function normalIsNull(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null';
}



const arr = [10,100,1000,10000];

const people = [
  {
    id:0,
    name:'김다연',
    profession:'프론트엔드 개발자',
    age:25,
    imageSrc:'MAksd23',
  },
  {
    id:1,
    name:'이현주',
    profession:'수영선수',
    age:40,
    imageSrc:'afdfakA',
  },
  {
    id:2,
    name:'김희소',
    profession:'물음표살인마',
    age:30,
    imageSrc:'fAKqi321',
  },
  {
    id:3,
    name:'김규민',
    profession:'래퍼',
    age:52,
    imageSrc:'AFGq3d23',
  },
  {
    id:4,
    name:'전진승',
    profession:'드라마평론가',
    age:18,
    imageSrc:'fQa15f3',
  },
]

/* 요소 순환 ---------------------------- */

// forEach : 값을 반환하지 않음.

// [10,100,1000,10000]

arr.forEach((item, index)=>{
  // console.log(item, index);
})

people.forEach((item)=> {
  // console.log(item.name);
})



const span = document.querySelectorAll('span');

// 이벤트 처리 할 때 이 방식이 제일 좋은가요? no (함수가 중복됨...)
// 이벤트 위임 event delegation
span.forEach((item,index)=>{

  item.addEventListener('click',function(){
    console.log(this,index);
  })

})

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse : 배열의 순서를 바꿈, 원본 훼손됨
// arr.reverse()
// console.log(arr);

// splice : 맥가이버 칼
// arr.splice(1, 2); // 배열의 1번 인덱스부터 2개를 제거
// arr.splice(1, 2, 'javascript', 'css'); // 배열의 1번 인덱스부터 2개를 제거 및 추가 cf.slice는 도려내기만 함!

arr.splice(1, 0, 5, 13); // 1번째부터 삭제하지 말고 5와 13 추가
// console.log(arr);

// sort : 유니코드식 정렬
arr.sort()
// console.log(arr); // [10, 100, 1000, 10000, 13, 5]

// compare function
// 반환 값 < 0 : a가 b보다 앞에 있어야 한다.
// 반환 값 == 0 : a와 b의 순서를 바꾸지않는다.
// 반환 값 > 0 : b가 a 보다 앞에 있어야 한다.
arr.sort((a, b)=> {
  return a - b;
})
// console.log(arr); // [5, 10, 13, 100, 1000, 10000]

// arr.sort((a, b)=> {
//   return b - a;
// })
// console.log(arr); // [10000, 1000, 100, 13, 10, 5]



/* 새로운 배열 반환 ------------------------ */

const user = ['선범', '효윤', '준석'];

// concat : 원본 훼손 X
// const newArray = arr.concat(user); // concat : 배열 합치기
const newArray = [...arr, ...user, 'javascript', 'css']; // [5, 10, 13, 100, 1000, 10000, '선범', '효윤', '준석', 'javascript', 'css']
// console.log(newArray); // [5, 10, 13, 100, 1000, 10000, '선범', '효윤', '준석']

// slice : 원본 훼손 X
const slice = arr.slice(2,5); // 2번째부터 5번째 전까지
// console.log(slice); // [13, 100, 1000]

// toSorted
const toSorted = arr.toSorted((a,b) => {
  return b - a;
})
// console.log(toSorted); // [10000, 1000, 100, 13, 10, 5]

// toReversed
const toReversed = arr.toReversed();
// console.log(toReversed); // [10000, 1000, 100, 13, 10, 5]

// toSpliced
const toSpliced = arr.toSpliced(2,0,'javascript','react'); // (시작위치, 제거될 갯수, 그 사이에 추가1, 추가2)
// console.log(toSpliced); // [5, 10, 'javascript', 'react', 13, 100, 1000, 10000]

// map



const job = people.map((item,index)=>{
  return /* html */`
    <div class="userCard">
      <div class="imageField">
        <img src="${item.imageSrc}" alt="" />
      </div>
      <span>이름:${item.name}</span>
      <span>직업:${item.profession}</span>
      <span>나이:${item.age}</span>
    </div>
  `
})

job.forEach((item)=>{
  document.body.insertAdjacentHTML('beforeend',item);
})

// 피플 자료구조에서 나이만 모아놓은 배열이 필요하다 -> 가공처리: '나이 -1'을 내보내고 싶다
const newAge = people.map((item) => {
  return item.age - 1;
})


// function render(){
  
//   return (
//     <div>
//       {
//         people.map((item,index)=>`<div>${item.profession}</div>`)
//       }
//     </div>
//   )
// }



// job.forEach((item)=>{
//   document.body.insertAdjacentHTML('beforeend',item);
// })

// const job = people.map((item, index)=>{
//   return `<div>${item.profession}</div>`
// })

// job.forEach((item) => {
//   document.body.insertAdjacentHTML('beforeend', job);
// })

// console.log(job);

/* 요소 포함 여부 확인 ---------------------- */
// indexOf
console.log(arr.indexOf(10)); // 10이 몇번째에 있어? -> 1

// lastIndexOf : 뒤에서부터 찾고 앞에 순서로 반환
console.log(arr.lastIndexOf(10)); // 1

// includes
console.log(arr.includes(1000)); // 1000 포함하고 있으면 true

/* 요소 찾기 ------------------------------ */
// find : 해당 아이템을 반환 (첫번째꺼만!!)
const find = people.find((item)=>{
  return item.id > 1
})

// const find = people.find((item)=>{
//   return item.name === '김희소'
// })

console.log(find); // {id: 2, name: '김희소', profession: '물음표살인마', age: 30, imageSrc: 'fAKqi321'}

// findIndex
const findIndex = people.findIndex((item) => {
  return item.id === 3
})

console.log(findIndex);

/* 요소 걸러내기 --------------------------- */
// filter : 배열을 반환
const filter = people.filter((item) => {
  return item.id > 2
})

console.log(filter); // (2)[{…}, {…}]

/* 요소별 리듀서(reducer) 실행 -------------- */
// reduce

const totalAge = people.reduce((acc, cur) => {
  return acc + cur.age;
}, 0)

// console.log(totalAge); // 초기값 설정 안했을 때 [object Object]40305218

//reduce로도 태그 만들 수 있음
const template = people.reduce((htmlCode,cur)=> htmlCode + `<div>${cur.name}</div>` ,'');

document.body.insertAdjacentHTML('beforeend',template);

// reduceRight

/* string ←→ array 변환 ------------------ */
const str = '봉석 윤진 에나 시연 진만 정아';

// split : 문자 -> 배열
const stringToArray = str.split(' '); // 띄어쓰기로 구분

console.log(stringToArray); // (6)['봉석', '윤진', '에나', '시연', '진만', '정아']

// join : 배열 -> 문자
const arrayToString = stringToArray.join('-');

console.log(arrayToString); // 봉석-윤진-에나-시연-진만-정아