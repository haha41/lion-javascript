/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


let message = 'Less is more.';


// length 프로퍼티
let stringTotalLength = message.length;
console.log('stringTotalLength :', stringTotalLength); // 13

// 특정 인덱스의 글자 추출
let extractCharacter = message[10];
console.log('extractCharacter :', extractCharacter); // r (공백도 글자다)

// 문자열 중간 글자를 바꾸는 건 불가능 -> 이건 replace
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;


// 부분 문자열 추출
// let slice = message.slice(1, 3);
// console.log('slice :', slice); // es (1,2번째)

// let slice = message.slice(8);
// console.log('slice :', slice); // more. (8번부터 끝까지)

let slice = message.slice(8, -1);
console.log('slice :', slice); // more (8번부터 마지막에서 -1번까지)

let subString = message.substring(1,3);
console.log('subString :', subString); // es

let subStr = message.substr(1,3); // substr : 두번째 매개변수인 length 값이 음수일 경우 빈 값을 반환
console.log('subStr :', subStr); // ess

// let subStr = message.substr(1, -3);
// console.log('subStr :', subStr); // 빈 값

// message.sub

// 문자열 포함 여부 확인
let indexOf = message.indexOf('i');
console.log('indexOf :', indexOf); // (message에서 문자 'i'의 인덱스를 찾음)5,  값이 엾으면 -1

// if(message.indexOf('p' > 0))

let lastIndexOf = message.lastIndexOf('m');
console.log('lastIndexOf :', lastIndexOf); // 8 뒤에서부터 찾고, 앞에서부터 인덱스 반환 

let includes = message.includes('more');
console.log('includes :', includes); // true, 안갖고 있으면 false

let startsWith = message.startsWith('Less');
console.log('startsWith :', startsWith); // Less 부터 시작해? -> 맞으면 true

let endsWith = message.endsWith('.');
console.log('endsWith :', endsWith); // . 으로 끝나면 true


// 공백 잘라내기
let trimLeft = message.trimLeft(); // 문자의 왼쪽부분만 공백 없앰 -> trimStart로 바뀜
let trimRight;


// let str = '      abcdesdq     '
let str = '      abc   d    es       d  q     '

// console.log(str.split(' ').join(''));
// str.replace(/\s*/g,'');

function normalText(string) {
  return str.replace(/\s*/g,'');
}

normalText(str)


let trim = str.trim(str);



// console.log('trim :', trim);


// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat :', repeat);

// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase :', toLowerCase);

let toUpperCase = message.toUpperCase();
console.log('toUpperCase :', toUpperCase);



// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}